from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.views.decorators.http import require_POST
from item.models import Category, Item
from .forms import SignupForm

def index(request):
    items = Item.objects.all()
    categories = Category.objects.all()

    return render(request, 'core/index.html', {
        'items': items,
        'categories': categories,
    })

def contact(request):
    return render(request, 'core/contact.html')

def custom_logout(request):
    if request.method == 'POST':
        logout(request)
        return redirect('core:index')
    else:
        return redirect('core:index')

def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('login')  # Assuming your login URL is named 'login'
    else:
        form = SignupForm()

    return render(request, 'core/signup.html', {
        'form': form
    })
