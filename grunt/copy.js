/*
	 __  __
	/\ \/\ \
	\ \ `\\ \      __   __  __  __     __   _ __
	 \ \ , ` \   /'__`\/\ \/\ \/\ \  /'__`\/\`'__\
	  \ \ \`\ \ /\  __/\ \ \_/ \_/ \/\  __/\ \ \/
	   \ \_\ \_\\ \____\\ \___x___/'\ \____\\ \_\
	    \/_/\/_/ \/____/ \/__//__/   \/____/ \/_/

 	声明（ Statement ）: ...//TODO: Write statement.

 	描述（ Describe ）: ...//TODO: Write description.

 	更多阅读，评论（ Further Changes, Comments ）: ...//TODO: Give a further changes and comments link.

    文档（ Docs ）: ...//TODO: Give a link about project documents.

    原作者（ Original Author ）: 沈维忠（ Shen Weizhong / Tony Stark ）,

	    手机（ Cell Phone ）：(+86)15921299022

	    个人全球统一标识（ Gravatar ）：//en.gravatar.com/swzcowboy/

	    个人主页（ Personal Homepage ）：//itonyyo.github.io/

	    Linkedin：//cn.linkedin.com/in/itonyyo/

	    Github：//github.com/iTonyYo/

	    Trello：//trello.com/shenweizhong/

	    Facebook：//www.facebook.com/shenweizhong/

	    Twitter：@iTonyYo

	    QQ：563214029

	    Tumblr：//itonyyo.tumblr.com/

	    Instagram：//instagram.com/itonyyo/

	    Medium：//medium.com/@itonyyo

	    Google+：//plus.google.com/114960355664861539339/

	    新浪微博（ Sina MicroBlog ）：//weibo.com/itonyyo/

	    WhatsApp：15921299022

	    微信（ WeChat ）：iTonyYo

	    Facebook Messenger：shenweizhong

	    Skype：live:swzyocowboy

	    Line：shenweizhong

	    电子邮箱（ Email ）：swzyocowboy@icloud.com, swzyocowboy@hotmail.com, iTonyYo@gmail.com, itonyyo@vip.qq.com, shenweizhong@facebook.com

	    来自（ From ）：江苏省淮安市 ( Huai'an City, Jiang'su Province )

    创建日期（ Creation Date ）: 沈维忠（ Shen Weizhong / Tony Stark ），2014.10.31 15:57 PM

    上次更新（ Last Update ）: 沈维忠（ Shen Weizhong / Tony Stark ）， 2014.10.31 15:57 PM

*/

module.exports = {

	back_up_app_html: {

		files: [{

			expand: true,

			cwd: 'app/',

			src: ['*.html'],

			dest: 'dev/html/',

			filter: 'isFile',

			ext: '.html',

			extDot: 'last'

		}]

	},

	extract_app_html: {

		files: [{

			expand: true,

			cwd: 'dev/html/',

			src: ['*.html'],

			dest: 'app/',

			filter: 'isFile',

			ext: '.html',

			extDot: 'last'

		}]

	},

	back_up_readme_html: {

		files: [{

			expand: true,

			cwd: './',

			src: ['*.html'],

			dest: 'gh-pages/',

			filter: 'isFile',

			ext: '.html',

			extDot: 'last'

		}]

	},

	extract_readme_html: {

		files: [{

			expand: true,

			cwd: 'gh-pages/',

			src: ['*.html'],

			dest: './',

			filter: 'isFile',

			ext: '.html',

			extDot: 'last'

		}]

	},

	backup_uncompressed_js: {

		files: [{

			expand: true,

			cwd: 'app/resource/js/saike.web.starter.kit-bumblebee/',

			src: ['**/*.js', '!**/*.min.js'],

			dest: 'dev/javascript/',

			filter: 'isFile'

		}]

	},

	extract_uncompressed_js: {

		files: [{

			expand: true,

			cwd: 'dev/javascript/',

			src: ['**/*.js', '!**/*.min.js'],

			dest: 'app/resource/js/saike.web.starter.kit-bumblebee/',

			filter: 'isFile'

		}]

	}

	//......

};