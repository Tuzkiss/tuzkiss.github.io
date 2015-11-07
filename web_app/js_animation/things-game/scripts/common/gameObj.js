/**
 * @description javascript for
 * @author TuzK1ss
 * @date 15/10/26.
 */

    // game content object
var gameObj = {},

    // gamer name
    gamerName = '',

    // game choose container key, default '0'
    gameCurrentKey = '0',

    // game current choices keys
    gameCurrentKeys = [],

    // game next container keys of current choices keys
    gameNextKeys = [['A1', 'B1']],

    // game total ending count
    gameEndingCount = 0;

// get gamer Name function
function getGamerName () { 'use strict'; return gamerName; }

// get reach ending of the total ending percent function
function getGameEndingPercent (isReturnCount) {
    'use strict';
    var count = 0;

    if (window.localStorage) {
        var gameEnding = window.localStorage.getItem('thingsGameEnding');

        if (gameEnding) {
            count = gameEnding.split(',').length;
        }
    }

    if (isReturnCount) {
        return count;
    }

    if (count < gameEndingCount) {
        return '已解锁 ' + count +'  / ' + gameEndingCount + ' 个成就' ;
    } else if (count === gameEndingCount) {
        document.title = '我竟然解锁了全部24个结局, 这绝对是我2015年以来做过最无聊的《事情》。';
        return '恭喜你通关了...然而并没有什么彩蛋🙈~';
    }



}

// gamer start container object
gameObj["-1"] = {
    type : -1,
    choices : [
        { name : 'Game Start', nextKey : '0'}
    ]
};

// gamer first container object
gameObj["0"] = {
    type : 0,
    title : '你是一个家里非常穷、且高考失手以至于上不起大学的孩子,有一天落魄的你在路边救了一只猫,为了报恩,它答应为你实现一个愿望——免费上大学,你会选择什么学校?',
    choices : [
        { name : '蓝翔', nextKey : 'A1'},
        { name : '贱桥大学', nextKey : 'B1'}
    ],
    imgUrl : './images/0.png',
    shareTitle:  '没有拿到毕业证书，你们不用看他了'
};

// all of following are normal container object

gameObj.A1 = {
    type : 0,
    title : '你立马收到了蓝翔的录取通知书,开启蓝翔求学之路 进入了蓝翔技校,你立志要在毕业后成为大富翁。为了答到目标,你选择在接下来的几年里:',
    choices : [
        { name : '好好学习,成为挖掘机之王,参加各种竞赛。', nextKey : 'A2' },
        { name : '拓展人脉,与当地包工头搞好关系。', nextKey : 'B2'}
    ],
    imgUrl : './images/A1.png',
    shareTitle: '没有拿到毕业证书，你们不用看他了'
};

gameObj.B1 = {
    type : 0,
    title : '你立马收到了贱桥大学的录取通知书,开启贱桥大学求学之路。 进入了贱桥大学,你立志要在毕业后成为大富翁。为了答到目标, 你选择在接下来的几年里:',
    choices : [
        { name : '好好学习,成为学霸,参加各种竞赛和考试。', nextKey : 'C2' },
        { name : '拓展人脉,加入学生会', nextKey : 'D2' }
    ],
    imgUrl : './images/B1.png',
    shareTitle: '没有拿到毕业证书，你们不用看他了'
};

gameObj.A2 = {
    type : 0,
    title : '因为努力学习,你的技能水平在班里名列前茅,在许多竞赛中取得 了好成绩,于是你:',
    choices : [
        { name : '继续努力。', nextKey : 'A3' },
        { name : '开始接私活。', nextKey : 'B3' }
    ],
    imgUrl : './images/A2.png',
    shareTitle: ''
};

gameObj.B2 = {
    type : 0,
    title : '你与包工头成为了铁哥们儿,他时不时就给你介绍一些外快活儿干,你在学习与实践中进一步地提升了自己。但有一天你发现,包工头把除了你之外的所有工人的工资都贪污拖欠了,如果包庇他,你可以继续接活赚钱, 但其他工人会很可怜,举报他,工人可以拿到工钱,但打了地头蛇你可能人脉前功尽弃,无法毕业后在这个城市混下去了,你会:',
    choices : [
        { name : '那也要举报他。', nextKey : 'C3' },
        { name : '包庇他。', nextKey : 'D3' }
    ],
    imgUrl : './images/B2.png',
    shareTitle: ''
};

