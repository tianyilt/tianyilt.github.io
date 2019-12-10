---
title: 2019-11-10-在github端fork远程同步
categories: Git
---
# 在github端fork远程同步
categories: Git
现在我们已经fork别人的一个远程仓库，经过一段时间，原仓库进行了一端更新，我们需要与远程的原仓库同步。

进入自己fork仓库的pull request


![1573359731289](在github端fork远程同步/1573359731289.png)

![1573359783354](%E5%9C%A8github%E7%AB%AFfork%E8%BF%9C%E7%A8%8B%E5%90%8C%E6%AD%A5/1573359783354.png)

可以发现目前默认是从自己仓库同步到原仓库，需要交换标签顺序，首先把发起栏目改成原仓库

![1573359832906](%E5%9C%A8github%E7%AB%AFfork%E8%BF%9C%E7%A8%8B%E5%90%8C%E6%AD%A5/1573359832906.png)





可是会出现这个页面

![1573359891243](%E5%9C%A8github%E7%AB%AFfork%E8%BF%9C%E7%A8%8B%E5%90%8C%E6%AD%A5/1573359891243.png)

点击

 compare across forks

![1573359938161](%E5%9C%A8github%E7%AB%AFfork%E8%BF%9C%E7%A8%8B%E5%90%8C%E6%AD%A5/1573359938161.png)

再把目标仓库换成自己fork仓库

![1573359959587](%E5%9C%A8github%E7%AB%AFfork%E8%BF%9C%E7%A8%8B%E5%90%8C%E6%AD%A5/1573359959587.png)

可以从这里看到自己更新的内容

点击![1573359982645](%E5%9C%A8github%E7%AB%AFfork%E8%BF%9C%E7%A8%8B%E5%90%8C%E6%AD%A5/1573359982645.png)

![1573360028978](%E5%9C%A8github%E7%AB%AFfork%E8%BF%9C%E7%A8%8B%E5%90%8C%E6%AD%A5/1573360028978.png)



![1573360054850](%E5%9C%A8github%E7%AB%AFfork%E8%BF%9C%E7%A8%8B%E5%90%8C%E6%AD%A5/1573360054850.png)

自此，完成合并



从自己pull request到原仓库方法一样