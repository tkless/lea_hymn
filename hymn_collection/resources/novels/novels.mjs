export const was_ist_html = {
  key: "was_ist_html",
  /*filter: [
    { title: "Leicht", selected: true, visible: true },
    { title: "Mittel", selected: false, visible: true },
    { title: "Schwer", selected: false, visible: false },
    { title: "Audio", selected: true, visible: true },
    { title: "Video", selected: false, visible: false },
    { title: "Text", selected: true, visible: true },
  ],*/
  data: {
    container: "sc",
    title: "Was ist HTML?",
    cover_img: "./../hymn_collection/resources/novels/was_ist_html/cover.svg",
    description: "Einführung.",
    inner: [
      {
        container: "pc",
        title: "Motivation,  Lernziele und Voraussetzungen",
        inner: [
          {
            filter: ["Text"],
            container: "cm",
            icon: "resources/novels/img/file-earmark-font.svg",
            title: "Text",
            inner:
              '<h3 class="border-bottom mb-5 text-primary">Motivation, Lernziele und Voraussetzungen</h3><p><!-- Motivation -->' +
              'Das <a href="https://de.wikipedia.org/wiki/Internet">Internet</a> hat vieles verändert. Wie selbstverständlichsurfen immer mehr Menschen im <a href="https://de.wikipedia.org/wiki/World_Wide_Web">World Wide Web (WWW, oder kurzWeb)</a> und nutzen es längst nicht mehr nur um sich Wissen anzueignen, sondern beispielsweise auch um zu shoppen,zu spielen, Filme zu schauen, sich mit anderen zu vernetzen und alle möglichen Dienstleistungen in Anspruch zunehmen. Um im Web vertreten zu sein bedarf es einer <a href="https://de.wikipedia.org/wiki/Webseite">Webseite</a>,die Internetnutzer über ihren <a href="https://de.wikipedia.org/wiki/Webbrowser">Webbrowser</a> aufrufen können.Aber wie entsteht eigentlich so eine Webseite? Kann man das auch selber machen? Ja natürlich, das geht! Das erstewas man dafür kennen muss ist die Muttersprache des Web:\n<a href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language">HTML</a>.    <!-- Lernziele -->In dieser Lerneinheit erfahren Sie was HTML ist, wofür es steht und eingesetzt wird und von wem es zu welchemursprünglichen Zweck überhaupt erfunden wurde. Anschließend erfahren Sie, wer an der Weiterentwicklung von HTMLarbeitet und in welcher Version HTML aktuell vorliegt.<!-- Voraussetzungen -->Was sollten Sie an Wissen mitbringen? Nun, um zu verstehen worum es hier geht, sollten Sie zumindest schon grobwissen was das Internet, das Web, ein Webbrowser und was eine Webseite ist. Kurz gesagt: Sie sollten bereits Erfahrung mit derNutzung des Web, sprich mit dem Besuchen von Webseiten, haben.</p>',
            id: "9a88de67371249b7a1db5268c828ed1f",
          },
          {
            container: "cm",
            title: "Audio",
            filter: ["Audio", "Leicht"],
            icon: "resources/novels/img/file-earmark-music.svg",
            inner:
              '<h3 class="border-bottom mb-5">Motivation, Lernziele und Voraussetzungen</h3><audio controls>  <source src="https://akless.github.io/akless/we/was-ist-html/motivation.mp3" type="audio/mp3">  Your browser does not support the audio element.</audio>',
            id: "1e5dd6cd7d314f61ae262c689ee2ddb6",
          },
          {
            //default: true,
            container: "cm",
            title: "Video",
            filter: ["Video", "Mittel"],
            icon: "resources/novels/img/file-earmark-music.svg",
            inner:
              '<h3 class="border-bottom mb-5">Motivation, Lernziele und Voraussetzungen</h3><audio controls>  <source src="https://akless.github.io/akless/we/was-ist-html/motivation.mp3" type="audio/mp3">  Your browser does not support the audio element.</audio>',
            id: "75c1c183ab764ffaaea9e34c47cf7c86",
          },
        ],
        id: "ba8fb44797af4c81aa02185869a532cf",
      },
      {
        container: "cm",
        title: "Lernziele",
        icon: "resources/novels/img/file-earmark-font.svg",
        inner:
          '<h3 class="border-bottom mb-5 text-primary">Lernziele</h3><ul><li>Ich weiß, was HTML ist, wofür es steht und wofür es eingesetzt wird.<li>Ich weiß, was ein Hyperlink ist und wofür man ihn einsetzt.<li>Ich weiß, wer HTML zu welchem ursprünglichen Zweck erfunden hat.<li>Ich weiß, wer an der Weiterentwicklung von HTML arbeitet.<li>Ich weiß, in welcher Version HTML aktuell vorliegt.</ul>',
        id: "8d9d4f24641c4a09ac5bdb46b29ece26",
      },
      {
        container: "pc",
        title: "Voraussetzungen",
        inner: [
          {
            container: "cm",
            filter: ["Text"],
            title: "Text",
            icon: "resources/novels/img/file-earmark-font.svg",
            inner:
              '<h3 class="border-bottom mb-5 text-primary">Voraussetzungen</h3>\n          <ul>\n            <li>Ich weiß grob, was das Internet, das Web, ein Webbrowser und eine Webseite ist.\n            <li>Ich habe bereits Erfahrung mit dem Besuchen von Webseiten im Web.\n          </ul>\n          <p>Falls Sie bisher nur wenige Erfahrungen mit dem Web haben, hier das wichtigste:</p>\n        ',
            id: "f2deb1015c0f4083aec4bec5ac0759da",
          },
        ],
        id: "1fb5ff8be64c49c297b9895698f8feb4",
      },
      {
        container: "pc",
        title: "Internet, Web, Webbrowser und Webseiten",
        inner: [
          {
            default: true,
            container: "cm",
            filter: ["Text"],
            title: "Text",
            icon: "resources/novels/img/file-earmark-font.svg",
            inner: `<h3 class="border-bottom mb-5 text-primary">Internet, Web, Webbrowser und Webseiten</h3><p>Das Internet ist das größte Netzwerk der Welt, das internetfähige Geräte miteinander vernetzt. Dadurch sind die\n          Geräte in der Lage, Informationen bzw. Daten auszutauschen. Wir Menschen nutzen das Internet meistens über einen\n          Webbrowser. Ein Webbrowser ist ein Computerprogramm, über das wir im Web veröffentlichte Webseiten aufrufen können.\n          Wenn man also selbst eine Webseite veröffentlicht, können die darauf präsentierten Inhalte von jedem Menschen in\n          der Welt, der über ein internetfähiges Gerät verfügt, mit Hilfe eines Webbrowsers über das Web abgerufen werden.</p>`,
            id: "d6904637ab194f3ab34d1d5cb87940f3",
          },
          {
            container: "cm",
            filter: ["Audio"],
            title: "Audio",
            icon: "resources/novels/img/file-earmark-music.svg",
            inner:
              '\n          <h3 class="border-bottom mb-5 text-primary">Audio</h3>\n          <audio controls>\n            <source src="https://akless.github.io/akless/we/was-ist-html/grundlage.mp3" type="audio/mp3">\n            Your browser does not support the audio element.\n          </audio>',
            id: "2ed382df2b924e869374c0e47d2782d9",
          },
        ],
        id: "d9b1f545b5684c0996f3976db409b746",
      },
      {
        container: "pc",
        title: "Inhalt:Was ist HTML?",
        inner: [
          {
            container: "cm",
            filter: ["Video"],
            title: "Video",
            icon: "resources/novels/img/file-earmark-play.svg",
            inner:
              '\n          <h3 class="border-bottom mb-5 text-primary">Was ist HTML?</h3>\n            <video width="500px" controls class="rounded mx-auto d-block border">\n              <source src="https://akless.github.io/akless/we/was-ist-html/slidecast.mp4" type="video/mp4">\n            Your browser does not support the video tag.\n            </video>\n          ',
            id: "9ccfd8a053114a1fab141f24608eb140",
          },
        ],
        id: "9ae6b484eeee4d26b752d9013b1fcb94",
      },
      {
        container: "pc",
        title: "Hypertext Markup Language",
        inner: [
          {
            container: "cm",
            filter: ["Text"],
            title: "Text",
            icon: "resources/novels/img/file-earmark-font.svg",
            inner: ["ccm.load", "resources/novels/was_ist_html/html.html"],
            id: "7b2de37bc08e4f64a5c54d3505a2d670",
          },
        ],
        id: "97d36b071d8e4637a31665e87ce18466",
      },
      {
        container: "pc",
        title: "Einsatzgebiet",
        inner: [
          {
            container: "cm",
            filter: ["Text"],
            title: "Text",
            icon: "resources/novels/img/file-earmark-font.svg",
            inner: [
              "ccm.load",
              "resources/novels/was_ist_html/einsatzgebiet.html",
            ],
            id: "df6ce54a50bd47a091343d636e1ef207",
          },
        ],
        id: "972bc57869244a7fbdfd930cf4270fb4",
      },
      {
        container: "pc",
        title: "Web und W3C",
        inner: [
          {
            container: "cm",
            title: "Text",
            icon: "resources/novels/img/file-earmark-font.svg",
            inner: ["ccm.load", "resources/novels/was_ist_html/w3c.html"],
            id: "c1b4319954a146ee8cfcc4af93f63f44",
          },
        ],
        id: "99e6ed39d01d4dcd8a031c89b22bbba2",
      },
      {
        container: "pc",
        title: "Weiterentwicklung",
        inner: [
          {
            container: "cm",
            title: "Text",
            icon: "resources/novels/img/file-earmark-font.svg",
            inner: [
              "ccm.load",
              "resources/novels/was_ist_html/weiterentwicklung.html",
            ],
            id: "d652cf35cd5e43298fe70e576e09baf3",
          },
        ],
        id: "d03e081e3c1244a0b8fadf16ef36866b",
      },
      {
        container: "cm",
        filter: ["Text"],
        title: "Quiz",
        icon: "resources/novels/img/pencil-square.svg",
        inner: [
          "ccm.instance",
          "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-4.3.0.js",
          [
            "ccm.get",
            {
              name: "dms2-configs",
              url: "https://ccm2.inf.h-brs.de",
            },
            ["quiz", "1581493641369X7741789624303226"],
          ],
        ],
        id: "39ef27a943864a5d8a0fc5406e30fc7b",
      },
      {
        container: "cm",
        filter: ["Text"],
        title: "Weiteführende Materielien",
        icon: "resources/novels/img/file-earmark-font.svg",
        inner: ["ccm.load", "resources/novels/was_ist_html/materialien.html"],
        id: "196459004c834a43a5164648b292aff8",
      },
    ],
    id: "161a2058f80643b59c441dc5b4096177",
  },
};