gameObj.C2 = {
    type : 0,
    title : '因为努力学习,你的绩点在班里名列前茅,在许多竞赛中取得了好成绩,于是你:',
    choices : [
        { name : '继续努力。', nextKey : 'E3' },
        { name : '开始拓展代考业务。', nextKey : 'F3' },
        { name : '申请交流。', nextKey : 'A1' }
    ],
    imgUrl : './images/C2.png',
    shareTitle: ''
};

gameObj.D2 = {
    type : 0,
    title : '进入学生会后,你发现学生会其实是被境外敌对势力控制的邪恶组织,目的是潜移默化地控制同学们的思想, 让大家信仰邪教,把贱桥大学变成某邪教大学,于是你:',
    choices : [
        { name : '邪教是没有前途的，退出学生会，加入创业团队。', nextKey : 'G3' },
        { name : '邪教好啊！我要成为教主！', nextKey : 'H3' },
        { name : '申请交流。', nextKey : 'A1' }
    ],
    imgUrl : './images/D2.png',
    shareTitle: ''
};

gameObj.A3 = {
    type : 0,
    title : '你成为了年级第一名,可以用挖掘机绣花,拿到了丰厚的奖学金,你把它们用来:',
    choices : [
        { name : '买一台自己的挖掘机。', nextKey : 'A4' },
        { name : '买一双滑板鞋。', nextKey : 'B4' }
    ],
    imgUrl : './images/A3.png',
    shareTitle: ''
};

gameObj.B3 = {
    type : 0,
    title : '你接私活获得了第一桶金,一年赚了十来万,但耽误了学习进度,你思考再三决定:',
    choices : [
        { name : '反正都能赚钱了,继续实战提高自己。', nextKey : 'C4' },
        { name : '暂停业务,出国进修高级挖掘魔法技术。', nextKey : 'D4' }
    ],
    imgUrl : './images/B3.png',
    shareTitle: ''
};

gameObj.C3 = {
    type : 0,
    title : '你举报了包工头,他被警察带走,而你被跟他关系很好的黑社盯上了,流亡他乡。于是你:',
    choices : [
        { name : '带着工人们一起跑。', nextKey : 'E4' },
        { name : '开始创业。', nextKey : 'E4' }
    ],
    imgUrl : './images/C3.png',
    shareTitle: ''
};

gameObj.D3 = {
    type : 0,
    title : '包庇他后,跟他关系变好,他邀请你成为伙伴,一起贪污工钱,你会:',
    choices : [
        { name : '欣然接纳。', nextKey : 'F4' },
        { name : '婉拒,我做好自己的事就行,不多管闲事。。', nextKey : 'G4' }
    ],
    imgUrl : './images/D3.png',
    shareTitle: ''
};

gameObj.E3 = {
    type : 0,
    title : '你成为了年级第一名,拿到了丰厚的奖学金,你把它们 用来:',
    choices : [
        { name : '存起来。', nextKey : 'H4' },
        { name : '买身帅气西装。', nextKey : 'I4' }
    ],
    imgUrl : './images/E3.png',
    shareTitle: ''
};

gameObj.F3 = {
    type : 0,
    title : '你代考获得了第一桶金,一年赚了几万块,你把钱用来:',
    choices : [
        { name : '投资做微商。', nextKey : 'J4' },
        { name : '赌球。', nextKey : 'K4' }
    ],
    imgUrl : './images/F3.png',
    shareTitle: ''
};

gameObj.G3 = {
    type : 0,
    title : '你每天持拜见两位互联网营销大佬,参加三次新 媒体运营讲座,在朋友圈分享五十篇中西文化碰 撞类“深度好文”,看二十集领导力和创业规划 课,读两页佛经,念叨一百次大数据和马云。一年之后,你:',
    choices : [
        { name : '产品获得B轮融资。', nextKey : 'L4' },
        { name : '变成了傻逼。', nextKey : 'M4' }
    ],
    imgUrl : './images/G3.png',
    shareTitle: ''
};

