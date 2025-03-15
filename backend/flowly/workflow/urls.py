
from django.urls import path
from .views import create_view,get_all_view,remove_view,get_view,update_view
urlpatterns = [

    path('create/',create_view),
    path('get-all/',get_all_view),
    path('remove/<pk>',remove_view),
    path('get/<pk>',get_view),
    path('update/<pk>',update_view),
]

