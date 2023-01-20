# from django.conf.urls import url
from django.urls import re_path as url
from EmployeeApp import views


urlpatterns = [
    url(r'^department/$', views.departmentApi),
    url(r'^department/([0-9]+)$', views.departmentApi),
]
