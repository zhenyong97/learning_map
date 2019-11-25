# Manjaro-Linux初始使用

Manjaro是一个Linux的发行版本，使用`pacman`命令管理库软件包, 接下来则介绍初次上手Manjaro时需要准备的事情。

> Ubuntu: apt  | apt-get 
> 
> CentOs: yum

* 自动测试各个源的速度，并自动对应选择

`sudo pacman-mirrors -i -c China -m rank`

`sudo pacman -Syy`

* 对整个系统进行更新

`sudo pacman -Syu`

---------------------

* 添加archlinuxcn源，添加库源（archlinux是一个由Arch Linux中文社区驱动的非官方的用户仓库）

`sudo vi /etc/pacman.conf`

在文尾追加如下内容

```makefile
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

添加了另外的源后接下来安装输入法

```shell
sudo pacman -S fcitx-im
sudo pacman -S fcitx-configtool
sudo pacman -S fcitx-googlepinyin
```

安装好后编辑用户，使在每个环境下都使用fcitx，**编辑~/.xprofile文件**

`sudo vi ~/.xprofile`填写如下内容

```shell
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```

重启即可
