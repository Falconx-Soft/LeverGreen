from unicodedata import name
from django.contrib import admin
from django.urls import path
from django.views import View

from . import views

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('selections/', views.selections, name="selections"),
    path('dropdown/', views.dropdown, name="dropdown"),
    path('blogs/', views.blogs, name="blogs"),

    path('details/', views.details, name="details"),
    path('contact/', views.contact, name="contact" ),
]