export const schmetterlingstraum = {
  key: "schmetterlingstraum",
  selected_path: "workshop",
  pathList: [
    {
      name: "workshop",
      selected: true,
      content: [
        "f4da1fbc9ee44c84b870f3900ee00c8c",
        "33feea64faa44e3ba9d690f390a99641",
        "9ac4f71cdb6543a4aa7164c44e0fa03f",
        "6347c898563d42bb8c9d2123b806c29d",
        "90b63f81c8984341989fa90c3aa5e766",
        "6e1204055e4e4589b87a7cddc437c9a1",
        "53f2227f2ffa4352a7260bd20708b799",
        "f4cfa46ff8b14810b94dd19fe0611f80",
        "134f8ae556964372ae79c5a615d4d41b",
      ],
    },
  ],
  data: {
    container: "sc",
    title: "Schmetterlingsträume",
    cover_img: "resources/novels/schmetterlingstraum/cover.jpg",
    description:
      "Geschichte über eine bemannte Mission zum Nachbarplaneten Mars.?",
    inner: [
      {
        container: "sc",
        title: "Einführung",
        inner: [
          {
            default: true,
            container: "cm",
            title: "Titel",
            inner: [
              "ccm.load",
              "resources/novels/schmetterlingstraum/einfuerung/titel.html",
            ],
            id: "f4da1fbc9ee44c84b870f3900ee00c8c",
          },
          {
            container: "cm",
            title: "Hilfe",
            inner: [
              "ccm.load",
              "resources/novels/schmetterlingstraum/einfuerung/hilfe.html",
            ],
            id: "33feea64faa44e3ba9d690f390a99641",
          },
          {
            container: "sc",
            title: "Inhalt",
            inner: [
              {
                container: "cm",
                title: "Story",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/kapitel-1/uebersicht.html",
                ],
                id: "9ac4f71cdb6543a4aa7164c44e0fa03f",
              },
              {
                container: "cm",
                title: "Charakterisierung",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/kapitel-1/charakterisierung.html",
                ],
                id: "6520d7b3111f40a197f56760ae15a57c",
              },
            ],
            id: "c15e4e4a9a964f1197af62eba5e3a8a2",
          },
          {
            container: "cm",
            title: "Info",
            inner: [
              "ccm.load",
              "resources/novels/schmetterlingstraum/einfuerung/info.html",
            ],
            id: "41d33ea569504b029eb603bc78182837",
          },
          {
            container: "pc",
            title: "Inhalt",
            inner: [
              {
                container: "cm",
                title: "Autoren",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/einfuerung/autoren.html",
                ],
                id: "1488f6d082254bdbb3832bdf65dc3391",
              },
              {
                default: true,
                container: "cm",
                title: "Impressum",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/einfuerung/impressum.html",
                ],
                id: "46d52b3e8fbf4001b11c8caff75a5b59",
              },
            ],
            id: "65ba67d30017469a86c478ff879a589e",
          },
        ],
        id: "edb96354d64042a4bfbc425dee705dc9",
      },
      {
        container: "pc",
        title: "Inhalt",
        inner: [
          {
            container: "cm",
            title: "Übersicht",
            inner: [
              "ccm.load",
              "resources/novels/schmetterlingstraum/kapitel-1/uebersicht.html",
            ],
            id: "49043bd9d1bd4c569a4e0f8873e9eda1",
          },
          {
            container: "cm",
            title: "Charakterisierung",
            inner: [
              "ccm.load",
              "resources/novels/schmetterlingstraum/kapitel-1/charakterisierung.html",
            ],
            id: "05110255b88a458d94f063b02eb23247",
          },
          {
            container: "sc",
            title: "Kapitel",
            inner: [
              {
                container: "cm",
                title: "Menschtraum",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/kapitel-1/menschtraum.html",
                ],
                id: "c2ae84314ba8449b95a9f51878dbe028",
              },
              {
                container: "pc",
                title: "Kapitel 1",
                inner: [
                  {
                    container: "cm",
                    title: "Marslandung",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-1/marslandung.html",
                    ],
                    id: "0cef059d21564cc18f11f90529b9bf49",
                  },
                  {
                    container: "sc",
                    title: "Gruss vom Mars",
                    inner: [
                      {
                        container: "cm",
                        title: "Landung-Live",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-1/landung-live.html",
                        ],
                        id: "4c92ec971c104d60b3240d9d51c26f32",
                      },
                      {
                        container: "pc",
                        title: "Gruss vom Mars",
                        inner: [
                          {
                            container: "cm",
                            title: "Text",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-1/gruss-vom-mars.html",
                            ],
                            id: "0e68458e9bcf4c35ad47512959e1e319",
                          },
                          {
                            container: "cm",
                            title: "Video",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-1/gruss-vom-mars_video.html",
                            ],
                            id: "cb2669a7cfe84390b18c6ff3da1da4e8",
                          },
                        ],
                        id: "aaf1e5f545584bf7befc8636ca1cd4fd",
                      },
                      {
                        container: "cm",
                        title: "Wiedersprüche",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-1/wiedersprueche.html",
                        ],
                        id: "9e7a45a223b94bf192f244f579fe6e51",
                      },
                    ],
                    id: "f6d4e77616274a6882fbb5e56b8e8fd3",
                  },
                  {
                    container: "cm",
                    title: "Mars (kurz)",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-1/mars-kurz.html",
                    ],
                    id: "9af3f3b4347f46fea8c11b5959f612fc",
                  },
                  {
                    container: "sc",
                    title: "Mars (alternativ)",
                    inner: [
                      {
                        container: "cm",
                        title: "Mars 1/2",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-1/mars-alternativ-1.html",
                        ],
                        id: "823e4d1cbd1c45e8bfdf2473bf714bc5",
                      },
                      {
                        container: "cm",
                        title: "Mars 2/2",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-1/mars-alternativ-2.html",
                        ],
                        id: "372589ebce334e8588b7e006e3a22e8d",
                      },
                    ],
                    id: "ae538824f3774854a9d83a6279a5c391",
                  },
                ],
                id: "24b131ebf3024fa7b1905ebd5d319478",
              },
              {
                container: "pc",
                title: "Kapitel 2",
                inner: [
                  {
                    container: "cm",
                    title: "VTV",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-2/vtv.html",
                    ],
                    id: "968c8e7732c94d6eb6231e3e0caf4087",
                  },
                  {
                    container: "cm",
                    title: "VTVS (kurz)",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-2/vtvs-kurz.html",
                    ],
                    id: "29bdcca8f0314caa8d2367d4bb63f61f",
                  },
                  {
                    container: "cm",
                    title: "Virtuelle Studios",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-2/virtuelle_studios.html",
                    ],
                    id: "27433be866a04906a43c33add9f2730a",
                  },
                  {
                    container: "cm",
                    title: "VTVS Kamera Tracking",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-2/vtvs_kamera_traking.html",
                    ],
                    id: "7ae2e45dd25a4eb990c3c0c8d7af1525",
                  },
                ],
                id: "ec4bb948afb54438a401c28d7126cb41",
              },
              {
                container: "pc",
                title: "Kapitel 3",
                inner: [
                  {
                    container: "cm",
                    title: "Weltraummissionen",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-3/weltraummissionen.html",
                    ],
                    id: "13d5d2f1a6ac440ca4dfd1c8c2a66607",
                  },
                  {
                    container: "cm",
                    title: "DLR",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-3/dlr.html",
                    ],
                    id: "4d108ab05a7f4b96ac7e8d966600b31a",
                  },
                  {
                    container: "sc",
                    title: "Weltraummissionen",
                    inner: [
                      {
                        container: "cm",
                        title: "Verdacht",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-3/verdacht.html",
                        ],
                        id: "8fc84f9de1654e85bc2c35b5ab8d1a3d",
                      },
                      {
                        container: "cm",
                        title: "Mondlüge?",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-3/mondluege.html",
                        ],
                        id: "2bc854e4af6446c0b5ec191a051b7098",
                      },
                      {
                        container: "cm",
                        title: "Expertentermin",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-3/expertentermin.html",
                        ],
                        id: "0bd8ad4e51a54317a74f9b828937a847",
                      },
                      {
                        container: "pc",
                        title: "Radiobericht",
                        inner: [
                          {
                            container: "cm",
                            title: "Text",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-3/radiobericht.html",
                            ],
                            id: "cf57a09ace3a4672952e15e89dc0fcb2",
                          },
                          {
                            container: "cm",
                            title: "Audio",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-3/radiobericht-audio.html",
                            ],
                            id: "f3d69baa321b4e44a54466b44c119ede",
                          },
                        ],
                        id: "ec73441762d149208ec3c973b1055d12",
                      },
                      {
                        container: "cm",
                        title: "DLR",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-3/dlr-2.html",
                        ],
                        id: "3254b08e0b0549f69013334bf4d87e21",
                      },
                      {
                        container: "cm",
                        title: "Wiedersehen",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-3/wiedersehen.html",
                        ],
                        id: "14ff4c534cc94206bfe65732f8517cca",
                      },
                      {
                        container: "pc",
                        title: "Fragen und Antworten",
                        inner: [
                          {
                            container: "cm",
                            title: "Text",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-3/fragen-antworten.html",
                            ],
                            id: "aa5e980154e544ba9ba1629d5d791e06",
                          },
                          {
                            container: "cm",
                            title: "Audio",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-3/fragen-antworten-audio.html",
                            ],
                            id: "a5e3916a97854169baa51003507092b8",
                          },
                        ],
                        id: "d4f7f984fb6f4ee0aa80b073957ce9f3",
                      },
                      {
                        container: "cm",
                        title: "Neue Fragen",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-3/neue-fragen.html",
                        ],
                        id: "d54bdd1d56424e90ab545dff2ed5cfff",
                      },
                    ],
                    id: "03f1faa74a504cd1aae61b4e8f572368",
                  },
                ],
                id: "450da8d0946e4f628ed878598f22733b",
              },
              {
                container: "pc",
                title: "Kapitel 4",
                inner: [
                  {
                    container: "cm",
                    title: "IVE (kurz)",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-4/ive-1.html",
                    ],
                    id: "ab609626d57242eaa4724b0061fb1ffe",
                  },
                  {
                    container: "cm",
                    title: "IVE",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-4/ive-2.html",
                    ],
                    id: "3cfeb4a32a0d42e695abdbe22e8e1367",
                  },
                  {
                    container: "sc",
                    title: "DLR",
                    inner: [
                      {
                        container: "cm",
                        title: "IVE (DLR)",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/ive-dlr.html",
                        ],
                        id: "40b097534409413c8e140bd098cf0d64",
                      },
                      {
                        container: "cm",
                        title: "IVE (FH)",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/ive-fh.html",
                        ],
                        id: "bfc4d35fb2ce4860a4cf6ff03e581ffa",
                      },
                      {
                        container: "cm",
                        title: "Neuroimersion",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/neuroimersion.html",
                        ],
                        id: "5584e146cf97477aae267500749db59f",
                      },
                    ],
                    id: "3afa1ce7e350477dacb8e9d5d2409858",
                  },
                ],
                id: "649b2e0ba9a04627aa9857434bb02f8e",
              },
              {
                container: "pc",
                title: "Kapitel 5",
                inner: [
                  {
                    container: "cm",
                    title: "Simulation (kurz)",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-5/simulation-kurz.html",
                    ],
                    id: "62a2ac12691748e6a4b3110bc86585d2",
                  },
                  {
                    container: "cm",
                    title: "Simulation",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-5/simulation.html",
                    ],
                    id: "b002d12dce2d4c5b86a6a7f62ad6958e",
                  },
                  {
                    container: "sc",
                    title: "Simulation (neu)",
                    inner: [
                      {
                        container: "cm",
                        title: "Nach Novosibirsk",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-5/nach-novosibirsk.html",
                        ],
                        id: "84b7f6cf9543471b9bfa9b94bb9eab20",
                      },
                      {
                        container: "cm",
                        title: "In Novosibirsk",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-5/in-novosibirsk.html",
                        ],
                        id: "c7b0447698de403fb21f468597528481",
                      },
                    ],
                    id: "c38bab94f9c04f84bdb29cedb6276c07",
                  },
                  {
                    container: "sc",
                    title: "Simulatoren",
                    inner: [
                      {
                        container: "cm",
                        title: "Selbstversuch",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-5/selbstversuch.html",
                        ],
                        id: "e386dea4475944adaf58c682b15c6588",
                      },
                      {
                        container: "cm",
                        title: "Echte Immersion",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-5/echte-immersion.html",
                        ],
                        id: "f3432a54814649e792c4f56e14054a62",
                      },
                      {
                        container: "cm",
                        title: "Multisensorik",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-5/multisensorik.html",
                        ],
                        id: "2f939c3d69fb40b294eaefa73dc6ede9",
                      },
                      {
                        container: "cm",
                        title: "Chemo-Immersion",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-5/chemo-immersion.html",
                        ],
                        id: "244045b5949e467c9b1cf281187de618",
                      },
                      {
                        container: "cm",
                        title: "Selbstversuch",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-5/versuch.html",
                        ],
                        id: "e66f245e220147e39e36606313b0e631",
                      },
                      {
                        container: "cm",
                        title: "Trip",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-5/trip.html",
                        ],
                        id: "e6df4fbab3f1400b95fa5580d91e1907",
                      },
                    ],
                    id: "ed4f4d05dc8f48a0bad2f4de12982f2d",
                  },
                ],
                id: "40eab34246844864b752172981f3664b",
              },
              {
                container: "pc",
                title: "Kapitel 6",
                inner: [
                  {
                    container: "cm",
                    title: "VR (kurz)",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-6/vr-kurz.html",
                    ],
                    id: "34fdafa870e444fb8f324125369eee39",
                  },
                  {
                    container: "cm",
                    title: "VR",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-6/vr.html",
                    ],
                    id: "8facec311547414ab9abc644a2ab4f57",
                  },
                  {
                    container: "cm",
                    title: "Virtuelle Realität",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-6/virtuelle-realitaet.html",
                    ],
                    id: "48bf77dda4f2453e8e0bc83e8f199b29",
                  },
                ],
                id: "b9106d2715684a36bc3ecc3acd1f819c",
              },
              {
                container: "pc",
                title: "Epilog",
                inner: [
                  {
                    container: "cm",
                    title: "Text (kurz)",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/epilog/epilog-kurz.html",
                    ],
                    id: "db782130aa284d39836323f5884e5e2f",
                  },
                  {
                    container: "cm",
                    title: "Text",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/epilog/epilog.html",
                    ],
                    id: "be4c147335744f8baf61ac914565eb75",
                  },
                ],
                id: "bbbc511f15484edcaacd68fff12e88d0",
              },
              {
                container: "cm",
                title: "Schmetterlingstraum",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/schmetterlingstraum.html",
                ],
                id: "955ff515738e4452bc4a15f6cff638a3",
              },
            ],
            id: "10dda6511c594e358e68a8290079042e",
          },
        ],
        id: "25ea079053f144aca81ec26267f7cb4f",
      },
      {
        container: "sc",
        title: "Hintergrund-Informationen",
        inner: [
          {
            container: "pc",
            title: "Hypermedia Novel",
            inner: [
              {
                container: "cm",
                title: "Was ist HyMN?",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/struktur.html",
                ],
                id: "6347c898563d42bb8c9d2123b806c29d",
              },
              {
                container: "sc",
                title: "HTML",
                inner: [
                  {
                    container: "cm",
                    title: "Was soll hier rein",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/todo.html",
                    ],
                    id: "77b5e6db9b494768ad3d2b9e1f804445",
                  },
                ],
                id: "d07575b217f94d4289450bf9390b2719",
              },
              {
                container: "sc",
                title: "JavaScript",
                inner: [
                  {
                    container: "cm",
                    title: "Was soll hier rein",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/todo.html",
                    ],
                    id: "603e905b480144c29d9a53e8f610f71a",
                  },
                  {
                    container: "cm",
                    title: "jQuery",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/jquery.html",
                    ],
                    id: "705d70030dbf4f0fb6070a561985e7b5",
                  },
                ],
                id: "18271b05c324450c99ecc935d2cdf5da",
              },
            ],
            id: "6dd97d09150342aaab6903cfb9431287",
          },
          {
            container: "pc",
            title: "Virtuelle TV-Studios",
            inner: [
              {
                default: true,
                container: "cm",
                title: "Wie funktionierts?",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/kapitel-1/technisch_vs.html",
                ],
                id: "90b63f81c8984341989fa90c3aa5e766",
              },
              {
                container: "cm",
                title: "VTV-studio-Film",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/vtv-studio-film.html",
                ],
                id: "f54b52ca395a4c7d9f3a98b003cc554f",
              },
              {
                container: "cm",
                title: "VTV-studio-Animation",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/vtv-studio-animation.html",
                ],
                id: "4f2a5142d42144318c01d1e45280141f",
              },
              {
                container: "cm",
                title: "Keying/Tracking-short info",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/tracking-short-info.html",
                ],
                id: "4ee016cc85744268bf0ec0c5d64fe47b",
              },
              {
                container: "cm",
                title: "Keying",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/keying.html",
                ],
                id: "6e1204055e4e4589b87a7cddc437c9a1",
              },
              {
                container: "cm",
                title: "Tracking",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/tracking.html",
                ],
                id: "53f2227f2ffa4352a7260bd20708b799",
              },
              {
                container: "cm",
                title: "Schatten und Spiegelung",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/schatten-und-spiegelung.html",
                ],
                id: "b79cfb3cbd964380a5b287610095b0e2",
              },
            ],
            id: "5e52f3df74d64063968dd8dd4b208860",
          },
          {
            container: "pc",
            title: "Immersive virtuelle Umgebungen",
            inner: [
              {
                container: "sc",
                title: "Virtuelle Realitäten",
                inner: [
                  {
                    container: "cm",
                    title: "VR-Prinzip",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-4/vr-prinzip.html",
                    ],
                    id: "2a39e8db921643d6b5098d4e101bd2b5",
                  },
                  {
                    container: "cm",
                    title: "Virtuelle Realitäten im Film",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/vr-film.html",
                    ],
                    id: "2490ab5d08384b0db942a7646a0fdb98",
                  },
                  {
                    container: "cm",
                    title: "Virtuelle Realitäten im Spiel",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-4/vr-spiel.html",
                    ],
                    id: "d62074b2474f44c191737cccb29a2f75",
                  },
                ],
                id: "34d8bfd5b9de46eead1176e48632029c",
              },
              {
                container: "sc",
                title: "VR-Architektur",
                inner: [
                  {
                    container: "cm",
                    title: "VR-Architektur",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/vr-architektur.html",
                    ],
                    id: "854bca7338b044cc8a05701c0f972a2f",
                  },
                  {
                    container: "sc",
                    title: "VR-Architektur-Hardware",
                    inner: [
                      {
                        container: "cm",
                        title: "VR-Tracking allgemein",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/vr-traking-allgemein.html",
                        ],
                        id: "2e770447e3624bb996b57a722af4a3b3",
                      },
                      {
                        container: "cm",
                        title: "VR-Tracking",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/vr_tracking.html",
                        ],
                        id: "488f08d7b13642f885117d0c559a102c",
                      },
                      {
                        container: "cm",
                        title: "VR-Haptisch",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/vr-haptish.html",
                        ],
                        id: "0c4e084ccc8047a9966fa04ee2156132",
                      },
                      {
                        container: "cm",
                        title: "VR-Auditiv",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/vr-auditiv.html",
                        ],
                        id: "3e35ddd613024991b0689b56a740b98d",
                      },
                      {
                        container: "cm",
                        title: "VR-Visuell",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/vr-visuell.html",
                        ],
                        id: "d0e509b6133b432d9d937d0e764b83f1",
                      },
                    ],
                    id: "b4a57469ca034f5984b795f91b2a0b10",
                  },
                ],
                id: "d160ace75adb4c8d99d7cd8f5fb05d29",
              },
              {
                container: "sc",
                title: "Hardware",
                inner: [
                  {
                    container: "cm",
                    title: "Info",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-4/hardware_info.html",
                    ],
                    id: "c1761438fc184ddfa4195fd5e8047488",
                  },
                  {
                    container: "pc",
                    title: "Virtusphere",
                    inner: [
                      {
                        container: "sc",
                        title: "Interaktiv",
                        inner: [
                          {
                            container: "cm",
                            title: "Prezi",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-4/virtusphere/8.html",
                            ],
                            id: "eaad68cce2f94c1bae63d30839a660d7",
                          },
                        ],
                        id: "efb6198c617a452189f043a3f604bf34",
                      },
                      {
                        container: "sc",
                        title: "Textuell",
                        inner: [
                          {
                            container: "cm",
                            title: "Virtusphere 3D game Interface",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-4/virtusphere/1.html",
                            ],
                            id: "435ec7e4c6a34424b926415f9394257a",
                          },
                          {
                            container: "cm",
                            title: "Wie funktioniert die Virtusphere?",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-4/virtusphere/2.html",
                            ],
                            id: "bb4cf5038f5e4ae1afe8a5d80db963f8",
                          },
                          {
                            container: "cm",
                            title: "Anwendungen für die Virtusphere?",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-4/virtusphere/3.html",
                            ],
                            id: "3602c721f4b14ae8b142da78ee9a2098",
                          },
                          {
                            container: "cm",
                            title: "Technische Daten",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-4/virtusphere/4.html",
                            ],
                            id: "335aca21ca03429fb157ff2afab93820",
                          },
                          {
                            container: "cm",
                            title: "Bildergalerie",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-4/virtusphere/5.html",
                            ],
                            id: "89a5134e5ecd4b41844a62e5d8e2cb9b",
                          },
                          {
                            container: "cm",
                            title: "Alternativen",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-4/virtusphere/6.html",
                            ],
                            id: "e1e07b9acbd44fa1b95d3d7cd00e51a1",
                          },
                          {
                            container: "cm",
                            title: "Ausblick",
                            inner: [
                              "ccm.load",
                              "resources/novels/schmetterlingstraum/kapitel-4/virtusphere/7.html",
                            ],
                            id: "c2c17d7f08f74eb4858c57b3d2050998",
                          },
                        ],
                        id: "df74e16fe8f74fbdaa41407555dbb00a",
                      },
                    ],
                    id: "3a8031400d524796b80de52a8ff46e56",
                  },
                  {
                    container: "sc",
                    title: "Head Mounted Displays",
                    inner: [
                      {
                        container: "cm",
                        title: "HMDs - Shortinfo",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/hmd_shortinfo.html",
                        ],
                        id: "cd782f1bfaac46529f3a4c8689ab7a5b",
                      },
                      {
                        container: "cm",
                        title: "HMDs - Anwendungen",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/hmd_anwendungen.html",
                        ],
                        id: "be6ed6acf37b461cae48a9b1bfe143d9",
                      },
                      {
                        container: "cm",
                        title: "HMDs - Technik",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/hmd_technik.html",
                        ],
                        id: "17d2da1be38e409eb856ba91cbbd6c4b",
                      },
                      {
                        container: "cm",
                        title: "HMDs - Quellen",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/hmd_quellen.html",
                        ],
                        id: "5febd24678a54e88a67eafb9873978e5",
                      },
                    ],
                    id: "6adbf3e5e23b42bb8647ca5eebc24c07",
                  },
                  {
                    container: "cm",
                    title: "3D-Powerwall",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-4/powerwall.html",
                    ],
                    id: "6be15055ee7645679c071570793695ea",
                  },
                  {
                    container: "cm",
                    title: "Immersion Square",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-3/immersion_square.html",
                    ],
                    id: "5accce34a91f44b39e23a8b083c084ce",
                  },
                  {
                    container: "sc",
                    title: "CAVE",
                    inner: [
                      {
                        container: "cm",
                        title: "CAVE-Shortinfo",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/cave/cave_shortinfo.html",
                        ],
                        id: "6b8c5b0ad1c44b6d9b49505327f6df13",
                      },
                      {
                        container: "cm",
                        title: "CAVE-Geschichte",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/cave/cave_geschichte.html",
                        ],
                        id: "ae0740ccf240452ea2937d6067235c8c",
                      },
                      {
                        container: "cm",
                        title: "CAVE-Anwendungsgebiete",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/cave/cave_anwendung.html",
                        ],
                        id: "7a546d5682a741c0b8552ac29dbff821",
                      },
                      {
                        container: "cm",
                        title: "CAVE-Technik",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/cave/cave_technik.html",
                        ],
                        id: "bb33a43d073844268a02222589ff4068",
                      },
                      {
                        container: "cm",
                        title: "CAVE-Quellen",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-4/cave/cave_quellen.html",
                        ],
                        id: "11afae31bd3f40e4b27de8daca461096",
                      },
                    ],
                    id: "8851afabeb0f4b9e8dc8554668e17af5",
                  },
                ],
                id: "9011d2da9b664472a507fe3887acac79",
              },
              {
                container: "cm",
                title: "Begriff der Immersion",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/kapitel-4/immersion.html",
                ],
                id: "946973088aa54c17af9ba7e0009b837c",
              },
              {
                container: "cm",
                title: "Allgemeine Infos",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/allgemeine-infos.html",
                ],
                id: "84ffd07fcb4e4280a50f182ec0d03992",
              },
            ],
            id: "5b2840cff49a44a5abe891df493d968c",
          },
          {
            container: "pc",
            title: "Augmented Reality",
            inner: [
              {
                container: "cm",
                title: "Erweiterte Realität",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Titel",
                ],
                id: "8af7109c6a264b7b97ca88a0e196a73b",
              },
              {
                container: "cm",
                title: "Definition",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Definition",
                ],
                id: "34781568460b4d6f9dfb00690e8ab26c",
              },
              {
                container: "cm",
                title: "Kategorien",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Kategorien",
                ],
                id: "e2a20273f25b4ef28ac68dd6913d50ff",
              },
              {
                container: "cm",
                title: "Arten der Präsentation",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Arten_der_Praesentation",
                ],
                id: "aa90cca941e44cd6b3dc885329728dde",
              },
              {
                container: "cm",
                title: "Level of Detail",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Level_of_Detail",
                ],
                id: "9e26980c92a94b508e6b7a31a5dfe66a",
              },
              {
                container: "cm",
                title: "Informationspräsentation",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Informationspraesentation",
                ],
                id: "b9540fd790ba4e76834d380afaa373dc",
              },
              {
                container: "pc",
                title: "Anwendungsgebiete",
                inner: [
                  {
                    container: "sc",
                    title: "Militär",
                    inner: [
                      {
                        container: "cm",
                        title: "Übersicht",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/militaer.html#Militaer",
                        ],
                        id: "fd4ed6a70074456a9fa4dcc76411a08d",
                      },
                      {
                        container: "cm",
                        title: "Kampfflugzeuge",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/militaer.html#Kampfflugzeuge",
                        ],
                        id: "2e48990ec9434bfbbf391d364abc088e",
                      },
                      {
                        container: "cm",
                        title: "Kampfhubschrauber",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/militaer.html#Kampfhubschrauber",
                        ],
                        id: "c7e3ad715656497b89eac651ec52cc00",
                      },
                      {
                        container: "cm",
                        title: "Panzer",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/militaer.html#Panzer",
                        ],
                        id: "d9555a7ea2694515b0bca15374531e03",
                      },
                      {
                        container: "cm",
                        title: "Infanterie",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/militaer.html#Infanterie",
                        ],
                        id: "e3275fff19a64678a0177d53be3e5082",
                      },
                      {
                        container: "cm",
                        title: "Simulation und Training",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/militaer.html#Simulation_und_Training",
                        ],
                        id: "41a7ea675e884e9c8f0382446dca9650",
                      },
                      {
                        container: "cm",
                        title: "Vor- und Nachteile",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/militaer.html#Vor_und_Nachteile",
                        ],
                        id: "bc712fc7ad294b7a90d834097646d7a3",
                      },
                      {
                        container: "cm",
                        title: "Quellen",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/militaer.html#Abbildungsverzeichnis",
                        ],
                        id: "7e06745c39a9480f90e5d6919ad2607f",
                      },
                    ],
                    id: "30f4bfeab8db4cd292c9572bf5b78c47",
                  },
                  {
                    container: "sc",
                    title: "Raumfahrt",
                    inner: [
                      {
                        container: "cm",
                        title: "Übersicht",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/raumfahrt.html#Raumfahrt",
                        ],
                        id: "8211b9d623484637baa2363a9507cc72",
                      },
                      {
                        container: "cm",
                        title: "Allgemeines",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/raumfahrt.html#Allgemeines",
                        ],
                        id: "0a8f4f6287804609a5d64252ec98f18f",
                      },
                      {
                        container: "cm",
                        title: "WEAR",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/raumfahrt.html#WEAR",
                        ],
                        id: "d43f545f4c7e4387a4a176479e2bb0ac",
                      },
                      {
                        container: "cm",
                        title: "Quellen",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/raumfahrt.html#Abbildungsverzeichnis",
                        ],
                        id: "8c3dc8d3d97f4c01bec569e394f5ccfe",
                      },
                    ],
                    id: "d372ac8222b34d9ea2fec00cda88b390",
                  },
                ],
                id: "c98538c89b674222af9e3941dae38d63",
              },
              {
                container: "cm",
                title: "Darstellungstechniken",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Darstellungstechniken",
                ],
                id: "21f66d9bec59401783fa2e694d145a9d",
              },
              {
                container: "cm",
                title: "Interaktion",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Interaktion",
                ],
                id: "bc2815cc0f4248c580a8ed64a7378123",
              },
              {
                container: "cm",
                title: "Aktueller Stand der Technik",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Aktueller_Stand",
                ],
                id: "80ca4f2253d1443e87ffd46eec480a2a",
              },
              {
                container: "cm",
                title: "Beispielvideos",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/erweiterte-realitaet.html#Beispielvideos",
                ],
                id: "e92e00f057de4110a667993dbb3416bc",
              },
            ],
            id: "052fea391ca34ae19b6d7b326a6a88fa",
          },
          {
            container: "sc",
            title: "Stereoskopie",
            inner: [
              {
                container: "cm",
                title: "Übersicht",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/kapitel-4/stereoskopie.html",
                ],
                id: "ec074adb947d4192ac101b435ddc7355",
              },
              {
                container: "cm",
                title: "Physiologie",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/kapitel-4/physiologie.html",
                ],
                id: "2839e16f3b4f4305a53ab5b4e02c29bc",
              },
              {
                container: "cm",
                title: "Raumwahrnehmung",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/raumwahrnehmung.html",
                ],
                id: "4f8ff3b7978140c6979827ef2e25f59e",
              },
              {
                container: "sc",
                title: "Techniken",
                inner: [
                  {
                    container: "cm",
                    title: "Polarisationsbrille",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/polarisationsfilter.html",
                    ],
                    id: "065ebbae55db4198b985c2e63b997aa2",
                  },
                  {
                    container: "cm",
                    title: "Shutterbrille",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/shutterbrille.html",
                    ],
                    id: "b7f6b0a445a546808eb75204820a502b",
                  },
                  {
                    container: "cm",
                    title: "Farbfilter",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-4/farbfilter.html",
                    ],
                    id: "955b2afe4b234a9599769ff9641a6a3d",
                  },
                  {
                    container: "cm",
                    title: "Prismenbrille",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/prismenbrille.html",
                    ],
                    id: "ef3a15af7b6f45c7bd3be6eb071c8efc",
                  },
                  {
                    container: "cm",
                    title: "3D-Video-Brille",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/videobrille.html",
                    ],
                    id: "92b9263157194822827a3d75367e2fc1",
                  },
                  {
                    container: "cm",
                    title: "3D-Display",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/display3d.html",
                    ],
                    id: "d3cb084325d8408cbb612caf7a55d3d8",
                  },
                ],
                id: "e258e2e381134e5aa784b505207a8a72",
              },
            ],
            id: "ef9f3209af5e42cea6c216b817c70a84",
          },
          {
            container: "sc",
            title: "Holographie",
            inner: [
              {
                container: "cm",
                title: "Intro",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/intro.html",
                ],
                id: "f67398382f564fa1a47409ccb2b1adc6",
              },
              {
                container: "cm",
                title: "Inhalt",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/inhalt.html",
                ],
                id: "0ef6db6dbbb247bc9225eed9724c186a",
              },
              {
                container: "cm",
                title: "Was ist Holographie",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/was-ist-holographie.html",
                ],
                id: "651b2aa6890e4b3493ecab3b77139fb2",
              },
              {
                container: "cm",
                title: "Grundbegriffe",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/grundbegriffe.html",
                ],
                id: "fd47f73cdb3c4130b6062b5a908a83ba",
              },
              {
                container: "cm",
                title: "Aufbau",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/aufbau.html",
                ],
                id: "7eaa63d966ce4c3ba5a9f649af3eb466",
              },
              {
                container: "cm",
                title: "Rekonstruktion",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/rekonstruktion.html",
                ],
                id: "0adcf9053a4840299abe4b8c6fd71178",
              },
              {
                container: "cm",
                title: "Anwendungsbereiche",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/anwendungsbereiche.html",
                ],
                id: "aece420682c5430798d1fbb53d6238bb",
              },
            ],
            id: "dad970983aa446059f2027d3efe9218b",
          },
          {
            container: "pc",
            title: "Wahrnehmung und Täuschung",
            inner: [
              {
                container: "cm",
                title: "Wahrnehmung",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/wahrnehmung-short.html",
                ],
                id: "abe85c730acd47488fea928b31b2ca19",
              },
              {
                container: "cm",
                title: "Sinnestäuschungen",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/sinnestaeuschung.html",
                ],
                id: "4ee0238d405b43afa78aa04b494d1bd7",
              },
            ],
            id: "4f13792fab874f5d862bd20109c5614a",
          },
          {
            container: "pc",
            title: "Simulation",
            inner: [
              {
                container: "cm",
                title: "Definition",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/definition.html",
                ],
                id: "e7bf8877385840529bf206ac25100279",
              },
              {
                container: "cm",
                title: "Gründe",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/gruende.html",
                ],
                id: "f4cfa46ff8b14810b94dd19fe0611f80",
              },
              {
                container: "cm",
                title: "Historie",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/historie.html",
                ],
                id: "38ebcb44ac6b4a48b4c5c0367a0f1f29",
              },
              {
                container: "cm",
                title: "Beispiele",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/beispiele.html",
                ],
                id: "134f8ae556964372ae79c5a615d4d41b",
              },
              {
                container: "cm",
                title: "Sickness",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/sickness.html",
                ],
                id: "b4b457e5ba634ee292775768499bb342",
              },
              {
                container: "cm",
                title: "Grenzen der Simulation",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/grenzen-der-simulation.html",
                ],
                id: "a2150a6197cf4f19aafa020c8b17db8a",
              },
            ],
            id: "8e06a3aef6c34b4ba161f797cb31f29c",
          },
          {
            container: "pc",
            title: "Luft und Raumfahrt",
            inner: [
              {
                container: "cm",
                title: "Astronautentraining",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/astronautentraining.html",
                ],
                id: "f7d75cc1b61a4755b1e89ca92c722df5",
              },
              {
                container: "cm",
                title: "Luft- und Raumfahrt am Dom",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/luft-und-raumfahrt-dom.html",
                ],
                id: "bbaf475b9301411eac0343199faebce3",
              },
              {
                container: "cm",
                title: "DLR-Daten und Fakten",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/dlr-daten-und-fakten.html",
                ],
                id: "cd28c7ae0d424dada40b9d4c861a918c",
              },
              {
                container: "cm",
                title: "EnviHab",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/envihab.html",
                ],
                id: "ff6d1bb88dde49438a14970e4a88d6a6",
              },
            ],
            id: "06fc12e8ef22420a9aff76c423864158",
          },
          {
            container: "pc",
            title: "Kosmos",
            inner: [
              {
                container: "sc",
                title: "Mars",
                inner: [
                  {
                    container: "pc",
                    title: "Planet",
                    inner: [
                      {
                        container: "cm",
                        title: "Fakten und Vermutungen",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/fakten-und-vermutungen.html",
                        ],
                        id: "28bbd550203c418dbc022b334e8ed90e",
                      },
                    ],
                    id: "abec796b727641e98d016a1d523b50fb",
                  },
                  {
                    container: "pc",
                    title: "Mission",
                    inner: [
                      {
                        container: "cm",
                        title: "Allgemeines",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-1/allgemeines.html",
                        ],
                        id: "6edba76604f5489a8691f66e016ac227",
                      },
                      {
                        container: "cm",
                        title: "Gebiete",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/gebiete.html",
                        ],
                        id: "93f24bf6b89d4782b321730a19f79ee0",
                      },
                      {
                        container: "cm",
                        title: "Bilder der Gebiete",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/hintergrund-info/bilder-der-gebiete.html",
                        ],
                        id: "111db9bf553548b39ad09f745e04bc33",
                      },
                      {
                        container: "cm",
                        title: "Szenario",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-1/szenario.html",
                        ],
                        id: "dd5deed268304c66a1a038e80d9907c6",
                      },
                      {
                        container: "cm",
                        title: "Station Bilder",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-1/bilder.html",
                        ],
                        id: "f767b0afc2d540f1b6c86838ad94ec1a",
                      },
                      {
                        container: "cm",
                        title: "Virtueller Marsflug",
                        inner: [
                          "ccm.load",
                          "resources/novels/schmetterlingstraum/kapitel-1/marsflug.html",
                        ],
                        id: "4844c6e30a5846199d0451664bec14f0",
                      },
                    ],
                    id: "6b9188de82e941a3b45ff4af029842f3",
                  },
                ],
                id: "3482e8c73fd24867b4dfdcc6d4d7430b",
              },
              {
                container: "sc",
                title: "kosmische Strahlung",
                inner: [
                  {
                    container: "cm",
                    title: "Info-Text",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/kapitel-1/kosmische-strahlung.html",
                    ],
                    id: "1e6285ce7fa0415491295777ee5f0657",
                  },
                  {
                    container: "cm",
                    title: "Bilder",
                    inner: [
                      "ccm.load",
                      "resources/novels/schmetterlingstraum/hintergrund-info/kosmische-strahlung-bilder.html",
                    ],
                    id: "23acf0bbbf2948fbaadcb67f534ea10b",
                  },
                ],
                id: "7f0c1886643047d5b4a6119b10ede902",
              },
            ],
            id: "9240f6400f8d4b268b007f65969f15c1",
          },
          {
            container: "pc",
            title: "Media Center",
            inner: [
              {
                container: "cm",
                title: "Info-Text",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/info-text.html",
                ],
                id: "906f09d34f0f475b997244160e89ca0e",
              },
              {
                container: "cm",
                title: "Info-Grafik",
                inner: [
                  "ccm.load",
                  "resources/novels/schmetterlingstraum/hintergrund-info/info-grafik.html",
                ],
                id: "e1c14c032ff84befa9306b6fdcaa2ff2",
              },
            ],
            id: "c6b722dc615c4fc8bba746ca40b44ff6",
          },
        ],
        id: "367e5352cf62463f9c0b53fdcc994b9b",
      },
    ],
    id: "35ed8dc8f59c4aa793e5bd758da7d58e",
  },
};

