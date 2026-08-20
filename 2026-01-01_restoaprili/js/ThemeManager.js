/** manages theme of the website by modifying <body> class. uses localStorage. */
export class ThemeManager {
  constructor() {
    this.defaultTheme = "mode__dark";
    /** theme that's saved in LocalStorage */
    this.savedTheme = null;
    this.loadThemeFromLocalStorage();
    this.setHTMLBodyThemeOnInitialization();
  }

  loadThemeFromLocalStorage() {
    this.savedTheme = localStorage.getItem("theme") || this.defaultTheme;
  }

  saveThemeToLocalStorage() {
    localStorage.setItem("theme", this.savedTheme);
  }

  setHTMLBodyThemeOnInitialization() {
    document.body.classList.remove("mode__light", "mode__dark");
    document.body.classList.add(this.savedTheme);
  }

  toggleTheme() {
    this.savedTheme =
      this.savedTheme === "mode__dark" ? "mode__light" : "mode__dark";
    this.setHTMLBodyThemeOnInitialization();
    this.saveThemeToLocalStorage();
  }
}
