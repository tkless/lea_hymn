/**
 * @overview HTML templates of ccmjs-based web component for hymn
 * @author Tea Kless <tea.kless@web.de> 2023
 */

import {
  html,
  render,
  repeat,
} from "https://ccmjs.github.io/tkless-components/libs/lit/lit.js";

export { render };

export function main(app) {
  return html`
    <h1 id="novel-title" class="display-6 text-center mb-4">
      ${app.data.title}
    </h1>
    <section id="narrativ" class="mb-4">
      ${app.pathList ? pathPlayer(app) : ""}
    </section>
    <section id="content" class="row">
      <section id="hymn-nav" class="col-md-4 col-sm-7 mb-4">
        <button
          id="collapse-expand-site-nav"
          class="btn btn-outline-default"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <i class="bi bi-chevron-double-left"></i>
        </button>
        ${novelSideNavigation(app)}
      </section>
      <section id="hymn-content" class="col">
        <section id="hymn-content-head" class="d-flex justify-content-end">
          ${accessibilityTemplate(app)}
        </section>

        <section id="hymn-content-body"></section>

        ${app.pathList && app.pathList.length > 0 && backAndForwardButtons(app)}
      </section>
    </section>
  `;

  function pathPlayer(app) {
    return html`
      <div class="path-player row justify-content-center">
        <div class="col-auto">
          <div class="input-group input-group-sm mb-3">
            <button
              data-prev-content
              class="btn btn-primary disabled"
              type="button"
              @click=${() => app.events.prevNarrativeThreadContent()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-left"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
                />
              </svg>
            </button>
            <span class="input-group-text"
              >Erzählstrang &nbsp;
              <span>
                <img
                  src="/v5/libs/hymn/resources/img/road.svg"
                  style="width: 2rem;"
                  alt="road img"
                />
              </span>
            </span>
            <select
              id="cm-list"
              class="form-select form-select-sm"
              @change=${(e) => app.events.changeNarrativeThread(e)}
            >
              <option value="-1">keine ausgewählt</option>
              ${repeat(
                app.pathList,
                (path, i) => html` <option value="${i}">${path.name}</option>`,
              )}
            </select>
            <button
              data-next-content
              class="btn btn-primary disabled"
              type="button"
              @click=${() => app.events.nextNarrativeThreadContent()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="display-sidenav" class="row justify-content-center d-none">
        <button
          type="button"
          class="btn btn-link"
          @click=${(e) => app.events.displaySideNav(e)}
        >
          Seitennavigation Einblenden
        </button>
      </div>
      <div
        id="back-to-narrative-thread"
        class="row justify-content-center d-none"
      >
        <button
          type="button"
          class="btn btn-link"
          @click=${(e) => app.events.backToNarrativeThread(e)}
        >
          Zurück zu Erzählstrang
        </button>
      </div>
    `;
  }

  function backAndForwardButtons(app) {
    return html`
      <div class="path-player d-flex justify-content-between mt-5">
        <button
          data-prev-content
          class="btn btn-primary disabled"
          type="button"
          @click=${() => app.events.prevNarrativeThreadContent()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-left"
            viewBox="0 0 16 16"
          >
            <path
              d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
            />
          </svg>
        </button>
        <button
          data-next-content
          class="btn btn-primary disabled"
          type="button"
          @click=${() => app.events.nextNarrativeThreadContent()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-right"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
            />
          </svg>
        </button>
      </div>
    `;
  }

  function novelSideNavigation(app) {
    return html`
      <div id="sidenav" class="sidenav">
        <div
          class="collapse collapse-horizontal show"
          id="collapseWidthExample"
        >
          <ul class="nav nav-tabs">
            <li
              class="nav-item"
              @click=${(e) => app.events.renderTabContent(e, 0)}
            >
              <a id="tab-0" class="nav-link active" href="">
                <img
                  alt="tree icon"
                  src="/v7/libs/hymn/resources/img/tree.svg"
                  style="width: 1.3rem"
                />
              </a>
            </li>
            <li
              class="nav-item"
              @click=${(e) => app.events.renderTabContent(e, 1)}
            >
              <a id="tab-1" class="nav-link" href="">
                <i class="bi bi-layout-wtf"></i>
              </a>
            </li>
            <li
              class="nav-item ms-auto"
              @click=${(e) => app.events.renderTabContent(e, 2)}
            >
              <a id="tab-2" class="nav-link" href=""
                ><i class="bi bi-gear-fill"></i
              ></a>
            </li>
          </ul>
          <section data-tab-content="tree"></section>
          <section class="d-none" data-tab-content="container"></section>
          <section class="d-none" data-tab-content="settings">
            ${settings(app)}
          </section>
        </div>
      </div>
    `;
  }

  function accessibilityTemplate(app) {
    return html`
      <div
        id="accessibility"
        class="btn-group btn-group-sm"
        role="group"
        xmlns="http://www.w3.org/1999/html"
      >
        <button
          id="speech"
          type="button"
          class="btn btn-light"
          title="Vorlesen"
          @click=${() => app.events.speech()}
        >
          <img alt="speech" src="/v5/libs/hymn/resources/img/soundwave.svg" />
        </button>
        <div
          class="dropdown"
          data-dropdown
          @click=${(e) => app.events.open_dropdown(e)}
        >
          <button class="btn btn-light link" type="button" data-dropdown-button>
            &Alpha;<i class="bi bi-caret-down-fill" style="font-size: 9px;"></i>
          </button>
          <div class="my-dropdown-menu">
            <a
              href=""
              class="link"
              title="Schrift vergrößern"
              @click=${(e) => app.events.increase_font(e)}
            >
              <i class="bi bi-plus-lg"></i>
            </a>
            <a
              href=""
              class="link"
              title="Schrift verkleinern"
              @click=${(e) => app.events.decrease_font(e)}
            >
              <i class="bi bi-dash-lg"></i>
            </a>
          </div>
        </div>

        <button
          id="copy-url"
          type="button"
          class="btn btn-light"
          title="Inhalt Teilen"
          @click=${() => app.events.share()}
        >
          <i class="bi bi-share"></i>
        </button>
        <button
          id="open-in-tab"
          type="button"
          class="btn btn-light"
          title="Drucken"
          @click=${() => app.events.print()}
        >
          <i class="bi bi-printer"></i>
        </button>
      </div>
    `;
  }

  function settings(app) {
    return html`
      <div class="border-start border-end  border-bottom p-4">
        <h6 class="border-bottom  p-1 mb-2">Organisieren</h6>
        <div
          id="view-settings"
          class="d-flex justify-content-between align-items-center mr-4 mb-5"
        >
          <div class="btn-group" role="group">
            <button
              id="collapse-all"
              title="Collapse all"
              class="btn btn-secondary border"
              @click=${(e) => app.events.collapse_all(e)}
            >
              <i class="bi bi-arrows-collapse"></i>
            </button>
            <button
              id="expand-all"
              title="Expand all"
              class="btn btn-secondary border"
              @click=${app.events.expand_all}
            >
              <i class="bi bi-arrows-expand"></i>
            </button>
            <button
              id="fullscreen"
              title="Fullscreen"
              class="btn btn-secondary border"
              @click=${app.events.fullScreen}
            >
              <i class="bi bi-arrows-fullscreen"></i>
            </button>
          </div>
        </div>

        <h6 class="border-bottom p-1 mb-2">Ansicht wechseln</h6>

        <div id="switcher" class="mb-5">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              ?checked="${app.local}"
              @change="${(e) => app.events.toggleLocalView(e)}"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              <small class="border bg-light">Lokale Sicht</small>
            </label>
          </div>
        </div>

        <h6 class="border-bottom mb-3 p-1">Inhalte Filtern</h6>
        <div class="border rounded d-flex flex-wrap" data-filter>
          ${app.filter ? filter() : "Keine Filtermöglichkeit"}
        </div>
      </div>
    `;

    function filter() {
      return html`
        ${repeat(
          app.filter,
          (filter) =>
            html`<button
              class="btn btn-sm btn-outline-success m-3
                  ${filter.visible ? "" : "d-none"}
                  ${filter.selected ? "active" : ""}"
              @click=${(e) => app.events.selectFilter(e, filter.title)}
            >
              ${filter.title}
            </button> `,
        )}
        <button
          class="btn btn-sm btn-info mb-1 me-1 mt-3 ms-auto"
          @click=${() => app.events.changeFilter()}
        >
          Anwenden
        </button>
      `;
    }
  }
}
