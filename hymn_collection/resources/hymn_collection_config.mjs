export const novels = {
  /*user: [
    "ccm.instance",
    "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.8.0.js",
    {
      "html.logged_in": {
        id: "logged_in",
        class: "row",
        style: "float:none",
        inner: {
          id: "button",
          class: "btn btn-default",
          inner: [
            {
              tag: "span",
              id: "user",
              inner: [{ class: "glyphicon glyphicon-user" }, "%user%&#8196;"],
            },
            {
              tag: "span",
              class: "glyphicon glyphicon-log-out",
            },
            "Logout",
          ],
          onclick: "%click%",
        },
      },
      "html.logged_out": {
        id: "logged_out",
        style: "float:none",
        inner: {
          id: "button",
          class: "btn btn-default",
          inner: [
            {
              tag: "span",
              class: "glyphicon glyphicon-log-in",
            },
            "Login",
          ],
          onclick: "%click%",
        },
      },
      realm: "cloud",
      store: "hymn_user",
      url: "https://ccm2.inf.h-brs.de",
      title: "Please enter Username and Password",
      hash: [
        "ccm.load",
        {
          url: "https://ccmjs.github.io/akless-components/modules/md5.mjs",
          type: "module",
        },
      ],
    },
  ],*/
  nav_id: 0,
  footer: true,
  navigation: [
    /* {
      title: "Über Hymn",
      content: ["ccm.load", "resources/navigatoin/about.html"],
    },*/
    { title: "Novels" },
    /* {
      title: "Hilfe",
      content: ["ccm.load", "resources/navigatoin/help.html"],
    },*/
  ],
  novels: [
    ["ccm.load", "./resources/novels/novels.mjs#passwortsicherheit"],
    ["ccm.load", "./resources/novels/novels.mjs#passwortsicherheit_scifi"],
    ["ccm.load", "./resources/novels/novels.mjs#passwortsicherheit_krimi_de"],
    ["ccm.load", "./resources/novels/novels.mjs#passwortsicherheit_krimi_en"],
  ],
  novels_: [
    "ccm.get",
    { url: "https://ccm2.inf.h-brs.de", name: "hymn-configs" },
    {},
  ],
  hymn: [
    "ccm.component",
    "../hymn/ccm.hymn.js",
    {
      routing: ["ccm.instance", "https://tkless.github.io/lea_hymn/libs/ccm.routing-4.0.0.js"],
      user: [
        "ccm.instance",
        "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.8.0.js",
        {
          realm: "cloud",
          store: "hymn_user",
          url: "https://ccm2.inf.h-brs.de",
          title: "Please enter Username and Password",
          hash: [
            "ccm.load",
            {
              url: "https://ccmjs.github.io/akless-components/modules/md5.mjs",
              type: "module",
            },
          ],
        },
      ],
      editor: [
        "ccm.component",
        "../tiny_editor/ccm.tiny_editor.js",
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
      lang: [
        "ccm.start",
        "https://ccmjs.github.io/akless-components/lang/versions/ccm.lang-1.2.1.js",
        ["ccm.load", "https://tkless.github.io/lea_hymn/hymn/resources/hymn_config.mjs#lang_config"],
      ],
    },
  ],
  routing: ["ccm.instance", "https://tkless.github.io/lea_hymn/libs/ccm.routing-4.0.0.js"],
};

export const lang_config = {
  shadow: "none",
  html: ["ccm.load", "./resources/templates/lang_templates.mjs"],
  languages: {
    de: {
      flag: "deu",
    },
    en: {
      flag: "gbr",
    },
  },
  translations: {
    de: {
      überhymn: "Über HYMN",
      novels: "Novels",
      hilfe: "Hilfe",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      kontakt: "Kontakt",
      rechte: "Alle Rechte vorbehalten",
      impr: "https://www.h-brs.de/impressum",
      dat: "https://www.h-brs.de/de/datenschutz",
      con: "https://www.h-brs.de/de/inf/prof-dr-wolfgang-heiden",
      anzeigen: "Anzeigen",
    },
    en: {
      überhymn: "About HYMN",
      novels: "Novels",
      hilfe: "Help",
      impressum: "Imprint",
      datenschutz: "Data privacy statement",
      kontakt: "Contact",
      rechte: "All Rights reserved",
      impr: "https://www.h-brs.de/en/kum/imprint",
      dat: "https://www.h-brs.de/en/data-privacy-statement",
      con: "https://www.h-brs.de/en/inf/prof-dr-wolfgang-heiden",
      anzeigen: "Show",
    },
  },
};
