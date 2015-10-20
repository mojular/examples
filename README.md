# Using Mojular with Rails

## Steps to create this project from scratch

1. `gem install rails`.

2. `rails new projectname`.

3. Add [`webpack.config.js`](https://github.com/mojular/examples/blob/rails/webpack.config.js).

4. Add [`package.json`](https://github.com/mojular/examples/blob/rails/package.json) with Mojular dependencies and Webpack.

5. Add [Foreman to Gemfile](https://github.com/mojular/examples/blob/rails/Gemfile#L47) (this allows to run to processes in single Terminal tab):  

	```ruby
	group :development do
		// ...
		gem 'foreman'
	end
	```

6. Add `node_modules` and generated files to [`.gitignore`](https://github.com/mojular/examples/blob/rails/.gitignore#L19-L21).

7. In `config/initializers/assets.rb` add [the following](https://github.com/mojular/examples/blob/rails/config/initializers/assets.rb#L13-L14) to append paths and precompile Mojular assets:  

	```ruby
	Rails.application.config.assets.paths << Rails.root.join('node_modules', 'mojular-govuk-elements', 'images')
	Rails.application.config.assets.precompile += %w(*.js *.png *.jpg *.ico)
	```

8. In [`config/initializers/sass.rb`](https://github.com/mojular/examples/blob/rails/config/initializers/sass.rb) add the following to extend Sass load paths with Mojular (taken from package.json `paths` property of each Mojular component):  

    ```ruby
    require 'find'
    Find.find('node_modules').grep(/mojular[a-z-]+\/package\.json/).map do |package|
      sassPaths = JSON.parse(IO.read(package))['sassPaths']
      dirname = File.dirname(package)
      sassPaths.map { |path| Sass.load_paths << File.expand_path(path, File.directory?(path) ? '' : dirname) } if sassPaths
    end
    ```

9. Add [`Procfile`](https://github.com/mojular/examples/blob/rails/Procfile) to run Foreman

10. Amend [your controller](https://github.com/mojular/examples/blob/rails/app/controllers/static_controller.rb#L2-L3) to use Mojular template:  

    ```ruby
    layout 'erb/base'
    prepend_view_path(File.expand_path("#{Rails.root.to_s}/node_modules/mojular-templates"))
    ```

11. [Create view](https://github.com/mojular/examples/blob/rails/app/views/pages/index.html.erb) using Mojular HTML components.

12. [Import GOV.UK elements](https://github.com/mojular/examples/blob/rails/app/assets/stylesheets/application.scss) (all or individually) in main Sass file.

13. [Write your JS](https://github.com/mojular/examples/blob/rails/app/assets/javascripts/application.js) in CommonJS or AMD style. Webpack will handle the rest. Mojular includes jQuery and lodash.

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
