from django.views.generic import TemplateView

class Home(TemplateView):
	template_name = 'index.html'

	def get(self, request, *args, **kwargs):
		context = {
			'title': 'Django Test Project',
		}
		return self.render_to_response(context)
