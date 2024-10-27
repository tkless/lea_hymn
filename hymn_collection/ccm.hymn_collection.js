/**
 * @overview ccmjs-based web component for hymn coolection
 * @author Tea Kless <tea.kless@web.de> 2024
 */

(() => {
  const component = {
    name: "hymn_collection",
    ccm: "https://ccmjs.github.io/ccm/versions/ccm-27.4.2.min.js",
    config: {
      html: ["ccm.load", "./resources/templates/collection_templates.mjs"],
      nav_id: 0,
      novels: [],
      //footer: true,
      hymn: ["ccm.component", "../hymn/ccm.hymn.js"],
      helper: [
        "ccm.load",
        "https://ccmjs.github.io/akless-components/modules/versions/helper-8.4.2.min.mjs",
      ],
      css: [
        "ccm.load",
        "../libs/bootstrap/css/bootstrap.min.css",
        "../libs/bootstrap/js/bootstrap.bundle.js",
        "../libs/bootstrap/css/bootstrap-icons.min.css",
        "https://ccmjs.github.io/akless-components/libs/lang/css/flag-icon.css",
        "resources/css/hymn_collection.css",
      ],
      lang: [
        "ccm.start",
        "https://ccmjs.github.io/akless-components/lang/versions/ccm.lang-1.2.1.js",
        ["ccm.load", "./resources/hymn_collection_config.mjs#lang_config"],
      ],
      //routing: ["ccm.instance", "https://tkless.github.io/lea_hymn/libs/ccm.routing-4.0.0.js"],
      dark: false,
      shadow: "none",
      active_nav_item: "1",
    },
    Instance: function () {
      /**
       * shortcut to help functions
       * @type {Object.<string,Function>}
       */
      let $;

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
            nav: async (nav_id) => {
              this.nav_id = nav_id;
              await render();
              renderNavItem(String(this.nav_id));
            },
            novel: async (key) => {
              await render();
              renderNavItem(this.nav_id);
              await renderNovel(this.novels.find((novel) => novel.key === key));
            },
          });

        // setup dark mode
        this.dark === "auto" && this.element.classList.add("dark_auto");
        this.dark === true && this.element.classList.add("dark_mode");
      };

      /**
       * starts the app
       * @returns {Promise<void>}
       */
      this.start = async () => {
        if (!this.novels?.length)
          return $.setContent(this.element, "Nothing to display!");

        if (this.routing && this.routing.get()) {
          await this.routing.refresh();
        } else {
          await render();
          renderNavItem(String(this.nav_id));
        }

        // render language area
        if (this.lang) {
          $.setContent(this.element.querySelector("#lang"), this.lang.root);
          this.lang.observe((lang) => {
            $.params({ lang });
            this.start();
          });
          this.lang.translate();
        }

        if (this.user)
          this.element.querySelector("nav").appendChild(this.user.root);
      };

      const render = async () => {
        this.html.render(this.html.main(this), this.element);
      };

      this.events = {
        onClickNavItem: (e, i) => {
          e.preventDefault();

          renderNavItem(String(i));

          this.routing && this.routing.set("nav*" + i);
        },

        onClickNovel: async (i, key) => {
          await renderNovel(this.novels[i]);

          this.routing && this.routing.set("novel*" + key);
        },
      };

      const renderNavItem = (pos) => {
        this.nav_id = pos;
        updateNavState();

        if (this.navigation[pos].title === "Novels") {
          this.html.render(
            this.html.collection(this),
            this.element.querySelector("#novels"),
          );
          this.element.querySelector("#novels").classList.remove("d-none");
        } else {
          const elem = this.element.querySelector(
            "#" +
              this.navigation[Number(pos)].title
                .toLowerCase()
                .replace(" ", "-"),
          );

          $.setContent(elem, $.html(this.navigation[Number(pos)].content));

          elem.classList.remove("d-none");
        }

        /* switch (pos) {
          case "1":
            this.html.render(
              this.html.collection(this),
              this.element.querySelector("#novels"),
            );
            this.element.querySelector("#novels").classList.remove("d-none");
            break;

          default:
            const elem = this.element.querySelector(
              "#" +
                this.navigation[Number(pos)].title
                  .toLowerCase()
                  .replace(" ", "-"),
            );

            $.setContent(elem, $.html(this.navigation[Number(pos)].content));

            elem.classList.remove("d-none");

            break;
        }*/
      };

      const renderNovel = async (novel) => {
        updateNavState();

        novel.root = this.element.querySelector("#hymn");
        await this.hymn.start(novel);
        this.element.querySelector("#hymn").classList.remove("d-none");
      };

      const updateNavState = () => {
        this.element
          .querySelector("a.nav-link.active")
          ?.classList.remove("active");

        this.element
          .querySelector("#nav-" + this.nav_id)
          .classList.add("active");

        [...this.element.querySelectorAll("#content > div")].forEach((div) => {
          div.classList.add("d-none");
        });
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