gameObj.H3 = {
    type : 0,
    title : '你努力发展邪教理论,在校内拓展了越来越多的教徒,渐渐地巩固了自己在教内的地位,但你发现团委那边的人全都拒绝信仰邪教, 于是你:',
    choices : [
        { name : '你们既不信仰邪教,又不肯去死,我很困扰啊,只好把你们团灭了。', nextKey : 'N4' },
        { name : '算了,文化需要兼容包并,就让我们跟他们和谐相处。', nextKey : 'O4' }
    ],
    imgUrl : './images/H3.png',
    shareTitle: ''
};

gameObj.A4 = {
    type : 0,
    title : '你买了一台自己的挖掘机, 每天开挖掘机上下学,下午放学没事干就在学校后山挖着玩,结果有一天,你一不小心挖开了一个古墓,挖上来一铲子的金银珠宝,你会:',
    choices : [
        { name : '上交国家。', nextKey : 'A5' },
        { name : '偷偷拿去黑市卖了。', nextKey : 'B5' }
    ],
    imgUrl : './images/A4.png',
    shareTitle: ''
};

gameObj.B4 = {
    type : 0,
    title : '你买了一双滑板鞋,放学后在光滑的地面上摩擦摩擦,路过一个老人身边的时候,他一下摔在地上了,你要不要扶他?',
    choices : [
        { name : '不要扶他！', nextKey : 'C5' },
        { name : '扶他。', nextKey : 'D5' }
    ],
    imgUrl : './images/B4.png',
    shareTitle: ''
};

gameObj.C4 = {
    type : 0,
    title : '你赚了二十万后,因为缺课太多马上就要被学校退学了。于是你:',
    choices : [
        { name : '花钱贿赂校长。', nextKey : 'E5' },
        { name : '此处不留爷自有留爷处。大不了天桥底下办个假证。', nextKey : 'F5' }
    ],
    imgUrl : './images/C4.png',
    shareTitle: ''
};

gameObj.D4 = {
    type : 0,
    title : '你出国进修高级挖掘魔法技术,成功用挖掘机铲出一个大型魔法阵,召唤出上古神龙,但它凶残且不受你控制,于是你开着挖掘机跟它战斗,结果:',
    choices : [
        { name : '它弄坏了你的挖掘机。', nextKey : 'G5' },
        { name : '你打败了它。', nextKey : 'H5' }
    ],
    imgUrl : './images/D4.png',
    shareTitle: ''
};

gameObj.E4 = {
    type : 0,
    title : '讨回工钱的工人们表示愿意追随你,于是你成立了一家O2O搬砖工民工中介公司,为了了解行情,你每天持拜见两位互联网营销大佬,参加三次新媒体运营讲座,在朋友圈分享五十篇中西文化碰撞类“深度好文”,看二十集领导力和创业规划课,读两页佛经,念叨一百次大数据和马云。而此时房地产泡沫破裂,没有活接了,公司没能撑住倒闭了,于是你:',
    choices : [
        { name : '加入别的大公司。', nextKey : 'I5' },
        { name : '发动工友们成立义和团。', nextKey : 'J5' }
    ],
    imgUrl : './images/D4.png',
    shareTitle: ''
};

gameObj.F4 = {
    type : 1,
    title : '你欣然接纳成为包工头的私吞工钱小伙伴。结果工人们请了艾滋病讨薪队来帮忙讨薪,你被针头插中,染上了艾滋病,五年后你死了。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：他的结局很惨我都不忍心看...'
};

gameObj.G4 = {
    type : 1,
    title : '你婉拒了包工头,依旧日常接外快活儿干。毕业后你成为了一个普通的挖掘机司机。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：成为了一名普通的挖掘机司机，然后他老掉了'
};

gameObj.H4 = {
    type : 0,
    title : '你决定把钱存起来,那么你要往哪存呢?',
    choices : [
        { name : '银行。', nextKey : 'K5' },
        { name : '存钱罐里。', nextKey : 'L5' }
    ],
    imgUrl : './images/H4.png',
    shareTitle: ''
};

gameObj.I4 = {
    type : 1,
    title : '你成为了帅气的普通人,成为华尔街英语的精英销售员。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：他除了帅没什么特别的，你就不用去看了'
};


