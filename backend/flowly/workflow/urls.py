
from django.urls import path
from . import views
urlpatterns = [

    path('create/',views.create),
    path('get-all/',views.get_all),
]