from django.contrib import admin
from django.urls import path

from . import views

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('selections/', views.selections, name="selections"),
    path('dropdown/', views.dropdown, name="dropdown"),
]
