轻量级混合前端工程模板
====================
上汽品质 · 全程畅享 · 专业 · 专注 · 信赖 · 保障
上海赛可电子商务有限公司

***你不一定会在这儿找到令你惊讶的东西，但是我们需要你的热情！^_^***

> [*演示*](http://s-chexiang.github.io/saike.web.starter.kit-bumblebee/app/ '点击 · Click')



主要开发规范
-----------

+ [*HTML 指南*](https://www.evernote.com/pub/itonyyo/htmlguide '点击 · Click')

+ [*CSS 指南*](https://www.evernote.com/pub/itonyyo/cssguide '点击 · Click')

+ [*JavaScript 指南*](https://www.evernote.com/pub/itonyyo/javascriptguide '点击 · Click')

+ [*工程模板指南*](https://www.evernote.com/pub/itonyyo/project-template-guide '点击 · Click')



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



主要构建任务
-----------

+ 在 `WEB` 容器内实时开发；

+ 压缩 `HTML` 超文本标记文件；

+ 压缩 `CSS` 样式表文件；

+ 合并公共 / 页面独有样式表文件；

+ 针对 `CSS` 样式表文件作语法、规范的检测；

+ 压缩 `JavaScript` 脚本文件；

+ 针对 `JavaScript` 脚本文件作语法、规范的检测；

+ 合并公共 / 页面独有脚本文件；

+ 合并精灵图；

+ 转换并替换 `CSS` 样式表内链接的图片为 `Data URI` 的表现形式；

+ 生成、更新 `HTML5` 应用缓存清单文件；

+ 为 `CSS` 样式表文件添加 `MD5` 散列，并替换相关 `HTML` 超文本标记文件内对应的 `Link` 标签的属性，以供实时更新缓存；

+ 为 `JavaScript` 脚本文件添加 `MD5` 散列，并替换相关 `HTML` 超文本标记文件内对应的 `Script` 标签的属性，以供实时更新缓存；

+ 将生产目录（模拟）下所有项目独有、未压缩的 `JavaScript` 脚本移出至工程根目录下 `dev/javascript` 文件夹内。

> 工程设计为尽可能不影响开发者实际编辑效率的形式，比如：在WEB容器内实时开发时，编辑并保存后呈现结果的时间几乎是即时，而非需要等待个1～2秒，甚至更多。

> 工程操作模式分类为 `编辑模式`，`预发布模式`，`发布模式` 3种。

####预览模式

```bash
grunt pa
```
可以通过这个命令预览工程内具体、主要成果。（ 命令化名全称： `preview app` ）

```bash
grunt pr
```
工程中除了 `Markdown` 格式的 `README` （ 工程描述 ）文件之外，还包含 `HTML` 表现形式的 `README` （ 工程描述 ）元素。可以通过这个命令在本地预览/查看。（ 命令化名全称： `preview readme` ）

####编辑模式

```bash
grunt
```
工程中的 `HTML` 分为 `3` 种类型：可编辑版，预发布版，压缩版。默认任务会假定 `app/` 目录下存在的都是压缩后的 `HTML` 文件，会先将这些`HTML` 文件替换成从 `dev/html/` 目录下抽取出的相对应、可编辑、未压缩的 `HTML` 文件。工程被克隆下来后，优先运行该命令，以进入编辑模式。

```bash
grunt eap
```
工程被发布时会将未压缩的 JavaScript 移出可访问目录，以尽可能保证相关实现逻辑的保密性，所以如果工程为发布后的状态，那么一定要通过该命令进入正常的编辑模式。（ 命令化名全称： `edit after publish` ）

```bash
grunt er
```
工程中除了 `Markdown` 格式的 `README` （ 工程描述 ）文件之外，还包含 `HTML` 表现形式的 `README` （ 工程描述 ）元素。可以运行该命令进入 `TA` 的编辑模式。（ 命令化名全称： `edit readme` ）

```bash
grunt bahtml
```
在编辑模式中，可以运行该命令及时将对 `app` 目录下的 `HTML` 的编辑成果备份到 `dev/html` 目录下。（ 命令化名全称： `backup app html` ）

```bash
grunt brhtml
```
在编辑模式中，可以运行该命令及时将对项目根目录下的 `HTML` 的编辑成果备份到 `dev/gh-pages/html` 目录下。（ 命令化名全称： `backup readme html` ）

```bash
grunt lall
```
在编辑模式中，可以单独运行该命令对指定目录下的 `CSS` 样式表文件、`JavaScript` 脚本文件作语法、规范的检查。（ 命令化名全称： `lint all` ）

```bash
grunt lac
```
在编辑模式中，可以单独运行该命令对指定目录下的 `CSS` 样式表文件作语法、规范的检查。（ 命令化名全称： `lint app css` ）

```bash
grunt laj
```
在编辑模式中，可以单独运行该命令对指定目录下的 `JavaScript` 脚本文件作语法、规范的检查。（ 命令化名全称： `lint app js` ）

####预发布模式

```bash
grunt ca
```
可以运行该命令先备份所有对 `HTML` 的编辑成果；同时压缩 `HTML`, `CSS`, `JavaScript` 文件（注意！未修改或未更新的情况下是不会重新压缩的）；最后按预先定义好的的合并规则自动合并相关 `CSS`, `JavaScript` 文件。（ 命令化名全称： `compress app` ）

```bash
grunt caa
```
可以运行该命令先备份所有对 `HTML` 的编辑成果；同时强制（未修改或未更新的情况下也会被再重新压缩一次）压缩 `HTML`, `CSS`, `JavaScript` 文件；最后按预先定义好的的合并规则自动合并相关 `CSS`, `JavaScript` 文件。（ 命令化名全称： `compress app absolutely` ）

```bash
grunt caj
```
可以运行该命令单独压缩`JavaScript` 文件（注意！未修改或未更新的情况下是不会重新压缩的）；最后按预先定义好的的合并规则自动合并相关 `JavaScript` 文件。（ 命令化名全称： `compress app javascript` ）

```bash
grunt caja
```
可以运行该命令单独强制（未修改或未更新的情况下也会被再重新压缩一次）压缩`JavaScript` 文件；最后按预先定义好的的合并规则自动合并相关 `JavaScript` 文件。（ 命令化名全称： `compress app javascript absolutely` ）

```bash
grunt cac
```
可以运行该命令单独压缩`CSS` 文件（注意！未修改或未更新的情况下是不会重新压缩的）；最后按预先定义好的的合并规则自动合并相关 `CSS` 文件。（ 命令化名全称： `compress app css` ）

```bash
grunt caca
```
可以运行该命令单独强制（未修改或未更新的情况下也会被再重新压缩一次）压缩`CSS` 文件；最后按预先定义好的的合并规则自动合并相关 `CSS` 文件。（ 命令化名全称： `compress app css absolutely` ）

```bash
grunt cr
```
可以运行该命令压缩 `WEB` 表现形式的 `README` （ 工程描述 ）元素。（ 命令化名全称： `compress readme` ）

```bash
grunt sprites
```
可以运行该命令按照预先定义好的规则合并指定目录下的需要被涉及的零散图片为 `CSS` 精灵图。

####发布模式

```bash
grunt p
```
如果你在发布前已经执行过压缩、合并的操作（任务），应该通过运行该命令发布工程。（ 命令化名全称： `publish` ）

```bash
grunt pwc
```
可以运行该命令直接从编辑模式进入发布模式。（ 命令化名全称： `publish with compression` ）



主要工作流
---------

**编辑模式**：若 `app/` 目录下 `HTML` 压缩状态为未压缩，则当前项目处于编辑模式。

**预发布模式**：若 `app/resource/js/saike.web.starter.kit-bumblebee/` 目录下 `JavaScript` 存在未压缩文件，且 `app/` 目录下 `HTML` 不存在未压缩文件，则当前项目处于预发布模式。

**发布模式**：若 `app/resource/js/saike.web.starter.kit-bumblebee/` 目录下 `JavaScript` 不存在未压缩文件，且 `app/` 目录下 `HTML` 不存在未压缩文件，则当前项目处于发布模式。

使工程进入发布模式的命令存在两者，集成了所有压缩、合并等任务的发布命令可以直接在编辑模式运行，另一个则需要在其运行前先单独运行所有压缩、合并等任务：

+ *编辑模式 -> 预发布模式 -> 发布模式*
> grunt -> grunt ca / caa -> grunt p

+ *编辑模式 -> 发布模式*
> grunt -> grunt pwc

若要进入编辑模式的项目先前已被发布过，则需要通过 `grunt eap` 命令使工程进入编辑模式，而非 `grunt (default)`。预发布模式只是进行了压缩、合并等任务，发布任务还会包括移出指定类型文件、使用 `MD5` 散列替换视图文件关联的静态资源文件名、生成/更新 `HTML5` 应用程序缓存清单等任务：

+ *发布模式 -> 编辑模式 -> 预发布模式 -> 发布模式*
> grunt p / grunt pwc -> grunt eap -> grunt ca / caa -> grunt p

+ *发布模式 -> 编辑模式 -> 发布模式*
> grunt p / grunt pwc -> grunt eap -> grunt pwc



如何创建独属于你的拷贝
--------------------

如果你已经在自己的电脑上安装并配置了上述[开发依赖](https://github.com/S-CHEXIANG/saike.web.starter.kit-bumblebee/tree/master#%E4%B8%BB%E8%A6%81%E5%BC%80%E5%8F%91%E4%BE%9D%E8%B5%96 '点击 · Click')，你可以克隆一份
[*"saike.web.starter.kit-bumblebee" 主要镜像*](https://github.com/S-CHEXIANG/saike.web.starter.kit-bumblebee/ '点击 · Click') 副本至指定文件目录：

```bash
git clone https://github.com/S-CHEXIANG/saike.web.starter.kit-bumblebee.git
```

你也可以使用 [*Github for Windows*](https://windows.github.com '点击 · Click') 或者 [*GitHub for Mac*](https://mac.github.com '点击 · Click') 客户端从
[*"saike.web.starter.kit-bumblebee" 主要镜像*](https://github.com/S-CHEXIANG/saike.web.starter.kit-bumblebee/ '点击 · Click') 位置克隆一份副本。

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