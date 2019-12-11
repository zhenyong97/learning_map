# flask路由

使用flask构建url路由

> 使用Flask()实例对象其中的route方法作为装饰器，定义分发路由

```python
app = Flask()

# 当访问根路径下http则调用如下hello方法
# 静态路由
@app.route('/')  
def hello():
    return "hello flask"

# 访问/hello/xx 路径,其中里面的xx为不确定用<name> 进行捕捉且在接下来generate函数中作为参数进行捕捉，其实就是不确定参数，当用户输入符合该规则的url时，后面的<name>里面的内容会被捕捉
# 动态路由
@app.route('/hello/<name>')
def generate(name):
    return "hello %s"%name


def say_goobey():
    return "good bey"

app.add_url_rule('/goodbey/', view_func=say_goodbey)  # 另一种注册路由的方式

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
```
