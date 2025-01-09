/** manages theme of the website by modifying <body> class.
 * uses localStorage
 * */
export class ThemeManager {
  constructor() {
    this.defaultInitialTheme = "mode__dark";
    this.current_localStorageSaved_theme = null;
    this.loadThemeFromLocalStorage();
    this.setBodyThemeViaClassUponInitialization();
  }

  loadThemeFromLocalStorage() {
    this.current_localStorageSaved_theme =
      localStorage.getItem("theme") || this.defaultInitialTheme;
  }

  saveThemeToLocalStorage() {
    localStorage.setItem("theme", this.current_localStorageSaved_theme);
  }

  setBodyThemeViaClassUponInitialization() {
    document.body.classList.remove("mode__light", "mode__dark");
    document.body.classList.add(this.current_localStorageSaved_theme);
  }

  toggleTheme() {
    this.current_localStorageSaved_theme =
      this.current_localStorageSaved_theme === "mode__dark"
        ? "mode__light"
        : "mode__dark";
    this.setBodyThemeViaClassUponInitialization();
    this.saveThemeToLocalStorage();
  }
}
