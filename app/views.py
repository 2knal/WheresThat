from django.shortcuts import render

context = {}

def home(request):
    return render(request, 'app/index.html', context)
def client(request):
    return render(request, 'app/client.html', context)
