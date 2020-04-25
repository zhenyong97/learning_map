```python
# 自定义admin
# admin.py 用于注册添加model进入到admin管理页面中
from django.contrib import admin

from .model import YourModel

admin.sit.site_header = 'xxx' # 修改admin页面的主标题栏

class YourModelAdmin(admin.ModelAdmin):
    exluede = ('xxx')  # 不在数据详情中展示xxx字段的数据
    filds = ('xxx')  # 在数据详情页中只展示xxx字段
    list_display = ('xxx', 'xxx')  # 在列表展示页中展示如下字段
    list_filter = ('xxx')  # 添加xxx字段的过滤
    search_fields = ('xxx')  # 添加xxx字段的搜索功能
    list_editable = ['xxx']  # 在数据列表页xxx字段即可进行修改不需要进入到详情页

    readonly_fields = ('xxx') # 在数据详情页中的只读xx字段

    change_list_template = '' # 修改当前列表展示页的模板

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('xxx/<int:q>/', self.change_something)
        ]
        return custom_urls + urls
    
    def change_something(self, request, q):
        # do something

admin.site.register(YourModel)  # 注册你的Model

from django.contrib.auth.models import Group 
admin.site.unregister(Group)  # 取消默认Group-Model 在admin页中的显示
```

后台admin设置中文

```
LANGUAGE_CODE = 'zh-hans'

# 不适用UTC时间存储
TIME_ZONE = 'Asiz/Shanghai'
USE_TZ = False
```

通过修改apps.py中的Config信息，在admin页面中渲染其对应的信息

```python
class UserConfig(AppConfig):
    name = 'app.users'
    verbose_name = '用户'  # 该属性用于admin页面中app属性的显示内容
```
