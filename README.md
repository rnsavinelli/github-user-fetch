# GUF - GitHub User Fetch

Search GitHub users by username using GUF, a javascript web application implementing GitHub's REST API.

Give GUF a try: https://rnsavinelli.github.io/guf/

## About the scripts

[`github.js`](js/github.js): defines the GitHub class and methods, and the API's URL.

[`user-diplay.js`](js/user-display.js): functions `profileClear`, `profileNotFound()`, and `profileDisplay` are defined in this file.

[`guf.js`](js/guf.js): calls the `getUser` method, commands the buttons behaviours, and calls the functions defined on user-display;

## REST API

- https://docs.github.com/en/rest
