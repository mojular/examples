# Using Mojular with other frameworks

## [Rails](https://github.com/mojular/examples/tree/rails#readme)

Webpack is used to precompile JS into bundles. Then all assets are consumed by Rail’s Asset Pipeline.

## [Django 1.8](https://github.com/mojular/examples/tree/django-1.8.5#readme)

Gulp is used to compile Sass, JS (Webpack) and copy images from Mojular dependencies. Webpack is used to precompile JS into bundles.

## [Middleman](https://github.com/mojular/examples/tree/middleman#readme)

Webpack is used to precompile JS into bundles. Layouts and images are copied from Mojular components into project asset/layout folders.
Sass is compiled by Middleman. Middleman can optionally use Livereload which refreshes page/styles when files updated.

## [ExpressJS](https://github.com/mojular/examples/tree/express-js#readme)

Webpack is used to precompile JS into bundles. Express uses node-sass-middleware to compile Sass. Gulp is used to copy Mojular images and run Webpack.
