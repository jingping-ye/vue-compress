# vue-dist-compress

vue 项目所用压缩工具：将文件夹压缩并生成按照`文件名.时间.zip`格式的文件。

```text
dist ---> dist.20201112151668.zip
```

## 使用

在`package.json`文件中配置

```js
"scripts":{
  "compress":"compress dist"
}
```

运行命令：

```js
npm run compress
```
