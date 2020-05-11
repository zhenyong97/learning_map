git init 初始化一个本地git仓库
git status 查看当前git状态(是否有修改什么的)
git add <filename> 添加某个文件到当前的git当中
git diff <filename>  查看某个被修改的文件
git commit -m "<注释>"  提交到并保存到本地缓存git当中
git log 查看最近提交的信息
    * 唯一显示的sha值，作为本次提交的id
    * 本次commit的提交者
    * 本次提交的日期时间
    * 本次提交的commit的信息

git rm --cached [filename] 让git停止追踪一个文件

----

git 的配置
git --version 查看当前git版本

git config --global user.name "name"  设置全局git username
git config --global user.email "email"  设置全局 eamil

git 本地仓库挂载云端仓库
git remote add origin ....(git address)

git 本地git 推送到云端master分支
git push -u origin master

-------------------------------

添加.gitignore文件，里面的内容是git忽略的内容

-------------------

git 创建分支(平行世界)

git branch [branch_name] 创建分支

git checkout [branch_name]  切换分支

git branch -d [branch_name] 删除分支 （-D 强制删除）

git 合并分支 

git merge [branch_name]  当前分支合并该分支[branch_name] 

---------------------

git remote -v 查看本地git仓库挂靠的远端地址

git remote rm origin 删除挂靠的远端地址

git remote add origin [url] 修改远端地址

git remote origin set-url [url] 直接修改远端地址



### Start: 开始

Task1： 从云端clone下来的空仓库

```shell
echo "# my_blog" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://xxxxxxxxxxxxxxxxxxxxxxxxx.git

git push -u origin master
```

Task2：本地的git推送到云端的git

```shell
git remote add origin https://xxxxxxxxxxxxxxxxxxxxxxxxx.git
git push -u origin maste
```
