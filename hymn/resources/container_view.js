/**
 * @overview HTML alternative template of ccmjs-based web component for treeview
 * @author Tea Kless <tea.kless@web.de> 2023
 */

import {
  html,
  render,
  repeat,
} from "https://ccmjs.github.io/tkless-components/libs/lit/lit.js";
export { render };

export function main(app) {
  return html` <div id="container-view">
    ${expandColapseBtns(app)}
    <div
      id="nav"
      style="max-width: unset;"
      class="border-start border-end  border-bottom rounded p-4 mb-5 d-flex flex-column align-items-center"
    >
      <h2 class="text-muted mb-4" ">${app.data[0].title}</h1>
      <div class="flex-fill hymn-content">
        ${repeat(app.data[0].inner, (entry, i) => renderContainer(entry, i))}
      </div>
    </div>
  </div>`;

  function renderContainer(entry, i) {
    if (entry.container === "cm")
      return html`<div
        id="${entry.id}"
        class="cm border rounded text-center p-2 m-2${entry.id == app.active
          ? " active"
          : ""}"
        @click=${(e) => app.events.renderContent(e, entry)}
      >
        <span class="d-inline-flex">
          <img
            id="icon"
            alt="icon"
            src="${entry.icon
              ? setSVG(entry.icon)
              : "https://tkless.github.io/lea_hymn/tree/resources/img/file-earmark.svg"}"
          />
          <span>&nbsp;${entry.title}&nbsp;</span>
        </span>
        ${renderContainer(entry.inner, i)}
      </div>`;
    if (entry.container === "sc")
      return html`<div
        id="${entry.id}"
        class="cont sc text-center border rounded p-2 m-2"
        @click=${app.events.visible}
      >
        <span class="d-inline-flex">
          <span class="sc-title"
            ><img
              alt="collapse img"
              src="${app.icon.close}"
            />&nbsp;${entry.title}&nbsp;
          </span>
        </span>
        <div class="d-flex flex-column p-2 m-2">
          ${repeat(entry.inner, (entry, i) => renderContainer(entry, i))}
        </div>
      </div>`;
    if (entry.container === "pc")
      return html`<div
        id="${entry.id}"
        class="cont pc text-center border rounded p-2 m-2"
        @click=${app.events.visible}
      >
        <span class="d-inline-flex">
          <span class="pc-title">
            <img
              alt="collapse img"
              src="${app.icon.close}"
            />&nbsp;${entry.title}&nbsp;
          </span>
        </span>
        <div class="d-flex align-items-top">
          ${repeat(entry.inner, (entry, i) => renderContainer(entry, i))}
        </div>
      </div>`;

    function setSVG(icon) {
      let svg = new DOMParser().parseFromString(icon, "image/svg+xml");
      let xml = new XMLSerializer().serializeToString(svg);
      return "data:image/svg+xml;charset=utf-8," + xml;
    }
  }

  function expandColapseBtns(app) {
    return html` <div
      id="tree-nav"
      class="d-flex justify-content-between align-items-center"
    >
      <div class="btn-group mb-1" role="group">
        <button
          id="collapse-all"
          title="Collapse all"
          class="btn btn-light border"
          @click=${(e) => app.events.collapse_all(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrows-collapse"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8Zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0Zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793Z"
            />
          </svg>
        </button>
        <button
          id="expand-all"
          title="Expand all"
          class="btn btn-light border"
          @click=${app.events.expand_all}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrows-expand"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z"
            />
          </svg>
        </button>
      </div>
    </div>`;
  }
}
