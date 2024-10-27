/**
 * @overview ccmjs-based web component for hymn coolection
 * @author Tea Kless <tea.kless@web.de> 2023
 */

(() => {
  const component = {
    name: "hymn_editor",
    ccm: "https://ccmjs.github.io/ccm/versions/ccm-27.4.2.min.js",
    config: {
      html: ["ccm.load", "./../hymn_editor/resources/templates.mjs"],
      data: {
        store: [
          "ccm.store",
          {
            name: "hymn_configs",
            url: "https://ccm2.inf.h-brs.de",
          },
        ],
        key: "0cf608bc0f6547d6a07214d4c4d502dc",
      },
      hymn: ["ccm.component", "./../hymn/ccm.hymn.js"],
      json_editor: [
        "ccm.component",
        "https://ccmjs.github.io/code_editor/versions/v1/ccm.code_editor-1.0.0.min.js",
        {
          directly: true,
          "libs.1.1.5":
            "https://ccmjs.github.io/libs/codemirror-5/javascript.min.js",
          "settings.mode": { name: "javascript", json: true },
          text: {
            submit: "Speichern",
          },
          valid: true,
        },
      ],
      content_editor: [
        "ccm.component",
        "./../tiny_editor/ccm.tiny_editor.js",
        {
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

          add_save_button: (editor) => {
            console.log(editor.getContent(), editor.app);
          },
          tiny_config: {
            language: "de",
            branding: true,
            promotion: false,

            toolbar_sticky: true,
            toolbar_mode: "wrap",

            plugins:
              "autoresize preview searchreplace autolink save directionality visualblocks visualchars fullscreen image link media table charmap nonbreaking insertdatetime advlist lists help quickbars",

            contextmenu: "link media table",

            image_caption: true,
            quickbars_selection_toolbar:
              "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
            noneditable_class: "mceNonEditable",

            editimage_cors_hosts: ["picsum.photos"],
            menubar: "file edit view insert format tools table help",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image table | lineheight outdent indent | fullscreen preview | save print",
            image_advtab: true,
            importcss_append: true,

            /* save_onsavecallback: () => {
              const content = tinymce.activeEditor.getContent();
              console.log(content);
            },*/
            file_picker_callback: (callback, value, meta) => {
              if (meta.filetype === "file") {
              }

              /* Provide image and alt text for the image dialog */
              if (meta.filetype === "image") {
                const input = document.getElementById("my-file");
                input.click();
                input.onchange = function () {
                  const file = input.files[0];
                  const reader = new FileReader();
                  reader.onload = function (e) {
                    callback(e.target.result, {
                      alt: file.name,
                    });
                  };
                  reader.readAsDataURL(file);
                };
              }

              if (meta.filetype === "media") {
              }
            },
          },
        },
      ],

      helper: [
        "ccm.load",
        "https://ccmjs.github.io/akless-components/modules/versions/helper-8.4.2.min.mjs",
      ],
      css: [
        "ccm.load",
        "../libs/bootstrap/css/bootstrap.min.css",
        "../libs/bootstrap/css/bootstrap-icons.min.css",
        {
          url: "../libs/bootstrap/css/bootstrap-icons.min.css",
          context: "head",
        },
        "./../hymn/resources/css/hymn.css",
      ],
      dark: false,
      shadow: "open",
    },
    Instance: function () {
      /**
       * shortcut to help functions
       * @type {Object.<string,Function>}
       */
      let $;
      let self = this;

      let data;

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
      };

      this.start = async () => {
        //this.user && (await this.user.login());

        data = await $.dataset(this.data);
        this.key = data.key;
        delete data.key;
        delete data.updated_at;
        delete data.created_at;

        if (!(Object.keys(this.data).length > 1)) {
          data = {
            selected_path: "",
            pathList: [],
            data: {
              container: "sc",
              title: "Titel der Geschichte",
              cover_img: "Cover Bild",
              description: "Kurze Beschreibung",
              inner: [],
            },
          };
        }

        await render();

        $.prepend(
          this.element,
          $.html({
            id: "box",
            inner: {
              class:
                "fade-in-out alert alert-success d-flex align-items-center d-none",
              role: "alert",
              inner: [
                {
                  tag: "i",
                  class: "bi bi-check-circle-fill",
                },
                {
                  inner: "&ensp; <b>Erfolgreich gespeichert!</b>",
                },
              ],
            },
          }),
        );
      };

      const render = async () => {
        this.html.render(this.html.main(this), this.element);
        this.element.querySelector("#btnradio1").click();
      };

      this.events = {
        renderJsonEditor: async () => {
          this.element.querySelector("#json-editor").classList.remove("d-none");
          this.element.querySelector("#content-editor").classList.add("d-none");

          //work around because code mirror have a problem with open shadow
          const tmp = document.createElement("div");
          tmp.id = "tmp";
          document.body.appendChild(tmp);

          await this.json_editor.start({
            root: tmp, //this.element.querySelector("#json-editor"),
            data: data,
            onfinish: async (data) => {
              data.key = this.key.split("-").join("");

              generateCmIds(data.data);

              function generateCmIds(child) {
                const key = $.generateKey().split("-").join("");
                !child.id && (child.id = key);
                if (child.container !== "cm")
                  child.inner &&
                    child.inner.forEach((child) => {
                      generateCmIds(child);
                    });
              }

              await this.data.store.set(data);
              alert("Erfolgreich gespeichert!");
            },
          });
          $.setContent(
            this.element.querySelector("#json-editor"),
            tmp.firstChild,
          );

          tmp.remove();
        },

        renderContentEditor: async () => {
          this.element
            .querySelector("#content-editor")
            .classList.remove("d-none");
          this.element.querySelector("#json-editor").classList.add("d-none");

          const config = $.clone(data);
          config.root = this.element.querySelector("#content-editor");
          config.onchange = async ({ instance, data }) => {
            await renderEditor(instance, data);
          };

          const inst = await this.hymn.start(config);
          inst.element.querySelector("[data-novel-settings]").remove();
          inst.element.querySelector("#accessibility").remove();
        },
      };

      const renderEditor = async (inst, cm) => {
        await this.content_editor.start({
          root: inst.element.querySelector("#hymn-content"),
          data: { inner: cm.inner },
          oninput: () => {
            self.element.querySelector(".fade-in-out").classList.add("d-none");
          },
          add_save_button: async (editor) => {
            updateCmContent(data.data);

            data.key = this.key;

            //save changed content to database
            await this.data.store.set(data);

            //render success feedback
            self.element
              .querySelector(".fade-in-out")
              .classList.remove("d-none");

            function updateCmContent(child) {
              if (child.container !== "cm")
                child.inner.forEach((child) => {
                  updateCmContent(child);
                });
              else if (child.id === cm.id) child.inner = editor.getContent();
            }
          },
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
