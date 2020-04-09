const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/clintonnkemdilim/Documents/projects/personal-website-2020/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/clintonnkemdilim/Documents/projects/personal-website-2020/src/pages/index.js"))),
  "component---src-pages-main-page-js": hot(preferDefault(require("/Users/clintonnkemdilim/Documents/projects/personal-website-2020/src/pages/MainPage.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/clintonnkemdilim/Documents/projects/personal-website-2020/src/pages/404.js")))
}

