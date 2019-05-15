# 包含什么 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/getting-started/whats-include.md)

---

下载的 Multiple Select 源码包含了未压缩的 CSS，JavaScript，并且提供了压缩扰乱的 min 文件，当然也提供了我们的文档。更具体地说，主要包含了以下的文件：

```bash
multiple-select/
├── docs/
├── src
|   ├── utils
│   ├── MultipleSelect.js
│   ├── multiple-select.css
│   ├── multiple-select.js
│   ├── multiple-select.png
├── dist
│   ├── multiple-select-es.js
│   ├── multiple-select-es.min.js
│   ├── multiple-select.css
│   ├── multiple-select.js
│   ├── multiple-select.min.css
│   ├── multiple-select.min.js
│   └── multiple-select.png
└── README.md
```

`src/`是我们的 CSS，JavaScript 的源码。`dist/`文件夹包含了所有`src/`下压缩并扰乱的文件。`docs/`文件夹包含了我们文档的源码。另外，我们提供了包信息，License 信息，和其他的信息。
