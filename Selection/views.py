from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import *
# Create your views here.

@login_required(login_url='login')
def home(request):
    drop_dow_1 = DropDown1.objects.all()
    context = {
        'drop_dow_1':drop_dow_1
    }
    return render(request,'Selection/home.html',context)
