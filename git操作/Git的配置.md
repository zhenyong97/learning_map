# Git的配置

Git的所有配置信息都能在安装目录下找到。

1)  Git\etc\gitconfig : Git安装目录下的gitconfig --system

2) C:\User\Administartor\\.gitconfig ：  只适用于当前登录用户的配置 --global 全局

都可以直接编辑文件，通过命令设置后会影响到这里

* 查看配置 `git config -l`

* 查看系统配置 `git config --system --list`

* 查看本地配置 `git config --global --list`
  
  -------

> 设置用户名与邮箱(用户标识，必要)

当你安装Git后首先要做的是设置你的用户名称和e-mail地址。这是非常重要的。因为没吃Git提交都会使用该信息。它被永远的嵌入到了你的提交中。

```git
git config --global user.name "sdfd" # 名称
git config --global user.email "xxxxx@xx.com" # 邮箱
```

只需要做一次这个设置，如果你传递了--global选项，因为Git将总是回使用该信息来处理你在系统中所做的一切操作。如果你希望在一个特定的项目中使用不同的名称或者e-mail地址，你可以在该项目运行该命令而不要--global选项。总之--global为全局配置，不加为某个项目的特定配置。


