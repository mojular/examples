# Using Mojular with Middleman Sculptor

[Middleman Sculptor](https://github.com/tyom/middleman-sculptor) is Middleman extension to generate style guides.

[An example](http://mojular.github.io/examples/) of a generated styleguide.

## Steps to create this project from scratch

1. Install Middleman Sculptor

  ```
  gem install middleman-sculptor
  ```

2. Initialise new Sculptor project:

  ```
  middleman-sculptor init project-name
  ```

3. Install GOV.UK Elements via NPM

  ```
  npm install https://github.com/mojular/govuk-elements/tarball/master --save
  ```

4. Configure the discovery of Sass load paths and images:

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

5. Add GOV.UK Elements examples


## Running this project

### First time or when changing dependencies

  ```
  npm install
  bundle install
  ```

### Start development server and Webpack watch

  ```
  foreman start
  ```
