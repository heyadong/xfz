### 这是一个仿不凡商业的前端项目
完成这个项目主要用到的工具有：
   1. NVM(node 版本管理/NPM
   2. 构建工具 gulp(gulp-cssnano(css压缩),gulp-uglyfiy(js压缩）,gulp-imagemin(图片压缩),gulp-sass(sass转css),gulp-rename,gulp-cache)
   3. node.js browser-sync库
   
  **准备工作**
  1. nvm下载  
      nvm(node version manager) windows下载链接：[https://github.com/coreybutler/nvm-windows/releases]，
      下载安装***后配置环境变量***，在cmd中输入nvm 命令如果没有提示找不到命令，安装成功.
      nvm常用的命令有如下：
      * nvm install node: 安装最新版本的node.js
      * nvm install + version 安装指定版本的node.js
      * nvm use + version  使用指定版本的node
      * nvm list 列出当前安装的node列表
      * nvm unistall + version 卸载指定版本的node
      * nvm npm_mirror + url 设置npm 镜像:
      
         ``` 
         nvm npm_mirror https://npm.taobao.org/mirrors/npm/
         ```  
   2. node.js 下载  
      安装nvm 后使用 nvm install 6.4.0 命令安装，这里我们使用6.4版本的node。  
      安装完node后 就可以使用npm(node package manager) 命令了.
      npm常见命令：  
         * npm install package    \# 本地安装（本地安装需要使用require()来引人才能使用本地安装包）
         * npm install package -g \# 全局安装 （全局安装后可以在cmd使用命令）
         * npm update package 更新包
         * npm install -g cnpm --registry=https://registry.npm.taobao.org  使用cnpm 安装管理包 
         * npm init 初始化项目 并生成一个package.json 文件记录项目的依赖包 
         
         
   3. gulp 的安装  
       创建项目文件夹 使用npm init 初始化项目：
       * 使用 npm install gulp -g 安装全局的gulp包  
       * 使用 npm install gulp --save-dev 本地安装 (--save-dev命令会将项目的安装包记录在package.json文件中)
       * 安装 gulp(gulp-cssnano(css压缩),gulp-uglyfiy(js压缩）,gulp-imagemin(图片压缩),gulp-sass(sass转css),gulp-rename,gulp-cache
       
       
   4. 编写gulpfile.js 文件
       var gulp = require('gulp')
       gulp.task('css',
   
   
   
       
      
       
