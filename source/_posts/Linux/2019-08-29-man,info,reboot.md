---
title: 2019-08-29-man,info,reboot
categories: Linux
---
# man, info, shutdown
categories: Linux
## man

* 查看特定代号的man, 使用`man -f [words]`, 可以查询`[words]`代表的所有代号. `man -f`相当于`whatis`

```
# man -f passwd
passwd (5)           - password file
sslpasswd (1ssl)     - compute password hashes
passwd (1)           - update user's authentication tokens
```

* 粗略寻找文件和帮助, 使用`man -k [words]`, 则会正则匹配`[words]`,`man -k`相当于`apropos`.

* 查看man文档的类型数字代表的含义, 使用`man man`, 在第二页. 
* 查看特定类型的文件, 例如`passwd (5)`, 那么使用`man 5 passwd`.
* man文档存放在`/usr/share`目录下.

## info

* 将光标停在info节点上, 按住`[enter]`就可以进入该节点.
* `n`和`p`分别用于跳转到下一个, 上一个节点. 

## shutdown

* `shutdown -h 1:30`: 在1:30关机.
* `shutdown -h +10`: 在10分钟后关机.
* `shutdown -r now`: 立刻重启. 