/**
 * @overview ccmjs-based web component for hymn
 * @author Tea Kless <tea.kless@web.de> 2024
 */

(() => {
  const component = {
    name: "hymn",
    ccm: "https://kaul.inf.h-brs.de/hymn/hymn/libs/ccm-27.5.0.min.js",
    config: {
      html: [
        "ccm.load",
        {
          url: "https://kaul.inf.h-brs.de/hymn/hymn/lea_hymn/hymn/resources/hymn_templates.js",
          type: "module",
        },
      ],
      key: "passwortsicherheit",
      lang_flag: "deu",
      filter: [
        { title: "Audio", selected: false, visible: true },
        { title: "Text", selected: true, visible: true },
      ],
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
        cover_img:
          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/cover.png",
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
                  "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/einfuerung/titel.html",
                ],
                id: "f382bc819f6048919f54f6d4809afefe",
              },
              {
                container: "cm",
                title: "Über Story",
                inner: [
                  "ccm.load",
                  "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/einfuerung/ueber.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/generisch-1-1.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/krimi-0-0.html",
                        ],
                        id: "0df85977428b45e0a969cba1eebdc08a",
                      },
                      {
                        container: "pc",
                        title: "Teil 1",
                        inner: [
                          {
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/krimi-1-1.html",
                            ],
                            id: "89a13a7e1bed42a3aeac2779b40d0bd2",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/krimi-1-1-audio.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/krimi-1-2.html",
                            ],
                            id: "da2933b5ba99459bad250d984564fb1e",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/krimi-1-2-audio.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/scifi-0-0.html",
                        ],
                        id: "0df85977428b45e0a969cba1eebdc98a",
                      },
                      {
                        container: "cm",
                        title: "Teil 1",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/scifi-1-1.html",
                        ],
                        id: "cb1d2cb743bb41b69e46c50f0fa7bb56",
                      },
                      {
                        container: "cm",
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/scifi-1-2.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/mystery-1-1.html",
                        ],
                        id: "1e09df162698461a8a957bf3c97b12b7",
                      },
                      {
                        container: "cm",
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/mystery-1-2.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/fantasy-1-1.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap1/comedy-1-1.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/generisch-2-1.html",
                        ],
                        id: "0e0d5c51a6db40a691619a3939e52c28",
                      },
                      {
                        container: "cm",
                        default: true,
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/generisch-2-2.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/krimi-2-1.html",
                            ],
                            id: "e5dd31de126f41ff8a88b954f093855e",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/krimi-2-2-audio.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/krimi-2-2.html",
                            ],
                            id: "a2e3e12f9c7b4bc9be322073cbdaa878",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/krimi-2-2-audio.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/krimi-2-3.html",
                            ],
                            id: "a2e3e12f9c7b4bc9be322073cbdaa989",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/krimi-2-3-audio.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/scifi-2-1.html",
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
                          "hhttps://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/mystery-2-1.html",
                        ],
                        id: "90f34629f5574f9f96d83061109c2e65",
                      },
                      {
                        container: "cm",
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/mystery-2-2.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/fantasy-2-1.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/comedy-2-1.html",
                        ],
                        id: "74c3a2aa5d5b4ffe9be63d93cf4f202c",
                      },
                      {
                        container: "cm",
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "hhttps://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap2/comedy-2-2.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/generisch-3-1.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/krimi-3-1.html",
                            ],
                            id: "9f67013f9e754953b02ef7673c2f6258",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "hhttps://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/krimi-3-1-audio.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/krimi-3-2.html",
                            ],
                            id: "54e6d97de8cb470da3b6686737b20833",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/krimi-3-2-audio.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/scifi-3-1.html",
                        ],
                        id: "3cc6446b786249389471d0d1f171870e",
                      },
                      {
                        container: "cm",
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/scifi-3-2.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/mystery-3-1.html",
                        ],
                        id: "71107097ea134133acaa4413684baaeb",
                      },
                      {
                        container: "cm",
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/mystery-3-2.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/fantasy-3-1.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap3/comedy-3-1.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/generisch-4-1.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-1.html",
                            ],
                            id: "09246ff990f7453d95f684e739f349be",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-1-audio.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-2.html",
                            ],
                            id: "68c66ba5787b4319b8ed6e45f28d1996",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-2-audio.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-3.html",
                            ],
                            id: "bf5163f9087f4c6bb5a41b3ac5dde06e",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-3-audio.html",
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
                            filter: ["Text"],
                            container: "cm",
                            title: "Text",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-4.html",
                            ],
                            id: "bf5163f9087f4c6bb5a41b3ac5dde17h",
                          },
                          {
                            filter: ["Audio"],
                            container: "cm",
                            title: "Audio",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            inner: [
                              "ccm.load",
                              "https://hymn.inf.h-brs.de/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-4-audio.html",
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
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-text.svg",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-5.html",
                            ],
                            id: "bf5163f9087f4c6bb5a41b3ac5ddg17ej",
                          },
                          {
                            container: "cm",
                            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/media/file-earmark-music.svg",
                            title: "Audio",
                            inner: [
                              "ccm.load",
                              "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/krimi-4-5-audio.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/scifi-4-1.html",
                        ],
                        id: "de5a6872416e46ebb12e436cb8652096",
                      },
                      {
                        container: "cm",
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/scifi-4-2.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/mystery-4-1.html",
                        ],
                        id: "b3b3a11f5b324f10821dedb3dff6e8ad",
                      },
                      {
                        container: "cm",
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/mystery-4-2.html",
                        ],
                        id: "b2e4eb721b634a63a7592441363f3bb0",
                      },
                      {
                        container: "cm",
                        title: "Teil 3",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/mystery-4-3.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/fantasy-4-1.html",
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
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/comedy-4-1.html",
                        ],
                        id: "a704d97b8b28487b9d21e099fc8380cf",
                      },
                      {
                        container: "cm",
                        title: "Teil 2",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/comedy-4-2.html",
                        ],
                        id: "c265ba8bacf54b5cbc334c7e9e570ad5",
                      },
                      {
                        container: "cm",
                        title: "Teil 3",
                        inner: [
                          "ccm.load",
                          "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/kap4/comedy-4-3.html",
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
                  "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/passw-geknakt.html",
                ],
                id: "23c486ef98a049bd93f793cef765fba2",
              },
              {
                container: "cm",
                title: "Modernes “guessing”",
                inner: [
                  "ccm.load",
                  "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/guessing.html",
                ],
                id: "4d3c187b1b0a4ec19d87540fcdd26d5c",
              },
              {
                container: "cm",
                title: "Die eigentlichen Gefahren",
                inner: [
                  "ccm.load",
                  "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/gefahren.html",
                ],
                id: "c51b06893e10495588c55112fb2a7cf6",
              },
              {
                container: "cm",
                title: "Was macht ein sicheres Passwort aus?",
                inner: [
                  "ccm.load",
                  "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/sicheres-password.html",
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
                      "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/passwoerter.html",
                    ],
                    id: "c2aae37ff0734f91aa4204c850b433e3",
                  },
                  {
                    container: "cm",
                    title: "Für Passphrasen",
                    inner: [
                      "ccm.load",
                      "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/passphrasen.html",
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
                      "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/password-manager.html",
                    ],
                    id: "2ea343a0d95c443aaafd2caa8bbf99ed",
                  },
                  {
                    container: "cm",
                    title: "Digital",
                    inner: [
                      "ccm.load",
                      "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/digital.html",
                    ],
                    id: "0a71eabea8364118852504144a7d14b4",
                  },
                  {
                    container: "cm",
                    title: "Papier",
                    inner: [
                      "ccm.load",
                      "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/papier.html",
                    ],
                    id: "a07298f4eda5459a9f3817d4925614d4",
                  },
                  {
                    container: "cm",
                    title: "Quantencomputing",
                    inner: [
                      "ccm.load",
                      "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/quantencomputing.html",
                    ],
                    id: "388786b4c98040ae802b4dcb87e6771e",
                  },
                  {
                    container: "cm",
                    title: "Guessing",
                    inner: [
                      "ccm.load",
                      "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/guessing-1.html",
                    ],
                    id: "36e5b4bfd6704715b64a0fcf8db56856",
                  },
                  {
                    container: "cm",
                    title: "Cracking",
                    inner: [
                      "ccm.load",
                      "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/passwortsicherheit/hintergrund_info/cracking.html",
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
            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/img/pencil-square.svg",
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
            icon: "https://kaul.inf.h-brs.de/hymn/hymn/hymn_collection/resources/novels/img/pencil-square.svg",
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
      /*
      filter: [
        {"title": "Leicht", "selected": true, "visible": true},
        {"title": "Mittel", "selected": false, "visible": true},
        {"title": "Schwer", "selected": false, "visible": false},
        {"title": "Audio", "selected": false, "visible": false},
        {"title": "Video", "selected": false, "visible": false},
        {"title": "Text", "selected": true, "visible": true}
      ],*/
      /* editor: ["ccm.component", "libs/tiny_editor/ccm.tiny_editor.js"],*/
      tree_view: [
        "ccm.component",
        "https://kaul.inf.h-brs.de/hymn/hymn/lea_hymn/tree/ccm.tree.js",
        {
          html: [
            "ccm.load",
            {
              url: "hhttps://kaul.inf.h-brs.de/hymn/hymn/lea_hymn/tree/resources/tree_template.js",
              type: "module",
            },
          ],
          style: [
            "ccm.load",
            "https://kaul.inf.h-brs.de/hymn/hymn/lea_hymn/hymn/resources/css/tree.css",
          ],
        },
      ],
      container_view: [
        "ccm.component",
        "https://kaul.inf.h-brs.de/hymn/hymn/lea_hymn/tree/ccm.tree.js",
        {
          html: [
            "ccm.load",
            {
              url: "https://kaul.inf.h-brs.de/hymn/hymn/lea_hymn/hymn/resources/container_view.js",
              type: "module",
            },
          ],
          style: [
            "ccm.load",
            "https://kaul.inf.h-brs.de/hymn/hymn/lea_hymn/hymn/resources/css/tree.css",
          ],
        },
      ],
      /*onchange: (event) => {
        console.log(event);
      },*/
      //display_bookmark: true,
      helper: [
        "ccm.load",
        {
          url: "https://kaul.inf.h-brs.de/hymn/hymn/libs/helper-8.4.2.min.js",
          type: "module",
        },
      ],
      css: [
        "ccm.load",
        "https://kaul.inf.h-brs.de/hymn/hymn/libs/bootstrap/css/bootstrap.min.css",
        "https://kaul.inf.h-brs.de/hymn/hymn/libs/bootstrap/css/bootstrap-icons.min.css",
        {
          url: "https://kaul.inf.h-brs.de/hymn/hymn/libs/bootstrap/css/bootstrap-icons.min.css",
          context: "head",
        },
        "https://kaul.inf.h-brs.de/hymn/hymn/lea_hymn/hymn/resources/css/hymn.css",
      ],
      /* lang: [
        "ccm.start",
        "https://ccmjs.github.io/akless-components/lang/versions/ccm.lang-1.2.1.js",
      ],*/
      //routing: ["ccm.instance", "./libs/ccm.routing-4.0.0.js"],
      /*user: [
        "ccm.instance",
        "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.8.0.js",
        {
          realm: "guest",
          logged_in: true,
          quest: "mittler",
        },
      ],*/
      dark: false,
      shadow: "open",
    },
    Instance: function () {
      let self = this;

      this.data_map = {};

      let selected_path_index,
        active_cm_index = 0;
      let visited_paths = [];

      let selected_filter = [];
      let clickCounter = 0;

      /**
       * shortcut to help functions
       * @type {Object.<string,Function>}
       */
      let $;

      this.init = async () => {
        this.routing && (this.routing.app = this.key);
      };

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
            state: async (path, cm) => {
              this.selected_path = path;
              this.active = cm;
              await render();
              await renderActiveCm(cm);
            },
          });

        // setup dark mode
        this.dark === "auto" && this.element.classList.add("dark_auto");
        this.dark === true && this.element.classList.add("dark_mode");

        this.data && addToMapping($.clone(this.data));

        this.data &&
          this.defaultPath(
            $.clone(
              this.filter ? considerFilterSettings(this.data) : this.data,
            ),
          );

        this.data && this.pathList && visitedPaths();

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
          self.data_map[entry.key] = entry;
        }

        function visitedPaths() {
          for (const path in self.pathList) {
            visited_paths[path] = 0;
          }
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
          return $.setContent(this.element, "Nothing to display!");

        this.filter &&
          this.filter.forEach((filter) => {
            if (filter.selected) selected_filter.push(filter.title);
          });

        if (this.routing && this.routing.get()) {
          this.selected_path = getSelectedPathName();
          this.active = getActiveCmId();
          selected_path_index = this.getPathIndexByPathName(this.selected_path);

          await this.routing.refresh();
        } else {
          this.selected_path = getSelectedPathName();
          this.active = getActiveCmId();
          selected_path_index = this.getPathIndexByPathName(this.selected_path);
          await render();
        }

        if (this.lang) {
          $.setContent(this.element.querySelector("#lang"), this.lang.root);
          this.lang.observe((lang) => {
            render();
          });
        }

        this.onstart &&
          this.onstart({
            instance: this,
          });
      };

      const render = async () => {
        this.lang && this.lang.translate(this.data);
        this.html.render(this.html.main(this), this.element);
        await createTreeInstances();
        await renderActiveCm(this.active);
      };

      this.events = {
        openTreeView: async () => {
          (this.local || this.filter) && (await renderActiveCm(this.active));

          [...this.element.querySelectorAll("[data-sidenav]")].forEach(
            (nav) => {
              nav.removeAttribute("data-open");
              nav.style.width = "0";
            },
          );

          this.element
            .querySelector("#tree-sidenav")
            .setAttribute("data-open", "");
          this.element.querySelector("#tree-sidenav").style.width = "370px";
          this.element.querySelector("#hymn-area").style.marginLeft = "370px";
        },

        closeTreeView: (e) => {
          e.preventDefault();
          this.element.querySelector("#tree-sidenav").style.width = "0";
          this.element.querySelector("#hymn-area").style.marginLeft = "0";
        },

        openContainerView: async () => {
          this.local && (await renderActiveCm(this.active));

          [...this.element.querySelectorAll("[data-sidenav]")].forEach(
            (nav) => {
              nav.removeAttribute("data-open", "");
              nav.style.width = "0";
            },
          );
          this.element.querySelector("#hymn-area").style.marginLeft = "0";

          this.element
            .querySelector("#container-sidenav")
            .setAttribute("data-open", "");
          this.element.querySelector("#container-sidenav").style.width = "100%";
        },

        closeContainerView: (e) => {
          e.preventDefault();
          this.element.querySelector("#container-sidenav").style.width = "0";
        },

        openSettings: () => {
          [...this.element.querySelectorAll("[data-sidenav]")].forEach(
            (nav) => {
              nav.removeAttribute("data-open", "");
              nav.style.width = "0";
            },
          );
          this.element.querySelector("#hymn-area").style.marginLeft = "0";

          this.element
            .querySelector("#settings-sidenav")
            .setAttribute("data-open", "");
          this.element.querySelector("#settings-sidenav").style.width = "370px";
          this.element.querySelector("#hymn-area").style.marginLeft = "370px";
        },

        closeSettings: (e) => {
          e.preventDefault();
          this.element.querySelector("#settings-sidenav").style.width = "0";
          this.element.querySelector("#hymn-area").style.marginLeft = "0";
        },

        toggleLocalView: async () => {
          this.local = !this.local;

          !this.local && (await renderActiveCm(this.active));
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

        firstNarrativeThreadContent: async () => {
          active_cm_index = 0;
          this.active = this.pathList[selected_path_index].content[0];

          await renderActiveCm(this.active);
        },

        lastNarrativeThreadContent: async () => {
          active_cm_index =
            this.pathList[selected_path_index].content.length - 1;
          this.active =
            this.pathList[selected_path_index].content[active_cm_index];

          await renderActiveCm(this.active);
        },

        prevNarrativeThreadContent: async () => {
          if (active_cm_index > 0) {
            active_cm_index--;
            this.active =
              self.pathList[selected_path_index].content[active_cm_index];

            await renderActiveCm(this.active);
          }
        },

        nextNarrativeThreadContent: async () => {
          if (
            active_cm_index + 1 <=
            this.pathList[selected_path_index].content.length
          ) {
            active_cm_index++;
            this.active =
              self.pathList[selected_path_index].content[active_cm_index];

            await renderActiveCm(this.active);
          }
        },

        changeNarrativeThread: async (e) => {
          selected_path_index = e.target.value;
          active_cm_index = visited_paths[selected_path_index];

          this.selected_path = this.pathList[selected_path_index].name;
          this.active =
            this.pathList[selected_path_index].content[active_cm_index];

          await renderActiveCm(this.active);

          this.html.render(
            this.html.activeNovel(this),
            this.element.querySelector("#active-novel"),
          );
        },

        backToPath: async () => {
          this.active =
            this.pathList[
              this.getPathIndexByPathName(this.selected_path)
            ].content[visited_paths[selected_path_index]];

          this.local &&
            (this.tree_inst.data = this.container_inst.data =
              this.data_map[this.active]);
          await renderActiveCm(this.active);
        },

        open_dropdown: (e) => {
          e.target.closest("[data-dropdown]").classList.toggle("active");
        },

        speech: () => {
          const msg = new SpeechSynthesisUtterance();
          msg.text = this.element.querySelector("#hymn-content").innerText;
          msg.lang = "de";
          speechSynthesis.speak(msg);
          if (speechSynthesis.speaking) {
            this.element.querySelector("#speech img").src =
              "../hymn/resources/img/audio-wave.gif";
            this.element.querySelector("#speech img").style.width = "16px";
          }

          clickCounter++;
          if (clickCounter === 2) {
            speechSynthesis.cancel();
            clickCounter = 0;
            this.element.querySelector("#speech img").src =
              "../hymn/resources/img/soundwave.svg";
          }
          msg.onend = () => {
            speechSynthesis.cancel();
            clickCounter = 0;
            this.element.querySelector("#speech img").src =
              "../hymn/resources/img/soundwave.svg";
          };
        },

        increase_font: (e) => {
          e.preventDefault();
          e.target.closest("[data-dropdown]").classList.toggle("active");
          const style = window
            .getComputedStyle(this.element.querySelector("#hymn-content"), null)
            .getPropertyValue("font-size");
          const fontSize = parseFloat(style);
          this.element.querySelector("#hymn-content").style.fontSize =
            fontSize + 1 + "px";
        },

        decrease_font: (e) => {
          e.preventDefault();
          e.target.closest("[data-dropdown]").classList.toggle("active");
          const style = window
            .getComputedStyle(this.element.querySelector("#hymn-content"), null)
            .getPropertyValue("font-size");
          const fontSize = parseFloat(style);
          this.element.querySelector("#hymn-content").style.fontSize =
            fontSize - 1 + "px";
        },

        share: () => {
          const url = window.location;

          navigator.clipboard
            .writeText(url)
            .then(() => {
              this.element.querySelector("#share").classList.add("show");
              this.element
                .querySelector("#share > .tool-tip-text")
                .classList.add("show");

              setTimeout(() => {
                this.element.querySelector("#share").classList.remove("show");
                this.element
                  .querySelector("#share > .tool-tip-text")
                  .classList.remove("show");
              }, 900);
            })
            .catch(() => {
              alert("Etwas ist schiefgelaufen :(");
            });
        },

        print: () => {
          const html_string =
            `<!doctype html>
            <head>
              <meta charset="UTF-8" />
              <title>` +
            this.data_map[this.tree_inst.active].title +
            `</title>
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous"
              />
               <style> body { margin: 2em; } </style>
            </head>
          ` +
            this.data_map[this.tree_inst.active].inner;

          const url = window.location;
          const new_window = window.open(
            url,
            this.data_map[this.tree_inst.active].title,
          );
          new_window.document.write(html_string);
          new_window.document.title =
            this.data_map[this.tree_inst.active].title;
          new_window.document.close();
          new_window.print();
          new_window.addEventListener("afterprint", (event) => {
            new_window.close();
          });
        },
      };

      this.getPathIndexByPathName = (selected_path) => {
        for (const index in this.pathList) {
          if (
            this.pathList[index].name.toLowerCase() ===
            selected_path.toLowerCase()
          ) {
            return index;
          }
        }
      };

      const createTreeInstances = async () => {
        const active = getActiveCmId();
        const data = getInstanceData();

        const config = {
          data: data,
          active: active,
          onchange: async (event) => {
            const inner = event.data.inner;

            //render content
            if (inner) {
              if ($.isInstance(event.data.inner)) {
                await inner.start();
                $.setContent(
                  self.element.querySelector("#hymn-content"),
                  inner.root,
                );
              } else
                $.setContent(
                  self.element.querySelector("#hymn-content"),
                  inner,
                );
            }

            //cancel voice over, if another "CM" is selected
            if (speechSynthesis.speaking) {
              speechSynthesis.cancel();
              clickCounter = 0;
            }

            if (event.event !== "entry") return;

            if (this.routing && this.active !== event.data.id) {
              this.active = event.data.id;
              this.routing.set(
                "state*" + this.selected_path + "*" + this.active,
              );
            }

            if (this.local) {
              /*tree_inst.data = container_inst.data = getInstanceData(
                event.data.id,
              );*/
              await renderActiveCm(event.data.id);
            }

            if (
              !self.pathList[selected_path_index].content.includes(
                event.instance.active,
              )
            )
              this.updateNavigationButtons(-1, -1);

            this.onchange &&
              this.onchange({
                instance: this,
                event: "cm",
                data: self.data_map[event.data.id],
              });
          },
        };

        config.root = this.element.querySelector("#tree-view");
        this.tree_inst = await this.tree_view.start(config);

        config.root = this.element.querySelector("#container-view");
        this.container_inst = await this.container_view.start(config);

        active_cm_index = this.pathList[selected_path_index].content.indexOf(
          this.active,
        );

        this.display_bookmark && addPathImg();
        this.updateNavigationButtons(active_cm_index, selected_path_index);
      };

      const renderActiveCm = async (cm_id) => {
        this.active = cm_id;
        this.tree_inst.active = this.container_inst.active = cm_id;
        this.tree_inst.data = this.container_inst.data = getInstanceData(
          this.active,
        );

        this.tree_inst.refresh();
        this.container_inst.refresh();

        await renderContent(this.data_map[this.active]);

        this.display_bookmark && addPathImg();
        this.updateNavigationButtons(active_cm_index, selected_path_index);
        visited_paths[selected_path_index] = active_cm_index;

        this.routing &&
          this.routing.set("state*" + this.selected_path + "*" + this.active);

        this.onchange &&
          this.onchange({
            instance: this,
            event: "cm",
            data: this.data_map[getActiveCmId()],
          });

        async function renderContent(content) {
          if ($.isInstance(content.inner)) {
            await content.inner.start();
            $.setContent(
              self.element.querySelector("#hymn-content"),
              content.inner.root,
            );
          } else
            $.setContent(
              self.element.querySelector("#hymn-content"),
              content.inner,
            );
        }
      };

      const getSelectedPathName = () => {
        if (this.routing && this.routing.get())
          return this.routing.get().split(this.routing.separator)[1];
        else
          return this.selected_path
            ? this.selected_path
            : this.pathList[0].name;
      };

      const getActiveCmId = () => {
        if (!this.active) {
          if (this?.routing && this.routing.get())
            return (this.active = this.routing.get().split("-")[2]);
          else if (this.selected_path) {
            return (this.active =
              this.pathList[
                this.getPathIndexByPathName(this.selected_path)
              ].content[0]);
          } else
            return (
              (this.active = this.tree_inst?.active) ||
              (this.active = Object.values(this.data_map)[0].id)
            );
        } else return this.active;
      };

      const getInstanceData = (active) => {
        let data = this.data;
        if (this.local) data = createLocalViewData(this.active);
        if (this.filter) data = considerFilterSettings(data);
        return [data];
      };

      const addPathImg = () => {
        add(this.tree_inst);
        add(this.container_inst);

        function add(inst) {
          [...inst.element.querySelectorAll(".path-img")].forEach((img) => {
            img.remove();
          });

          for (const elem of self.pathList[selected_path_index].content) {
            const cm_div = inst.element.querySelector('[id="' + elem + '"]');
            cm_div &&
              cm_div.appendChild(
                $.html({
                  tag: "span",
                  class: "path-img me-2",
                  inner: {
                    tag: "img",
                    style: "width: 100%;",
                    src: "../hymn/resources/img/bookmark-fill.svg",
                    class: "road ms-auto me-1 text-default",
                  },
                }),
              );
          }
        }
      };

      this.defaultPath = (data) => {
        let default_path;
        if (this.pathList[0]?.content) default_path = this.pathList[0];
        else
          default_path = {
            name: "Standard",
          };

        let content = default_path.content || [];
        recursive($.clone(data));

        function recursive(entry) {
          switch (entry.container) {
            case "sc":
              entry.inner.forEach((child) => {
                recursive(child);
              });
              break;
            case "pc":
              let default_child = entry.inner[0];
              entry.inner.forEach(
                (child) => child.default && (default_child = child),
              );
              recursive(default_child);
              break;
            case "cm":
              content.push(entry.id);
          }
        }

        default_path.content = content;
        self.pathList.length !== 0
          ? self.pathList.splice(0, 1, default_path)
          : (self.pathList = [default_path]);
      };

      this.updateNavigationButtons = (pathPos, selected_path_index) => {
        if (self.pathList[selected_path_index]?.content.length === 1)
          return disableAllButtons();

        disableAllButtons();

        //active cm does not belong to the active narrative thread
        if (active_cm_index === -1 || selected_path_index === -1) {
          //disabled back_to_path button
          this.element
            .querySelector("[data-back-to-path]")
            .classList.remove("disabled");
          return;
        }

        if (
          active_cm_index <
            self.pathList[selected_path_index].content.length - 1 &&
          active_cm_index > 0
        ) {
          [...self.element.querySelectorAll("[data-prev-content]")].forEach(
            (div) => {
              div.classList.remove("disabled");
            },
          );
          [...self.element.querySelectorAll("[data-next-content]")].forEach(
            (div) => {
              div.classList.remove("disabled");
            },
          );
        }

        if (active_cm_index === 0) {
          [...self.element.querySelectorAll("[data-next-content]")].forEach(
            (div) => {
              div.classList.remove("disabled");
            },
          );
        }

        if (
          active_cm_index ===
          self.pathList[selected_path_index].content.length - 1
        ) {
          [...self.element.querySelectorAll("[data-prev-content]")].forEach(
            (div) => {
              div.classList.remove("disabled");
            },
          );
        }

        function disableAllButtons() {
          //disable all Path-Player buttons
          [...self.element.querySelectorAll("#navigation button")].forEach(
            (btn) => {
              btn.classList.add("disabled");
            },
          );
        }
      };

      const createLocalViewData = (active) => {
        let entry = this.data_map[active];
        let parent = entry.parent;
        let asides = [];
        let successor = false;
        while (parent) {
          parent = $.clone(this.data_map[entry.parent]);
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
            $.isObject(child) ? child : $.clone(this.data_map[child]),
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
            $.clone(self.data_map[child_key]),
          );
          entry.inner.forEach((child, i) => recursive([entry, i]));
        }
      };

      const considerFilterSettings = (data) => {
        if (selected_filter.length === 0) return this.data;

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
                    this.tree_inst !== undefined &&
                    this.container_inst !== undefined &&
                    child.id === this.tree_inst.active &&
                    child.id === this.container_inst.active &&
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
