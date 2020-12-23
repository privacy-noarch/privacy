# 反馈与贡献

---

## 简单的

对 `privacy.noarch` 有意见吗？想要协助编写 `privacy.noarch` 吗？

加入我们的 [<i class="fa fa-telegram" aria-hidden="true"></i> Telegram 群组](https://t.me/chat_privacy_noarch)!

## 直接的

你也可以直接为 `privacy.noarch` 编写文章！

### 与 `git` 和 GitHub 交互

`privacy.noarch` 主要使用 Markdown 编写并用 [mdBook](https://github.com/rust-lang/mdBook) 生成网页。

它还用 `git` 进行版本管理，并同时拥有[自托管 cgit](https://git.n0ar.ch/privacy) 和 [<i class="fa fa-github" aria-hidden="true"></i> GitHub](https://github.com/noarchwastaken/privacy) 两个镜像。

除了加入 `privacy.noarch` 的 [<i class="fa fa-telegram" aria-hidden="true"></i> Telegram 群](https://t.me/chat_privacy_noarch)，你可以在 GitHub 开 [Issues](https://github.com/noarchwastaken/privacy/issues) 提意见。

如果你想自己修正 `privacy.noarch` 的错误，或是为它写一篇文章，自己修改然后开个 [Pull request](https://github.com/noarchwastaken/privacy/pulls) 则是更直接的方法！

### 文本格式

#### Markdown 语法

为了人类可读性和编写的便捷，Markdown 的语法很灵活：很多不同的语法可以带来相同的结果。*noarch* 为了最大化文章的可读性和格式的统一，拟定了一个 Markdown 语法使用规范：

| 效果 | 格式 |
| -- | -- |
| 标题 | `#`, 仅在行首使用 |
| *斜体* | `*` |
| **粗体** | `**` |
| ***加粗斜体*** | `***` |
| 列表 | `-` |
| `代码块` | ` ``` ` |
| 分割线 | `---` |

#### 文法与语气

*noarch* 原本想尽量接近“维基”的语气和文法，但在写作的过程中发现使用第二人称、贴近日常生活的语气更加亲切。

请不要大量使用幽默，或是使用可能带来误导的幽默，以保证读者都能正确遵循指导。

请仅在必要时使用第一人称和第三人称代词，并用名字代替*它们*（这是一个必要的使用）；第二人称使用“你”。

#### 标点与空格

- 标点的全 / 半角跟随其前面的字符：
	```
	This is an English semicolon; 这是中文的句号。
	```
- 双对标点的全 / 半角跟随其包含的字符，双对标点的全 / 半角跟随其第一个标点：
	```
	括号 (bracket); bracket（括号）；(bracket / 括号).
	```
- 在中文里使用半角标点需适当地加空格：
	```
	标点 / 標點 / punctuations
	括号 (bracket)
	```
- 中西文混用，须在西文前后加空格（行中第一个字符除外）：
	```
	在中文里使用 English 需要在英文前后加空格。
	```
- 较大的数须按需加空格：
	```
	2前后就不需要加空格；
	但 32768 需要。
	You also need to add spaces accordingly to 114514.
	```
- 使用 Font Awesome 时须在其前后加空格（行中第一个字符除外）：
	<pre><code><i class="fa fa-smile-o" aria-hidden="true"></i> 微笑 <i class="fa fa-smile-o" aria-hidden="true"></i> 后面有一个空格！</code></pre>

#### 图片的嵌入

**路径**

请在对应 Markdown 文本的相同文件夹创建 `images` 文件夹存放图片，并使用相对路径引用图片：
```
![image](images/image.webp)
```

而不是：
```
![image](https://privacy.n0ar.ch/images/image.webp)
```

更不是：
```
![image](/home/noarch/.../images/image.webp)
```

如果图片是在网上找到的，**请下载**并使用相同方法引用。请勿直接引用外部资源。

**大小**

请确保竖屏图片不像这样“吃掉”读者的整个屏幕：

![](Browsers/Bromite/images/bromite-org.webp)

Markdown 不具备调整图片大小的能力，但你可以在 Markdown 里用 HTML 嵌入图片并限制大小：
```
<img alt="bromite-org" src="images/bromite-org.webp" width=450>
```

上方代码的执行效果是这样：

<img alt="bromite-org" src="Browsers/Bromite/images/bromite-org.webp" width=450>

#### 在代码块中使用 Font Awesome

*noarch* 找不到好方法来让 Font Awesome 的引用逃逸 Markdown 的代码段 / 块 ; 于是只好用 `html` 的 `<code>` 块来代替。下面是一个例子：

```
<code><i class="fa fa-smile-o" aria-hidden="true"></i> 可以被正确显示。</code>
```

执行效果是： <code><i class="fa fa-smile-o" aria-hidden="true"></i> 可以被正确显示。</code>

如果包含 Font Awesome 的是一个代码块 ` ``` ` , 你需要在 `<code>` 前后加 `<pre>` . 例如：

```
<pre><code><i class="fa fa-smile-o" aria-hidden="true"></i> 可以被正确显示。</code></pre>
```

执行效果是：

<pre><code><i class="fa fa-smile-o" aria-hidden="true"></i> 可以被正确显示。</code></pre>

### 媒体格式

请使用[这个列表](https://en.wikipedia.org/wiki/List_of_open_formats)中列出的开放格式。这样可以保证读者不需要为阅读 `privacy.noarch` 付任何直接或间接的版权费。使用开放格式同时也是一种推广它们的方式。

位图请尽量使用 WEBP 格式编码，以加快页面加载速度；如果转载或截取的原图非 WEBP, *noarch* 建议你把它们转换成无损压缩的 WEBP.

下面是 *noarch* 在 GNU/Linux 上使用 `ImageMagick` 批量将 `.jpg` 和 `.png` 转换成无损 `.webp` 的 one-liner:

```
$ mogrify -format webp -define webp:lossless=true *.png && rm *.png && mogrify -format webp -define webp:lossless=true *.jpg && rm *.jpg
```

视频请使用开放的 WEBM/VP9 格式编码；这样能在保证质量和播放性能的同时最大程度降低大小。

请不要使用付费的 HEVC (H.265) 或 AVC (H.264) 格式编码视频。一些完全自由的浏览器将无法播放这些视频。

关于使用 `ffmpeg` 将视频转码成 VP9, 请看[FFmpeg 官方文档](https://trac.ffmpeg.org/wiki/Encode/VP9)。

### 版权和引用

请在进行任何非原创引用时检查来源的版权信息，并注明来源。

在引用维基百科条目解释名词时，除非中文版条目质量非常接近英文版，否则请引用英文版条目。*noarch* 很遗憾需要这么做，因为中文版维基百科在隐私和计算机领域的条目可参考性还有很长一段路要走。

不过，如果你为 `privacy.noarch` 翻译了英文版维基百科的条目，请把它贡献回中文版维基百科的对应条目，让它们在艰难的环境下也能成长！

#### 引用来源的安全性

请尽量不要引用一些充满追踪器或广告的网页。如果实在需要，你可以使用 [WaybackMachine](https://archive.org/web/web.php) 打个快照然后引用快照。

### 还有疑问？

别犹豫，去 `privacy.noarch` 的 [Telegram 群组](https://t.me/chat_privacy_noarch)提问！
