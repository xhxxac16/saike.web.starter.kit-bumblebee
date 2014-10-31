车享网 · 轻量级前端工程
=====================
文件夹 · 文件 · 结构

```
saike.index/                                                 # 根目录存放所有自动化开发配置文件
├── [.git]
├── [doc]                                                    # 工程文档（包含规范、API 等文档）
├── [node_modules]                                           # 自动化工程组件依赖存放处
├── [app]                                                    # 实际可访问目录
|	├── [sitemap]
|	├── [notifications]
|	├── [resource]
│   │   ├── [font]                                           # 存放字体文件
│   │   │   ├── [saike.web.starter.kit-bumblebee]            # 存放当前项目字体文件
│   │   │   ├── [saike.web.starter.kit-bumblebee_framework]  # 存放当前项目用户界面套件字体文件
│   │   ├── [css]                                            # 存放 CSS 样式表文件
│   │   │   ├── [saike.web.starter.kit-bumblebee]            # 存放当前项目 CSS 样式表文件
│   │   │   ├── [saike.web.starter.kit-bumblebee_framework]  # 存放当前项目用户界面套件 CSS 样式表文件
|   |   |   |   ├── [base]
|   |   |   |   ├── [component]
|   |   |   |   ├── [media_query]
|   |   |   |   ├── [scaffolding]
│   │   ├── [img]
│   │   │   ├── [saike.web.starter.kit-bumblebee]            # 存放当前项目图片文件
│   │   │   ├── [saike.web.starter.kit-bumblebee_framework]  # 存放当前当前项目用户界面套件图片文件
│   │   ├── [js]
│   │   │   ├── [saike.web.starter.kit-bumblebee]            # 如果项目尚未采用 Require.js，存放引导脚本，否则存放独属于各页面交互、业务等逻辑脚本
|   |   |   |   ├── [logic]                                  # 如果项目尚未采用 Require.js，则存放当前项目不同视图中交互、业务等逻辑脚本
|   |   |   |   ├── [component]                              # 如果项目尚未采用 Require.js，则存放可共用的交互、业务等逻辑脚本
│   │   │   ├── [saike.web.starter.kit-bumblebee_framework]  # 存放当前当前项目用户界面套件脚本
├── [dev]                                                    # 预处理目录
|	├── [html]                                               # 存放 HTML 预发布文件
|	├── [jade]                                               # 存放 HTML 预处理文件
|	├── [haml]                                               # 存放 HTML 预处理文件
|	├── [sass]                                               # 存放 CSS 预处理文件
|	├── [less]                                               # 存放 CSS 预处理文件
|	├── [image]                                              # 存放图片预处理文件
|	├── [coffeescript]                                       # 存放 JavaScript 预处理文件
├── [design]                                                 # 存放 HTML 预处理文件
├── [grunt]                                                  # 存放自动化任务配置文件
├── [gh-pages]                                               # 存放独属于项目描述页面的外链文件
```