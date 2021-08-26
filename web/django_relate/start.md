# django setting的配置说明



自定义STATIC路径

```python
STATICFILES_DIRS = [

]
```

Model 

没有定义主键会自定义设置一个id字段作为主键

queryset 对象

queryset本身并没有进行sql操作

| 字段     |                        |     |
| ------ | ---------------------- | --- |
| all    | 返回queryset对象，可以for或者切片 |     |
| filter | 返回queryset对象，可以for或者切片 |     |
| get    | 返回一条数据                 |     |

视图中的request 对象

区分http方法， request.method
