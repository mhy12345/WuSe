# 悟色文档

## 作业信息
作者：高佳圆 毛晗扬

链接：https://mhy12345.github.io/WuSe/

**实现功能： 调色器**

1. 将中国传统颜色信息融入到了调色器中，点击对应按钮出现颜色信息
2. 颜色选择键盘的设计中使用视觉错觉
3. 通过拖动颜色绘制图形，拖动过程中光标自动变为对应颜色
4. 将颜色拖动至绘图区域时释放，颜色自动涂到对应区域
5. 随着颜色的选取，背景色自动渐变
6. 对于绘图区域支持模块的导入，能够轻易更改绘图的模型而不修改太多源码
7. 设计调色器模块，支持拖动三个颜色并且计算他们的混合（不过算法不太好）
8. 设计烟花模块，支持将选中的颜色变成烟花的颜色
9. streamgraph模块，支持将选中的图层颜色改变，然后动态改变

## 工程结构

```
./
    README.md 说明文档	
    index.html 入口
    modules/ 模块
    stylesheets/ css样式表
    data/ 数据
    javascripts/ js脚本
    管玉磊师兄设计原稿.png
```

```
./data:
    zg.json 颜色表
    zhongguose.py 生成脚本
```

```
./javascripts:
    color-zg.js 颜色表
    d3.v4.min.js d3库文件
    jquery.color.js jquery颜色渐变插件
    jquery.js jquery
```

```
./modules:
    mixer.original.html HTML文件备份
    mixer.original.js mixer库文件js脚本
    mixer.js mixer库导入脚本
    mixer.style.css mixer库css样式表
    
    d3.min.js d3库文件
    firework.original.html HTML文件备份
    firework.main.original.min.js 库文件js脚本，外部引用
    firework.style.css firework库的css样式
    anayltics.js 获得google统计数据的js脚本
    victor.min.js 用于计算小球的运动轨迹的js脚本
    firework.js firework导入脚本
	  
    d3.min.js d3库文件
    streamgraph.original.html HTML备份文件
	  streamgraph.js streamgraph库的导入脚本
    anayltics.js 获得google统计数据的js脚本
    highlight.min.js 生成SVG轨迹的js脚本
	  
```

```
./stylesheets
    style.css 颜色表css样式表
```

## 遇到的一系列问题

1. 如何设计界面
尝试了多种设计，最终选中为这个简约的方案。感谢美院师兄管玉磊（光与盐设计室首席CEO）的设计稿。

2. 绘图采用Canvas还是SVG？
	* 考虑到需要染色，而Canvas染色并不容易，因此选用了SVG绘图。
	* 在制作动画firework时，因为Canvas制作动画比较好，所以选择了Canvas。
	* 在streamgraph的制作中，因为streamgraph每一层的路径十分复杂，因此选用SVG绘图

3. 如何支持添加不同的模块？
为了更简便的添加模块，在编程时特意将模块的html代码集中在同一个`div`中，待调试完成后直接将其全部归为单独的文件中，并实现了`installModule()`和`uninstallModule()`函数来添加/删除