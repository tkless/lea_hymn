/**
 * @overview HTML templates of ccmjs-based web component for tree
 * @author Tea Kless <tea.kless@web.de> 2023
 */

import {
  html,
  render,
  repeat,
} from "https://ccmjs.github.io/tkless-components/libs/lit/lit.js";
export { render };

export function main(app) {
  let indent = 0;

  return html`
    <div id="tree">
      ${app.expand_collapse_btn ? expandColapseBtns(app) : " "}
      <di class="row">
          <div id="tree-view">
              <div id="nav" class="root col border-start border-end border-top">
          ${repeat(app.data[0].inner, (entry) =>
            renderContainer(entry, indent),
          )}
        </div>
          </div>
        ${
          app.content_mode
            ? html`<div id="content" class="col">
                <div id="content-head" class="row"></div>
                <div id="content-body" class="row"></div>
              </div>`
            : " "
        }
      </di class="row">
    </div>
  `;

  function renderContainer(entry, indent) {
    indent++;
    if (Array.isArray(entry.inner) && entry.inner[0]?.title)
      return html`<div
        class="cont ${entry.container ? entry.container : ""}"
        @click=${app.events.visible}
      >
        <div class="d-flex border-bottom pt-2 pb-2">
          ${[...Array(indent)].map(() => html`<span class="indent"></span>`)}
          <span class="d-inline-flex">
            <img
              alt="collapse img"
              src="${app.icon.close}"
            />&nbsp;${entry.title}
          </span>
        </div>
        <div class="">
          ${repeat(entry.inner, (entry) => renderContainer(entry, indent))}
        </div>
      </div>`;
    else
      return html`<div
        id="${entry.id}"
        class="cm border-bottom"
        data-tags="${entry.tags?.toString() || ""}"
        @click=${(e) => app.events.renderContent(e, entry)}
      >
        <div class="pt-2 pb-2">
          ${[...Array(indent)].map(() => html`<span class="indent"></span>`)}
          <span class="d-inline-flex">
            <img
              alt="icon"
              src="${entry.icon
                ? entry.icon
                : "https://tkless.github.io/lea_hymn/tree/resources/img/dot.svg"}"
            />
            <span>&nbsp;${entry.title}</span>
          </span>
        </div>
      </div>`;
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
