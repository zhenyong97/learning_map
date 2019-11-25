# pipenv 虚拟环境使用

__使用pipenv管理你的python环境__

作用：

> pipenv 其实类似于virtualenv来创建管理python的虚拟环境，只不过pipenv对接的是方便项目的迁移，传统的使用virtualenv来开发当然也没有问题，但是在部署的时候需要使用requestmeents.txt来管理pip包的安装，以及对于后续的一部分包的升级管理十分不利。

## Start: 安装

`pip install pipenv`

## 虚拟文件目录的管理

使用pipenv来管理python虚拟环境，一样的会与virtualenv类似，会在当前机器上创建一个文件目录来同一管理这些独立的包。

> 默认情况下，pipenv会同一管理所有虚拟环境。在Windows系统中，虚拟环境文件夹会在C:\Users\Administrator\.virtualenvs\目录下，而Linux或MacOS会在~/.local/share/virtualenvs/目录下创建。如果你想要在项目目录内创建虚拟环境文件夹，可以设置PIPENV_VENV_IN_PROJECT,这是名为.venv的虚拟环境文件夹将在根目录呗创建

## Pipenv 的使用

创建一个项目文件夹，并使用cmd打开当前目录,使用pipenv install 进行本次项目的初始化隔离虚拟环境。虚拟环境文件夹的目录名称的形式为"当前项目目录名+一串随机字符",比如helloflask-5pa0Zfzew.

* 1：`pipenv install`

* 2:  在当前项目目录下激活虚拟环境,`pipenv shell`，激活后其实就类似与virtualenv之后那样,可以使用`pip list`来查看当前项目所安装的包，`pip install `来安装本次项目需要用到的第三方库

## 项目的移植与迁移

当切换到另外一台电脑的时候，只需要在该电脑上安装pipenv， 并且进入当前项目文件目录，使用`pipenv install`进行初始化
