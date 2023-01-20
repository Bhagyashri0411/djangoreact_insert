
from django.contrib import admin
from django.urls import path
from django.urls import include
from django.urls import re_path as url

# from django.conf.urls import url


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^',include('EmployeeApp.urls'))
]
