/* tuzkiss infomation */

var tuzkissEn = {

	// base info
	name 		: 	'tuzkiss',	
	pinyin 		: 	'jianqing ding',
	age			:   '24',
	birthday	:   '1992-10-17',
	location	:   'Zhejiang Hangzhou',
	gallery1	:   '<img src="images/gallery1.jpg" height="200" />',
	gallery2	:   '<img src="images/gallery2.jpg" height="200" />',
	gallery3	:   '<img src="images/gallery3.jpg" height="200" />',
	university  : 	'Zhejiang Ocean University',
	university_logo : '<img src="images/school_logo.jpg" width="20" height="20" />',
	major 		: 	'Computer science and technology',
	skills 		: 	[],
	hobby		:   'Football, Surf the Internet, Listen to music and more ...',
	goal		:   'Front End Develper -> Full Stack Developer',




	// contact info
	QQ			:   '245361935',
	mobile 		:   '18658550504',
	Email		:   'Tuzkiss1017#gmail.com',
	github		:   'https://github.com/Tuzkiss',
	CSDN		:   'http://my.csdn.net/tuzkiss1017',
	blog		:   'http://blog.csdn.net/tuzkiss1017',
	weibo		: 	'http://weibo.com/tuzkiss',
	twitter     :   '@TuzK1ss',
	facebook	:   '@TuzK1ss'



};

tuzkissEn.skills.push('HTML5');
tuzkissEn.skills.push('CSS3');


var tuzkiss = {

	// base info
	name 			: 	'tuzkiss',	
	pinyin 			: 	'丁建强',
	age				:   '24',
	birthday		:   '1992-10-17',
	location		:   '浙江杭州',
	gallery1		:   '<img src="images/gallery1.jpg" height="200" />',
	gallery2		:   '<img src="images/gallery2.JPG" height="200" />',
	gallery3		:   '<img src="images/gallery3.jpg" height="200" />',
	university  	: 	'浙江海洋学院',
	university_logo : 	'<img src="images/school_logo.jpg" width="20" height="20" />',
	major 			: 	'计算机科学与技术',
	hobby			:   '足球，上网，听音乐，阅读等等...',
	goal			:   '前端攻城狮  -> 全端攻城狮',

	// skill info
	skills 			: 	[],

	// prize info
	prize			:   [],

	// university experience info
	universityExperience: [],

	// project experience info
	projectExperience: [],
	
	// internship experience info
	internshipExperience : [],

	// contact info
	QQ				:   '245361935',
	mobile 			:   '18658550504',
	Email			:   'Tuzkiss1017#gmail.com',
	github			:   'https://github.com/Tuzkiss',
	CSDN			:   'http://my.csdn.net/tuzkiss1017',
	blog			:   'http://blog.csdn.net/tuzkiss1017',
	weibo			: 	'http://weibo.com/tuzkiss',
	twitter     	:   '@TuzK1ss',
	facebook		:   '@TuzK1ss',


	IWantToSay : ''
};

tuzkiss.skills.push({
	name:'HTML5',
	percent:'50%',
	icon: 'images/HTML5.png'
});

tuzkiss.skills.push({
	name:'CSS3',
	percent:'50%',
	icon: 'images/CSS3.png'
});

tuzkiss.skills.push({
	name:'JavaScript',
	percent:'50%',
	icon: 'images/js.png'
});

tuzkiss.skills.push({
	name:'ASP.NET',
	percent:'40%',
	icon: 'images/net.jpg'
});

tuzkiss.skills.push({
	name:'Grunt',
	percent:'20%',
	icon: 'images/grunt.png'
});



tuzkiss.skills.push({
	name:'Less',
	percent:'30%',
	icon: 'images/less.png'
});

tuzkiss.skills.push({
	name:'Node',
	percent:'10%',
	icon: 'images/node.png'
});

tuzkiss.skills.push({
	name:'SQL Server',
	percent:'40%',
	icon: 'images/sql.jpg'
});



tuzkiss.universityExperience.push({
	date: '2012 - 2013学年',
	experience:'担任腾讯微博浙江海洋学院校园大使，浙江海洋学院校学生会信息传媒部副部长。'
});

tuzkiss.universityExperience.push({
	date: ' 2013 ',
	experience:'参加浙江海洋学院2013大学生志愿者暑期文化科技卫生"三下乡"社会实践活动。'
});

