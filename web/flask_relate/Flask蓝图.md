# Flask蓝图

* 什么是蓝图

一个应用中或跨应用制作组件 和支持通用的门面模式

* 蓝图的作用
  
  * 将不同的功能模块化
  
  * 构建大型应用
  
  * 优化项目结构
  
  * 增强可读性，易于维护

## 蓝图构建项目目录

### 定义蓝图(app/admin/\_\_init\__.py)

```python
from flask import Blueprint
admin = Blueprint("admin", __name__)
import views
```

### 注册蓝图(app/\_\_init\_\_.py)

```python
from admin import admin as admin_blueprint
app.register_blueprint(admin_blueprint, url_prefix="/admin")
```

### 调用蓝图(app/admin/views.py)

```py
from .import admin
@admin.route("/")
```
