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

----

git 的配置
git --version 查看当前git版本

git config --global user.name "name"  设置全局git username
git config --global user.email "email"  设置全局 eamil

git 本地仓库挂载云端仓库
git remote add origin ....(git address)

git 本地git 推送到云端master分支
git push -u origin master


