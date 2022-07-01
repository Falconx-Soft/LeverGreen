from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from .forms import CutomUserCreationForm
from django.contrib.auth.models import User
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request,'Users/index.html')



def loginUser(request):

    if request.user.is_authenticated:
        return redirect('home')
    msg = None
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
            user = authenticate(request, username=username, password=password) # check password

            if user is not None:
                login(request, user)
                return redirect('index')
            else:
                msg = 'User/Something is wrong'
        except:
            msg = 'User not recognized.'
    context = {
        'msg':msg
    }
    return render(request,'Users/index.html',context)

def register(request):
    msg = None
    form = CutomUserCreationForm
    if request.method == 'POST':
        form = CutomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            return redirect('index')
        else:
            msg = 'form validation error.'
    context = {'form':form, 'msg':msg}
    return render(request,'Users/index.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login')