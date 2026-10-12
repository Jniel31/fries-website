Casa Yanna preview

Open index.html in your browser.
Admin: scroll to the footer, click "Staff login", passcode: yanna (preview only, not real security).
Photos you add are saved in that browser only.

Project layout
  index.html            page markup (loads the files below)
  css/styles.css        all styles
  js/config.js          menu data, prices, sizes, cart
  js/state.js           saved photos + admin login state
  js/dom.js             cached element references
  js/functions/*.js     one file per function
  js/handlers/*.js      one file per event handler
  js/main.js            wires up events and runs the first render
  images/               hero.jpg + menu/ photos (see images/README.txt)

Script load order matters: config, state, dom, functions, handlers, then main.js (see index.html).
