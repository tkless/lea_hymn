/**
 * @overview HTML templates of ccmjs-based web component for multilingualism
 * @author André Kless <andre.kless@web.de> 2021
 */

import {
  html,
  render,
} from "https://ccmjs.github.io/akless-components/libs/lit/lit.min.js";
export { render };

export function main(app) {
  return html` <div class="navbar nav-item dropdown bg-info">
    <a
      class="nav-link dropdown-toggle"
      id="navbarDarkDropdownMenuLink"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span
        class="flag-icon flag-icon-${app.languages[app.active]["flag"]}"
      ></span>
    </a>
    <ul
      class="dropdown-menu dropdown-menu-end"
      aria-labelledby="navbarDarkDropdownMenuLink"
    >
      <li>
        <button class="dropdown-item">
          <i
            class="flag-icon flag-icon-${app.languages[app.active]["flag"]}"
          ></i>
          ${app.active.toUpperCase()} &nbsp;
          <i class="bi bi-check-lg text-success"></i>
        </button>
      </li>
      <li><hr class="dropdown-divider" /></li>

      ${Object.keys(app.languages)
        .filter((lang) => lang !== app.active)
        .map(
          (lang) => html`
            <li>
              <button class="dropdown-item" @click=${() => app.switch(lang)}>
                <i
                  class="flag-icon flag-icon-${app.languages[lang]["flag"]}"
                ></i>
                ${lang.toUpperCase()} &nbsp;
              </button>
            </li>
          `,
        )}
    </ul>
  </div>`;
}
