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
function getGameEndingPercent () {
    'use strict';
    var count = 0;

    if (window.localStorage) {
        var gameEnding = window.localStorage.getItem('thingsGameEnding');

        if (gameEnding) {
            count = gameEnding.split(',').length;
        }
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
    title : '是一个家里非常穷、且高考失手以至于上不起大学的孩子,有一天落魄的你在路边救了一只猫,为了报恩,它答应为你实现一个愿望——免费上大学,你会选择什么学校?',
    choices : [
        { name : '蓝翔', nextKey : 'A1'},
        { name : '普通大学', nextKey : 'B1'}
    ],
    imgUrl : './images/0.png',
    shareTitle: '0'
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
    shareTitle: 'A1'
};

gameObj.B1 = {
    type : 0,
    title : '你立马收到了A大的录取通知书,开启A大求学之路。 进入了A大,你立志要在毕业后成为大富翁。为了答到目标, 你选择在接下来的几年里:',
    choices : [
        { name : '好好学习,成为学霸,参加各种竞赛和考试。', nextKey : 'C2' },
        { name : '拓展人脉,加入学生会', nextKey : 'D2' }
    ],
    imgUrl : './images/B1.png',
    shareTitle: 'B1'
};

gameObj.A2 = {
    type : 0,
    title : '因为努力学习,你的技能水平在班里名列前茅,在许多竞赛中取得 了好成绩,于是你:',
    choices : [
        { name : '继续努力。', nextKey : 'A3' },
        { name : '开始接私活。', nextKey : 'B3' }
    ],
    imgUrl : './images/A2.png',
    shareTitle: 'A2'
};

gameObj.B2 = {
    type : 0,
    title : '你与包工头成为了铁哥们儿,他时不时就给你介绍一些外快活儿干,你在学习与实践中进一步地提升了自己。但有一天你发现,包工头把除了你之外的所有工人的工资都贪污拖欠了,如果包庇他,你可以继续接活赚钱, 但其他工人会很可怜,举报他,工人可以拿到工钱,但打了地头蛇你可能人脉前功尽弃,无法毕业后在这个城市混下去了,你会:',
    choices : [
        { name : '那也要举报他。', nextKey : 'C3' },
        { name : '包庇他。', nextKey : 'D3' }
    ],
    imgUrl : './images/B2.png',
    shareTitle: 'B2'
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
    shareTitle: 'C2'
};

gameObj.D2 = {
    type : 0,
    title : '进入学生会后,你发现学生会其实是被境外敌对势力控制的邪恶组织,目的是潜移默化地控制同学们的思想, 让大家信仰邪教,把A大变成某邪教大学,于是你:',
    choices : [
        { name : '那也要举报他。', nextKey : 'G3' },
        { name : '包庇他。', nextKey : 'H3' },
        { name : '申请交流。', nextKey : 'A1' }
    ],
    imgUrl : './images/D2.png',
    shareTitle: 'D2'
};


gameObj.A3 = {
    type : 0,
    title : '你成为了年级第一名,可以用挖掘机绣花,拿到了丰厚的奖学金,你把它们用来:',
    choices : [
        { name : '买一台自己的挖掘机。', nextKey : 'A4' },
        { name : '买一双滑板鞋。', nextKey : 'B4' }
    ],
    imgUrl : './images/A3.png',
    shareTitle: 'A3'
};

gameObj.B3 = {
    type : 0,
    title : '你接私活获得了第一桶金,一年赚了十来万,但耽误了学习进度,你思考再三决定:',
    choices : [
        { name : '反正都能赚钱了,继续实战提高自己。', nextKey : 'C4' },
        { name : '暂停业务,出国进修高级挖掘魔法技术。', nextKey : 'D4' }
    ],
    imgUrl : './images/B3.png',
    shareTitle: 'B3'
};

gameObj.C3 = {
    type : 0,
    title : '你举报了包工头,他被警察带走,而你被跟他关系很好的黑社盯上了,流亡他乡。于是你:',
    choices : [
        { name : '带着工人们一起跑。', nextKey : 'E4' },
        { name : '开始创业。', nextKey : 'E4' }
    ],
    imgUrl : './images/C3.png',
    shareTitle: 'C3'
};

gameObj.D3 = {
    type : 0,
    title : '包庇他后,跟他关系变好,他邀请你成为伙伴,一起贪污工钱,你会:',
    choices : [
        { name : '欣然接纳。', nextKey : 'F4' },
        { name : '婉拒,我做好自己的事就行,不多管闲事。。', nextKey : 'G4' }
    ],
    imgUrl : './images/D3.png',
    shareTitle: 'D3'
};


gameObj.E3 = {
    type : 0,
    title : '你成为了年级第一名,拿到了丰厚的奖学金,你把它们 用来:',
    choices : [
        { name : '存起来。', nextKey : 'H4' },
        { name : '买身帅气西装。', nextKey : 'I4' }
    ],
    imgUrl : './images/E3.png',
    shareTitle: 'E3'
};


gameObj.F3 = {
    type : 0,
    title : '你代考获得了第一桶金,一年赚了几万块,你把钱用来:',
    choices : [
        { name : '投资做微商。', nextKey : 'J4' },
        { name : '赌球。', nextKey : 'K4' }
    ],
    imgUrl : './images/F3.png',
    shareTitle: 'F3'
};

gameObj.G3 = {
    type : 0,
    title : '你每天持拜见两位互联网营销大佬,参加三次新 媒体运营讲座,在朋友圈分享五十篇中西文化碰 撞类“深度好文”,看二十集领导力和创业规划 课,读两页佛经,念叨一百次大数据和马云。一年之后,你:',
    choices : [
        { name : '产品获得B轮融资。', nextKey : 'L4' },
        { name : '变成了傻逼。', nextKey : 'M4' }
    ],
    imgUrl : './images/G3.png',
    shareTitle: 'G3'
};

gameObj.H3 = {
    type : 0,
    title : '你努力发展邪教理论,在校内拓展了越来越多的教徒,渐渐地巩固了自己在教内的地位,但你发现团委那边的人全都拒绝信仰邪教, 于是你:',
    choices : [
        { name : '你们既不信仰邪教,又不肯去死,我很困扰啊,只好把你们团灭了。', nextKey : 'N4' },
        { name : '算了,文化需要兼容包并,就让我们跟他们和谐相处。', nextKey : 'O4' }
    ],
    imgUrl : './images/H3.png',
    shareTitle: 'H3'
};


gameObj.A4 = {
    type : 0,
    title : '你买了一台自己的挖掘机, 每天开挖掘机上下学,下午放学没事干就在学校后山挖着玩,结果有一天,你一不小心挖开了一个古墓,挖上来一铲子的金银珠宝,你会:',
    choices : [
        { name : '上交国家。', nextKey : 'A5' },
        { name : '偷偷拿去黑市卖了。', nextKey : 'B5' }
    ],
    imgUrl : './images/A4.png',
    shareTitle: 'A4'
};


gameObj.B4 = {
    type : 0,
    title : '你买了一双滑板鞋,放学后在光滑的地面上摩擦摩擦,路过一个老人身边的时候,他一下摔在地上了,你要不要扶他?',
    choices : [
        { name : '不要扶他！', nextKey : 'C5' },
        { name : '扶他。', nextKey : 'D5' }
    ],
    imgUrl : './images/B4.png',
    shareTitle: 'B4'
};

gameObj.C4 = {
    type : 0,
    title : '你赚了二十万后,因为缺课太多马上就要被学校退学了。于是你:',
    choices : [
        { name : '花钱贿赂校长。', nextKey : 'E5' },
        { name : '此处不留爷自有留爷处。大不了天桥底下办个假证。', nextKey : 'F5' }
    ],
    imgUrl : './images/C4.png',
    shareTitle: 'C4'
};

gameObj.D4 = {
    type : 0,
    title : '你出国进修高级挖掘魔法技术,成功用挖掘机铲出一个大型魔法阵,召唤出上古神龙,但它凶残且不受你控制,于是你开着挖掘机跟它战斗,结果:',
    choices : [
        { name : '它弄坏了你的挖掘机。', nextKey : 'G5' },
        { name : '你打败了它。', nextKey : 'H5' }
    ],
    imgUrl : './images/D4.png',
    shareTitle: 'D4'
};


gameObj.E4 = {
    type : 0,
    title : '讨回工钱的工人们表示愿意追随你,于是你成立了一家O2O搬砖工民工中介公司,为了了解行情,你每天持拜见两位互联网营销大佬,参加三次新媒体运营讲座,在朋友圈分享五十篇中西文化碰撞类“深度好文”,看二十集领导力和创业规划课,读两页佛经,念叨一百次大数据和马云。而此时房地产泡沫破裂,没有活接了,公司没能撑住倒闭了,于是你:',
    choices : [
        { name : '加入别的大公司。', nextKey : 'I5' },
        { name : '发动工友们成立义和团。', nextKey : 'J5' }
    ],
    imgUrl : './images/D4.png',
    shareTitle: 'E4'
};

gameObj.F4 = {
    type : 1,
    title : '你欣然接纳成为包工头的私吞工钱小伙伴。结果工人们请了艾滋病讨薪队来帮忙讨薪,你被针头插中,染上了艾滋病,五年后你死了。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'F4'
};

gameObj.G4 = {
    type : 1,
    title : '你婉拒了包工头,依旧日常接外快活儿干。毕业后你成为了一个普通的挖掘机司机。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'G4'
};


gameObj.H4 = {
    type : 0,
    title : '你决定把钱存起来,那么你要往哪存呢?',
    choices : [
        { name : '银行。', nextKey : 'K5' },
        { name : '存钱罐里。', nextKey : 'L5' }
    ],
    imgUrl : './images/H4.png',
    shareTitle: 'H4'
};



gameObj.I4 = {
    type : 1,
    title : '你成为了帅气的普通人,成为华尔街英语的精英销售员。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'I4'
};


gameObj.J4 = {
    type : 0,
    title : '你成为了一名微商,每天发50条朋友圈介绍产品和展示产品使用反馈并配9张图,怒喷X宝黑心水深,纠正人们100个生活误区,转发5篇大学创业励志微商软文和10篇心灵鸡汤, 向所有好友呼吁理性消费并发 自己的产品作为配图。一年之后,你:',
    choices : [
        { name : '认识到了自己的傻逼,放弃微商,重新做人。', nextKey : 'M5' },
        { name : '成为了一名成功的微商创业者。', nextKey : 'N5' }
    ],
    imgUrl : './images/J4.png',
    shareTitle: 'J4'
};



gameObj.K4 = {
    type : 1,
    title : '赢了五百万,成功富裕。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'K4'
};

gameObj.L4 = {
    type : 0,
    title : '你的产品获得了B轮投资, 此时某互联网巨头来想要收购你的公司和产品,你会:',
    choices : [
        { name : '拒绝。', nextKey : 'O5' },
        { name : '接受。', nextKey : 'P5' }
    ],
    imgUrl : './images/L4.png',
    shareTitle: 'L4'
};



gameObj.M4 = {
    type : 1,
    title : '你说的对',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'M4'
};


gameObj.N4 = {
    type : 0,
    title : '你在饮水机里下毒把团委团灭了,并安排学生会的人全部替代他们空出来的位置,统一了全校。此时邪教总会找到你, 想要让你加入九大教主,成为 东亚区的头目,你:',
    choices : [
        { name : '我是要成为邪教王的人,当然接受。', nextKey : 'Q5' },
        { name : '杀死总会使者,自立新教。', nextKey : 'R5' }
    ],
    imgUrl : './images/L4.png',
    shareTitle: 'N4'
};



gameObj.O4 = {
    type : 1,
    title : '连排除异端的觉悟都没有,邪教失格,最后你的教派因为信仰缺失,画风渐渐改变,量变累积成质变,最后干脆改名叫做安利。某种意义上,你还是成功成为了成为邪教王,并实现了富裕。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'O4'
};

gameObj.A5 = {
    type : 1,
    title : '国家奖励你500块奖金和一张奖状。毕业后你成为了一名资产阶级挖掘机司机,资产就是那台挖掘机。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'A5'
};

gameObj.B5 = {
    type : 1,
    title : '你卖了五百万,非常开心。成为小富翁后有一天去参观一个拍卖会,你发现自己挖出来的光一把宝剑就拍了五千万,当场气卒。——这个故事告诉我们考完试了就别对答案了啊孩子。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'B5'
};

gameObj.C5 = {
    type : 1,
    title : '这个老人其实是那个猫变成的,目的是考验你在蓝翔的成长,结果他发现你这个原本连猫都救的人如今竟然连自己撞倒的老人都不服,大怒,把你封印进了四次元口袋,你再也没能逃出来。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'C5'
};

gameObj.D5 = {
    type : 1,
    title : '你扶起了这个老人,他并没有讹你,原来他是之前那只猫变的,目的是考验你在蓝翔是否有所成长,你通过了考验。“只有这种勇敢且有担当的人才会成为优秀的挖掘机师。”他掘机师。”他说。你获得了他珍藏的宝物——毛线团。<br/>从此你成为了一个脚踩滑板鞋腰挂毛线团勇敢有担当的挖掘机师。',
    choices : [
        { name : 'restart', url : './images/restart-2.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : '',
    shareTitle: 'D5'
};

gameObj.E5 = {
    type : 1,
    title : '你花了二十万贿赂校长,结果因为只给了钱没给小学女生,校长很不满意,虽然保留了你的学籍,但把你从蓝翔挖掘专业转到了隔壁A大计算机专业做交流生学习写代码,于是毕业后你成为了一个微秃的农民阶级。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'E5'
};

gameObj.F5 = {
    type : 1,
    title : '你被退学了,去天桥底下办了个假证。几年下来你承包了整个小县城的挖掘市场。后来你打着“蓝翔辍学生自我拼搏获得成功”的旗号在附近县城里到处开讲座,有了名气后,又到全国各地给各种中小企业老板和创业人士开成功学讲座,每天输出10000ml心灵鸡汤,靠着讲座收入,你真的成为了富翁。“挖掘机烧的不是油,是情怀。”你说。',
    choices : [
        { name : 'restart', url : './images/restart-2.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : '',
    shareTitle: 'F5'
};

gameObj.G5 = {
    type : 1,
    title : '它弄坏挖掘机并把你打翻在地,这时魔法学校的校长赶紧出面救你,把龙降伏,并让它变成了你的挖掘机,你开着小白龙挖掘机,一路向西,取得真经,回国后成为方丈,发表了《量子佛学》等学术著作,成为了受万人敬仰的民族科学学者。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'G5'
};

gameObj.H5 = {
    type : 1,
    title : '你打败了它。结果受到了世界动物保护协会的强烈谴责并发动舆论攻击,在舆论的重压下,你不得不退学,但退学后在社会上没有任何一家公司愿意聘用你。对动物没有爱心的人,对人也会是冷漠的。他们拒绝你的时候这么说道。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'H5'
};

gameObj.I5 = {
    type : 1,
    title : '房地产泡沫破裂引发金融危机,大公司们也纷纷裁员,刚进公司一个月你就被裁了,作为失业人员, 成为了维稳对象,每个月可以领到500元的失业补助。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'I5'
};

gameObj.J5 = {
    type : 1,
    title : '你成立了义和团,然后因为非法集会被捕。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'J5'
};

gameObj.K5 = {
    type : 1,
    title : '按部就班的过完了风平浪静的大学生活,你成为了一名普通人。社会的螺丝钉,渺小却有自己的作用,说的就是你。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'K5'
};

gameObj.L5 = {
    type : 1,
    title : '你买了个存钱罐,没想到它竟然是个聚宝盆,你往里面存100,它就会变成300,你成为了坐吃山不空的富翁。后来有一天不小心把存钱罐打破了,但你把钱花完后你也老死了。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : '',
    shareTitle: 'L5'
};

gameObj.M5 = {
    type : 1,
    title : '大家宽容了你,但并没有取消对你朋友圈的屏蔽。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'M5'
};


gameObj.N5 = {
    type : 1,
    title : '快醒醒,傻逼。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'N5'
};

gameObj.O5 = {
    type : 1,
    title : '一年之后,你的小公司被巨头碾压成渣, 市场完全被抢走,创业失败,大侠请重新来过。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'O5'
};

gameObj.P5 = {
    type : 1,
    title : '巨头收购了你的公司,并让你出任重要职位,你月薪1万,对人生感到非常满意。',
    choices : [
        { name : 'restart', url : './images/restart-0.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-0.png',
    shareTitle: 'P5'
};

gameObj.Q5 = {
    type : 1,
    title : '树大招风,你被正义的国际组织暗杀了。说好的要成为富人,怎么搞邪教去了,这个故事告诉我们要不忘初心。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'Q5'
};

gameObj.R5 = {
    type : 1,
    title : '不作不死,你被总部暗杀了。说好的要成为富人,怎么搞邪教去了,要搞就好好搞,干嘛自立新教,还嫌世界不够乱?这个故事告诉我们要不忘初心。',
    choices : [
        { name : 'restart', url : './images/restart-1.png' },
        { name : 'download', url : './images/download.png' }
    ],
    imgUrl : './images/ending-1.png',
    shareTitle: 'R5'
};


// init some value for gameObj
for (var key in gameObj) {
    if (gameObj[key].type === 1) {
        gameEndingCount ++ ;
        gameObj[key].choices[0].nextKey = '-1';
    }
}