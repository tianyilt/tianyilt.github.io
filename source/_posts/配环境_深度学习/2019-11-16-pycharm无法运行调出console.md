---
title: 2019-11-16-pycharm无法运行调出console
categories: 配环境_深度学习
---
这个时候要重装ipython
categories: 配置深度学习环境大作战

- 物理删除ipython文件

  在anaconda安装该环境的安装目录下

删除**ipython-版本号-py3.6.egg-info文件**

如D:\appstore\anaconda\env\pytorch\Lib\site-packages\ipython-5.1.0-py3.6.egg-info 文件即可

- 然后在相应conda环境下pip install ipython