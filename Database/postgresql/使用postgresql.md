# 使用关系型数据库Postgresql

## Centos7下安装

使用源码安装，下载好文件后解压

```bash
./configure
make
su
make install
adduser postgres
mkdir /usr/local/pgsql/data
chown postgres /usr/local/pgsql/data
su - postgres
/usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data
/usr/local/pgsql/bin/pg_ctl -D /usr/local/pgsql/data -l logfile start
/usr/local/pgsql/bin/createdb test
/usr/local/pgsql/bin/psql test
```

注册`postgres`作为数据库管理员用户

常用三个命令

```bash
psql -l # 查看当前postgresql所包含的数据库
psql [dbname]  # 进入psql的命令行模式，并且打开当前数据库
createdb [dbname] # 新建数据库
dropdb [dbname]  # 删除数据库
help # psql命令行模式的帮助
\q # 退出psql的命令行模式
\l # 命令行模式中展示数据库信息
...
```

这些命令都存在/usr/local/psql/bin中，为了方便使用，建议配置ln软链，并且赋予用户**postgres**有sudo的权限