export const passwortsicherheit = {
  key: "passwortsicherheit",
  lang_flag: "deu",
  /*  filter: [
    { title: "Audio", selected: false, visible: true },
    { title: "Text", selected: true, visible: true },
  ],*/
  pathList: [
    {
      name: "Krimi",
      content: [
        "f382bc819f6048919f54f6d4809afefe",
        "0df85977428b45e0a969cba1eebdc08a",
        "89a13a7e1bed42a3aeac2779b40d0bd2",
        "da2933b5ba99459bad250d984564fb1e",
        "e5dd31de126f41ff8a88b954f093855e",
        "a2e3e12f9c7b4bc9be322073cbdaa878",
        "a2e3e12f9c7b4bc9be322073cbdaa989",
        "9f67013f9e754953b02ef7673c2f6258",
        "54e6d97de8cb470da3b6686737b20833",
        "09246ff990f7453d95f684e739f349be",
        "68c66ba5787b4319b8ed6e45f28d1996",
        "bf5163f9087f4c6bb5a41b3ac5dde06e",
        "bf5163f9087f4c6bb5a41b3ac5dde17h",
        "bf5163f9087f4c6bb5a41b3ac5ddg17ej",
      ],
    },
    {
      name: "Science-Fiction",
      content: [
        "f382bc819f6048919f54f6d4809afefe",
        "0df85977428b45e0a969cba1eebdc98a",
        "cb1d2cb743bb41b69e46c50f0fa7bb56",
        "240677228833411d8f8121a8cfb719e9",
        "b65f2dcbb5a54d4dac5ff52d85b30703",
        "3cc6446b786249389471d0d1f171870e",
        "f3fd855a8fb541598ee59110018dbb4c",
        "de5a6872416e46ebb12e436cb8652096",
        "1417c8689da5481c909447e2de56da76",
      ],
    },
    {
      name: "Mystery",
      content: [
        "f382bc819f6048919f54f6d4809afefe",
        "1e09df162698461a8a957bf3c97b12b7",
        "a0c61991ade34d9b90655b286dfb168c",
        "90f34629f5574f9f96d83061109c2e65",
        "a54d515cad2347ffb19d93e618c46f15",
        "71107097ea134133acaa4413684baaeb",
        "dce66c4dbd134c388cf7bd5a0a6a4456",
        "b3b3a11f5b324f10821dedb3dff6e8ad",
        "b2e4eb721b634a63a7592441363f3bb0",
        "d9099f8f97ad4e14a2d072e385d4010a",
      ],
    },
    {
      name: "Fantasy",
      content: [
        "f382bc819f6048919f54f6d4809afefe",
        "83d6388185c34766aa9e21bdaf0d9af1",
        "4330c16eed044cb0a5334006f033b471",
        "9f8ad74931504537aa164c48a72715da",
        "1a2c3ca5ec5d49d9a50938c6a5914360",
      ],
    },
    {
      name: "Comedy",
      content: [
        "f382bc819f6048919f54f6d4809afefe",
        "628f96eb3ffa49bcbf353279ddad2181",
        "74c3a2aa5d5b4ffe9be63d93cf4f202c",
        "783939c0134b478aa7e405ed4eb12f8a",
        "15eeb4d8b3f347a0ba7ae9a199838774",
        "a704d97b8b28487b9d21e099fc8380cf",
        "c265ba8bacf54b5cbc334c7e9e570ad5",
        "65547b059b684d93a013b69e2e8c7dea",
      ],
    },
  ],
  data: {
    container: "sc",
    title: "Passwortsicherheit",
    cover_img: "resources/novels/passwortsicherheit/cover.png",
    description: "Sichere Passwörter erstellen und verwalten können.",
    inner: [
      {
        container: "sc",
        title: "Einführung",
        inner: [
          {
            default: true,
            container: "cm",
            title: "Titel",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/einfuerung/titel.html",
            ],
            id: "f382bc819f6048919f54f6d4809afefe",
          },
          {
            container: "cm",
            title: "Über Story",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/einfuerung/ueber.html",
            ],
            id: "edad922f3547436196275328a73f0817",
          },
        ],
        id: "3500910d1e19487c96d2ccdcda7b785e",
      },
      {
        container: "sc",
        title: "Wie war das noch gleich?",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    default: true,
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/generisch-1-1.html",
                    ],
                    id: "dc9876bfcb9740e48384e77d0da8ee4c",
                  },
                ],
                id: "5c55a39f4dbb4f33b598a3b1909cd37d",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "cm",
                    title: "Titelseite",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/krimi-0-0.html",
                    ],
                    id: "0df85977428b45e0a969cba1eebdc08a",
                  },
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-1.html",
                        ],
                        id: "89a13a7e1bed42a3aeac2779b40d0bd2",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-1-audio.html",
                        ],
                        id: "89a13a7e1bed42a3aeac2779b2h89bd2",
                      },
                    ],
                    id: "c85ef5562c824920add4d49bc07c0617",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-2.html",
                        ],
                        id: "da2933b5ba99459bad250d984564fb1e",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-2-audio.html",
                        ],
                        id: "6abb2122fb454f1a9527d35201b1a22e",
                      },
                    ],
                    id: "ed790f3616c04d93b02c6c6d251ed01f",
                  },
                ],
                id: "361a5e887e9b4f52897b9cef4dd16b57",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Titelseite",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/scifi-0-0.html",
                    ],
                    id: "0df85977428b45e0a969cba1eebdc98a",
                  },
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/scifi-1-1.html",
                    ],
                    id: "cb1d2cb743bb41b69e46c50f0fa7bb56",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/scifi-1-2.html",
                    ],
                    id: "240677228833411d8f8121a8cfb719e9",
                  },
                ],
                id: "488310f47deb4f3faff716a68096303a",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/mystery-1-1.html",
                    ],
                    id: "1e09df162698461a8a957bf3c97b12b7",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/mystery-1-2.html",
                    ],
                    id: "a0c61991ade34d9b90655b286dfb168c",
                  },
                ],
                id: "542419dd5dcf4adb8c54068aae006a7f",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/fantasy-1-1.html",
                    ],
                    id: "83d6388185c34766aa9e21bdaf0d9af1",
                  },
                ],
                id: "3a6edc640482439d89f55096adbc66da",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/comedy-1-1.html",
                    ],
                    id: "628f96eb3ffa49bcbf353279ddad2181",
                  },
                ],
                id: "447ac46e81ab4101b36489d3bc069d38",
              },
            ],
            id: "d29274b3d19f4cebb67657aad364a604",
          },
        ],
        id: "07bdd5936fa94f6d922ad5134471d072",
      },
      {
        container: "sc",
        title: "Eine harte Nuss",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    default: true,
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/generisch-2-1.html",
                    ],
                    id: "0e0d5c51a6db40a691619a3939e52c28",
                  },
                  {
                    container: "cm",
                    default: true,
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/generisch-2-2.html",
                    ],
                    id: "2a27a1992b6c4b909e3e6d4a9b020b30",
                  },
                ],
                id: "bd47676773cf4cdd8111828850f1d809",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-1.html",
                        ],
                        id: "e5dd31de126f41ff8a88b954f093855e",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2-audio.html",
                        ],
                        id: "ce2deac9d1774c848767c172cc789152",
                      },
                    ],
                    id: "10cac2ad43544081a1a5f9b00f8035b1",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2.html",
                        ],
                        id: "a2e3e12f9c7b4bc9be322073cbdaa878",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2-audio.html",
                        ],
                        id: "6aa4d51830e2447fb7aad80584d5d772",
                      },
                    ],
                    id: "89f5dc5298e24a4e9bd1e7c23fccf959",
                  },
                  {
                    container: "pc",
                    title: "Teil 3",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-3.html",
                        ],
                        id: "a2e3e12f9c7b4bc9be322073cbdaa989",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-3-audio.html",
                        ],
                        id: "c016332b5fc54dea8646ba512c2416ff",
                      },
                    ],
                    id: "d62fdff29e814111a58c9c771d99fae8",
                  },
                ],
                id: "ff03bb9d53bd484d94b0d9c8cfbb7a54",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/scifi-2-1.html",
                    ],
                    id: "b65f2dcbb5a54d4dac5ff52d85b30703",
                  },
                ],
                id: "77371f25ba114650aa5cde7f68500d47",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/mystery-2-1.html",
                    ],
                    id: "90f34629f5574f9f96d83061109c2e65",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/mystery-2-2.html",
                    ],
                    id: "a54d515cad2347ffb19d93e618c46f15",
                  },
                ],
                id: "dc355cd183fb4924978dc808e50f86bd",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/fantasy-2-1.html",
                    ],
                    id: "4330c16eed044cb0a5334006f033b471",
                  },
                ],
                id: "6c2a0a207edd40aebbd33545e7ee7b90",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/comedy-2-1.html",
                    ],
                    id: "74c3a2aa5d5b4ffe9be63d93cf4f202c",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/comedy-2-2.html",
                    ],
                    id: "783939c0134b478aa7e405ed4eb12f8a",
                  },
                ],
                id: "125e030b322c4b7fa13d6d14dec280db",
              },
            ],
            id: "a44e2361ff8d4b57854fd87ce0506d24",
          },
        ],
        id: "e217e037e08b4fb28be4b186746385cf",
      },
      {
        container: "sc",
        title: "Aber sicher!",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    default: true,
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/generisch-3-1.html",
                    ],
                    id: "b3b1cce134244e509249dd66eae00ff3",
                  },
                ],
                id: "e62c0a1e06ee45f1844273298bbc12d8",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-1.html",
                        ],
                        id: "9f67013f9e754953b02ef7673c2f6258",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-1-audio.html",
                        ],
                        id: "657a0c5a3f894978b4a104850d10852e",
                      },
                    ],
                    id: "6d70877760e14f8b90620d9651261d67",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-2.html",
                        ],
                        id: "54e6d97de8cb470da3b6686737b20833",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-2-audio.html",
                        ],
                        id: "527d484b1b1a4094adb1cd8b96926f60",
                      },
                    ],
                    id: "a62a3b2fd1ee437ebd7db775f1af13e7",
                  },
                ],
                id: "7902fd19b51b4442aa3aabc0b62a150d",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/scifi-3-1.html",
                    ],
                    id: "3cc6446b786249389471d0d1f171870e",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/scifi-3-2.html",
                    ],
                    id: "f3fd855a8fb541598ee59110018dbb4c",
                  },
                ],
                id: "6f331e95c66048c88c64220fb05c86e9",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/mystery-3-1.html",
                    ],
                    id: "71107097ea134133acaa4413684baaeb",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/mystery-3-2.html",
                    ],
                    id: "dce66c4dbd134c388cf7bd5a0a6a4456",
                  },
                ],
                id: "8965dcdcec0848eabeaf5cbc34c4f77b",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/fantasy-3-1.html",
                    ],
                    id: "9f8ad74931504537aa164c48a72715da",
                  },
                ],
                id: "9c3a02e5f91e4be78440b1d9010eb71f",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/comedy-3-1.html",
                    ],
                    id: "15eeb4d8b3f347a0ba7ae9a199838774",
                  },
                ],
                id: "3cde6baa087949ce809f465696374e4f",
              },
            ],
            id: "dd43645535704242a3d2f81eeedba478",
          },
        ],
        id: "570cbb98b3f64a688105e9383aedfdd8",
      },
      {
        container: "sc",
        title: "Alles im grünen Bereich",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    default: true,
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/generisch-4-1.html",
                    ],
                    id: "f5b225c7fbb146d6a18a2327e2ac29d1",
                  },
                ],
                id: "5a324a018d7b46a49458ffa148344740",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-1.html",
                        ],
                        id: "09246ff990f7453d95f684e739f349be",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-1-audio.html",
                        ],
                        id: "4b86894f210a4f819a656ac88967619b",
                      },
                    ],
                    id: "8bf7b64337704bc69e9f1e31ac7b7353",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-2.html",
                        ],
                        id: "68c66ba5787b4319b8ed6e45f28d1996",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-2-audio.html",
                        ],
                        id: "fe80ac08c1824bb89a0eb83e858f39f3",
                      },
                    ],
                    id: "99c8351adbb2408f8b076c4b30f44faa",
                  },
                  {
                    container: "pc",
                    title: "Teil 3",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-3.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5dde06e",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-3-audio.html",
                        ],
                        id: "4b88b2d4d5d0402f8b21169126ffaba6",
                      },
                    ],
                    id: "4a5b64497274493298df2707938b1fab",
                  },
                  {
                    container: "pc",
                    title: "Teil 4",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-4.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5dde17h",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-4-audio.html",
                        ],
                        id: "40fc5077fb564f408cfd5105f61cf598",
                      },
                    ],
                    id: "2d9553213bce4e5bb193c3161f3b2ff3",
                  },
                  {
                    container: "pc",
                    title: "Teil 5",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-5.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5ddg17ej",
                      },
                      {
                        container: "cm",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        title: "Audio",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-5-audio.html",
                        ],
                        id: "62c2e3f15c4e4d2d9d46c03e4398ff63",
                      },
                    ],
                    id: "f8dc554a17854178ac94e1a471c549b5",
                  },
                ],
                id: "e1535fa2348f401eaa7701408f78a1a5",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/scifi-4-1.html",
                    ],
                    id: "de5a6872416e46ebb12e436cb8652096",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/scifi-4-2.html",
                    ],
                    id: "1417c8689da5481c909447e2de56da76",
                  },
                ],
                id: "24463981b1b942c787655117be52a5f4",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/mystery-4-1.html",
                    ],
                    id: "b3b3a11f5b324f10821dedb3dff6e8ad",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/mystery-4-2.html",
                    ],
                    id: "b2e4eb721b634a63a7592441363f3bb0",
                  },
                  {
                    container: "cm",
                    title: "Teil 3",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/mystery-4-3.html",
                    ],
                    id: "d9099f8f97ad4e14a2d072e385d4010a",
                  },
                ],
                id: "daa9acd3ad8e481186bd0632f7cefdae",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/fantasy-4-1.html",
                    ],
                    id: "1a2c3ca5ec5d49d9a50938c6a5914360",
                  },
                ],
                id: "0197b14a2b0649318c17d0a9211de4e8",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/comedy-4-1.html",
                    ],
                    id: "a704d97b8b28487b9d21e099fc8380cf",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/comedy-4-2.html",
                    ],
                    id: "c265ba8bacf54b5cbc334c7e9e570ad5",
                  },
                  {
                    container: "cm",
                    title: "Teil 3",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/comedy-4-3.html",
                    ],
                    id: "65547b059b684d93a013b69e2e8c7dea",
                  },
                ],
                id: "a14e918190544f50a1c4f0e95a1669a2",
              },
            ],
            id: "e6b51e6a8d7e4d019753c61c68b58c79",
          },
        ],
        id: "68dbd59b9e0e436b8377c1cf39256b03",
      },
      {
        container: "sc",
        title: "Hintergrundinformation",
        inner: [
          {
            container: "cm",
            title: "Wie werden Passwörter “geknackt”?",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/passw-geknakt.html",
            ],
            id: "23c486ef98a049bd93f793cef765fba2",
          },
          {
            container: "cm",
            title: "Modernes “guessing”",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/guessing.html",
            ],
            id: "4d3c187b1b0a4ec19d87540fcdd26d5c",
          },
          {
            container: "cm",
            title: "Die eigentlichen Gefahren",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/gefahren.html",
            ],
            id: "c51b06893e10495588c55112fb2a7cf6",
          },
          {
            container: "cm",
            title: "Was macht ein sicheres Passwort aus?",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/sicheres-password.html",
            ],
            id: "4b3343503f6f467eae06f81a08623e00",
          },
          {
            container: "pc",
            title: "Passwort generieren",
            inner: [
              {
                container: "cm",
                title: "Für Passwörter",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/passwoerter.html",
                ],
                id: "c2aae37ff0734f91aa4204c850b433e3",
              },
              {
                container: "cm",
                title: "Für Passphrasen",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/passphrasen.html",
                ],
                id: "7d5d9d429f9e461792d722e11fbca73f",
              },
            ],
            id: "5743fe2236554418b0607649ff809756",
          },
          {
            container: "sc",
            title: "Ausblick",
            inner: [
              {
                container: "cm",
                title: "Passwort-Manager",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/password-manager.html",
                ],
                id: "2ea343a0d95c443aaafd2caa8bbf99ed",
              },
              {
                container: "cm",
                title: "Digital",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/digital.html",
                ],
                id: "0a71eabea8364118852504144a7d14b4",
              },
              {
                container: "cm",
                title: "Papier",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/papier.html",
                ],
                id: "a07298f4eda5459a9f3817d4925614d4",
              },
              {
                container: "cm",
                title: "Quantencomputing",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/quantencomputing.html",
                ],
                id: "388786b4c98040ae802b4dcb87e6771e",
              },
              {
                container: "cm",
                title: "Guessing",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/guessing-1.html",
                ],
                id: "36e5b4bfd6704715b64a0fcf8db56856",
              },
              {
                container: "cm",
                title: "Cracking",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/cracking.html",
                ],
                id: "e8f16e6b73684819afed3b25fa5e66ac",
              },
            ],
            id: "3560bf815cdd4bd380407a926e6d92a2",
          },
        ],
        id: "33e4ac7f5cff49f4878fdfefa78cb171",
      },
      {
        container: "cm",
        title: "Quiz",
        icon: "resources/novels/img/pencil-square.svg",
        inner: [
          "ccm.instance",
          "https://ccmjs.github.io/akless-components/quiz/ccm.quiz.min.js",
          [
            "ccm.get",
            {
              name: "dms2-configs",
              url: "https://ccm2.inf.h-brs.de",
            },
            ["quiz", "1709117704735X9552784208175142"],
          ],
        ],
        id: "39ef27a943864a5d8a0fc5406e30fc7b",
      },
      {
        container: "cm",
        title: "Lückentext",
        icon: "resources/novels/img/pencil-square.svg",
        inner: [
          "ccm.instance",
          "https://ccmjs.github.io/akless-components/cloze/ccm.cloze.min.js",
          [
            "ccm.get",
            {
              name: "dms2-configs",
              url: "https://ccm2.inf.h-brs.de",
            },
            ["cloze", "1709119577904X7602929795690954"],
          ],
        ],
        id: "39ef27a943864a5d8a0fc5406e30gh7v",
      },
    ],
    id: "d1b8485032f84b83b51017d487baff73",
  },
  /*logger: [
    "ccm.instance",
    "https://ccmjs.github.io/akless-components/log/versions/ccm.log-5.0.1.min.js",
    {
      mask: {
        browser: true,
        data: true,
        event: true,
        parent: false,
        referrer: false,
        root: false,
        session: true,
        user: false,
        website: false,
      },
      onfinish: {
        log: true,
        store: {
          settings: {
            name: "hymn_v6",
            url: "https://ccm2.inf.h-brs.de",
          },
          permissions: {
            creator: "tkless2m",
            realm: "hbrsinfkaul",
            access: "creator",
          },
        },
      },
    },
  ],
  onchange: (event) => event.app.logger.log(event),*/
};

