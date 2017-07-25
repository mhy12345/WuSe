# 悟色 文档

## 作业信息
作者：高佳圆 毛晗扬

链接：？？？
    
实现功能： 调色器

1. 将中国传统颜色信息融入到了调色器中，点击对应按钮出现颜色信息
2. 颜色选择键盘的设计中使用视觉错觉
3. 通过拖动颜色绘制图形，拖动过程中光标自动变为对应颜色
4. 将颜色拖动至绘图区域时释放，颜色自动涂到对应区域
5. 随着颜色的选取，背景色自动渐变
6. 对于绘图区域支持模块的导入，能够轻易更改绘图的模型而不修改太多源码
7. 设计调色器模块，支持拖动三个颜色并且计算他们的混合（不过算法不太好）

## 工程结构

    ./
        README.md 说明文档	
        index.html 入口
        modules/ 模块
        stylesheets/ css样式表
        data/ 数据
        javascripts/ js脚本

    ./data:
        zg.json 颜色表
        zhongguose.py 生成脚本

    ./javascripts:
        color-zg.js 颜色表
        d3.v4.min.js d3库文件
        jquery.color.js jquery颜色渐变插件
        jquery.js jquery

    ./modules:
        mixer.original.html HTML文件备份
        mixer.original.js mixer库文件js脚本
        mixer.js mixer库导入脚本
        mixer.style.css mixer库css样式表

    ./stylesheets
        style.css 颜色表css样式表

## 遇到的一系列问题

1. 如何设计界面
尝试了多种设计，最终选中为这个简约的方案。

2. 绘图采用Canvas还是SVG？
考虑到需要染色，而Canvas染色并不容易，因此选用了SVG绘图

3. 如何支持添加不同的模块？
为了更简便的添加模块，在编程时特意将模块的html代码集中在同一个div中，待调试完成后直接将其全部归为单独的文件中，并实现了installModule()和uninstallModule()函数来添加/删除

