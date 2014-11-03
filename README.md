轻量级混合前端工程模板
====================
上汽品质 · 全程畅享 · 专业 · 专注 · 信赖 · 保障
上海赛可电子商务有限公司

***你不一定会在这儿找到令你惊讶的东西，但是我们需要你的热情！^_^***



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

+ 在 WEB 容器内实时开发；

+ 压缩 HTML 超文本标记文件；

+ 压缩 CSS 样式表文件；

+ 合并公共 / 页面独有样式表文件；

+ 针对 CSS 样式表文件作语法、规范的检测；

+ 压缩 JavaScript 脚本文件；

+ 针对 JavaScript 脚本文件作语法、规范的检测；

+ 合并公共 / 页面独有脚本文件；

+ 合并精灵图；

+ 转换并替换 CSS 样式表内链接的图片为 Data URI 的表现形式；

+ 生成、更新 HTML5 应用缓存清单文件；

+ 为 CSS 样式表文件添加 MD5 散列，并替换相关 HTML 超文本标记文件内对应的 " Link " 标签的属性，以供实时更新缓存；

+ 为 JavaScript 脚本文件添加 MD5 散列，并替换相关 HTML 超文本标记文件内对应的 " Script " 标签的属性，以供实时更新缓存；

+ 将生产目录（模拟）下所有项目独有、未压缩的 JavaScript 脚本移出至工程根目录下 " dev/javascript " 文件夹内。

> 工程操作模式分类为 " 编辑模式 "，" 压缩模式 "，" 发布模式 " 3种。

####预览模式

```bash
grunt pa
```
可以通过这个命令预览工程内具体、主要成果。（ 命令化名全称： " preview app " ）

```bash
grunt pr
```
工程中除了 " Markdown " 格式的 " README " （ 工程描述 ）文件之外，还包含 " HTML " 表现形式的 " README " （ 工程描述 ）元素。可以通过这个命令在本地预览/查看。（ 命令化名全称： " preview readme " ）

####编辑模式

```bash
grunt
```
工程中的 " HTML " 分为 3 种类型：可编辑版，预发布版，压缩版。默认任务会假定 " app/ " 目录下存在的都是压缩后的 " HTML " 文件，会先将这些" HTML " 文件替换成从 " dev/html/ " 目录下抽取出的相对应、可编辑、未压缩的 " HTML " 文件。工程被克隆下来后，优先运行该命令，以进入编辑模式。

```bash
grunt eap
```
工程被发布时会将未压缩的 JavaScript 移出可访问目录，以尽可能保证相关实现逻辑的保密性，所以如果工程为发布后的状态，那么一定要通过该命令进入正常的编辑模式。（ 命令化名全称： " edit after publish " ）

```bash
grunt er
```
工程中除了 " Markdown " 格式的 " README " （ 工程描述 ）文件之外，还包含 " HTML " 表现形式的 " README " （ 工程描述 ）元素。可以运行该命令进入 TA 的编辑模式。（ 命令化名全称： " edit readme " ）

```bash
grunt bahtml
```
在编辑模式中，可以运行该命令及时将对 "app" 目录下的 " HTML " 的编辑成果备份到 " dev/html " 目录下。（ 命令化名全称： " backup app html " ）

```bash
grunt brhtml
```
在编辑模式中，可以运行该命令及时将对项目根目录下的 " HTML " 的编辑成果备份到 " dev/gh-pages/html " 目录下。（ 命令化名全称： " backup readme html " ）

```bash
grunt lall
```
在编辑模式中，可以单独运行该命令对指定目录下的 " CSS " 样式表文件、" JavaScript " 脚本文件作语法、规范的检查。（ 命令化名全称： " lint all " ）

```bash
grunt lac
```
在编辑模式中，可以单独运行该命令对指定目录下的 " CSS " 样式表文件作语法、规范的检查。（ 命令化名全称： " lint app css " ）

```bash
grunt laj
```
在编辑模式中，可以单独运行该命令对指定目录下的 " JavaScript " 脚本文件作语法、规范的检查。（ 命令化名全称： " lint app js " ）

####编辑模式

```bash
grunt ca
```
可以运行该命令先备份所有对 " HTML " 的编辑成果；同时压缩 " HTML ", " CSS ", " JavaScript " 文件（注意！未修改或未更新的情况下是不会重新压缩的）；最后按预先定义好的的合并规则自动合并相关 " CSS ", " JavaScript " 文件。（ 命令化名全称： " compress app " ）

```bash
grunt caa
```
可以运行该命令先备份所有对 " HTML " 的编辑成果；同时强制（未修改或未更新的情况下也会被再重新压缩一次）压缩 " HTML ", " CSS ", " JavaScript " 文件；最后按预先定义好的的合并规则自动合并相关 " CSS ", " JavaScript " 文件。（ 命令化名全称： " compress app absolutely " ）

```bash
grunt caj
```
可以运行该命令单独压缩" JavaScript " 文件（注意！未修改或未更新的情况下是不会重新压缩的）；最后按预先定义好的的合并规则自动合并相关 " JavaScript " 文件。（ 命令化名全称： " compress app javascript " ）

```bash
grunt caja
```
可以运行该命令单独强制（未修改或未更新的情况下也会被再重新压缩一次）压缩" JavaScript " 文件；最后按预先定义好的的合并规则自动合并相关 " JavaScript " 文件。（ 命令化名全称： " compress app javascript absolutely " ）

```bash
grunt cac
```
可以运行该命令单独压缩" CSS " 文件（注意！未修改或未更新的情况下是不会重新压缩的）；最后按预先定义好的的合并规则自动合并相关 " CSS " 文件。（ 命令化名全称： " compress app css " ）

```bash
grunt caca
```
可以运行该命令单独强制（未修改或未更新的情况下也会被再重新压缩一次）压缩" CSS " 文件；最后按预先定义好的的合并规则自动合并相关 " CSS " 文件。（ 命令化名全称： " compress app css absolutely " ）

```bash
grunt cr
```
可以运行该命令压缩 " WEB " 表现形式的 " README " （ 工程描述 ）元素。（ 命令化名全称： " compress readme " ）

```bash
grunt sprites
```
可以运行该命令按照预先定义好的规则合并指定目录下的需要被涉及的零散图片为 " CSS " 精灵图。

```bash
grunt p
```
如果你在发布前已经执行过压缩、合并的操作（任务），应该通过运行该命令发布工程。（ 命令化名全称： " publish " ）

```bash
grunt pwc
```
可以运行该命令直接从编辑模式进入发布模式。（ 命令化名全称： " publish with compression " ）



如何创建独属于你的拷贝
--------------------

如果你已经在自己的电脑上安装并配置了上述开发依赖，你可以克隆一份
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