gameObj.J4 = {
    type : 0,
    title : '你成为了一名微商,每天发50条朋友圈介绍产品和展示产品使用反馈并配9张图,怒喷X宝黑心水深,纠正人们100个生活误区,转发5篇大学创业励志微商软文和10篇心灵鸡汤, 向所有好友呼吁理性消费并发 自己的产品作为配图。一年之后,你:',
    choices : [
        { name : '认识到了自己的傻逼,放弃微商,重新做人。', nextKey : 'M5' },
        { name : '成为了一名成功的微商创业者。', nextKey : 'N5' }
    ],
    imgUrl : './images/J4.png',
    shareTitle: ''
};

gameObj.K4 = {
    type : 1,
    title : '你在赌球倾家荡产并且连续卖掉自己的肾之后,终于赢了五百万,买回了自己曾经的两个肾中的一个,成功实现富裕。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：赢了五百万,成功富裕'
};

gameObj.L4 = {
    type : 0,
    title : '你的产品获得了B轮投资, 此时某互联网巨头来想要收购你的公司和产品,你会:',
    choices : [
        { name : '拒绝。', nextKey : 'O5' },
        { name : '接受。', nextKey : 'P5' }
    ],
    imgUrl : './images/L4.png',
    shareTitle: ''
};

gameObj.M4 = {
    type : 1,
    title : '在坚持念叨创业圣经一年之后,你突然醒悟,去问高僧:"我是不是傻逼啊"<br/>高僧回复你:"你说的对啊,你说的对啊,你说的很对啊……"',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：沉迷于创业，然后他炸了'
};

gameObj.N4 = {
    type : 0,
    title : '你在饮水机里下毒把团委团灭了,并安排学生会的人全部替代他们空出来的位置,统一了全校。此时邪教总会找到你, 想要让你加入九大教主,成为东亚区的头目,你:',
    choices : [
        { name : '我是要成为邪教王的人,当然接受。', nextKey : 'Q5' },
        { name : '杀死总会使者,自立新教。', nextKey : 'R5' }
    ],
    imgUrl : './images/L4.png',
    shareTitle: ''
};

gameObj.O4 = {
    type : 1,
    title : '连排除异端的觉悟都没有,邪教失格,最后你的教派信仰缺失,量变累积成质变,最后干脆改名叫做安利。某种意义上,你还是成功成为了成为邪教王,并实现了富裕。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：成为一代教主，千秋万代，一桶浆糊'
};

gameObj.A5 = {
    type : 1,
    title : '国家奖励你500块奖金和一张奖状。毕业后你成为了一名资产阶级挖掘机司机,资产就是那台挖掘机。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：成为了一名光荣的人民挖掘机司机'
};

gameObj.B5 = {
    type : 1,
    title : '你卖了五百万,非常开心。成为小富翁后有一天去参观一个拍卖会,你发现自己挖出来的光一把宝剑就拍了五千万,当场气卒。——这个故事告诉我们考完试了就别再对答案了啊孩子。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：因大宝剑一夜暴富，因大宝剑一夜暴卒'
};

gameObj.C5 = {
    type : 1,
    title : '这个老人其实是那个猫变成的,目的是考验你在蓝翔的成长,结果他发现你这个原本连猫都救的人如今竟然连自己撞倒的老人都不服,大怒,把你封印进了四次元口袋,你再也没能逃出来。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：被来自赛博坦星球的猫神抓走当宠物，人间消失连他妈都找不到'
};

