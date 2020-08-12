#### git 知识点
+ config 三个作用域
    1. git config --local 只对某个仓库有效
    2. git config --global 对当前用户所有仓库有效
    3. git config --system 对系统的所有用户有效
  - 查看config
    1. git config --local --list
    2. xxxx --list
    优先级：local>global>system
+ 暂存区：git add 与 git commit
+ 变更文件名:git mv file --> newFile
+ git log --oneline --all
  - git help --web log 通过gui图查看git log命令
  - git log --oneline temp
+ gitk：git图形化界面；
+ .git本地服务器
  - git cat-file -t hash值查看类型:commit tree blob;
  - git cat-file -p hash值查看内容;
  - refs: 引用
  - tree commit 与blob的关系与区别
+ 分离头指针：基于某个commit 进行git checkout 是没有任何分支下进行修改
  - 变更没有分支下工作，切分支会导致内容丢失，会被git清除
  - 在分离头指针下进行工作，需注意想要保存，切到别的分支，则可以通过git branch branch-name headrefsname(hash值)进行切分支保存该内容
+ HEAD与branch的理解
+ 修改 commit message信息
  - 最近提交：git commit --amend
  - 很久提交修改信息: git rebase ---- 先分离头指针，再进行变基； 将pick改成r保存退出，进入另外一个界面修改message信息； 
  - 将多个连续的commit合成一个commit: git rebase  将pick改成s保存退出，进入另一个界面修改添加信息，将commit信息合成一个信息
  - 将不连续的commit合并成一个commit:
+ 暂存区比较差异:git diff --cached
+ 工作区和暂存区差异：
  - git diff 比较所有区别
    1. 工作区：
    ```
    +.div{
    +    color: #ffffff;
    +}

    ```
    2. 暂存区:git commit -m 'info'
    ```
    - {}
    ```
+ 暂存区改变不保留
  - git reset HEAD:恢复暂存区跟head一致
  - git checkout `filename`
  - git reset HEAD -- `filename`:恢复到add之前
+ 撤消暂存进行版本回退
  - `git reset --hard (hashId)`
+ 比较两个分支单个文件的差异:`git branch -av:不同分支最近提交commit-id`
  - git diff branch-name branch-name filename
  - git diff commit-id commit-id filename
+ 删除文件
  - git rm filename
+ 紧急任务暂存处理，解决别的问题，重新回来拉出来再修改；
  - git stash 将内容暂存；
  - git stash list：暂存列表
  - git stash apply：将暂存区拉出来，依然会保存之前的内容
  - git stash pop:将暂存区内容拉出来，把暂存区的内容删除
+ git 备份
  - 本地协议:
    1. /path/to/repo.git -- 哑协议
    2. file:///path/to/repo.git -- 智能协议
  - http/https协议:
  - ssh协议:工作常用智能协议
  - 智能协议与哑协议的区别
    1. 哑协议速度慢,不可见
    2. 智能协议速度快，可见
  - git clone 进行本地区备份：--bare 裸仓库
    1. `git clone --bare file:///e/study/git-study zhineng.git`
    2. 将备份的可以当作一个远当仓库