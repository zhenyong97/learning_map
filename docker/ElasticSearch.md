# ElasticSearch

* ElasticSearch是全文搜索引擎，能够快速地存储，搜索和分析海量数据

* ElasticSearch可以用于存储数据，不需要建表，配置字段，存储格式为json格式的文档

## 安装：

1- 从网站下载安装，安装配置，运行

2- **使用docker安装**

-----------

* <server>:9200/index/type/id

     index --> database； type-->table

使用rest的中的PUT|POST方法往里面添加内容，如: 

`http://localhost:9200/imooc/course/1`

```
Request Body:

TEST： {
    “name”:"imooc",
    "instructor":"ccmouse"    
}
```

用GET获取数据格式为`<index>/<type>/_search?q=`来全文搜索