tuzkiss.universityExperience.push({
	date: ' 2013 - 至今',
	experience:'参加创业团队，创立舟山市新城纳格文化传媒工作室（Nigle），在团队中主要负责宣传和网站建设方面。'
});

tuzkiss.prize.push({
	date: '2012年5月',
	prize:'获得第九届浙江省大学生程序设计大赛三等奖（ACM）。'
});

tuzkiss.prize.push({
	date: '2014年4月',
	prize:'获得第十一届浙江省大学生程序设计大赛三等奖（ACM）。'
});

tuzkiss.prize.push({
	date: '2014年6月',
	prize:'获得第三届“浙大网新杯”服务外包创新应用大赛三等奖。'
});


tuzkiss.projectExperience.push({
	date:'2012年7月',
	project:'为校海岛野外生存团队制作高等教育国家级教学成果申报网站',
	skill: 'HTML + CSS + JAVASCRIPT',
	experience:'第一次制作整站，开始慢慢接触HTML,CSS,JAVASCRIPT等，并对网站制作产生浓厚兴趣'
});

tuzkiss.projectExperience.push({
	date:' 2013年10月',
	project:'为学校学生社团联合会开发校社联官方网站',
	skill: 'HTML + CSS + JavaScript + ASP.NET4.0 + ACCESS+jQuery',
	experience: '第一次开发动态网站，了解整个网站的流程，运行，以及底层实现。开始慢慢有往前端的意识，因为更热衷于做让人愉悦的页面和动画',
	websiteUrl: 'http://xsl.zjou.edu.cn/'
});

tuzkiss.projectExperience.push({
	date:' 2014年5月',
	project:'组织团队开发分布式图片处理系统参加浙大网新组织的服务外包比赛',
	skill: 'Gearman + OpenCV + PHP + HTML + CSS ',
	experience: '在项目中担任项目经理一职，主要负责Gearman环境搭建，核心代码编写，统筹项目成员任务分配，并负责决赛答辩。在该项目中，学会了管理一个团队来完成一个项目，同时也学会使用Cygwin和Linux的一些基本操作，初步对分布式系统有了了解，系统的整合成一个分布式图片处理系统'
});

tuzkiss.projectExperience.push({
	date:' 2014年7月',
	project:'上海群畅票据系统开发',
	skill: 'HTML5 + CSS3 + Jquery + Easyui + ASP.NET MVC 4',
	experience: '在项目中主要负责部分前台页面的搭建，CSS样式部分统一规范，前端性能的优化和自定义简易组件的开发。'
});

tuzkiss.projectExperience.push({
	date:' 2015年3月',
	project:'上海群畅OA系统开发',
	skill: 'HTML5 + CSS3 + Jquery + Bootstrap + Grunt + ASP.NET MVC 4 + WCF restful',
	experience: '在项目中主要负责前台系统的搭建，数据的解析，页面的设计，以及自定义组件的开发。目前仍在进行中...'
});

tuzkiss.projectExperience.push({
	date:' ····',
	project:'',
	skill:'',
	experience:'&nbsp;'
});

tuzkiss.projectExperience.push({
	date:' 未来',
	project:'某个前端项目组',
	skill: 'HTML5 ？ CSS3 ？ Javascript  ？node ？ react？',
	experience: '希望在一个专业的前端团队中，用青春贡献自己的激情。'
});


tuzkiss.internshipExperience.push({
	time:' 2014年7月到至今',
	project:'.NET COE',
	skill: '.NET , HTML, CSS, JAVASCRIPT等',
	experience: '在实习期间，主要负责的是组内的系统前端改进，性能优化，后端BUG修复。从2015年2月开始，在新的项目组里主要担任前端页面、组件开发以及与.NET MVC链接获取后端WCF传递数据。' +
				'在这几个月的时间里，慢慢的开始把学习工作重心从后端转移到了前端，或许是因为我开始慢慢了解自己喜欢的也许更多的前端，因为自己会沉浸于为系统开发了一个简单实用的自定义组件，' +
				'也因为在前端学习中获得一点代码，性能的优化而开心满怀。感谢实习，感谢时间让我明白自己想做的事情。这或许就是这段时间来最大的收获吧！'
});


tuzkiss.IWantToSay = '<br/>关于过去，告一段落。关于未来，敬请期待。';
