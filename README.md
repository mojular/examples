# Using Mojular with Django 1.8

## Steps to create this project from scratch

Ensure Django is installed. Recommend using [pip](http://pip.readthedocs.org/en/stable/installing/).

```
pip install django
```

### Optional step: Virtualenv

```
virtualenv env
source ./env/bin/activate
```

[Virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/) is recommended when dealing with multiple virtual environments. It also keeps them out of the project directory.

1. `django-admin startproject django_test`.

2. `./manage.py migrate` to set up local sqlite3 DB.

3. Add template directories to Django [`TEMPLATES`](https://github.com/mojular/examples/blob/django-1.8.5/django_test/settings.py#L59-L60) in [`settings.py`](https://github.com/mojular/examples/blob/django-1.8.5/django_test/settings.py):

  ```py
  TEMPLATES = [
      # ...
      {
          # ...
          'DIRS': [
              os.path.abspath(os.path.join(BASE_DIR, 'templates')),
              os.path.abspath(os.path.join(BASE_DIR, 'node_modules', 'mojular-templates'))
          ],
          # ...
      }
      # ...
  ```

4. Add the static files directory to [`STATICFILES_DIRS`](https://github.com/mojular/examples/blob/django-1.8.5/django_test/settings.py#L107-L109):

  ```py
  STATICFILES_DIRS = (
      os.path.join(BASE_DIR, 'static'),
      # other static files directories
  )
  ```

4. Update [`urls.py`](https://github.com/mojular/examples/blob/django-1.8.5/django_test/urls.py#L19-L24) to include pattern for initial view:

  ```py
  from views import Home

  urlpatterns = [
      url(r'^$', Home.as_view(), name='home'),
      # ...
  ]
  ```

5. Create new file called [`views.py`](https://github.com/mojular/examples/blob/django-1.8.5/django_test/views.py) and add the following:

  ```py
  from django.views.generic import TemplateView

  class Home(TemplateView):
  	template_name = 'index.html'

  	def get(self, request, *args, **kwargs):
  		context = {
  			'title': 'Django Test Project',
  		}
  		return self.render_to_response(context)
  ```

6. Add Mojular dependencies in [`package.json`](https://github.com/mojular/examples/blob/django-1.8.5/package.json).

7. Add [`webpack.config.js`](https://github.com/mojular/examples/blob/django-1.8.5/webpack.config.js) to bundle JS.

8. Add [`gulpfile.js`](https://github.com/mojular/examples/blob/django-1.8.5/gulpfile.js) to manage tasks compiling assets.

9. Create new directory [`static-src`](https://github.com/mojular/examples/tree/django-1.8.5/static-src) and add [`assets-src/sass/main.scss`](https://github.com/mojular/examples/blob/django-1.8.5/static-src/sass/main.scss) and [`assets-src/scripts/main.js`](https://github.com/mojular/examples/blob/django-1.8.5/static-src/scripts/main.js).

10. Create new template [`index.html`](https://github.com/mojular/examples/blob/django-1.8.5/templates/index.html) in `templates` directory:

  ```jinja
  {% extends 'layouts/django/external.html' %}
  ```


## Running this project

### First time or when changing dependencies

  ```
  npm install
  ```

### Start development server

1. Run `node_modules/.bin/gulp` to compile assets.

2. Run `./manage.py runserver` to run deverlopment server.