export const passwortsicherheit_krimi_de = {
  key: "passwortsicherheit_krimi_de",
  lang_flag: "deu",
  /*  filter: [
    { title: "Audio", selected: false, visible: true },
    { title: "Text", selected: true, visible: true },
  ],*/
  selected_path: "Krimi",
  pathList: [
    {
      name: "Krimi",
      content: [
        "f382bc819f6048919f54f6d4809afefe",
        "0df85977428b45e0a969cba1eebdc08a",
        "89a13a7e1bed42a3aeac2779b40d0bd2",
        "da2933b5ba99459bad250d984564fb1e",
        "e5dd31de126f41ff8a88b954f093855e",
        "a2e3e12f9c7b4bc9be322073cbdaa878",
        "a2e3e12f9c7b4bc9be322073cbdaa989",
        "9f67013f9e754953b02ef7673c2f6258",
        "54e6d97de8cb470da3b6686737b20833",
        "09246ff990f7453d95f684e739f349be",
        "68c66ba5787b4319b8ed6e45f28d1996",
        "bf5163f9087f4c6bb5a41b3ac5dde06e",
        "bf5163f9087f4c6bb5a41b3ac5dde17h",
        "bf5163f9087f4c6bb5a41b3ac5ddg17ej",
      ],
    },
  ],
  data: {
    container: "sc",
    title: "Eine Krimi Geschichte zum Thema - Passwortsicherheit.",
    cover_img: "resources/novels/passwortsicherheit/kap1/media/krimi.png",
    description: "Erstellen und Verwalten von sicheren Passwörtern.",
    inner: [
      {
        container: "sc",
        title: "Einführung",
        inner: [
          {
            default: true,
            container: "cm",
            title: "Titel",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/einfuerung/titel.html",
            ],
            id: "f382bc819f6048919f54f6d4809afefe",
          },
          {
            container: "cm",
            title: "Über Story",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/einfuerung/ueber.html",
            ],
            id: "edad922f3547436196275328a73f0817",
          },
        ],
        id: "3500910d1e19487c96d2ccdcda7b785e",
      },
      {
        container: "sc",
        title: "Wie war das noch gleich?",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    default: true,
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/generisch-1-1.html",
                    ],
                    id: "dc9876bfcb9740e48384e77d0da8ee4c",
                  },
                ],
                id: "5c55a39f4dbb4f33b598a3b1909cd37d",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "cm",
                    title: "Titelseite",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/krimi-0-0.html",
                    ],
                    id: "0df85977428b45e0a969cba1eebdc08a",
                  },
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-1.html",
                        ],
                        id: "89a13a7e1bed42a3aeac2779b40d0bd2",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-1-audio.html",
                        ],
                        id: "89a13a7e1bed42a3aeac2779b2h89bd2",
                      },
                    ],
                    id: "c85ef5562c824920add4d49bc07c0617",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-2.html",
                        ],
                        id: "da2933b5ba99459bad250d984564fb1e",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-2-audio.html",
                        ],
                        id: "6abb2122fb454f1a9527d35201b1a22e",
                      },
                    ],
                    id: "ed790f3616c04d93b02c6c6d251ed01f",
                  },
                ],
                id: "361a5e887e9b4f52897b9cef4dd16b57",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Titelseite",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/scifi-0-0.html",
                    ],
                    id: "0df85977428b45e0a969cba1eebdc98a",
                  },
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/scifi-1-1.html",
                    ],
                    id: "cb1d2cb743bb41b69e46c50f0fa7bb56",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/scifi-1-2.html",
                    ],
                    id: "240677228833411d8f8121a8cfb719e9",
                  },
                ],
                id: "488310f47deb4f3faff716a68096303a",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/mystery-1-1.html",
                    ],
                    id: "1e09df162698461a8a957bf3c97b12b7",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/mystery-1-2.html",
                    ],
                    id: "a0c61991ade34d9b90655b286dfb168c",
                  },
                ],
                id: "542419dd5dcf4adb8c54068aae006a7f",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/fantasy-1-1.html",
                    ],
                    id: "83d6388185c34766aa9e21bdaf0d9af1",
                  },
                ],
                id: "3a6edc640482439d89f55096adbc66da",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/comedy-1-1.html",
                    ],
                    id: "628f96eb3ffa49bcbf353279ddad2181",
                  },
                ],
                id: "447ac46e81ab4101b36489d3bc069d38",
              },
            ],
            id: "d29274b3d19f4cebb67657aad364a604",
          },
        ],
        id: "07bdd5936fa94f6d922ad5134471d072",
      },
      {
        container: "sc",
        title: "Eine harte Nuss",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    default: true,
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/generisch-2-1.html",
                    ],
                    id: "0e0d5c51a6db40a691619a3939e52c28",
                  },
                  {
                    container: "cm",
                    default: true,
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/generisch-2-2.html",
                    ],
                    id: "2a27a1992b6c4b909e3e6d4a9b020b30",
                  },
                ],
                id: "bd47676773cf4cdd8111828850f1d809",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-1.html",
                        ],
                        id: "e5dd31de126f41ff8a88b954f093855e",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2-audio.html",
                        ],
                        id: "ce2deac9d1774c848767c172cc789152",
                      },
                    ],
                    id: "10cac2ad43544081a1a5f9b00f8035b1",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2.html",
                        ],
                        id: "a2e3e12f9c7b4bc9be322073cbdaa878",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2-audio.html",
                        ],
                        id: "6aa4d51830e2447fb7aad80584d5d772",
                      },
                    ],
                    id: "89f5dc5298e24a4e9bd1e7c23fccf959",
                  },
                  {
                    container: "pc",
                    title: "Teil 3",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-3.html",
                        ],
                        id: "a2e3e12f9c7b4bc9be322073cbdaa989",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-3-audio.html",
                        ],
                        id: "c016332b5fc54dea8646ba512c2416ff",
                      },
                    ],
                    id: "d62fdff29e814111a58c9c771d99fae8",
                  },
                ],
                id: "ff03bb9d53bd484d94b0d9c8cfbb7a54",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/scifi-2-1.html",
                    ],
                    id: "b65f2dcbb5a54d4dac5ff52d85b30703",
                  },
                ],
                id: "77371f25ba114650aa5cde7f68500d47",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/mystery-2-1.html",
                    ],
                    id: "90f34629f5574f9f96d83061109c2e65",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/mystery-2-2.html",
                    ],
                    id: "a54d515cad2347ffb19d93e618c46f15",
                  },
                ],
                id: "dc355cd183fb4924978dc808e50f86bd",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/fantasy-2-1.html",
                    ],
                    id: "4330c16eed044cb0a5334006f033b471",
                  },
                ],
                id: "6c2a0a207edd40aebbd33545e7ee7b90",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/comedy-2-1.html",
                    ],
                    id: "74c3a2aa5d5b4ffe9be63d93cf4f202c",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/comedy-2-2.html",
                    ],
                    id: "783939c0134b478aa7e405ed4eb12f8a",
                  },
                ],
                id: "125e030b322c4b7fa13d6d14dec280db",
              },
            ],
            id: "a44e2361ff8d4b57854fd87ce0506d24",
          },
        ],
        id: "e217e037e08b4fb28be4b186746385cf",
      },
      {
        container: "sc",
        title: "Aber sicher!",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    default: true,
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/generisch-3-1.html",
                    ],
                    id: "b3b1cce134244e509249dd66eae00ff3",
                  },
                ],
                id: "e62c0a1e06ee45f1844273298bbc12d8",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-1.html",
                        ],
                        id: "9f67013f9e754953b02ef7673c2f6258",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-1-audio.html",
                        ],
                        id: "657a0c5a3f894978b4a104850d10852e",
                      },
                    ],
                    id: "6d70877760e14f8b90620d9651261d67",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-2.html",
                        ],
                        id: "54e6d97de8cb470da3b6686737b20833",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-2-audio.html",
                        ],
                        id: "527d484b1b1a4094adb1cd8b96926f60",
                      },
                    ],
                    id: "a62a3b2fd1ee437ebd7db775f1af13e7",
                  },
                ],
                id: "7902fd19b51b4442aa3aabc0b62a150d",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/scifi-3-1.html",
                    ],
                    id: "3cc6446b786249389471d0d1f171870e",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/scifi-3-2.html",
                    ],
                    id: "f3fd855a8fb541598ee59110018dbb4c",
                  },
                ],
                id: "6f331e95c66048c88c64220fb05c86e9",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/mystery-3-1.html",
                    ],
                    id: "71107097ea134133acaa4413684baaeb",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/mystery-3-2.html",
                    ],
                    id: "dce66c4dbd134c388cf7bd5a0a6a4456",
                  },
                ],
                id: "8965dcdcec0848eabeaf5cbc34c4f77b",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/fantasy-3-1.html",
                    ],
                    id: "9f8ad74931504537aa164c48a72715da",
                  },
                ],
                id: "9c3a02e5f91e4be78440b1d9010eb71f",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/comedy-3-1.html",
                    ],
                    id: "15eeb4d8b3f347a0ba7ae9a199838774",
                  },
                ],
                id: "3cde6baa087949ce809f465696374e4f",
              },
            ],
            id: "dd43645535704242a3d2f81eeedba478",
          },
        ],
        id: "570cbb98b3f64a688105e9383aedfdd8",
      },
      {
        container: "sc",
        title: "Alles im grünen Bereich",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    default: true,
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/generisch-4-1.html",
                    ],
                    id: "f5b225c7fbb146d6a18a2327e2ac29d1",
                  },
                ],
                id: "5a324a018d7b46a49458ffa148344740",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-1.html",
                        ],
                        id: "09246ff990f7453d95f684e739f349be",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-1-audio.html",
                        ],
                        id: "4b86894f210a4f819a656ac88967619b",
                      },
                    ],
                    id: "8bf7b64337704bc69e9f1e31ac7b7353",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-2.html",
                        ],
                        id: "68c66ba5787b4319b8ed6e45f28d1996",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-2-audio.html",
                        ],
                        id: "fe80ac08c1824bb89a0eb83e858f39f3",
                      },
                    ],
                    id: "99c8351adbb2408f8b076c4b30f44faa",
                  },
                  {
                    container: "pc",
                    title: "Teil 3",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-3.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5dde06e",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-3-audio.html",
                        ],
                        id: "4b88b2d4d5d0402f8b21169126ffaba6",
                      },
                    ],
                    id: "4a5b64497274493298df2707938b1fab",
                  },
                  {
                    container: "pc",
                    title: "Teil 4",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-4.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5dde17h",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-4-audio.html",
                        ],
                        id: "40fc5077fb564f408cfd5105f61cf598",
                      },
                    ],
                    id: "2d9553213bce4e5bb193c3161f3b2ff3",
                  },
                  {
                    container: "pc",
                    title: "Teil 5",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-5.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5ddg17ej",
                      },
                      {
                        container: "cm",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        title: "Audio",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-5-audio.html",
                        ],
                        id: "62c2e3f15c4e4d2d9d46c03e4398ff63",
                      },
                    ],
                    id: "f8dc554a17854178ac94e1a471c549b5",
                  },
                ],
                id: "e1535fa2348f401eaa7701408f78a1a5",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/scifi-4-1.html",
                    ],
                    id: "de5a6872416e46ebb12e436cb8652096",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/scifi-4-2.html",
                    ],
                    id: "1417c8689da5481c909447e2de56da76",
                  },
                ],
                id: "24463981b1b942c787655117be52a5f4",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/mystery-4-1.html",
                    ],
                    id: "b3b3a11f5b324f10821dedb3dff6e8ad",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/mystery-4-2.html",
                    ],
                    id: "b2e4eb721b634a63a7592441363f3bb0",
                  },
                  {
                    container: "cm",
                    title: "Teil 3",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/mystery-4-3.html",
                    ],
                    id: "d9099f8f97ad4e14a2d072e385d4010a",
                  },
                ],
                id: "daa9acd3ad8e481186bd0632f7cefdae",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/fantasy-4-1.html",
                    ],
                    id: "1a2c3ca5ec5d49d9a50938c6a5914360",
                  },
                ],
                id: "0197b14a2b0649318c17d0a9211de4e8",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/comedy-4-1.html",
                    ],
                    id: "a704d97b8b28487b9d21e099fc8380cf",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/comedy-4-2.html",
                    ],
                    id: "c265ba8bacf54b5cbc334c7e9e570ad5",
                  },
                  {
                    container: "cm",
                    title: "Teil 3",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/comedy-4-3.html",
                    ],
                    id: "65547b059b684d93a013b69e2e8c7dea",
                  },
                ],
                id: "a14e918190544f50a1c4f0e95a1669a2",
              },
            ],
            id: "e6b51e6a8d7e4d019753c61c68b58c79",
          },
        ],
        id: "68dbd59b9e0e436b8377c1cf39256b03",
      },
      {
        container: "sc",
        title: "Hintergrundinformation",
        inner: [
          {
            container: "cm",
            title: "Wie werden Passwörter “geknackt”?",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/passw-geknakt.html",
            ],
            id: "23c486ef98a049bd93f793cef765fba2",
          },
          {
            container: "cm",
            title: "Modernes “guessing”",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/guessing.html",
            ],
            id: "4d3c187b1b0a4ec19d87540fcdd26d5c",
          },
          {
            container: "cm",
            title: "Die eigentlichen Gefahren",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/gefahren.html",
            ],
            id: "c51b06893e10495588c55112fb2a7cf6",
          },
          {
            container: "cm",
            title: "Was macht ein sicheres Passwort aus?",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/sicheres-password.html",
            ],
            id: "4b3343503f6f467eae06f81a08623e00",
          },
          {
            container: "pc",
            title: "Passwort generieren",
            inner: [
              {
                container: "cm",
                title: "Für Passwörter",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/passwoerter.html",
                ],
                id: "c2aae37ff0734f91aa4204c850b433e3",
              },
              {
                container: "cm",
                title: "Für Passphrasen",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/passphrasen.html",
                ],
                id: "7d5d9d429f9e461792d722e11fbca73f",
              },
            ],
            id: "5743fe2236554418b0607649ff809756",
          },
          {
            container: "sc",
            title: "Ausblick",
            inner: [
              {
                container: "cm",
                title: "Passwort-Manager",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/password-manager.html",
                ],
                id: "2ea343a0d95c443aaafd2caa8bbf99ed",
              },
              {
                container: "cm",
                title: "Digital",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/digital.html",
                ],
                id: "0a71eabea8364118852504144a7d14b4",
              },
              {
                container: "cm",
                title: "Papier",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/papier.html",
                ],
                id: "a07298f4eda5459a9f3817d4925614d4",
              },
              {
                container: "cm",
                title: "Quantencomputing",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/quantencomputing.html",
                ],
                id: "388786b4c98040ae802b4dcb87e6771e",
              },
              {
                container: "cm",
                title: "Guessing",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/guessing-1.html",
                ],
                id: "36e5b4bfd6704715b64a0fcf8db56856",
              },
              {
                container: "cm",
                title: "Cracking",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/cracking.html",
                ],
                id: "e8f16e6b73684819afed3b25fa5e66ac",
              },
            ],
            id: "3560bf815cdd4bd380407a926e6d92a2",
          },
        ],
        id: "33e4ac7f5cff49f4878fdfefa78cb171",
      },
      {
        container: "cm",
        title: "Quiz",
        icon: "resources/novels/img/pencil-square.svg",
        inner: [
          "ccm.instance",
          "https://ccmjs.github.io/akless-components/quiz/ccm.quiz.min.js",
          [
            "ccm.get",
            {
              name: "dms2-configs",
              url: "https://ccm2.inf.h-brs.de",
            },
            ["quiz", "1709117704735X9552784208175142"],
          ],
        ],
        id: "39ef27a943864a5d8a0fc5406e30fc7b",
      },
      {
        container: "cm",
        title: "Lückentext",
        icon: "resources/novels/img/pencil-square.svg",
        inner: [
          "ccm.instance",
          "https://ccmjs.github.io/akless-components/cloze/ccm.cloze.min.js",
          [
            "ccm.get",
            {
              name: "dms2-configs",
              url: "https://ccm2.inf.h-brs.de",
            },
            ["cloze", "1709119577904X7602929795690954"],
          ],
        ],
        id: "39ef27a943864a5d8a0fc5406e30gh7v",
      },
    ],
    id: "d1b8485032f84b83b51017d487baff73",
  },
  /*logger: [
    "ccm.instance",
    "https://ccmjs.github.io/akless-components/log/versions/ccm.log-5.0.1.min.js",
    {
      mask: {
        browser: true,
        data: true,
        event: true,
        parent: false,
        referrer: false,
        root: false,
        session: true,
        user: false,
        website: false,
      },
      onfinish: {
        log: true,
        store: {
          settings: {
            name: "hymn_v6",
            url: "https://ccm2.inf.h-brs.de",
          },
          permissions: {
            creator: "tkless2m",
            realm: "hbrsinfkaul",
            access: "creator",
          },
        },
      },
    },
  ],
  onchange: (event) => event.app.logger.log(event),*/
};

