"""
URL configuration for staffing_system project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from sql_admin import views

urlpatterns = [
   path('', views.login),



   path('admin/', views.admin),

   # 部门API
   path('admin/depart', views.admin_depart),
   path('admin/depart/add', views.depart_add),
   path('admin/depart/delete', views.depart_delete),
   path('admin/depart/id=<int:uid>/compile', views.depart_compile),

   # 用户API

   path('admin/user', views.admin_user)

]
