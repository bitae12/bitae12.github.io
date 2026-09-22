(function () {
  "use strict";
  var key = "kim-editor-theme";
  var theme = "dark";
  try {
    var stored = localStorage.getItem(key);
    if (stored === "light" || stored === "dark") {
      theme = stored;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "light";
    }
  } catch (err) {
    theme = "dark";
  }
  document.documentElement.setAttribute("data-theme", theme);
})();
