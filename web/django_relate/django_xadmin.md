# django xadmin后台管理系统

后台管理系统的特点:

1-权限管理；

2-少前端样式；

3-快速开发；

----------

`create superuser` 创建超级用户，用于登陆django自导的admin系统

----------------------------

下载xadmin源码download下来，放在目录下，进行如下配置（记得安装额外依赖）

```python
# setting.py
INSTALLED_APPS = [
    'crispy_forms',
    'xadmin.apps.XAdminConfig',
    ...
]


# project/urls.py
import xadmin

urlpatterns = [

    path('xadmin/', xadmin.site.urls)
]
```

往xadmin添加你的Model

```python
# app 目录下 新建 adminx.py
import xadmin

from .models import YourModel


class YourModelAdmin(object):
    # 自定义字段的修改可以产靠admin_relate
    pass


xadmin.site.register(WechatAccount, YourModelAdmin)
```

全局设置，修改xadmin的标题，脚注

```python
# adminx.py
# 在任意一个app下的adminx.py中进行配置

class GlobalSettings(object):
     sit_title = "xxxx"  # 左标题
     site_footer = "xxxxx"  # 下脚注
     menu_style = "accordion"  # 每个app下的model是收敛的样式

class BaseSettings(object):
    enable_themes = True # 
    use_bootswatch = True

xadmin.site.register(xadmin.views.CommAdminView, GlobalSettings)
xadmin.site.register(xadmin.views.BasedminView, BaseSettings)
```
