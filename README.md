# Using Mojular with Middleman

[Middleman](https://middlemanapp.com/) is a static site generator. It's very useful for prototyping and single-page applications.

## Steps to create this project from scratch

Tested with Middleman 3.4.0 and 4.0.0.rc.1

1. Initialise new Middleman project:

  ```
  middleman init project-name
  ```

  Options during installation (Middleman 4):

    1. Asset Pipeline - Y
    2. Compass - N
    3. Livereload - Y

2. Add [`gem 'foreman'`](https://github.com/mojular/examples/blob/middleman/Gemfile#L8) to your `Gemfile`.

3. Add [`package.json`](https://github.com/mojular/examples/blob/middleman/package.json) with Mojular dependencies.

4. Add [`webpack.config.js`](https://github.com/mojular/examples/blob/middleman/webpack.config.js) to compile JS bundles.

5. Add [`Procfile`](https://github.com/mojular/examples/blob/middleman/Procfile) to run Foreman (run multiple processes in one terminal tab).

6. [Add Sass load paths](https://github.com/mojular/examples/blob/middleman/config.rb#L38-L49) for Mojular components:

  ```ruby
  # Load Sass paths and copy images & layouts
  require 'find'
  `mkdir -p "#{config.source}/#{config.images_dir}" "#{config.source}/#{config.layouts_dir}"`
  Find.find('node_modules').grep(/mojular[a-z-]+\/package\.json/).map do |package|
    sassPaths = JSON.parse(IO.read(package))['sassPaths']
    dirname = File.dirname(package)
    sassPaths.map { |path| Sass.load_paths << File.expand_path(path, File.directory?(path) ? '' : dirname) } if sassPaths
    FileUtils.cp_r Find.find(dirname).grep(/images\//), "#{config.source}/#{config.images_dir}"
    FileUtils.cp_r Find.find(dirname).grep(/layouts\/erb\//), "#{config.source}/#{config.layouts_dir}"
  end
  ```

7. [Set Middleman layout](https://github.com/mojular/examples/blob/middleman/config.rb#L19) to Mojular layout:

  ```ruby
  set :layout, 'base'
  ```

8. Add [`source/stylesheets/application.css.scss`](https://github.com/mojular/examples/blob/middleman/source/stylesheets/application.css.scss) with Mojular imports.

9. Add [`source/javascripts/main.js`](https://github.com/mojular/examples/blob/middleman/source/javascripts/main.js) with Mojular JS imports.

10. Add Mojular HTML components in [`source/index.html.erb`](https://github.com/mojular/examples/blob/middleman/source/index.html.erb)

## Running this project

### First time or when changing dependencies

```
bundle install
npm install
```

### Start development server

  ```
  foreman start
  ```
