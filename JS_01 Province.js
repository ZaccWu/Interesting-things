import json

option = {
    //配置信息
    title : {                    //标题设置
        text: '',                //标题文本
        subtext: '',             //子标题
        x:'center'               //标题位置
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {                       //图例设置
        orient: 'vertical',         //竖直布局
        x:'left',                   //居左
        data:['']
    },
    //设置比色卡
    dataRange: {                    
        min: 0,
        max: 20,
        x: 'right',                 //在x轴居右
        y: 'center',                //在y轴居中
        text:['高','低'],           // 文本，默认为数值文本
        //颜色由浅入深
      	color: ['#1D4898','#4A6DAD','#607EB6','#7791C1','#8EA3CB','#A5B6D6','#BBC8E0','#D2DAEA','#E8ECF4','#F6F8FB'], 
      	calculable : true           //是否可计算：是
    },
    //工具条配置
    toolbox: {                      //工具箱
        show: true,                 //是否显示
        orient : 'vertical',        //布局：竖直方向
        x: 'left',
        y: 'bottom',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: false,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    //各省数据配置
    series : [
        {
            name: '',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:false}},
                emphasis:{label:{show:true}}
            },
            data:[
           		{name: '浙江',value: 120},
                {name: '上海',value: 48},
                {name: '江苏',value: 20},
                {name: '安徽',value: 14},
                {name: '河南',value: 13},
                {name: '北京',value: 13},
                {name: '山东',value: 13},
                {name: '广东',value: 10},
                {name: '湖北',value: 10},
                {name: '江西',value: 8},
                {name: '福建',value: 7},
                {name: '云南',value: 5},
                {name: '贵州',value: 5},
                {name: '陕西',value: 5},
                {name: '辽宁',value: 5},
                {name: '河北',value: 5},
                {name: '四川',value: 5},
                {name: '山西',value: 4},
                {name: '新疆',value: 3},
                {name: '天津',value: 3},
                {name: '广西',value: 3},
                {name: '内蒙古',value: 3},
                {name: '甘肃',value: 3},
                {name: '重庆',value: 2},
                {name: '海南',value: 2},
                {name: '青海',value: 2},
                {name: '湖南',value: 1},
                {name: '吉林',value: 1},
                {name: '宁夏',value: 1}
            ]
        },
    ]
};