export const passwortsicherheit_krimi_en = {
  key: "passwortsicherheit_krimi_en",
  lang_flag: "gbr",
  /*filter: [
    { title: "Audio", selected: false, visible: true },
    { title: "Video", selected: false, visible: false },
    { title: "Text", selected: true, visible: true },
  ],*/
  selected_path: "Crime",
  pathList: [
    {
      name: "Crime",
      title: "The Stick of Death",
      content: [
        "f382bc819f6048919f54f6d4809afefe",
        "0df85977428b45e0a969cba1eebdc08a",
        "89a13a7e1bed42a3aeac2779b40d0bd2",
        "da2933b5ba99459bad250d984564fb1e",
        "e5dd31de126f41ff8a88b954f093855e",
        "a2e3e12f9c7b4bc9be322073cbdaa878",
        "a2e3e12f9c7b4bc9be322073cbdaa989",
        "9f67013f9e754953b02ef7673c2f6258",
        "54e6d97de8cb470da3b6686737b20833",
        "09458ff990f7453d95f684e739f349be",
        "09246ff990f7453d95f684e739f349be",
        "68c66ba5787b4319b8ed6e45f28d1996",
        "bf5163f9087f4c6bb5a41b3ac5dde06e",
        "bf5163f9087f4c6bb5a41b3ac5dde17h",
      ],
    },
  ],
  data: {
    container: "sc",
    title: "A crime story on the topic of password security.",
    cover_img: "resources/novels/passwortsicherheit/kap1/media/krimi.png",
    description: "Create and manage strong passwords.",
    inner: [
      {
        container: "sc",
        title: "Introduction",
        inner: [
          {
            default: true,
            container: "cm",
            title: "Title",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/einfuerung/titel-en.html",
            ],
            id: "f382bc819f6048919f54f6d4809afefe",
          },
        ],
        id: "3500910d1e19487c96d2ccdcda7b785e",
      },
      {
        container: "sc",
        title: "Just What Was It?",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Crime",
                inner: [
                  {
                    container: "cm",
                    title: "Front Page",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/krimi-0-0-en.html",
                    ],
                    id: "0df85977428b45e0a969cba1eebdc08a",
                  },
                  {
                    container: "pc",
                    title: "A Corpse in the Morning Spoils Your Day",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-1-en.html",
                        ],
                        id: "89a13a7e1bed42a3aeac2779b40d0bd2",
                      },
                    ],
                    id: "c85ef5562c824920add4d49bc07c0617",
                  },
                  {
                    container: "pc",
                    title: "Grandma is the Best",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-2-en.html",
                        ],
                        id: "da2933b5ba99459bad250d984564fb1e",
                      },
                    ],
                    id: "ed790f3616c04d93b02c6c6d251ed01f",
                  },
                ],
                id: "361a5e887e9b4f52897b9cef4dd16b57",
              },
            ],
            id: "d29274b3d19f4cebb67657aad364a604",
          },
        ],
        id: "07bdd5936fa94f6d922ad5134471d072",
      },
      {
        container: "sc",
        title: "A Hard Nut to Crack",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Crime",
                inner: [
                  {
                    container: "pc",
                    title: "CCC’s Suiting Me",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-1-en.html",
                        ],
                        id: "e5dd31de126f41ff8a88b954f093855e",
                      },
                    ],
                    id: "10cac2ad43544081a1a5f9b00f8035b1",
                  },
                  {
                    container: "pc",
                    title: "How to Crack a Password",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2-en.html",
                        ],
                        id: "a2e3e12f9c7b4bc9be322073cbdaa878",
                      },
                    ],
                    id: "89f5dc5298e24a4e9bd1e7c23fccf959",
                  },
                  {
                    container: "pc",
                    title: "Slime Molding a Solution",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-3-en.html",
                        ],
                        id: "a2e3e12f9c7b4bc9be322073cbdaa989",
                      },
                    ],
                    id: "d62fdff29e814111a58c9c771d99fae8",
                  },
                ],
                id: "ff03bb9d53bd484d94b0d9c8cfbb7a54",
              },
            ],
            id: "a44e2361ff8d4b57854fd87ce0506d24",
          },
        ],
        id: "e217e037e08b4fb28be4b186746385cf",
      },
      {
        container: "sc",
        title: "Safe and Secure!",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Crime",
                inner: [
                  {
                    container: "pc",
                    title: "Sensitive Data",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-1-en.html",
                        ],
                        id: "9f67013f9e754953b02ef7673c2f6258",
                      },
                    ],
                    id: "6d70877760e14f8b90620d9651261d67",
                  },
                  {
                    container: "pc",
                    title: "The Trick with the Stick",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-2-en.html",
                        ],
                        id: "54e6d97de8cb470da3b6686737b20833",
                      },
                    ],
                    id: "a62a3b2fd1ee437ebd7db775f1af13e7",
                  },
                  {
                    container: "pc",
                    title: "Data Loss",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-3-en.html",
                        ],
                        id: "09458ff990f7453d95f684e739f349be",
                      },
                    ],
                    id: "8bf7b64337704bc69e9f1e31ac7b7353",
                  },
                ],
                id: "7902fd19b51b4442aa3aabc0b62a150d",
              },
            ],
            id: "dd43645535704242a3d2f81eeedba478",
          },
        ],
        id: "570cbb98b3f64a688105e9383aedfdd8",
      },
      {
        container: "sc",
        title: "Everything's Fine",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Crime",
                inner: [
                  {
                    container: "pc",
                    title: "Embarrassing Interrogation",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-1-en.html",
                        ],
                        id: "09246ff990f7453d95f684e739f349be",
                      },
                    ],
                    id: "8bf7b64337704bc69e9f1e31ac7b7353",
                  },
                  {
                    container: "pc",
                    title: "Site Visit",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-2-en.html",
                        ],
                        id: "68c66ba5787b4319b8ed6e45f28d1996",
                      },
                    ],
                    id: "99c8351adbb2408f8b076c4b30f44faa",
                  },
                  {
                    container: "pc",
                    title: "Whodunit?",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-3-en.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5dde06e",
                      },
                    ],
                    id: "4a5b64497274493298df2707938b1fab",
                  },
                  {
                    container: "pc",
                    title: "XY... Solved!",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-4-en.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5dde17h",
                      },
                    ],
                    id: "2d9553213bce4e5bb193c3161f3b2ff3",
                  },
                ],
                id: "e1535fa2348f401eaa7701408f78a1a5",
              },
            ],
            id: "e6b51e6a8d7e4d019753c61c68b58c79",
          },
        ],
        id: "68dbd59b9e0e436b8377c1cf39256b03",
      },
    ],
    id: "d1b8485032f84b83b51017d487baff73",
  },
  /*logger: [
    "ccm.instance",
    "https://ccmjs.github.io/akless-components/log/versions/ccm.log-5.0.1.min.js",
    {
      mask: {
        browser: true,
        data: true,
        event: true,
        parent: false,
        referrer: false,
        root: false,
        session: true,
        user: false,
        website: false,
      },
      onfinish: {
        log: true,
        store: {
          settings: {
            name: "hymn_v6",
            url: "https://ccm2.inf.h-brs.de",
          },
          permissions: {
            creator: "tkless2m",
            realm: "hbrsinfkaul",
            access: "creator",
          },
        },
      },
    },
  ],
  onchange: (event) => event.app.logger.log(event),*/
};

