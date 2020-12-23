from django.urls import path
from .views import MedidaView
#from django.views.generic import TemplateView

urlpatterns = [
    #path('',TemplateView.as_view(template_name='index.html')),
    path('similar/', MedidaView.as_view())
]