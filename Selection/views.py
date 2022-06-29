from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import *
from django.http import JsonResponse
# Create your views here.

@login_required(login_url='login')
def home(request):
    drop_dow_1 = DropDown1.objects.all()
    context = {
        'drop_dow_1':drop_dow_1
    }
    return render(request,'Selection/home.html',context)

@login_required(login_url='login')
def dropdown(request):
    if request.method == "GET":
        if request.GET.get("dropdown") == "1":
            drop_down_1_id = request.GET.get("id")
            drop_down_1_obj = DropDown1.objects.get(id=drop_down_1_id)
            drop_down_2_objs = DropDown2.objects.filter(dropDown1=drop_down_1_obj).values()
            drop_down_2_list = list(drop_down_2_objs)
            return JsonResponse({'status': 200, 'id':drop_down_1_id, 'drop_down_2_list':drop_down_2_list})
        elif request.GET.get("dropdown") == "2":
            drop_down_2_id = request.GET.get("id")
            drop_down_2_obj = DropDown2.objects.get(id=drop_down_2_id)
            drop_down_1_obj = drop_down_2_obj.dropDown1
            drop_down_3_objs = DataAttribute.objects.filter(dropDown1=drop_down_1_obj, dropDown2 = drop_down_2_obj).values()
            drop_down_3_list = list(drop_down_3_objs)
            return JsonResponse({'status': 200, 'id':drop_down_2_id, 'drop_down_3_list':drop_down_3_list})
        elif request.GET.get("dropdown") == "3":
            data_attribute_id = request.GET.get("id")
            data_attribute_obj = DataAttribute.objects.get(id=data_attribute_id)
            data_attribute_type = DataAttributeType.objects.get(dataAttribute=data_attribute_obj)
            mappedTable = MappedTable.objects.filter(dataAttributeType=data_attribute_type).values()
            if mappedTable:
                data_attribute_table = list(mappedTable)
                return JsonResponse({'status': 200, 'id':data_attribute_id, 'data_attribute_table':data_attribute_table, 'table':True})
            else:
                return JsonResponse({'status': 200, 'id':data_attribute_id, 'data_attribute_type':data_attribute_type.name, 'table':False})