gameObj.D5 = {
    type : 1,
    title : '你扶起了这个老人,他并没有讹你,原来他是之前那只猫变的,你通过了考验。“只有这种勇敢的人才会成为优秀的挖掘机师”。你获得了他珍藏的宝物——毛线团。<br/>从此你成了传说中的勇敢有担当的毛线团挖掘机师。',
    choices : [
        { name : 'restart', url : './images/restart-2.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : '',
    shareTitle: '毕业之后：因为勇敢和担当，被奖赏了代表了挖掘王标志的毛线团，从此被江湖尊称毛线挖掘师！'
};

gameObj.E5 = {
    type : 1,
    title : '你花了二十万贿赂校长,结果因为只给了钱没给小学女生,校长很不满意,虽然保留了你的学籍,但把你转到了隔壁计算机专业学习写代码,于是毕业后你成为了一个微秃的农民阶级。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：改学习计算机编程，然后成为一名光荣的农民'
};

gameObj.F5 = {
    type : 1,
    title : '你被退学了,去办了个假证。几年下来你承包了整个挖掘市场。后来你打着“蓝翔辍学生自我拼搏获成功”的旗号到处开成功学讲座,每天输出大量心灵鸡汤,靠着讲座收入,你真的成为了富翁。“挖掘机烧的不是油,是情怀。”你说。',
    choices : [
        { name : 'restart', url : './images/restart-2.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : '',
    shareTitle: '在被蓝翔开除之后励志奋斗，最终买下蓝翔，实现“明天让你高攀不起”，成为一代心灵鸡汤宗师'
};

gameObj.G5 = {
    type : 1,
    title : '它弄坏挖掘机并把你打翻在地,这时魔法学校的校长赶紧出面救你,把龙降伏,并让它变成了你的挖掘机,你开着小白龙挖掘机,一路向西,取得真经,回国后发表了《量子佛学》等学术著作,成为了万人敬仰的民族科学学者。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：因为西天取经饶有成果，成为一代佛学宗师'
};

gameObj.H5 = {
    type : 1,
    title : '你打败了它。结果受到了世界动物保护协会的强烈谴责,在舆论的重压下,你不得不退学,但退学后在社会上没有任何一家公司愿意聘用你。对动物没有爱心的人,对人也会是冷漠的。他们拒绝你的时候这么说道。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：成为拯救了世界的英雄，然后因为找不到工作而流落街头'
};

gameObj.I5 = {
    type : 1,
    title : '房地产泡沫破裂引发金融危机,大公司们也纷纷裁员,刚进公司一个月你就被裁了,作为失业人员, 成为了维稳对象,每个月可以领到500元的失业补助。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：因为所加入的公司全部倒闭，从此过上了领低保衣食无忧的日子'
};

gameObj.J5 = {
    type : 1,
    title : '你成立了义和团,然后因为非法集会被捕。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：成立义和团，然后因非法集会被捕'
};

gameObj.K5 = {
    type : 1,
    title : '按部就班的过完了风平浪静的大学生活,你成为了一名普通人。社会的螺丝钉,渺小却有自己的作用,说的就是你。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：他没什么特别的，你就不用去看了'
};

gameObj.L5 = {
    type : 1,
    title : '你买了个存钱罐,没想到它竟然是个聚宝盆,你往里面存100,它就会变成300,你成为了坐吃山不空的富翁。后来有一天不小心把存钱罐打破了,但你把钱花完后你也老死了。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : '',
    shareTitle: '毕业之后：成为了超级富豪，每天最愁的事情就是怎么花钱'
};

gameObj.M5 = {
    type : 1,
    title : '大家宽容了你,但并没有取消对你朋友圈的屏蔽。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：成为了一代微商，然后被朋友圈拉黑了'
};


gameObj.N5 = {
    type : 1,
    title : '你做了很长很长的一个梦,梦里面看到你成了一个成功的微商,代理上千,收入百万.<br/>然后你发现你的舍友在摇你:"快醒醒,傻逼。"',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：认为自己成为了一个成功的微商，然后因为面膜有问题被捕'
};

gameObj.O5 = {
    type : 1,
    title : '一年之后,你的小公司被巨头碾压成渣, 市场完全被抢走,创业失败,大侠请重新来过。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：创业成为CEO，然后被大公司收并，月薪800'
};

gameObj.P5 = {
    type : 1,
    title : '巨头收购了你的公司,并让你出任重要职位,你月薪1万,对人生感到非常满意。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: '毕业之后：创业成为CEO，然后被大公司收并，因为颜值高，拿到月薪一万'
};

gameObj.Q5 = {
    type : 1,
    title : '树大招风,你被正义的国际组织暗杀了。说好的要成为富人,怎么搞邪教去了,这个故事告诉我们要不忘初心。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：因为太帅，太有钱，手下人太多，然后被正义使者暗杀了'
};

gameObj.R5 = {
    type : 1,
    title : '不作不死,你被总部暗杀了。说好的要成为富人,怎么搞邪教去了,要搞就好好搞,干嘛自立新教,还嫌世界不够乱?这个故事告诉我们要不忘初心。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: '毕业之后：成为邪教重要头目，功高震主，然后被正义使者暗杀了'
};


// init some value for gameObj
for (var key in gameObj) {
    if (gameObj[key].type === 1) {
        gameEndingCount ++ ;
        gameObj[key].choices[0].nextKey = '-1';
    }
}