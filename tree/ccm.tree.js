/**
 * @overview ccmjs-based web component for tree
 * @author Tea Kless <tea.kless@web.de> 2024
 * @license The MIT License (MIT)
 */

(() => {
  const component = {
    name: "tree",
    ccm: "https://tkless.github.io/lea_hymn/libs/ccm-27.5.0.min.js",
    config: {
      //data: [],
      //"active": "4",
      //routing: ["ccm.instance", "./libs/ccm.routing-4.0.0.js"],
      //content_mode: true/false
      html: [
        "ccm.load",
        {
          url: "https://tkless.github.io/lea_hymn/tree/resources/tree_template.js",
          type: "module",
        },
      ],
      onchange: (event) => console.log(event),
      icon: {
        close: "https://tkless.github.io/lea_hymn/tree/resources/img/expand.svg",
        open: "https://tkless.github.io/lea_hymn/tree/resources/img/caret-right-fill.svg",
      },
      expand_collapse_btn: true,
      helper: [
        "ccm.load",
        {
          url: "https://tkless.github.io/lea_hymn/libs/helper-8.4.2.min.js",
          type: "module",
        },
      ],
      css: [
        "ccm.load",
        "https://tkless.github.io/lea_hymn/libs/bootstrap/css/bootstrap.min.css",
        "https://tkless.github.io/lea_hymn/libs/bootstrap/css/bootstrap-icons.min.css",
        "https://tkless.github.io/lea_hymn/tree/resources/style.css",
      ],
      dark: false,
      //noActive: true,
    },
    Instance: function () {
      /**
       * shortcut to help functions
       * @type {Object.<string,Function>}
       */
      let $;
      let self = this;

      /**
       * when all dependencies are solved after creation and before the app starts
       * @returns {Promise<void>}
       */
      this.ready = async () => {
        // set shortcut to help functions
        $ = Object.assign({}, this.ccm.helper, this.helper);
        $.use(this.ccm);

        // define routes
        this.routing &&
          this.routing.define({
            id: async (id) => {
              this.active = id;
              await render();
              //this.element.querySelector(".cm.active").click();
              await this.renderContent(null, this.active);
            },
          });

        // setup dark mode
        this.dark === "auto" && this.element.classList.add("dark_auto");
        this.dark === true && this.element.classList.add("dark_mode");

        this.mapping = {};
        data_map(this.data);

        function data_map(data) {
          for (const data_entry of data) {
            if (Array.isArray(data_entry.inner) && data_entry.inner[0]?.title)
              data_map(data_entry.inner);
            else {
              if (!data_entry.id) data_entry.id = $.generateKey();
              self.mapping[data_entry.id] = data_entry;
            }
          }
        }
      };

      /**
       * starts the app
       * @returns {Promise<void>}
       */
      this.start = async () => {
        if (!this.data || this.data.length === "0")
          $.setContent(this.element, "Nothing to display!");

        !this.active && this.setActiveCm();

        if (this.routing && this.routing.get()) await this.routing.refresh();
        else await this.refresh();
      };

      this.refresh = async () => {
        const id = this.element.querySelector(".cm.active")?.id;
        await render();
        id &&
          this.active !== id &&
          this.content_mode &&
          (await this.renderContent(this.mapping[id]));
      };

      const render = async () => {
        this.html.render(this.html.main(this), this.element);

        this.element
          .querySelectorAll(".cm.active")
          .forEach((elem) => elem.classList.remove("active"));

        !this.noActive &&
          this.element
            .querySelector('[id="' + this.active + '"]')
            .classList.add("active");

        await this.renderContent(this.mapping[this.active]);
      };

      this.events = {
        renderContent: async (e, entry) => {
          e.stopPropagation();
          this.element.querySelectorAll(".cm.active").forEach((elem) => {
            elem.classList.remove("active");
          });
          e.currentTarget.classList.add("active");
          this.active = entry.id;

          this.routing && this.routing.set("id*" + entry.id);

          await this.renderContent(e, entry);

          this.onchange &&
            this.onchange({
              instance: this,
              event: "entry",
              data: $.clone(entry),
              elem: e.target,
            });
        },

        visible: function (e) {
          e.stopPropagation();
          this.classList.toggle("closed");
          updateIcons(this);
        },

        collapse_all: () => {
          this.element.querySelectorAll(".cont").forEach((elem) => {
            elem.classList.contains("closed") &&
              elem.classList.remove("closed");
            elem.classList.add("closed");
            updateIcons(elem);
          });
        },

        expand_all: () => {
          this.element.querySelectorAll(".cont").forEach((elem) => {
            elem.classList.remove("closed");
            updateIcons(elem);
          });
        },
      };

      this.renderContent = async (entry) => {
        if (this.content_mode && entry.inner) {
          if ($.isInstance(entry.inner)) {
            await entry.inner.start();
            $.setContent(
              this.element.querySelector("#content #content-body"),
              entry.inner.root,
            );
          } else
            $.setContent(
              this.element.querySelector("#content #content-body"),
              entry.inner,
            );
        }
      };

      this.setActiveCm = () => {
        recursive(this.data[0]);

        function recursive(entry) {
          if (entry.container === "cm") return (self.active = entry.id);
          else entry.inner.length > 0 && recursive(entry.inner[0]);
        }
      };

      const updateIcons = (elem) => {
        elem.classList.contains("closed") &&
          elem.querySelector("img").setAttribute("src", this.icon.open);
        !elem.classList.contains("closed") &&
          elem.querySelector("img").setAttribute("src", this.icon.close);
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
