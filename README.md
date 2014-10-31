车享网
======
上汽品质 · 全程畅享 · 专业 · 专注 · 信赖 · 保障

***你不一定会在这儿找到令你惊讶的东西，但是我们需要你的热情！^_^***

> 项目名称命名规则参阅 [*项目名称命名规则 & 描述*]( '点击 · Click')



主要开发依赖
-----------

+ [*Git*](http://git-scm.com/ '点击 · Click')

+ [*Node.js*](http://nodejs.org/ '点击 · Click')

+ [*Grunt*](http://gruntjs.com/ '点击 · Click')

> 顺序安装；所有依赖均基于全局环境安装。

####Git

整个项目使用 [*Git*](http://git-scm.com/ '点击 · Click') 进行版本控制，并托管在 [*Github*](https://github.com/ '点击 · Click') 上。你
可以通过下述命令检查 [*Git*](http://git-scm.com/ '点击 · Click') 在你的电脑上是否被安装成功：

```bash
git --version
```

####Node

整个项目中的很多构建任务基于 [*Node.js*](http://nodejs.org/ '点击 · Click') 运行。你可以通过下述命令检查
[*Node.js*](http://nodejs.org/ '点击 · Click') 在你的电脑上是否被安装成功：

```bash
node --version
```

####Grunt

项目中的所有构建任务目前完全使用 [*Grunt*](http://gruntjs.com/ '点击 · Click') 。你可以通过下述命令检查
[*Grunt*](http://gruntjs.com/ '点击 · Click') 在你的电脑上是否被安装成功：

```bash
grunt -version
```



如何创建独属于你的拷贝
--------------------

如果你已经在自己的电脑上安装并配置了上述开发依赖，你可以克隆一份
[*"saike.web.starter.kit-bumblebee" 主要镜像*](https://github.com/iTonyYo/saike.web.starter.kit-bumblebee/ '点击 · Click') 副本至指定文件目录：

```bash
git clone https://github.com/iTonyYo/saike.web.starter.kit-bumblebee.git
```

你也可以使用 [*Github for Windows*](https://windows.github.com '点击 · Click') 或者 [*GitHub for Mac*](https://mac.github.com '点击 · Click') 客户端从
[*"saike.web.starter.kit-bumblebee" 主要镜像*](https://github.com/iTonyYo/saike.web.starter.kit-bumblebee/ '点击 · Click') 位置克隆一份副本。

克隆完全后，进入 "saike.web.starter.kit-bumblebee" 文件夹，安装所有基于 [*Grunt*](http://gruntjs.com/ '点击 · Click') 的开发依赖：

```bash
npm install
```

如果你是在 Mac 等系统上操作，需要提升操作权限：

```bash
sudo npm install
```

至此，所有开发依赖就安装完了，你可以查看所有已经存在、可被执行、有效的构建任务：

```bash
grunt -help
```