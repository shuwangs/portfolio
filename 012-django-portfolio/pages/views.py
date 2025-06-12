from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html', {} )

def about(request):
    return render(request, 'pages/about.html', {} )
def projects(request):
    return render(request, 'pages/projects.html', {} )

def contact(request):
    return render(request, 'pages/contact.html', {} )

def blog(request):
    return render(request, 'pages/blog.html', {} )
#     {
