# git问题

- git 忽略文件无法生效，一般因为本地缓存，得清除

- git rm -r --cached .

- git add  .

- git commit -m '.gitignore'

1. **删除特定的分支节点：**
- git log 查处日志
- a（先）b（中）c（后），想要删除b的提交节点
- git rebase -i  c(id值) 释放出c以前的所有节点
- 会进入vim命令文本，找出b节点提交的id，将前面的pick改为drop；
- git push origin HEAD  --force

2. **合并特定的分支节点**
- git cherry-pick commit_id

3. **版本回退**
- git reset --hard commit_id
- git push -f origin 分支

4. **删除远程分支**
- git branch -r -d origin/分支名；
- git push origin :分支名
**或者：** git push origin --delete 分支名  

5. **解决git命令出错**
-  remove .git/gc.log.的错误：命令行-- git config gc.auto 0表示关闭gc功能
- git config gc.auto 1 表示开启gc功能

6. **解决windows下git全局密码输入不提示**

 -  ` git config --system --unset credential.helper`
   
 7.**解决git每次输入密码都得提示**

 - 进入项目目录下的.git文件夹，通过vim config命令打开文件
 - 找到 [remote 'origin']目录下的url进行修改
    - ` 列如： https://github.com/blockChain.git修改成 https://用户名:密码@github.com/blockChain.git保存即可。`
 - 上诉修改不限系统操作环境。
 
 8.**解决无需全局配置git环境的用户名和邮箱**
 - 作为程序员会存在很多git账号，不是每个账号的邮箱和账号都是一样的，为了解决这个问题，当前项目配置当前邮箱配置当前账号的问题
 - 进入当前项目目录下进入.git文件vim config文件，在该文件的最后一行输入如下代码
   ```
   [user]
        email= 邮箱
        name = 用户名

   ```
  - 保存就行
- 获取远程仓库的方式:
  1. git clone 直接拉取项目；
  ```
  通过clone下来的，仓库会默认本地仓库的别名是`origin`
  ```
  2. 通过添加远程仓库；
    - git remote add 仓库别名 url
    - git fetch 仓库别名   
    - git push [remote-name] [branch-name] 
    - git remote show origin 远程仓库信息
    - git remote rename scottdao paul 仓库别名重命名
    - git remote rm paul 删除仓库
    -  git push -u origin master 采用强制推送
--------------------------------------


#### study乐园

- [react/webpack/redux](./react-webpack-redux)
- [react/webpack4.0](./react-webpack4.0)
- [react/webpack3.0](./react-webpack3.0)
- [vue](./vueTwo)
- [utils类插件](./webpack)
- [react/typescript](https://github.com/scottdao/react-typescript/tree/master/practiceArrange)
- [meteor](./meteor)