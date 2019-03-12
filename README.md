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
