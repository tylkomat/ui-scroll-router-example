# ui-scroll-router-example
just a demo for an issue

## Install
`bower install`

start `index.html` with any http server you like, I used [simple-autoreload-server](https://www.npmjs.com/package/simple-autoreload-server).

## Description

Clicking on any list item an going back should start the list with the previously clicked item scrolled to top.

That was achived using the `persistScrollPosition` directive, which receives a callback function with the current index which is executed when going back to run `adapter.reload` with that index.

Unfortunately `adapter` does not exist when going back.
