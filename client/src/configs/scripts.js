module.exports = {
  renderCustomScripts: () => {
    const customjs = document.createElement("script");
    customjs.setAttribute("src", "static/dist/js/custom.min.js");
    document.head.appendChild(customjs);
  },
  renderAppScripts: () => {
    const appjs = document.createElement("script");
    appjs.setAttribute("src", "static/dist/js/app.min.js");
    document.head.appendChild(appjs);

    const appinit = document.createElement("script");
    appinit.setAttribute("src", "static/dist/js/app.init.js");
    document.head.appendChild(appinit);

    const appswitcher = document.createElement("script");
    appswitcher.setAttribute("src", "static/dist/js/app-style-switcher.js");
    document.head.appendChild(appswitcher);
  }
};
