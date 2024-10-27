/**
 * @overview ccm component of tinymce editor
 * @author Tea Kless <tea.kless@ccmjs.eu> 2024
 * @license The MIT License (MIT)
 */

(() => {
  const component = {
    name: "tiny_editor",
    ccm: "https://ccmjs.github.io/ccm/ccm.js",
    config: {
      html: {
        id: "main",
        inner: {
          inner: [
            {
              tag: "tinymce-editor",
              config: "%config%",
              setup: "%setup%",
            },
          ],
        },
      },
      data: {
        store: [
          "ccm.store",
          { url: "https://ccm2.inf.h-brs.de", name: "test" },
        ],
        key: "bar",
      },
      onfinish: {
        alert: "Saved!",
        confirm: "Are you really sure?",
        log: true,
        restart: true,
        store: true,
      },
      // onchange: event => { console.log( event );  },
      // onstart: event => { console.log( event );  },
      // oninput: event => { console.log( event ); },
      /**
       * save plugin must be activated
       */
      add_save_button: (editor) => {
        console.log(editor.getContent());
      },
      shadow: "open",
      tiny_config: {},
      text: {
        button_label: "Speichern",
      },

      helper: [
        "ccm.load",
        "https://ccmjs.github.io/akless-components/modules/helper.mjs",
      ],
      lib: [
        "ccm.load",
        {
          url: "https://ccmjs.github.io/tkless-components/libs/tinymce/tinymce.min.js",
          context: "head",
        },
      ],
    },
    Instance: function () {
      let $, editor;

      this.init = async () => {
        $ = Object.assign({}, this.ccm.helper, this.helper);
        $.use(this.ccm);

        // load tinymce web component only one
        if (!customElements.get("tinymce-editor"))
          if (!window.ccm.components[this.name]) {
            window.ccm.components[this.name] = true;
            await this.ccm.load({
              url: "https://ccmjs.github.io/tkless-components/libs/tinymce/tinymce-webcomponent.js",
              context: "head",
            });
          } else
            while (!customElements.get("tinymce-editor")) await $.sleep(300);
      };

      this.ready = async () => {
        if (this.add_save_button)
          this.tiny_config.save_onsavecallback = this.add_save_button;

        return new Promise((resolve) => {
          // initialize individual tinymce editor
          window.tinyConfig = this.tiny_config;
          window.setupEditor = (tiny_editor) => {
            editor = tiny_editor;
            editor.on("init", async () => {
              if (this.onchange)
                editor.on("change", (event) =>
                  this.onchange({ app: this, event, editor }),
                );
              if (this.oninput)
                editor.on("input", (event) => {
                  this.oninput({ app: this, event, editor });
                });
              resolve();
            });
          };
          $.setContent(
            this.element,
            $.html(this.html, {
              button_label: this.text.button_label,
              button_click: () => this.onfinish && $.onFinish(this),
              config: "tinyConfig",
              setup: "setupEditor",
            }),
          );
        });
      };

      this.start = async () => {
        editor.app = this;
        this.add_save_button &&
          this.element.appendChild(
            $.html(
              `<form><button name="submitbtn" style="display: none"></button></form>`,
            ),
          );

        const data = await $.dataset(this.data);
        editor.setContent(data?.inner || "");

        this.onstart && (await this.onstart({ app: this }));
      };

      this.get = () => editor;

      this.getValue = () => {
        return { inner: editor.getContent("textarea") };
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
