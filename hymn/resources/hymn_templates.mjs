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
    <div id="hymn-area" class="d-flex justify-content-center">
      <div id="lang"></div>
      <div class="container">
        <header id="hymn-header" class="container">${header()}</header>
        <article id="hymn-content" class="mt-4"></article>
        <footer id="active-novel">${activeNovel(app)}</footer>
      </div>
    </div>
  `;

  function header() {
    return html` <div
        id="navigation"
        class="d-flex gap-4 flex-wrap justify-content-between align-items-center mb-4"
      >
        <div id="title">
          <h1 id="novel-title" class="display-6 text-center">
            ${app.data.title}
          </h1>
        </div>
        <div style="max-width: 5em" class="flex-grow-1"></div>
        <div
          class="d-flex justify-content-between align-items-center flex-grow-1"
        >
          <div class="order-1">
            <button
              data-prev-content
              class="btn btn-primary disabled"
              type="button"
              @click=${() => app.events.firstNarrativeThreadContent()}
            >
              <i class="bi bi-skip-start-fill"></i>
            </button>
            <button
              data-prev-content
              class="btn btn-primary disabled"
              type="button"
              @click=${() => app.events.prevNarrativeThreadContent()}
            >
              <i class="bi bi-caret-left-fill"></i>
            </button>
          </div>

          <button
            data-back-to-path
            class="order-2 btn btn-outline-info btn-sm border rounded tool-tip tool-tip-btn disabled"
            type="button"
            @click=${() => app.events.backToPath()}
          >
            <i class="bi bi-circle-fill"></i>
            <span data-lang="zurueck_zu_pfad" class="tool-tip-text-hover"
              >Zurück zu Erzählstrang</span
            >
          </button>

          <div class="order-3">
            <button
              data-next-content
              class="btn btn-primary"
              type="button"
              @click=${() => app.events.nextNarrativeThreadContent()}
            >
              <i class="bi bi-caret-right-fill"></i>
            </button>
            <button
              data-next-content
              class="btn btn-primary"
              type="button"
              @click=${() => app.events.lastNarrativeThreadContent()}
            >
              <i class="bi bi-skip-end-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="controls" class="d-flex justify-content-between">
        <div class="btn-group" role="group">
          ${treeView(app)} ${containerView(app)} ${settings(app)}

          <button
            data-tree-view
            class="btn btn-light"
            type="button"
            @click=${() => app.events.openTreeView()}
          >
            <?xml version="1.0" encoding="utf-8"?>
            <svg
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-diagram-3"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M 6 3.5 C 6 2.672 6.672 2 7.5 2 L 8.5 2 C 9.328 2 10 2.672 10 3.5 L 10 4.5 C 10 5.328 9.328 6 8.5 6 L 8.5 7 L 14 7 C 14.276 7 14.5 7.224 14.5 7.5 L 14.5 8.5 C 14.5 8.885 14.083 9.125 13.75 8.933 C 13.595 8.844 13.5 8.679 13.5 8.5 L 13.5 8 L 8.5 8 L 8.5 8.5 C 8.5 8.885 8.083 9.125 7.75 8.933 C 7.595 8.844 7.5 8.679 7.5 8.5 L 7.5 8 L 2.5 8 L 2.5 8.5 C 2.5 8.885 2.083 9.125 1.75 8.933 C 1.595 8.844 1.5 8.679 1.5 8.5 L 1.5 7.5 C 1.5 7.224 1.724 7 2 7 L 7.5 7 L 7.5 6 C 6.672 6 6 5.328 6 4.5 L 6 3.5 Z M 8.5 5 C 8.776 5 9 4.776 9 4.5 L 9 3.5 C 9 3.224 8.776 3 8.5 3 L 7.5 3 C 7.224 3 7 3.224 7 3.5 L 7 4.5 C 7 4.776 7.224 5 7.5 5 L 8.5 5 Z M 0 11.5 C 0 10.672 0.672 10 1.5 10 L 2.5 10 C 3.328 10 4 10.672 4 11.5 L 4 12.5 C 4 13.328 3.328 14 2.5 14 L 1.5 14 C 0.672 14 0 13.328 0 12.5 L 0 11.5 Z M 1.5 11 C 1.224 11 1 11.224 1 11.5 L 1 12.5 C 1 12.776 1.224 13 1.5 13 L 2.5 13 C 2.776 13 3 12.776 3 12.5 L 3 11.5 C 3 11.224 2.776 11 2.5 11 L 1.5 11 Z M 6 11.5 C 6 10.672 6.672 10 7.5 10 L 8.5 10 C 9.328 10 10 10.672 10 11.5 L 10 12.5 C 10 13.328 9.328 14 8.5 14 L 7.5 14 C 6.672 14 6 13.328 6 12.5 L 6 11.5 Z M 7.5 11 C 7.224 11 7 11.224 7 11.5 L 7 12.5 C 7 12.776 7.224 13 7.5 13 L 8.5 13 C 8.776 13 9 12.776 9 12.5 L 9 11.5 C 9 11.224 8.776 11 8.5 11 L 7.5 11 Z M 12 11.5 C 12 10.672 12.672 10 13.5 10 L 14.5 10 C 15.328 10 16 10.672 16 11.5 L 16 12.5 C 16 13.328 15.328 14 14.5 14 L 13.5 14 C 12.672 14 12 13.328 12 12.5 L 12 11.5 Z M 13.5 11 C 13.224 11 13 11.224 13 11.5 L 13 12.5 C 13 12.776 13.224 13 13.5 13 L 14.5 13 C 14.776 13 15 12.776 15 12.5 L 15 11.5 C 15 11.224 14.776 11 14.5 11 L 13.5 11 Z"
                style="transform-box: fill-box; transform-origin: 50% 50%;"
                transform="matrix(0, -1, 1, 0, 0, 0)"
              />
            </svg>
          </button>

          <button
            data-container-view
            class="btn btn-light"
            type="button"
            @click=${() => app.events.openContainerView()}
          >
            <i class="bi bi-layout-wtf"></i>
          </button>

          <button
            data-novel-settings
            class="btn btn-light"
            type="button"
            @click=${() => app.events.openSettings()}
          >
            <i class="bi bi-gear"></i>
          </button>
        </div>
        <div
          id="accessibility"
          class="btn-group align-items-center"
          role="group"
        >
          <button
            id="speech"
            class="btn btn-light tool-tip tool-tip-btn"
            type="button"
            @click=${() => app.events.speech()}
          >
            <img alt="speech" src="../hymn/resources/img/soundwave.svg" />
            <span data-lang="vorlesen" class="tool-tip-text-hover"
              >Text vorlesen</span
            >
          </button>

          <div
            class="dropdown"
            data-dropdown
            @click=${(e) => app.events.open_dropdown(e)}
          >
            <button
              data-dropdown-button
              class="btn btn-light link tool-tip tool-tip-btn"
              type="button"
            >
              <span class="d-flex"
                >&Alpha;<i class="bi bi-caret-down-fill"></i
              ></span>
              <span
                data-lang="text_groesser_kleiner"
                class="tool-tip-text-hover"
                >Text größer/kleiner</span
              >
            </button>
            <div class="my-dropdown-menu">
              <a
                href=""
                class="link"
                @click=${(e) => app.events.increase_font(e)}
              >
                <i class="bi bi-plus-lg"></i>
              </a>
              <a
                href=""
                class="link"
                @click=${(e) => app.events.decrease_font(e)}
              >
                <i class="bi bi-dash-lg"></i>
              </a>
            </div>
          </div>

          <button
            id="share"
            class="btn btn-light tool-tip tool-tip-btn"
            type="button"
            @click=${() => app.events.share()}
          >
            <i class="bi bi-share"></i>
            <span data-lang="kopiert" class="tool-tip-text"
              >Link <br />
              gespeichert!</span
            >
            <span data-lang="teilen" class="tool-tip-text-hover">Teilen</span>
          </button>

          <button
            id="open-in-tab"
            class="btn btn-light tool-tip tool-tip-btn"
            type="button"
            @click=${() => app.events.print()}
          >
            <i class="bi bi-printer"></i>
            <span data-lang="drucken" class="tool-tip-text-hover">Drucken</span>
          </button>
        </div>
      </div>`;
  }
  function treeView(app) {
    return html` <aside data-sidenav id="tree-sidenav" class="sidenav">
      <a href="" class="close-btn" @click=${(e) => app.events.closeTreeView(e)}
        >&times;</a
      >
      <div class="m-2 mt-0">
        ${expandCollapseButtons()}
        <div id="tree-view"></div>
      </div>
    </aside>`;
  }

  function containerView() {
    return html` <aside data-sidenav id="container-sidenav" class="sidenav">
      <a
        href=""
        class="close-btn"
        @click=${(e) => app.events.closeContainerView(e)}
        >&times;</a
      >
      <div class="m-2 mt-0">
        ${expandCollapseButtons()}
        <div id="container-view"></div>
      </div>
    </aside>`;
  }

  function settings() {
    return html`
      <aside data-sidenav id="settings-sidenav" class="sidenav">
        <a
          href=""
          class="close-btn"
          @click=${(e) => app.events.closeSettings(e)}
          >&times;</a
        >
        <div class="m-2 border-start border-end border-bottom p-4 mt-0">
          <h5 data-lang="pfade" class="border-bottom p-1 mb-2">Erzählstrang</h5>
          ${renderPathSelecterbox(app)}

          <h5 data-lang="ansicht" class="border-bottom p-1 mb-2">Ansicht</h5>

          <div id="switcher" class="mb-5">
            <div class="form-check form-switch">
              <input
                id="local-view"
                class="form-check-input"
                type="checkbox"
                role="switch"
                ?checked="${app.local}"
                @change="${() => app.events.toggleLocalView()}"
              />
              <label class="form-check-label" for="local-view">
                <small data-lang="local" class="border bg-light"
                  >Lokale Sicht</small
                >
              </label>
            </div>
          </div>

          <h5 data-lang="filter" class="border-bottom mb-3 p-1">
            Inhalte Filtern
          </h5>
          <div
            data-lang="keine_filter"
            class="border rounded d-flex flex-wrap"
            data-filter
          >
            ${app.filter ? filter() : "Keine Filtermöglichkeit"}
          </div>
        </div>
      </aside>
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
          data-lang="anwenden"
          class="btn btn-sm btn-info mb-1 me-1 mt-3 ms-auto"
          @click=${() => app.events.changeFilter()}
        >
          Anwenden
        </button>
      `;
    }

    function renderPathSelecterbox() {
      return html`<select
        id="cm-list"
        class="form-select form-select-sm mb-5"
        @change=${(e) => app.events.changeNarrativeThread(e)}
      >
          
      </option>
        ${repeat(
          app.pathList,
          (path, i) =>
            html`<option
              value="${i}"
              ?selected="${app.selected_path === path.name}"
            >
              ${path.name}
            </option>`,
        )}
      </select> `;
    }
  }

  function expandCollapseButtons() {
    return html`
      <div class="btn-group btn-group-sm mb-1" role="group">
        <button
          id="collapse-all"
          class="btn btn-light border tool-tip tool-tip-btn"
          @click=${app.events.collapse_all}
        >
          <i class="bi bi-arrows-collapse"></i>
          <span data-lang="einklappen" class="tool-tip-text-hover"
            >Einklappen</span
          >
        </button>
        <button
          id="expand-all"
          class="btn btn-light border tool-tip tool-tip-btn"
          @click=${app.events.expand_all}
        >
          <i class="bi bi-arrows-expand"></i>
          <span data-lang="ausklappen" class="tool-tip-text-hover"
            >Ausklappen</span
          >
        </button>
      </div>
    `;
  }
}

export function activeNovel(app) {
  return html`<section class="mt-5">
    <figcaption data-lang="aktiver_strang" class="blockquote-footer">
      Aktiver Erzählstrang:
      <cite title="Erzählstrang"> ${app.selected_path} </cite>
    </figcaption>
  </section>`;
}
