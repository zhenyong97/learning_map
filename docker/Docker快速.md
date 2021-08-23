# Docker快速

每个应用程序或者每个服务器都把他打包成集装箱，用docker部署，集装箱之间是个黑盒，集装箱之间是互相隔离的

* 容器引擎

* 打包/发布应用程序，包括系统环境，配置，依赖

![](C:\Users\YONG\Desktop\dockervsvps.png)

docker 命令:

-d: 意味着是守护进程在后台一直运行

-p 80:80  意思就是把容器nginx的80端口启动映射到宿主机的80端口

`docker run -d -p 80:80 nginx`

`docker ps` 查看docker运行的容器

`docker kill <contail id>` kill掉docker运行的容器

---------------------

## 安装Elastic Search

拉取ea

`~~docker pull docker.elastic.co/elasticsearch/elasticsearch:7.4.2~~` 

单点启动

`docker run -d -p 9200:9200  -p 9300:9300 --name my_local_ea  -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.4.2`

----------------------------------------

### 安装postgresql

`docker pull postgres:11.5` 拉取postgresql

`docker run --name dockerPG11 -e POSTGRES_PASSWORD=lizhenyong -p 5432:5432 -d postgres:11.5`

```
run 创建并运行一个容器（实例）；

–name 指定创建的容器的名字；

-e POSTGRES_PASSWORD= Xzzp2008 设置环境变量，指定数据库的登录口令为 Xzzp2008；

-p 5432:5432 端口映射将容器的 5432 端口映射到外部机器的 5432 端口，从外部访问就使用这个端口；


-d postgres:11.5 镜像的名字是 postgres:11.5，镜像的名字是查询出来的，不是由用户随意定的
```

`docker exec -it dockerPG11 bash` 运行中的容器其实是一个功能完备的 Linux 操作系统，所以我们可以像常规的系统一样登录并访问容器