export const passwortsicherheit_scifi = {
  key: "passwortsicherheit_scifi",
  lang_flag: "deu",
  /*filter: [
    { title: "Audio", selected: false, visible: true },
    { title: "Video", selected: false, visible: false },
    { title: "Text", selected: true, visible: true },
  ],*/
  selected_path: "Science-Fiction",
  pathList: [
    {
      name: "Science-Fiction",
      content: [
        "f382bc819f6048919f54f6d4809afefe",
        "0df85977428b45e0a969cba1eebdc98a",
        "cb1d2cb743bb41b69e46c50f0fa7bb56",
        "240677228833411d8f8121a8cfb719e9",
        "b65f2dcbb5a54d4dac5ff52d85b30703",
        "3cc6446b786249389471d0d1f171870e",
        "f3fd855a8fb541598ee59110018dbb4c",
        "de5a6872416e46ebb12e436cb8652096",
        "1417c8689da5481c909447e2de56da76",
      ],
    },
  ],
  data: {
    container: "sc",
    title: "Eine Science-Fiction Geschichte zum Thema - Passwortsicherheit.",
    cover_img: "resources/novels/passwortsicherheit/kap1/media/scifi.png",
    description: "Erstellen und Verwalten von sicheren Passwörtern.",
    inner: [
      {
        container: "sc",
        title: "Einführung",
        inner: [
          {
            default: true,
            container: "cm",
            title: "Titel",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/einfuerung/titel.html",
            ],
            id: "f382bc819f6048919f54f6d4809afefe",
          },
          {
            container: "cm",
            title: "Über Story",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/einfuerung/ueber.html",
            ],
            id: "edad922f3547436196275328a73f0817",
          },
        ],
        id: "3500910d1e19487c96d2ccdcda7b785e",
      },
      {
        container: "sc",
        title: "Wie war das noch gleich?",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    default: true,
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/generisch-1-1.html",
                    ],
                    id: "dc9876bfcb9740e48384e77d0da8ee4c",
                  },
                ],
                id: "5c55a39f4dbb4f33b598a3b1909cd37d",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "cm",
                    title: "Titelseite",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/krimi-0-0.html",
                    ],
                    id: "0df85977428b45e0a969cba1eebdc08a",
                  },
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-1.html",
                        ],
                        id: "89a13a7e1bed42a3aeac2779b40d0bd2",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-1-audio.html",
                        ],
                        id: "89a13a7e1bed42a3aeac2779b2h89bd2",
                      },
                    ],
                    id: "c85ef5562c824920add4d49bc07c0617",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-2.html",
                        ],
                        id: "da2933b5ba99459bad250d984564fb1e",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap1/krimi-1-2-audio.html",
                        ],
                        id: "6abb2122fb454f1a9527d35201b1a22e",
                      },
                    ],
                    id: "ed790f3616c04d93b02c6c6d251ed01f",
                  },
                ],
                id: "361a5e887e9b4f52897b9cef4dd16b57",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Titelseite",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/scifi-0-0.html",
                    ],
                    id: "0df85977428b45e0a969cba1eebdc98a",
                  },
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/scifi-1-1.html",
                    ],
                    id: "cb1d2cb743bb41b69e46c50f0fa7bb56",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/scifi-1-2.html",
                    ],
                    id: "240677228833411d8f8121a8cfb719e9",
                  },
                ],
                id: "488310f47deb4f3faff716a68096303a",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/mystery-1-1.html",
                    ],
                    id: "1e09df162698461a8a957bf3c97b12b7",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/mystery-1-2.html",
                    ],
                    id: "a0c61991ade34d9b90655b286dfb168c",
                  },
                ],
                id: "542419dd5dcf4adb8c54068aae006a7f",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/fantasy-1-1.html",
                    ],
                    id: "83d6388185c34766aa9e21bdaf0d9af1",
                  },
                ],
                id: "3a6edc640482439d89f55096adbc66da",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap1/comedy-1-1.html",
                    ],
                    id: "628f96eb3ffa49bcbf353279ddad2181",
                  },
                ],
                id: "447ac46e81ab4101b36489d3bc069d38",
              },
            ],
            id: "d29274b3d19f4cebb67657aad364a604",
          },
        ],
        id: "07bdd5936fa94f6d922ad5134471d072",
      },
      {
        container: "sc",
        title: "Eine harte Nuss",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    default: true,
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/generisch-2-1.html",
                    ],
                    id: "0e0d5c51a6db40a691619a3939e52c28",
                  },
                  {
                    container: "cm",
                    default: true,
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/generisch-2-2.html",
                    ],
                    id: "2a27a1992b6c4b909e3e6d4a9b020b30",
                  },
                ],
                id: "bd47676773cf4cdd8111828850f1d809",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-1.html",
                        ],
                        id: "e5dd31de126f41ff8a88b954f093855e",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2-audio.html",
                        ],
                        id: "ce2deac9d1774c848767c172cc789152",
                      },
                    ],
                    id: "10cac2ad43544081a1a5f9b00f8035b1",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2.html",
                        ],
                        id: "a2e3e12f9c7b4bc9be322073cbdaa878",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-2-audio.html",
                        ],
                        id: "6aa4d51830e2447fb7aad80584d5d772",
                      },
                    ],
                    id: "89f5dc5298e24a4e9bd1e7c23fccf959",
                  },
                  {
                    container: "pc",
                    title: "Teil 3",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-3.html",
                        ],
                        id: "a2e3e12f9c7b4bc9be322073cbdaa989",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap2/krimi-2-3-audio.html",
                        ],
                        id: "c016332b5fc54dea8646ba512c2416ff",
                      },
                    ],
                    id: "d62fdff29e814111a58c9c771d99fae8",
                  },
                ],
                id: "ff03bb9d53bd484d94b0d9c8cfbb7a54",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/scifi-2-1.html",
                    ],
                    id: "b65f2dcbb5a54d4dac5ff52d85b30703",
                  },
                ],
                id: "77371f25ba114650aa5cde7f68500d47",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/mystery-2-1.html",
                    ],
                    id: "90f34629f5574f9f96d83061109c2e65",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/mystery-2-2.html",
                    ],
                    id: "a54d515cad2347ffb19d93e618c46f15",
                  },
                ],
                id: "dc355cd183fb4924978dc808e50f86bd",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/fantasy-2-1.html",
                    ],
                    id: "4330c16eed044cb0a5334006f033b471",
                  },
                ],
                id: "6c2a0a207edd40aebbd33545e7ee7b90",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/comedy-2-1.html",
                    ],
                    id: "74c3a2aa5d5b4ffe9be63d93cf4f202c",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap2/comedy-2-2.html",
                    ],
                    id: "783939c0134b478aa7e405ed4eb12f8a",
                  },
                ],
                id: "125e030b322c4b7fa13d6d14dec280db",
              },
            ],
            id: "a44e2361ff8d4b57854fd87ce0506d24",
          },
        ],
        id: "e217e037e08b4fb28be4b186746385cf",
      },
      {
        container: "sc",
        title: "Aber sicher!",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    default: true,
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/generisch-3-1.html",
                    ],
                    id: "b3b1cce134244e509249dd66eae00ff3",
                  },
                ],
                id: "e62c0a1e06ee45f1844273298bbc12d8",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-1.html",
                        ],
                        id: "9f67013f9e754953b02ef7673c2f6258",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-1-audio.html",
                        ],
                        id: "657a0c5a3f894978b4a104850d10852e",
                      },
                    ],
                    id: "6d70877760e14f8b90620d9651261d67",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-2.html",
                        ],
                        id: "54e6d97de8cb470da3b6686737b20833",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap3/krimi-3-2-audio.html",
                        ],
                        id: "527d484b1b1a4094adb1cd8b96926f60",
                      },
                    ],
                    id: "a62a3b2fd1ee437ebd7db775f1af13e7",
                  },
                ],
                id: "7902fd19b51b4442aa3aabc0b62a150d",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/scifi-3-1.html",
                    ],
                    id: "3cc6446b786249389471d0d1f171870e",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/scifi-3-2.html",
                    ],
                    id: "f3fd855a8fb541598ee59110018dbb4c",
                  },
                ],
                id: "6f331e95c66048c88c64220fb05c86e9",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/mystery-3-1.html",
                    ],
                    id: "71107097ea134133acaa4413684baaeb",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/mystery-3-2.html",
                    ],
                    id: "dce66c4dbd134c388cf7bd5a0a6a4456",
                  },
                ],
                id: "8965dcdcec0848eabeaf5cbc34c4f77b",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/fantasy-3-1.html",
                    ],
                    id: "9f8ad74931504537aa164c48a72715da",
                  },
                ],
                id: "9c3a02e5f91e4be78440b1d9010eb71f",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap3/comedy-3-1.html",
                    ],
                    id: "15eeb4d8b3f347a0ba7ae9a199838774",
                  },
                ],
                id: "3cde6baa087949ce809f465696374e4f",
              },
            ],
            id: "dd43645535704242a3d2f81eeedba478",
          },
        ],
        id: "570cbb98b3f64a688105e9383aedfdd8",
      },
      {
        container: "sc",
        title: "Alles im grünen Bereich",
        inner: [
          {
            container: "pc",
            title: "Genre",
            inner: [
              {
                container: "sc",
                title: "Generisch",
                inner: [
                  {
                    container: "cm",
                    default: true,
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/generisch-4-1.html",
                    ],
                    id: "f5b225c7fbb146d6a18a2327e2ac29d1",
                  },
                ],
                id: "5a324a018d7b46a49458ffa148344740",
              },
              {
                container: "sc",
                title: "Krimi",
                inner: [
                  {
                    container: "pc",
                    title: "Teil 1",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-1.html",
                        ],
                        id: "09246ff990f7453d95f684e739f349be",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-1-audio.html",
                        ],
                        id: "4b86894f210a4f819a656ac88967619b",
                      },
                    ],
                    id: "8bf7b64337704bc69e9f1e31ac7b7353",
                  },
                  {
                    container: "pc",
                    title: "Teil 2",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-2.html",
                        ],
                        id: "68c66ba5787b4319b8ed6e45f28d1996",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-2-audio.html",
                        ],
                        id: "fe80ac08c1824bb89a0eb83e858f39f3",
                      },
                    ],
                    id: "99c8351adbb2408f8b076c4b30f44faa",
                  },
                  {
                    container: "pc",
                    title: "Teil 3",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-3.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5dde06e",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-3-audio.html",
                        ],
                        id: "4b88b2d4d5d0402f8b21169126ffaba6",
                      },
                    ],
                    id: "4a5b64497274493298df2707938b1fab",
                  },
                  {
                    container: "pc",
                    title: "Teil 4",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-4.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5dde17h",
                      },
                      {
                        container: "cm",
                        title: "Audio",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-4-audio.html",
                        ],
                        id: "40fc5077fb564f408cfd5105f61cf598",
                      },
                    ],
                    id: "2d9553213bce4e5bb193c3161f3b2ff3",
                  },
                  {
                    container: "pc",
                    title: "Teil 5",
                    inner: [
                      {
                        container: "cm",
                        title: "Text",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-5.html",
                        ],
                        id: "bf5163f9087f4c6bb5a41b3ac5ddg17ej",
                      },
                      {
                        container: "cm",
                        icon: "resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                        title: "Audio",
                        inner: [
                          "ccm.load",
                          "resources/novels/passwortsicherheit/kap4/krimi-4-5-audio.html",
                        ],
                        id: "62c2e3f15c4e4d2d9d46c03e4398ff63",
                      },
                    ],
                    id: "f8dc554a17854178ac94e1a471c549b5",
                  },
                ],
                id: "e1535fa2348f401eaa7701408f78a1a5",
              },
              {
                container: "sc",
                title: "SciFi",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/scifi-4-1.html",
                    ],
                    id: "de5a6872416e46ebb12e436cb8652096",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/scifi-4-2.html",
                    ],
                    id: "1417c8689da5481c909447e2de56da76",
                  },
                ],
                id: "24463981b1b942c787655117be52a5f4",
              },
              {
                container: "sc",
                title: "Mystrey",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/mystery-4-1.html",
                    ],
                    id: "b3b3a11f5b324f10821dedb3dff6e8ad",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/mystery-4-2.html",
                    ],
                    id: "b2e4eb721b634a63a7592441363f3bb0",
                  },
                  {
                    container: "cm",
                    title: "Teil 3",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/mystery-4-3.html",
                    ],
                    id: "d9099f8f97ad4e14a2d072e385d4010a",
                  },
                ],
                id: "daa9acd3ad8e481186bd0632f7cefdae",
              },
              {
                container: "sc",
                title: "Fantasy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/fantasy-4-1.html",
                    ],
                    id: "1a2c3ca5ec5d49d9a50938c6a5914360",
                  },
                ],
                id: "0197b14a2b0649318c17d0a9211de4e8",
              },
              {
                container: "sc",
                title: "Comedy",
                inner: [
                  {
                    container: "cm",
                    title: "Teil 1",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/comedy-4-1.html",
                    ],
                    id: "a704d97b8b28487b9d21e099fc8380cf",
                  },
                  {
                    container: "cm",
                    title: "Teil 2",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/comedy-4-2.html",
                    ],
                    id: "c265ba8bacf54b5cbc334c7e9e570ad5",
                  },
                  {
                    container: "cm",
                    title: "Teil 3",
                    inner: [
                      "ccm.load",
                      "resources/novels/passwortsicherheit/kap4/comedy-4-3.html",
                    ],
                    id: "65547b059b684d93a013b69e2e8c7dea",
                  },
                ],
                id: "a14e918190544f50a1c4f0e95a1669a2",
              },
            ],
            id: "e6b51e6a8d7e4d019753c61c68b58c79",
          },
        ],
        id: "68dbd59b9e0e436b8377c1cf39256b03",
      },
      {
        container: "sc",
        title: "Hintergrundinformation",
        inner: [
          {
            container: "cm",
            title: "Wie werden Passwörter “geknackt”?",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/passw-geknakt.html",
            ],
            id: "23c486ef98a049bd93f793cef765fba2",
          },
          {
            container: "cm",
            title: "Modernes “guessing”",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/guessing.html",
            ],
            id: "4d3c187b1b0a4ec19d87540fcdd26d5c",
          },
          {
            container: "cm",
            title: "Die eigentlichen Gefahren",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/gefahren.html",
            ],
            id: "c51b06893e10495588c55112fb2a7cf6",
          },
          {
            container: "cm",
            title: "Was macht ein sicheres Passwort aus?",
            inner: [
              "ccm.load",
              "resources/novels/passwortsicherheit/hintergrund_info/sicheres-password.html",
            ],
            id: "4b3343503f6f467eae06f81a08623e00",
          },
          {
            container: "pc",
            title: "Passwort generieren",
            inner: [
              {
                container: "cm",
                title: "Für Passwörter",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/passwoerter.html",
                ],
                id: "c2aae37ff0734f91aa4204c850b433e3",
              },
              {
                container: "cm",
                title: "Für Passphrasen",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/passphrasen.html",
                ],
                id: "7d5d9d429f9e461792d722e11fbca73f",
              },
            ],
            id: "5743fe2236554418b0607649ff809756",
          },
          {
            container: "sc",
            title: "Ausblick",
            inner: [
              {
                container: "cm",
                title: "Passwort-Manager",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/password-manager.html",
                ],
                id: "2ea343a0d95c443aaafd2caa8bbf99ed",
              },
              {
                container: "cm",
                title: "Digital",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/digital.html",
                ],
                id: "0a71eabea8364118852504144a7d14b4",
              },
              {
                container: "cm",
                title: "Papier",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/papier.html",
                ],
                id: "a07298f4eda5459a9f3817d4925614d4",
              },
              {
                container: "cm",
                title: "Quantencomputing",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/quantencomputing.html",
                ],
                id: "388786b4c98040ae802b4dcb87e6771e",
              },
              {
                container: "cm",
                title: "Guessing",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/guessing-1.html",
                ],
                id: "36e5b4bfd6704715b64a0fcf8db56856",
              },
              {
                container: "cm",
                title: "Cracking",
                inner: [
                  "ccm.load",
                  "resources/novels/passwortsicherheit/hintergrund_info/cracking.html",
                ],
                id: "e8f16e6b73684819afed3b25fa5e66ac",
              },
            ],
            id: "3560bf815cdd4bd380407a926e6d92a2",
          },
        ],
        id: "33e4ac7f5cff49f4878fdfefa78cb171",
      },
      {
        container: "cm",
        title: "Quiz",
        icon: "resources/novels/img/pencil-square.svg",
        inner: [
          "ccm.instance",
          "https://ccmjs.github.io/akless-components/quiz/ccm.quiz.min.js",
          [
            "ccm.get",
            {
              name: "dms2-configs",
              url: "https://ccm2.inf.h-brs.de",
            },
            ["quiz", "1709117704735X9552784208175142"],
          ],
        ],
        id: "39ef27a943864a5d8a0fc5406e30fc7b",
      },
      {
        container: "cm",
        title: "Lückentext",
        icon: "resources/novels/img/pencil-square.svg",
        inner: [
          "ccm.instance",
          "https://ccmjs.github.io/akless-components/cloze/ccm.cloze.min.js",
          [
            "ccm.get",
            {
              name: "dms2-configs",
              url: "https://ccm2.inf.h-brs.de",
            },
            ["cloze", "1709119577904X7602929795690954"],
          ],
        ],
        id: "39ef27a943864a5d8a0fc5406e30gh7v",
      },
    ],
    id: "d1b8485032f84b83b51017d487baff73",
  },
  /*logger: [
    "ccm.instance",
    "https://ccmjs.github.io/akless-components/log/versions/ccm.log-5.0.1.min.js",
    {
      mask: {
        browser: true,
        data: true,
        event: true,
        parent: false,
        referrer: false,
        root: false,
        session: true,
        user: false,
        website: false,
      },
      onfinish: {
        log: true,
        store: {
          settings: {
            name: "hymn_v6",
            url: "https://ccm2.inf.h-brs.de",
          },
          permissions: {
            creator: "tkless2m",
            realm: "hbrsinfkaul",
            access: "creator",
          },
        },
      },
    },
  ],
  onchange: (event) => event.app.logger.log(event),*/
};
