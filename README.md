## 南京邮电大学小程序

南京邮电大学小程序是由南京邮电大学青柚工作室开发，一款方便快捷，无需下载安装即可在微信客户端即开即用的 APP，有别于一般需要下载安装的 APP，也不同于微信公众号，具有方便快捷的特点。

<p align="center">
<img src="https://static.airbob.org/under-graduate/undergraduate-qrcode.jpg" alt="菊花码" width="200" height="200">
</p>

### 学习本项目

整套前端使用 [Wepy](https://github.com/tencent/wepy) 开发，提倡前端组件化工程化，高效的完成前端项目。

#### 项目文件结构

```
project
│
└───src
│   │   assets 静态图片
│   │
│   └───campus-card-page
│   │    │   components 校园卡模块组件
│   │    │   pages      校园卡模块页面
│   │
│   └───components 全局组件
│   │    │   qy-container.wpy 
│   │    │   qy-navigation.wpy
│   │    │   ...
│   │
│   └───css 全局样式
│   │    │   global-style.styl
│   │    │   loading.styl
│   │    │   ...
│   │
│   └───edu-admin-page
│   │    │   components 正方模块组件
│   │    │   pages      正方模块页面
│   │
│   └───mixins 混入
│   │    │   Gpa                  Gpa 计算器的 mixin
│   │    │   class.js             课表的 mixin
│   │    │   all-search-thing.js  模块开关的控制
│   │    │   ...
│   │
│   └───others-edu-page
│   │    │   components 体育部模块组件
│   │    │   pages      体育部模块页面
│   │
│   └───others-page
│   │    │   components 其他模块组件
│   │    │   pages      其他模块页面
│   │
│   └───pages 三个主页面
│   │    │   index.wpy     首页
│   │    │   news-list.wpy 资讯页
│   │    │   profile.wpy   个人中心页
│   │
│   └───store 状态管理
│   │
│   └───utils 工具辅助函数
│   │
│   └───app.wpy 项目配置
│       
│   .editorconfig
│   .eslintignore
│   .eslintrc.js
│   .gitignore
│   .prettierrc
│   CHANGELOG.md
│   LICENSE   
│   README.md
│   package.json
│   wepy.config.js

```

#### 安装（更新） wepy 命令行工具

> node >= 8.9

```bash
$ npm install -g wepy-cli
```

#### 安装依赖 & 开发实时编译

```
$ cd [project]

$ npm install

$ npm run dev
```

------

### 青柚工作室

[青柚工作室的主页](https://qingyou.njupt.edu.cn)

青柚工作室是由南京邮电大学信息办指导建设，以学生开发为核心的互联网工作团队。

倡导使用新技术、优秀的技术去实现智慧校园，服务同学。

本项目至少会持续维护到南京邮电大学本科生 3.x 版本结束。

------

### 开源许可

本项目使用开源许可证 `License AGPLv3` ，代码开源仅供学习。

请认真阅读并遵守以下开源协议

`AGPLv3` [GNU Affero General Public License v3.0](https://github.com/GreenPomelo/Undergraduate/blob/master/LICENSE)

#### 青柚工作室开源计划：

希望能够将实战中的技术成果回报社区，并且鼓励社区为这个项目做出贡献，大家可以通过 `Pull Requests` 的方式帮我们解决目前存在的不足，或者通过 `Issues` 告知我们。

------

### 青柚工作室招新计划：

青柚工作室持续招新，对象为南京邮电大学全日制本科生，主要以大二大三在校学生为主，大一能力强者亦可。招新岗位为技术、外联、运营、办公、程序员鼓励师......希望有兴趣的同学能投递简历至`qingyou@njupt.edu.cn`，一起来用爱发电，为南邮做出更多方便师生的项目。

------

### 更新日志

[CHANGELOG](./CHANGELOG.md)

-----

### Core Team(Contributors)

| [<img src="https://github.com/solojiang.png?s=64" width="100px;"/><br /><sub><b>SoloJiang</b></sub>](https://github.com/solojiang)<br />Leader & News   | [<img src="https://github.com/Bosspwn.png?s=64" width="100px;"/><br /><sub><b>BossPwn</b></sub>](https://github.com/Bosspwn)<br />Core<br />  | [<img src="https://github.com/flytam.png?s=64" width="100px;"/><br /><sub><b>Flytam</b></sub>](https://github.com/flytam)<br />Campus-card  | [<img src="https://github.com/GooeyNyan.png?s=64" width="100px;"/><br /><sub><b>Gooey Nyan</b></sub>](https://github.com/GooeyNyan)<br />GPA calculator | [<img src="https://github.com/UZIhuhuhu.png?s=64" width="100px;"/><br /><sub><b>WynnXin</b></sub>](https://github.com/UZIhuhuhu)<br />Association | [<img src="https://github.com/niffler-bkkkkk.png?s=64" width="100px;"/><br /><sub><b>niffler-bkkkk</b></sub>](https://github.com/niffler-bkkkkk)<br />Questionnaire   |  [<img src="https://github.com/kishivn.png?s=64" width="100px;"/><br /><sub><b>kishivn</b></sub>](https://github.com/kishivn)<br />Information |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |

------
