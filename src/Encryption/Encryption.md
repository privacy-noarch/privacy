# 加密，加密一切

---

你在互联网上传输的数据不会像魔法一样从世界一端直接跳到世界另一端。

它需要经过一系列的路由，如果你所在的地方有防火墙的话它还需要经过防火墙的审查，甚至可能经由长达数万公里的海底光缆，才能到达你的目标。

比如 *noarch* 要访问自己的网站 [`privacy.n0ar.ch`](https://privacy.n0ar.ch), 其中网站的数据会经过这些地方：

```
[noarch@fedora ~]$ traceroute privacy.n0ar.ch

# 到 privacy.n0ar.ch 的路由追踪：
traceroute to privacy.n0ar.ch (104.24.98.152), 30 hops max, 60 byte packets

# noarch 的 VPN 本地 IP
 1  10.18.0.1 (10.18.0.1)  25.921 ms  25.904 ms  25.899 ms
 2  * * *

# 美西 Leaseweb, VPN 服务器提供商
 3  v32.ce02.wdc-01.us.leaseweb.net (192.96.203.93)  25.891 ms  25.967 ms  26.064 ms
 4  ae-10.br01.wdc-02.us.leaseweb.net (173.208.126.36)  26.169 ms be-10.br02.wdc-02.us.leaseweb.net (173.208.126.40)  26.219 ms edm-033.yelaiyehao.com (173.208.126.34)  26.469 ms

# Tata communications, 一个美国运营商
 5  ix-ae-42-0.tcore1.aeq-ashburn.as6453.net (66.198.155.168)  26.833 ms  26.843 ms ix-be-43.ecore1.aeq-ashburn.as6453.net (216.6.87.244)  26.931 ms
 6  if-be-54-2.ecore1.aeq-ashburn.as6453.net (66.198.154.7)  26.941 ms  27.531 ms  27.427 ms

# Cloudflare, privacy.noarch 使用的 CDN
 7  104.24.98.152 (104.24.98.152)  26.984 ms  26.991 ms 216.6.87.221 (216.6.87.221)  27.404 ms

# 实际上数据还会经由 Cloudflare 返回 noarch 的服务器，但 traceroute 只能追踪到这里
```

这途中任何一个节点都可以截取你传输的信息。更可怕的是，它们甚至可以修改其中的信息，将你重定向到恶意网页，或是向你呈现钓鱼内容...

试想一下你在访问 `privacy.noarch` 时，所有 *noarch* 想要传达给你的信息都被一个攻击者替换，引诱你做一些暴露自己隐私的事情。这听起来真的可怕...

所以 *noarch* 在 `privacy.noarch` 上应用了**加密**。它将你现在阅读的明文编码成无法理解的乱码，并且通过一些方式，只允许你能够读取其中的意义。

## 更详细一点，加密是什么？

引用维基百科上的 ["Encryption"](https://en.wikipedia.org/wiki/Encryption) 条目：

> 在[密码学](https://en.wikipedia.org/wiki/Cryptography)中，将信息进行编码，使[原文](https://en.wikipedia.org/wiki/Plaintext)变成[密文](https://en.wikipedia.org/wiki/Ciphertext)，使其难以被未经授权地读取的行为称之为**加密**。理想情况下，只有经授权的人员能够读取密文所要传达的信息。加密本身并不能防止信息传输被截取，但加密能防止截取者理解其内容。

> 因为种种技术原因，加密方法通常使用一个通过[算法](https://en.wikipedia.org/wiki/Algorithm)生成的[伪随机](https://en.wikipedia.org/wiki/Pseudo-random)[密钥](https://en.wikipedia.org/wiki/Key_(cryptography))。虽然任何加密后的消息都可能被破解，但对于一个良好的加密算法而言，破解需要相当多的技术和算力。

> 现代的加密方式通常使用[公钥](https://en.wikipedia.org/wiki/Public-key_cryptography)或[对称密钥](https://en.wikipedia.org/wiki/Symmetric-key_algorithm)。现代加密技术依赖现代计算机在破解密钥上并不高效的事实来保证其安全性。

<div style="text-align:right"><em>noarch</em> 翻译，已将翻译贡献至中文维基百科<a href="https://zh.wikipedia.org/wiki/%E5%8A%A0%E5%AF%86">对应条目</a></div>

## 为什么要为信息加密？

> <i class="fa fa-info-circle" aria-hidden="true"></i> 下述“云服务”和“云端”包括网盘，E-Mail 以及即时通讯等**远程存储你隐私数据**的服务。

在本文写成时（2020 年），互联网上的信息传输和存储同时比你想象得安全，和危险。

关于它，*noarch* 有一个好消息和一个坏消息要告诉你：

- 好消息是，得益于 [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) 的广泛使用，在互联网信息传输过程中你的发送和接收的信息一般是安全的。
	- 比如你在浏览网页时，只要网页启用了 [HTTPS](https://en.wikipedia.org/wiki/HTTPS), 你就不需要担心你的学校或公司看到你搜索 *~~bbq sauce on titties~~*. 它们唯一可能知道的是，你在进行搜索。
	- 不过如果你跟随搜索结果的链接进入 PornHub, 它们也会知道你在访问 PornHub, 但不知道你具体观看了什么视频。
	- 前面 *noarch* 提到的 `privacy.noarch` 使用的加密就是 HTTPS。

- 坏消息是，**你的信息在到达了“云端”后会被解密**。“云端”是否加密你的数据，如何加密数据则是完全另一个故事了。

因此，即使传输层已经广泛应用了加密，你的数据在存储时依然非常危险。你依然需要管理一些加密细节，以防服务提供商、以及可能会搜查或骇入该“云服务”的敌人侵犯你的隐私。

### 你需要在失去对自由互联网访问时的安全通讯方案

如果你使用微信，你在微信上的所有聊天都可以被按照中国政府的意愿[审查和访问](https://citizenlab.ca/2020/05/we-chat-they-watch/)。

看了 `privacy.noarch` 的你可能会说，
> *用 Signal 之类端到端加密，无任何审查的聊天软件就行了啊！*

但请你设想一个情况。有一天 Signal 被防火长城或是你组织的防火墙拦截，并且你用于绕过这个防火墙的代理失效了。你是否需要使用微信， QQ, 或是 E-Mail 等方式传达紧急信息，或者通过它们像你的好友索取代理服务器？

如果在上面的情况下，你需要回退到使用上述不安全的通讯方案，或者直接束手无策，那么你需要手动进行端到端加密，并且使你的通讯“在敌人的领域下都安全”。

### 即使是看似本地的文件存储，也危机四伏

> 看毛片没啥问题，但你不想自己看的毛片被某些“云相册”偷偷上传到“云端”并且分析。

如果你使用 Android, 在你的 Android 设备上，进入 `设置 -> 隐私 -> 权限管理 -> 存储`。 在这里，你可以看到所有能够访问你 Android 设备**共享存储**的应用。

如果你不知道“共享存储”是什么，它存放着你的照片，视频，音乐以及下载等**非应用数据**，**非隐私**内容。当你打开文件管理器时，你所见到的第一个界面通常就是共享存储。

> <i class="fa fa-info-circle" aria-hidden="true"></i> 有些粗制滥造的应用，比如一段时间前的微信，滥用它们来存储应用数据。不过这在 `privacy.noarch` 是后话了。

前面说到了共享存储只被用于存储非隐私数据，不过如果它意外地被用于存储隐私数据了呢？

如果你有过出国旅行的经验，你应该会被劝告，

> *最好给你的护照身份页和签证页拍张照，以防你丢失了护照，没法证明自己的身份。*

然而，你对着自己的护照按下快门后，有几件事情可能会发生：

0. 你的护照照片被存储，什么都没有发生。只有你知道这张照片存在，并且只有你能访问这张照片。

1. 它会被“云相册”上传到“云端”。

	1.0. 你的云相册会**分析这张照片**并将其标记为“护照”。

	1.1. 根据你使用的云相册的隐私政策，一旦这张护照的照片被上传，你可能将完全失去对这个信息的控制。

	1.2. 如果你使用的云相册“没良心”，它会通过你上传的护照照片，进而获取你的身份信息（例如：真名，年龄，护照号，住址...）。这一切都可以被[光学文字识别 (OCR)](https://en.wikipedia.org/wiki/Optical_character_recognition) 自动完成。实际上，护照上使用的[特殊字体](https://en.wikipedia.org/wiki/OCR-B)使得 OCR 更加容易。

2. 你的设备在过安检时被检查，该照片被警察获取。

	2.0. 你可能觉得这没什么问题，毕竟你的护照就是警察发的，并且你本身就在实名过安检。

	2.1. **但如果你在非法持有多国籍呢？** 现在警察知道了你的双 / 多重国籍，并且这可能标记着你非法多国籍生涯的终结。

	> ***noarch* 反对任何非法持有多国籍的做法。**

3. 它被定制的恶意软件发送到攻击者的手里。这不太可能发生，但如果你是一个高价值目标，你可能现在就是恶意软件的受害者而不知。

4. 你的设备被偷，窃贼贩卖该照片，你的护照照片被用于网贷身份验证。

在阅读本文之前，你可能以为，只有第0条会发生。然而在这个云存储越来越流行的时代，你的数据往往会被无意识地泄露。

除了拒绝使用各类“云”服务之外，一个有效保障数据安全的方式就是**自己管理加密事宜**。这样，在特定情况下，敌人想要访问你数据时，得到的只会是一堆加密过，并且几乎无法被破解的垃圾。

## 如何自己管理数据加密？

现代的加密方式种类繁多。根据你要加密的数据类型，*noarch* 会主要介绍两种加密方式：

- PGP (Pretty Good Privacy, 在隐私方面相当好), 饱经考验的非对称（公钥）加密，主要用于加密电子邮件，聊天和单个文件
	- [`privacy.noarch` 对 PGP 的介绍](PGP.md)
	- PGP 在各个平台上的实现
		- Android: [Openkeychain](android/Encryption/Openkeychain/Openkeychain.md)
		- Windows: [Gpg4win](), [Thunderbird（集成）]()
	
- LUKS (Linux Unified Key Setup), 主要被类 Unix 系统用于加密磁盘，但它同样可以被用于加密虚拟磁盘或存储容器
	- [`Cryptsetup` (一个 LUKS 前端) 介绍](https://gitlab.com/cryptsetup/cryptsetup/blob/master/README.md)
	- LUKS 在各个平台上的实现
		- Android: [EDS Lite]()
		- GNU/Linux: [DM-Crypt + Cryptsetup]()

---

创建：2020-11-18, *noarch*  
最后修改：2020-11-18, *noarch*
