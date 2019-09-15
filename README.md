## MiniProgram of Nanjing University of Posts and Telecommunications

English | [简体中文](./README-zh_CN.md)

### Introduction

The MiniProgram of Nanjing University of Posts and Telecommunications(hereinafter called NJUPT MiniProgram), developed by QingYou Studio of NJUPT, which is a convenient and swift application that can launch in WeChat client immediately dispense with download and install. Different from the common applications that need to download and install and WeChat Official Account, it is convenient and efficient.

<p align="center">
<img src="https://static.airbob.org/under-graduate/undergraduate-qrcode.jpg" alt="菊花码" width="200" height="200">
</p>

### Learn this Project

Advocating componentization and engineering of front-end, this project is developed by [Wepy](https://github.com/tencent/wepy), to finish front-end project efficiently.

### Files Structure

```
project
│
└───src
│   │   assets                          static images
│   │
│   └───campus-card-page
│   │    │   components                 components of Campus-card module
│   │    │   pages                      pages of Campus-card module
│   │
│   └───components                      global components
│   │    │   qy-container.wpy
│   │    │   qy-navigation.wpy
│   │    │   ...
│   │
│   └───css               			    global css style
│   │    │   global-style.styl
│   │    │   loading.styl
│   │    │   ...
│   │
│   └───edu-admin-page
│   │    │   components                 components of ZHENGFANG module
│   │    │   pages                      pages of ZHENGFANG module
│   │
│   └───mixins
│   │    │   Gpa                        mixin of GPA Calculator
│   │    │   class.js                   mixin of Curriculum
│   │    │   all-search-thing.js        controller of modules
│   │    │   ...
│   │
│   └───others-edu-page
│   │    │   components                 components of PE module
│   │    │   pages                      pages of PE module
│   │
│   └───others-page
│   │    │   components                 components of other modules
│   │    │   pages                      pages of other modules
│   │
│   └───pages                           Main Pages
│   │    │   index.wpy                  Homepage
│   │    │   news-list.wpy			    Information Page
│   │    │   profile.wpy   			    Personal Page
│   │
│   └───store 						    state management
│   │
│   └───utils 						    auxiliary functions
│   │
│   └───app.wpy 					    project config
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

### Install (Update) Wepy-Cli

> node >= 8.9

```bash
$ npm install -g wepy-cli
```

### Install Dependencies & Serve with Hot Reload

```
$ cd [project]

$ npm install

$ npm run dev
```

------

### QingYou Studio

[Homepage of QingYou Studio](https://qingyou.njupt.edu.cn)

Built up by Information Office of NJUPT, QingYou Studio is an Internet working team with student developement as its core.

We advocate to use new and excellent technologies to achieve the Smart Campus and to serve students.

This project will be maintained at least until the end of the 3.x version of NJUPT-Undergraduate.

------

### License

This project uses the license `License AGPLv3`,and the code is open source for learning.

Please read and abide by the following open source agreements:

`AGPLv3` [GNU Affero General Public License v3.0](https://github.com/GreenPomelo/Undergraduate/blob/master/LICENSE)

### QingYou Studio Open Source

We hope that we can return the technical achievements to the community, and we encourage the community to contribute to this project. You can help us resolve the existing deficiencises through `Pull Request`, or tell us through `Issue`.

------

### QingYou Studio Recruitment

Mainly in the sophomore and junior students, QingYou Studio is recruiting new members from the full-time undergraduates in NJUPT, and the freshman who has excellent ability can be also recruited. Our posts contain technology, outreach, operations, office and ...... We hope anyone interested in can submit your resume to `qingyou@njupt.edu.cn`, together with us to do more projects for teachers and students in NJUPT.

------

### Update Log

[CHANGELOG](./CHANGELOG.md)

-----

### Core Team(Contributors)

<table>
  <tr>
    <td align="center"><a href="https://github.com/solojiang"><img src="https://github.com/solojiang.png?s=64" width="100px;"/><br /><sub><b>狒狒神</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Bosspwn"><img src="https://github.com/Bosspwn.png?s=64" width="100px;"/><br /><sub><b>Boss Pwn</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/flytam"><img src="https://github.com/flytam.png?s=64" width="100px;"/><br /><sub><b>Flytam</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/GooeyNyan"><img src="https://github.com/GooeyNyan.png?s=64" width="100px;"/><br /><sub><b>GooeyNyan</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/UZIhuhuhu"><img src="https://github.com/UZIhuhuhu.png?s=64" width="100px;"/><br /><sub><b>WynnXin</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/niffler-bkkkk"><img src="https://github.com/niffler-bkkkkk.png?s=64" width="100px;"/><br /><sub><b>niffler-bkkkk</b></sub></a><br /></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/kishivn"><img src="https://github.com/kishivn.png?s=64" width="100px;"/><br /><sub><b>kishivn</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/ChenKS12138"><img src="https://github.com/ChenKS12138.png?s=64" width="100px;"/><br /><sub><b>ChenKS12138</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/cucu6"><img src="https://github.com/cucu6.png?s=64" width="100px;"/><br /><sub><b>cucu6</b></sub></a><br /></td>
  </tr>
</table>
