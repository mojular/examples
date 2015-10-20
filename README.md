# Using Mojular with ExpressJS

## Steps to create this project from scratch

1. Install [Express application generator](http://expressjs.com/starter/generator.html):

  ```
  npm install express-generator -g
  ```

2. Generate app with Sass support and Jade template engine (default):

  ```
  express . -c sass
  ```

3. Add [Mojular](https://github.com/mojular/examples/blob/express-js/package.json#L14-L17) and [dev](https://github.com/mojular/examples/blob/express-js/package.json#L22-L28) dependencies to `package.json`.

4. Add [`webpack.config.js`](https://github.com/mojular/examples/blob/express-js/webpack.config.js) to compile JS bundles.

5. Add [`gulpfile.js`](https://github.com/mojular/examples/blob/express-js/gulpfile.js) to run Webpack for scripts and copy Mojular images.

6. [Extend page layout](https://github.com/mojular/examples/blob/express-js/views/index.jade#L1) with Mojular Jade template.

7. [Add Mojular HTML](https://github.com/mojular/examples/blob/express-js/views/index.jade) (Jade).

8. Add [`public/javascripts/main.js`](https://github.com/mojular/examples/blob/express-js/public/javascripts/main.js) with your JS.

9. Include Mojular styles in [`public/stylesheets/style.sass`](https://github.com/mojular/examples/blob/express-js/public/stylesheets/style.sass)

10. Configure `node-sass-middleware` that Express app is using to [load Mojular paths](https://github.com/mojular/examples/blob/express-js/app.js#L13-L15) in [its options](https://github.com/mojular/examples/blob/express-js/app.js#L32).


## Running this project

### First time or when changing dependencies

```
npm install
```

### Start development server

1. Run `node_modules/.bin/gulp` to compile assets.

2. Run `npm start` to run Express server.
