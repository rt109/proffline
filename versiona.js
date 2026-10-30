var lastVersion = 22;
var updateLog = `V1.22 
1。新ZA Mega和Mega活动
2。新曲，技能实现，平衡调整等
3。界面和内存优化
4。每周蛋招
5。献祭，献祭还会删除蛋 `;
var urlWgt = "https://gitee.com/rt109/proffline/raw/master/wgt/1.183.wgtu";
// var urlWgt = "https://gitee.com/rt109/proffline/raw/master/wgt/1.18.1.wgt";
//允许使用上面补丁更新的老版本号
var arrCanUpdateVersion = ["1.16"];
//每个版本号允许安装的补丁不同
var arrUrlWgt = [
//1.19
""

];
var arrLogText = [
//1.19
`1.19升1.191修快买卡死，更新请先：
1。导出存档和数据上传
2。之前用过补丁去游戏文件夹zuojs.pokerogue/apps.../update里删除所有旧补丁
安装后不要重复安装
`

];
var patchLog = "暂无补丁";
// var patchLog = "V1.18.1\n8月8日修妖梦逃跑bug";
var patchLogTest = "本文已弃用";
var arrTestPatchPass = ["1003","1004","1005","1006","1007","1008","1009",
//1.19
"1010",
"1011",
"1012",
"1013",
"1014",
//1.21
"1015",
];
var arrTestPatchUrlWgt = ["https://gitee.com/rt109/proffline/raw/master/wgt/1.181.wgtu",
"https://gitee.com/rt109/proffline/raw/master/wgt/1.182.wgtu",
"https://gitee.com/rt109/proffline/raw/master/wgt/1.183.wgtu",
"https://gitee.com/rt109/proffline/raw/master/wgt/1.184.wgtu",
"https://gitee.com/rt109/proffline/raw/master/wgt/1.18-1.184.wgtu",
"https://gitee.com/rt109/proffline/raw/master/wgt/1.184-1.185.wgtu",
"https://gitee.com/rt109/proffline/raw/master/wgt/1.184-1.1852.wgtu",
//1.19
"https://gitee.com/rt109/proffline/raw/master/wgt/1.19to1.191_2.wgtu",
"https://gitee.com/rt109/proffline/raw/master/wgt/1.191to1.192.wgtu",
"https://gitee.com/rt109/proffline/raw/master/wgt/1.192to1.193_2.wgtu",
"https://gitee.com/rt109/proffline/raw/master/wgt/1.193to1.194.wgtu",
//1.20
"https://gitee.com/rt109/proffline/raw/master/wgt/1.20to1.201test.wgtu",
//1.21
"https://gitee.com/rt109/proffline/raw/master/wgt/1.21to1.211.wgtu",

];
var arrTestLogText = ["1003","1004","1005","1006","1007","1008","1009",
//1.19
"1.19升1.191：修复快买道具卡死",
"1.191升1.192：修复曼巴挑战卡死",
"1.192升1.193：修复魔术师顺手牵羊bug",
"1.193升1.194：每日成就，fumo商店bug",
"1.20升1.201：test",
//1.21
"1.21升1.211：修没难度7bug",
];
var qunText = "";