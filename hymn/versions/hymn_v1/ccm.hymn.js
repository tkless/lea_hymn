/**
 * @overview ccmjs-based web component for hymn
 * @author Tea Kless <tea.kless@web.de> 2023
 */

(() => {
  const component = {
    name: "hymn",
    ccm: "https://ccmjs.github.io/ccm/versions/ccm-27.4.2.min.js",
    config: {
      html: ["ccm.load", "./libs/hymn/resources/templates.mjs"],
      local: false,
      /*data: {},
      filter: [
        {"title": "Leicht", "selected": true, "visible": true},
        {"title": "Mittel", "selected": false, "visible": true},
        {"title": "Schwer", "selected": false, "visible": false},
        {"title": "Audio", "selected": false, "visible": false},
        {"title": "Video", "selected": false, "visible": false},
        {"title": "Text", "selected": true, "visible": true}
      ],*/
      helper: [
        "ccm.load",
        "https://ccmjs.github.io/akless-components/modules/versions/helper-8.4.2.min.mjs",
      ],
      css: [
        "ccm.load",
        "libs/bootstrap/css/bootstrap.min.css",
        "libs/bootstrap/css/bootstrap-icons.min.css",
        "libs/hymn/resources/css/hymn.css",
      ],
      tree_view: [
        "ccm.component",
        "libs/tree/ccm.tree.js",
        {
          style: ["ccm.load", "libs/hymn/resources/css/tree.css"],
          tree_nav: false,
        },
      ],
      container_view: [
        "ccm.component",
        "libs/tree/ccm.tree.js",
        {
          html: ["ccm.load", "./libs/tree/resources/container_view.mjs"],
          style: ["ccm.load", "libs/hymn/resources/css/tree.css"],
          tree_nav: false,
        },
      ],
      routing: ["ccm.instance", "./libs/ccm.routing-3.0.0.js"],
      dark: false,
      shadow: "none",
    },
    Instance: function () {
      let self = this;

      /**
       * shortcut to help functions
       * @type {Object.<string,Function>}
       */
      let $;

      let tree_inst, container_inst;
      let active_tab = "#tab-0";

      /**
       * when all dependencies are solved after creation and before the app starts
       * @returns {Promise<void>}
       */
      this.ready = async () => {
        // set shortcut to help functions
        $ = Object.assign({}, this.ccm.helper, this.helper);
        $.use(this.ccm);

        // setup dark mode
        this.dark === "auto" && this.element.classList.add("dark_auto");
        this.dark === true && this.element.classList.add("dark_mode");

        this.data && addToMapping($.clone(this.data));

        function addToMapping(entry) {
          if (!entry.key) entry.key = entry.id || $.generateKey();
          if (entry.container === "cm") {
            if (!entry.id) entry.id = entry.key;
          } else {
            entry.inner = entry.inner.map((child) => {
              child.parent = entry.key;
              addToMapping(child);
              return child.key;
            });
          }
          data_map[entry.key] = entry;
        }

      };

      /**
       * starts the app
       * @returns {Promise<void>}
       */
      this.start = async () => {
        // logging of 'start' event
        this.logger && this.logger.log("start");

        if (!this.data || this.data.length === "0")
          $.setContent(this.element, "Nothing to display!");

        self.filter &&
          self.filter.forEach((filter) => {
            if (filter.selected) selected_filter.push(filter.title);
          });
        await render();
      };

      const render = async () => {
        this.html.render(this.html.main(this), this.element);
        await renderTabContents();
        this.element.querySelector(".nav-tabs .active").click(this);
      };

      const data_map = {};
      let selected_filter = [];
      let clickCounter = 0;
      let pathPos = 0;

      this.events = {
        renderTabContent: async function (e, i) {
          e.preventDefault();

          self.tab =
            "#" +
            self.element.querySelector(".nav-tabs .active").getAttribute("id");


          self.element
            .querySelector(".nav-tabs .active")
            .classList.remove("active");
          self.element.querySelector("#tab-" + i).classList.add("active");

          [...self.element.querySelectorAll("[data-tab-content]")].forEach(
            (tab) => {
              tab.classList.add("d-none");
            },
          );

          switch (i) {
            case 0:
              self.element
                .querySelector("[data-tab-content='tree']")
                .classList.remove("d-none");
              break;
            case 1:
              self.element
                .querySelector("[data-tab-content='container']")
                .classList.remove("d-none");
              break;
            case 2:
              self.element
                .querySelector("[data-tab-content='settings']")
                .classList.remove("d-none");
              break;
          }
        },

        toggleLocalView: async (e) => {
          e.stopPropagation();
          self.local = !self.local;

          await localView(tree_inst);
          await localView(container_inst);

          async function localView(inst) {
            inst.data = [
              self.local ? createLocalViewData(inst.active) : self.data,
            ];
            await inst.refresh();
          }
          self.element.querySelector(this.tab).click();
        },

        collapse_all: (e) => {
          e.preventDefault();
          tree_inst.events.collapse_all();
          container_inst.events.collapse_all();

          self.element.querySelector(this.tab).click();
        },

        expand_all: () => {
          tree_inst.events.expand_all();
          container_inst.events.expand_all();

          self.element.querySelector(this.tab).click();
        },

        fullScreen: async () => {
          const elem = this.element.querySelector("#hymn-nav");

          if(elem.requestFullscreen) {
            elem.requestFullscreen();
            elem.classList.add('fullscreen');

            const full_elem =  self.element.querySelector("#fullscreen > i");
            full_elem.classList.remove("bi-arrows-fullscreen");
            full_elem.classList.add("bi-fullscreen-exit");
          }

          if (window.matchMedia('(display-mode: fullscreen)').matches) {
            elem.classList.remove('fullscreen');
            this.events.exit_fullscreen();
          }

          self.element.querySelector(this.tab).click();
        },

        exit_fullscreen: () => {
          const elem =  this.element.querySelector("#fullscreen > i");
          elem.classList.remove("bi-fullscreen-exit");
          elem.classList.add("bi-arrows-fullscreen");

          if(document.exitFullscreen) {
            document.exitFullscreen();
          } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }

        },

        selectFilter: (e, title) => {
          if (!selected_filter?.includes(title)) {
            selected_filter.push(title);
            e.currentTarget.classList.add("active");
          } else {
            e.currentTarget.classList.remove("active");
            selected_filter.splice(selected_filter.indexOf(title), 1);
          }
        },

        changeFilter: async () => {
          if (self.local) {
            tree_inst.data = [
              considerFilterSettings(createLocalViewData(tree_inst.active)),
            ];
            await tree_inst.refresh();

            container_inst.data = [
              considerFilterSettings(createLocalViewData(tree_inst.active)),
            ];
            await container_inst.refresh();
          }
          else {
            tree_inst.data = [considerFilterSettings(self.data)];
            await tree_inst.refresh();

            container_inst.data = [considerFilterSettings(self.data)];
            await container_inst.refresh();
          }

          self.element.querySelector(this.tab).click();
        },

        speech: () => {
          let msg = new SpeechSynthesisUtterance();
          msg.text = this.element.querySelector("#hymn-content-body").innerText;
          msg.lang = "de";
          speechSynthesis.speak(msg);
          if (speechSynthesis.speaking) {
            this.element.querySelector("#speech img").src =
              "./libs/hymn/resources/img/audio-wave.gif";
            this.element.querySelector("#speech img").style.width = "16px";
          }

          clickCounter++;
          if (clickCounter === 2) {
            speechSynthesis.cancel();
            clickCounter = 0;
            this.element.querySelector("#speech img").src =
              "libs/hymn/resources/img/soundwave.svg";
          }
          msg.onend = () => {
            speechSynthesis.cancel();
            clickCounter = 0;
            this.element.querySelector("#speech img").src =
              "libs/hymn/resources/img/soundwave.svg";
          };
        },

        open_dropdown: (e) => {
          e.target.closest("[data-dropdown]").classList.toggle("active");
        },

        increase_font: (e) => {
          e.preventDefault();
          e.target.closest("[data-dropdown]").classList.toggle("active");
          const style = window
            .getComputedStyle(
              this.element.querySelector("#hymn-content-body"),
              null,
            )
            .getPropertyValue("font-size");
          const fontSize = parseFloat(style);
          this.element.querySelector("#hymn-content-body").style.fontSize =
            fontSize + 1 + "px";
        },

        decrease_font: (e) => {
          e.preventDefault();
          e.target.closest("[data-dropdown]").classList.toggle("active");
          const style = window
            .getComputedStyle(
              this.element.querySelector("#hymn-content-body"),
              null,
            )
            .getPropertyValue("font-size");
          const fontSize = parseFloat(style);
          this.element.querySelector("#hymn-content-body").style.fontSize =
            fontSize - 1 + "px";
        },

        share: () => {
          const url = window.location;

          navigator.clipboard
            .writeText(url)
           /* .then(() => {
              alert("Kopieren erfolgreich :)");
            })*/
            .catch(() => {
              alert("Etwas ist schiefgelaufen :(");
            });
        },

        print: () => {
          if (active_tab === "#tab-0") doFor(tree_inst);
          if (active_tab === "#tab-1") doFor(container_inst);

          function doFor(inst) {
            const html_string =
              `
          <!doctype html>
            <head>
              <meta charset="UTF-8" />
              <title></title>
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous"
              />
               <style> body { margin: 2em; } </style>
            </head>
          ` + data_map[inst.active].inner;

            const new_window = window.open("", data_map[inst.active].title);
            new_window.document.title = data_map[inst.active].title;
            new_window.document.write(html_string);
          }
        },

        prevNarrativeThreadContent: () => {
          const selectedPath = this.element.querySelector("#cm-list").value;

          if (pathPos > 0)
            pathPos--;
          change(tree_inst);
          change(container_inst);

          function change(inst) {
            if (pathPos > 0) {
              inst.active = self.pathList[selectedPath].content[pathPos];
              inst.refresh();

              [...self.element.querySelectorAll("[data-next-content]")].forEach(
                (div) => {
                  div.classList.remove("disabled");
                },
              );

              if (pathPos === 0) {
                [
                  ...self.element.querySelectorAll("[data-prev-content]"),
                ].forEach((div) => {
                  div.classList.add("disabled");
                });
              }
            }
          }
        },

        nextNarrativeThreadContent: () => {
          const selectedPath = this.element.querySelector("#cm-list").value;

          if (pathPos + 1 <= self.pathList[selectedPath].content.length)
            pathPos++;
          change(tree_inst);
          change(container_inst);

          function change(inst) {
            if (pathPos + 1 <= self.pathList[selectedPath].content.length) {
              inst.active = self.pathList[selectedPath].content[pathPos];
              inst.refresh();

              [...self.element.querySelectorAll("[data-prev-content]")].forEach(
                (div) => {
                  div.classList.remove("disabled");
                },
              );

              if (pathPos + 1 === self.pathList[selectedPath].content.length)
                [
                  ...self.element.querySelectorAll("[data-next-content]"),
                ].forEach((div) => {
                  div.classList.add("disabled");
                });
            }
          }
        },

        changeNarrativeThread: (e) => {
          pathPos = 0;
          const selectedPath = (e.type === 'change') ? e.target.value : e;

          if (selectedPath !== '-1') {

            //lokale sicht deaktivieren wenn erzählstrang gewählt wurde
            if(this.local) {
              this.element.querySelector('#switcher input').click();
              self.element.querySelector(this.tab).click();
            }

            // Linke Navigationsseite ausblenden
            this.element.querySelector("#hymn-nav").classList.add("d-none");
            // Link zu "Seitennavigation einblenden" einblenden
            this.element.querySelector("#display-sidenav").classList.remove("d-none");

            [...self.element.querySelectorAll(".path-player button")].forEach(
                (btn) => {
                  btn.classList.remove("disabled");
                },
            );
            [...self.element.querySelectorAll("[data-prev-content]")].forEach(
                (div) => {
                  div.classList.add("disabled");
                },
            );

            tree_inst.active = container_inst.active = self.pathList[selectedPath].content[0];

            addPathImg(pathPos);


          }
          else {
            this.element.querySelector("#hymn-nav").classList.remove("d-none");
            [...self.element.querySelectorAll(".path-player button")].forEach(
                (btn) => {
                  btn.classList.add("disabled");
                },
            );
            for (let elem of self.pathList[pathPos].content) {
              tree_inst.element.querySelector('[id="' + elem + '"] > span').remove();
              container_inst.element.querySelector('[id="' + elem + '"] > span:nth-child(2)').remove();
            }
          }


          function addPathImg(pos) {
            for (let elem of self.pathList[pos].content) {
              tree_inst.element
                  .querySelector('[id="' + elem + '"]')
                  .appendChild($.html( {
                    tag: "span",
                    "inner":  {
                      tag: "img",
                      src: "libs/hymn/resources/img/road.svg",
                      class: "road ms-auto me-1 text-default",
                    }
                  }));
              container_inst.element
                  .querySelector('[id="' + elem + '"]')
                  .appendChild($.html( {
                    tag: "span",
                    "inner":  {
                      tag: "img",
                      src: "libs/hymn/resources/img/road.svg",
                      class: "road ms-auto me-1 text-default",
                    }
                  }));
            }
          }

          tree_inst.refresh();
          container_inst.refresh();
        },

        displaySideNav: () => {
          // Linke Navigationsseite einblenden
         this.events.changeNarrativeThread('-1');

          // Link "Zurück zu Erzählstrang" einblenden
          this.element.querySelector("#back-to-narrative-thread").classList.remove("d-none");

          // Link zu "Seitennavigation einblenden" ausblenden
          this.element.querySelector("#display-sidenav").classList.add("d-none");
        },

        backToNarrativeThread: () => {

        },

        collapseSiteNavigation: () => {

        },

        expandSiteNavigation: () => {

        }

      };

      const renderTabContents = async () => {
        const active = tree_inst?.active || Object.values(data_map)[0].id;

        const config = {
          data: self.filter ? [considerFilterSettings(self.data)] : [self.data],
          active: active,
          'routing.2.app': 'ccm-tree-'+self.key,

          onchange: async (event) => {
            const inner = event.data.inner;
            //render Tree Data
            if (inner) {
              if ($.isInstance(event.data.inner)) {
                await inner.start();
                $.setContent(
                  self.element.querySelector("#hymn-content-body"),
                  inner.root,
                );
              } else
                $.setContent(
                  self.element.querySelector("#hymn-content-body"),
                  inner,
                );
            }

            //scroll down to selected content (CM)
            if( !self.element.querySelector('#hymn-nav').classList.contains('d-none'))
              self.element
              .querySelector("#hymn-content-body")
              .scrollIntoView({ behavior: "smooth", block: "start" });
            else
              self.element
                  .querySelector("#novel-title")
                  .scrollIntoView({ behavior: "smooth", block: "start" });

            //cancel voice over, if another "CM" is selected
            if (speechSynthesis.speaking) {
              speechSynthesis.cancel();
              clickCounter = 0;
            }

            if (event.event !== "entry") return;
            if (self.local) {
              event.instance.data = self.filter
                ? [considerFilterSettings(createLocalViewData(event.data.id))]
                : [createLocalViewData(event.data.id)];
              tree_inst.refresh();
              container_inst.refresh();
            }
          },
        };

        const tabs = [...self.element.querySelectorAll("[data-tab-content]")];
        for (const tab of tabs) {
          switch (tab.getAttribute("data-tab-content")) {
            case "tree":
              config.root = self.element.querySelector(
                "[data-tab-content='tree']",
              );
              tree_inst = await self.tree_view.start(config);
              break;
            case "container":
              config.root = self.element.querySelector(
                "[data-tab-content='container']",
              );
              container_inst = await self.container_view.start(config);
              break;

          }
        }
      };

      const createLocalViewData = (active) => {
        let entry = data_map[active];
        let parent = entry.parent;
        let asides = [];
        let successor = false;
        while (parent) {
          parent = $.clone(data_map[entry.parent]);
          parent.inner[parent.inner.indexOf(entry.key)] = entry;
          if (parent.container === "pc")
            // Alle Kinder für später vermerken (ausser uns selbst, also wo wir hergekommen sind (active)).
            parent.inner.forEach(
              (child, i) => !$.isObject(child) && asides.push([parent, i]),
            );
          if (parent.container === "sc") {
            // Hatten wir noch nie einen sc mit Nachfolger?
            if (!successor) {
              // Werfe alle Kinder weg, ausser das Kind wo ich herkomme (active) und dessen direkten Nachfolger.
              parent.inner = parent.inner.filter((child, i, inner) => {
                return $.isObject(child) || inner[i - 1] === entry;
              });
            }
            // Hatten wir schonmal einen sc mit Nachfolger?
            else parent.inner = [entry]; // sc behält nur das eine Kind, wo wir hergekommen sind (active).
            // Gibt es nach der Reduzierung einen direkten Nachfolger?
            if (parent.inner[1]) {
              // Da wir einmal ein sc mit Nachfogler hatten, in Zukunft nicht mehr Nachfolger bei sc berücksichtigen.
              successor = true;
              // Für später vermerken.
              asides.push([parent, 1]);
            }
          }
          parent.inner = parent.inner.map((child) =>
            $.isObject(child) ? child : $.clone(data_map[child]),
          );
          entry = parent;
          parent = entry.parent;
        }
        asides.forEach(recursive);
        return entry;

        function recursive([parent, i]) {
          const entry = parent.inner[i];
          if (entry.container === "cm") return;
          if (entry.container === "sc") entry.inner = [entry.inner[0]];
          entry.inner = entry.inner.map((child_key) =>
            $.clone(data_map[child_key]),
          );
          entry.inner.forEach((child, i) => recursive([entry, i]));
        }
      };

      const considerFilterSettings = (data) => {
        if (selected_filter.length === 0) return self.data;

        let filteredData = $.clone(data);
        recursive(filteredData);

        function recursive(parent) {
          if (parent.container === "cm") return;
          if (parent.container === "pc") {
            let matches_to_path_children_position = [];
            parent.inner.forEach((child, i) => checkFilter(child, i));

            if (matches_to_path_children_position.length !== 0) {
              parent.inner = matches_to_path_children_position;
            }

            function checkFilter(child) {
              let is_in = false;

              child.filter &&
                child.filter.forEach((filter) => {
                  if (selected_filter.includes(filter) && !is_in) {
                    is_in = true;
                    matches_to_path_children_position.push(child);
                  } else if (
                    tree_inst !== undefined &&
                    container_inst !== undefined &&
                    child.id === tree_inst.active &&
                    child.id === container_inst.active &&
                    !is_in
                  ) {
                    is_in = true;
                    matches_to_path_children_position.push(child);
                  }
                });
            }
          }
          parent.inner.forEach(recursive);
        }

        return filteredData;
      };
    },
  };
  let b =
    "ccm." +
    component.name +
    (component.version ? "-" + component.version.join(".") : "") +
    ".js";
  if (window.ccm && null === window.ccm.files[b])
    return (window.ccm.files[b] = component);
  (b = window.ccm && window.ccm.components[component.name]) &&
    b.ccm &&
    (component.ccm = b.ccm);
  "string" === typeof component.ccm && (component.ccm = { url: component.ccm });
  let c = (component.ccm.url.match(
    /(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/,
  ) || [""])[0];
  if (window.ccm && window.ccm[c]) window.ccm[c].component(component);
  else {
    var a = document.createElement("script");
    document.head.appendChild(a);
    component.ccm.integrity &&
      a.setAttribute("integrity", component.ccm.integrity);
    component.ccm.crossorigin &&
      a.setAttribute("crossorigin", component.ccm.crossorigin);
    a.onload = function () {
      (c = "latest" ? window.ccm : window.ccm[c]).component(component);
      document.head.removeChild(a);
    };
    a.src = component.ccm.url;
  }
})();
