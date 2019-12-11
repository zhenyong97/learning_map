# 使用flask-sqlalchemy定义后台orm

类似与django自带的model，自己根据项目建立相应的数据库表格model，在falsk中并不原生自带，需要引入这个扩展，功能其实与django的model类似

## Setp: 0

* 安装`pip install flask-sqlalchemy`

* 定义mysql数据库连接(demo以连接mysql为例), 实例化一个mysql,DB对象

```python
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:root@localhost/movie"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)
```

## Setp: 1

基与sqlalchemy所原生定于的字段类型有很多种, 以下以一个*会员及会员登陆日志数据模型设计*进行讲解

**定义会员数据模型**

```python
class User(db.Model):
    __tablename__ = 'user'  # 所在数据库中的表名
    # 以下为需要创建的字段，将会一一对应数据库中的字段类型
    id = db.Column(db.Integer, primary_key=True)  # 用户id， 主键
    name = db.Column(db.String)  # 名称， 字符串
    pwd = db.Column(db.String)
    email = db.Column(db.String)
    phone = db.Column(db.String)
    info = db.Column(db.Text) 
    face = db.Column(db.String)  # 头像
    addtimmme = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    uuid = db.Column(db.String)
```
