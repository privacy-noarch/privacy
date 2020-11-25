/*
 * A massive banner for unsafe browsers.
 * Copyright (C) 2020  noarchwastaken
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

var browser = new Browser;

/* detect unsafe browsers from returned value by Browser.js */
var unsafeBrowsers = new RegExp('IE|Vivaldi|Yandex|360|360EE|360SE|UC|QQBrowser|QQ|Baidu|Maxthon|Sogou|Liebao|2345Explorer|115Browser|TheWorld|XiaoMi|Quark|Qiyu|Wechat|WechatWork|Taobao|Alipay|Douban|Suning|iQiYi|DingTalk|Huawei|Vivo');

/* map those browsers' Chinese name */
var unsafeBrowsersChineseName = {"IE":"IE浏览器", "Vivaldi":"Vivaldi", "Yandex":"Yandex", "360":"360浏览器", "360EE":"360极速浏览器", "360SE":"360安全浏览器", "UC":"UC浏览器", "QQBrowser":"QQ浏览器", "QQ":"QQ客户端", "Baidu":"百度浏览器", "Maxthon":"傲游浏览器", "Sogou":"搜狗浏览器", "Liebao":"猎豹浏览器", "2345Explorer":"2345浏览器", "115Browser":"115浏览器", "TheWorld":"世界之窗浏览器", "XiaoMi":"MIUI浏览器", "Quark":"夸克浏览器", "Qiyu":"旗鱼浏览器", "Wechat":"微信", "WechatWork":"企业微信", "Taobao":"淘宝客户端", "Alipay":"支付宝客户端", "Douban":"豆瓣客户端", "Suning":"苏宁客户端", "iQiYi":"爱奇艺客户端", "DingTalk":"钉钉客户端", "Huawei":"EMUI浏览器", "Vivo":"Funtouch OS 浏览器"}

function insertBanner() {
    var bannerToInsert = document.createElement("div");
    bannerToInsert.innerHTML = `这不是广告！${unsafeBrowsersChineseName[browser.browser]}正在侵犯你的隐私。<a href=/Browsers/Bromite/Bromite.html>点这里</a>学习如何隐藏这个提示，改用更安全的浏览器。`;

    var wrapper = document.getElementById("unsafeBrowserBanner");
    wrapper.appendChild(bannerToInsert);
}

if (unsafeBrowsers.test(browser.browser)) {
    insertBanner();
}
