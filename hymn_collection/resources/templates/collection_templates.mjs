/**
 * @overview HTML templates of ccmjs-based web component for hymn collection
 * @author Tea Kless <tea.kless@web.de> 2023
 */

import {
  html,
  render,
  repeat,
} from "https://ccmjs.github.io/tkless-components/libs/lit/lit.js";

export { render };

export function main(app) {
  return html` <div class="container-fluid">
      <header class="row mb-4">${navigationTemplate(app.navigation)}</header>
      <nav id="content" class="mb-5">
        ${repeat(
          app.navigation,
          (nav) => html`
            <div id="${nav.title.replace(" ", "-").toLowerCase()}"></div>
          `,
        )}
        <div id="hymn"></div>
      </nav>
    </div>
    <footer class="footer mt-4 py-3 bg-light">
      ${footerTemplate(app.footer)}
    </footer>`;

  function navigationTemplate(navigation) {
    return (
      navigation &&
      html`<nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img alt="hymn logo" src="resources/img/collection-play-fill.svg" />
            HYMN</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              ${repeat(
                navigation,
                (nav, i) => html`
                  <li
                    class="nav-item"
                    @click=${(e) => app.events.onClickNavItem(e, i)}
                  >
                    <a
                      href=""
                      data-lang=${nav.title.toLowerCase().split(" ").join("")}
                      id="nav-${i}"
                      class="nav-link"
                      >${nav.title}</a
                    >
                  </li>
                `,
              )}
            </ul>
            <div id="lang"></div>
          </div>
        </div>
      </nav>`
    );
  }

    function footerTemplate(footer) {
        return (
            footer &&
            html`
        <div class="container-fluid">
          <div id="logos" class="row">
            <a
              class="col-6 text-center"
              href="https://www.h-brs.de"
              target="_blank"
            >
              <img
                class="img-fluid ms-1"
                src="resources/logos/h-brs_logo.svg"
                alt="Logo HBRS"
              />
            </a>
            <a
              class="col-6 text-center"
              href="https://crosscomits.de"
              target="_blank"
            >
              <img
                id="crosscomits"
                class="img-fluid ms-1"
                src="resources/logos/CrossComITS.svg"
                alt="Logo CrossComITS"
              />
            </a>
          </div>
          <hr />
          <div id="link">
            <a
              data-lang="impressum impr-href"
              target="_blank"
              href="https://www.h-brs.de/de/impressum"
              >Impressum</a
            >
            <span>•</span>
            <a
              data-lang="datenschutz dat-href"
              href="https://www.h-brs.de/de/datenschutz"
              target="_blank"
              >Datenschutz</a
            >
            <span>•</span>
            <a
              data-lang="kontakt con-url"
              href="https://www.h-brs.de/de/inf/prof-dr-wolfgang-heiden"
              target="_blank"
              >Kontakt</a
            >
          </div>
          <div id="copyright">
            <small
              >©&nbsp;${new Date().getFullYear()}&nbsp;Hochschule
              Bonn-Rhein-Sieg &nbsp;</small
            >
            <small data-lang="rechte">Alle Rechte vorbehalten</small>
          </div>
        </div>
      `
        );
    }
}

export function collection(app) {
  return html`
    <div class="d-inline-flex flex-wrap justify-content-center">
      ${repeat(
        app.novels,
        (novel, i) =>
          html` <div class="card m-2" style="width: 16rem;">
            <div class="lang-flag">
              <i class="flag-icon flag-icon-${novel.lang_flag}"></i>
            </div>
            <img
              alt="placeholder"
              src="${novel.data.cover_img
                ? novel.data.cover_img
                : "http://via.placeholder.com/640x360"}"
            />
            <div class="card-body">
              <h5 class="card-title">${novel.data.title}</h5>
              <p class="card-text">${novel.data.description}</p>
              <button
                data-lang="anzeigen"
                class="btn btn-primary"
                @click=${() => app.events.onClickNovel(i, novel.key)}
              >
                Anzeigen
              </button>
            </div>
          </div>`,
      )}
    </div>
  `;
}
