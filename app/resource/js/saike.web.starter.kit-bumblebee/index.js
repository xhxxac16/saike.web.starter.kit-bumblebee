/**

 _____                              ____                                   __
/\___ \                            /\  _`\                    __          /\ \__
\/__/\ \     __     __  __     __  \ \,\L\_\     ___   _ __  /\_\   _____ \ \ ,_\
   _\ \ \  /'__`\  /\ \/\ \  /'__`\ \/_\__ \    /'___\/\`'__\\/\ \ /\ '__`\\ \ \/
  /\ \_\ \/\ \L\.\_\ \ \_/ |/\ \L\.\_ /\ \L\ \ /\ \__/\ \ \/  \ \ \\ \ \L\ \\ \ \_
  \ \____/\ \__/.\_\\ \___/ \ \__/.\_\\ `\____\\ \____\\ \_\   \ \_\\ \ ,__/ \ \__\
   \/___/  \/__/\/_/ \/__/   \/__/\/_/ \/_____/ \/____/ \/_/    \/_/ \ \ \/   \/__/
                                                                      \ \_\
                                                                       \/_/

 * 声明（ Statement ）: ...//TODO: Write statement.
 *
 * 描述（ Describe ）: Script for index page.
 *
 * 更多阅读，评论（ Further Changes, Comments ）: ...//TODO: Give a further changes and comments link.
 *
 * JavaScript 设计模式（ Javascript Design Pattern ）:    ...//TODO: Cehck design pattern.
 *
 *      Modules Patterns, Object literal notation
 *
 * 文档（ Docs ）: ...//TODO: Give a link about project documents.
 *
 * 原作者（ Original Author ）: 沈维忠 ( Shen Weizhong / Tony Stark )
 *
 *      Cell Phone: (+86) 15921299022
 *
 *      Github：//github.com/Tony-Stark/
 *
 *      Trello: //trello.com/shenweizhong/
 *
 *      个人全球统一标识（ Gravatar ）：//en.gravatar.com/swzcowboy/
 *
 *      个人主页（ Personal Homepage ）：//iTonyYo.github.io/
 *
 *      Linkedin：//cn.linkedin.com/in/itonyyo/
 *
 *      Twitter: @iTonyYo, //twitter.com/iTonyYo/
 *
 *      Instagram：//instagram.com/itonyyo/
 *
 *      Medium：//medium.com/@itonyyo
 *
 *      Facebook：//www.facebook.com/shenweizhong/
 *
 *      Google+: //plus.google.com/114960355664861539339/
 *
 *      Instagram: //instagram.com/itonyyo/
 *
 *      QQ：563214029, //user.qzone.qq.com/563214029/
 *
 *      Tumblr：//itonyyo.tumblr.com/
 *
 *      Sina Weibo: //weibo.com/itonyyo/
 *
 *      WhatsApp：15921299022
 *
 *      微信（ WeChat ）：iTonyYo
 *
 *      Facebook Messenger：shenweizhong
 *
 *      Skype：live:swzyocowboy
 *
 *      Line：shenweizhong
 *
 *      Email: swzyocowboy@icloud.com, swzyocowboy@hotmail.com, iTonyYo@gmail.com, itonyyo@vip.qq.com, shenweizhong@facebook.com
 *
 * 感谢（ Thanks ）: ...//TODO: If there are some contributors, just mark them.
 *
 * 版本（ Version ）: 0.1.0
 *
 * 创建日期（ Creation Date ）: 2014.10.31 12:55 PM ( Tony ).
 *
 * 上次更新（ Last Update ）: 2014.10.31 15:10 PM ( Tony ).    ...//TODO: Update the 'Last Update'.
 */



(function ($, window, document, _fns, console) {

	"use strict";

	var _extend, exc;



	/**
	 * @name 自动嵌套命名空间
	 *
	 * @desc
	 *
	 * @author 沈维忠 ( Shen Weizhong / Tony Stark )
	 *
	 * @access protected
	 *
	 * @function _extend
	 *
	 * @param {Object} ns 顶级命名空间
	 *
	 * @param {string} [nsString = tlns.ns1.ns2.ns3] 基于顶级命名空间要嵌套的命名空间
	 *
	 * @returns {Object} 返回嵌套好的对象。
	 *
	 * @example
	 * // " tlns.sample = $.noop; " === " tlns.ns1.ns2.ns3.sample = $.noop; "
	 * var tlns = _extend(tlns, "tlns.ns1.ns2.ns3");
	 *
	 * @todo 将这个函数放入公共函数库中。
	 */

	_extend = function (ns, nsString) {

		var parts, parent, pl;

		parts = nsString.split(".");

		parent = ns;

		pl = parts.length;

		for (var i = 0; i < pl; i++) {

			if (typeof parent[parts[i]] === 'undefined') {

				parent[parts[i]] = {};

			}

			parent = parent[parts[i]];

		}

		return parent;

	};



	exc = _extend(_fns, '_fns.excute');

	exc.sample = $.noop;

	exc.sample_console = function () {

		console.log('Hello World! You Motherfucker!');

	};

	//......



	/*
	 * @name 初始化
	 *
	 * @desc 所有在 " _fns.excute " 命名空间下定义的函数将被自动运行。
	 *
	 * @author 沈维忠 ( Shen Weizhong / Tony Stark )
	 *
	 * @access protected
	 *
	 * @function _fns.init
	 *
	 * @param {Object} opts 存放定义好的可任意修改（配置）的行为选项。
	 */

	_fns.init = function (opts) {

		for (var _it in exc) {

			if (typeof exc[_it] === 'function') {

				exc[_it]();

			}

		}

	};

	$(_fns.init());



} (jQuery, window, document, {}, "undefined" != typeof console ? console : void 0));