/**
 * @overview HTML templates of ccmjs-based web component for hymn-editor
 * @author Tea Kless <tea.kless@web.de> 2024
 */

import {
  html,
  render,
  repeat,
} from "https://ccmjs.github.io/tkless-components/libs/lit/lit.js";

export { render };

export function main(app) {
  return html` <div class="container-fluid">
    <h2 class="text-secondary text-center mb-5">Editor für Hypermedia Novel</h2>
    <div class="d-flex justify-content-center mb-4">
      <div
        class="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          checked
          @click=${(e) => app.events.renderJsonEditor(e)}
        />
        <label class="btn btn-outline-success" for="btnradio1">Struktur</label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          @click=${(e) => app.events.renderContentEditor(e)}
        />
        <label class="btn btn-outline-success" for="btnradio2">Content</label>
      </div>
    </div>
    <div id="json-editor"></div>
    <div id="content-editor" class="d-none"></div>
  </div>`;
}
