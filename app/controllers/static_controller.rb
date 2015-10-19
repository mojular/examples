class StaticController < ApplicationController
	layout 'erb/base'
	prepend_view_path(File.expand_path("#{Rails.root.to_s}/node_modules/mojular-templates"))

	def show
    render template: "pages/#{params[:page]}"
  end
end
