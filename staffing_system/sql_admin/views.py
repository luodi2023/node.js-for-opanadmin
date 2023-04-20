from django.shortcuts import render, redirect, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

from .models import Department, UserInfo

import json
# Create your views here.
def login(request):
    return render(request, 'login.html')

def admin(request):
    return render(request, 'admin.html')


# 部门API
def admin_depart(request):
    stu_desc_list = []
    data_list = Department.objects.all()

    stu = Department._meta.fields
    for item in range(len(stu)):
        temp = stu[item].verbose_name
        stu_desc_list.append(temp)
    # GET请求
    if request.method == "GET":
        return render(request, 'admin_depart/depart_index.html', {'stu_desc': stu_desc_list,
                                                                  'data_list': data_list,
                                                                  })


def depart_add(request):
    if request.method == "GET":
        return render(request, 'admin_depart/depart_add.html', {'msg': ''})

    title = request.POST.get('title')
    if not title:
        return render(request, 'admin_depart/depart_add.html', {'msg': '请输入部门名称！'})

    Department.objects.create(title=title)
    return render(request, 'admin_depart/depart_add.html', {'msg': '添加成功！'})


def depart_compile(request, uid):
    name = request.GET.get('name')
    if request.method == "GET":
        return render(request, 'admin_depart/depart_compile.html', {'msg': '',
                                                                    'name': name,
                                                                    'uid': uid})
    title = request.POST.get('title')

    if not title:
        return render(request, 'admin_depart/depart_compile.html', {'msg': '请输入部门名称！',
                                                                    'uid': uid})
    Department.objects.filter(id=uid).update(title=title)
    return render(request, 'admin_depart/depart_compile.html', {'msg': '编辑成功！',
                                                                'uid': uid})


def depart_delete(request):
    id = request.GET.get('id')
    Department.objects.filter(id=id).delete()
    return redirect('/admin/depart')


# 用户API

@csrf_exempt
def admin_user(request):
    statusr = request.POST.get('status')
    order_way = request.POST.get('order_way')

    stu_desc_list = []
    data_list = UserInfo.objects.all()

    if statusr == "降 序":
        data_list = UserInfo.objects.all().order_by('-pk')
    if statusr == "生 序":
        data_list = UserInfo.objects.all().order_by('pk')

    stu = UserInfo._meta.fields
    for item in range(len(stu)):
        temp = stu[item].verbose_name
        stu_desc_list.append(temp)

    if request.method == "GET":
        return render(request, 'admin_user/user_index.html', {'stu_desc': stu_desc_list,
                                                              'data_list': data_list,
                                                              })

    json_data = serializers.serialize('json', data_list)
    return HttpResponse(json_data, content_type="application/json",charset='utf-8')
