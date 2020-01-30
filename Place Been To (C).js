option = {
    title : {
        text: 'The place I have been to',
        subtext: 'From 1998 to 2020',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['Times']
    },
    dataRange: {
        x: 'left',
        y: 'bottom',
        splitList: [
            {start: 10},
            {start: 6, end: 10},
            {start: 4, end: 5},
            {start: 3, end: 3},
            {start: 2, end: 2},
            {start: 1, end: 1},
            {end: 0, label: '0'}
        ],
        color: ['#FF4500','#FFA500','#FFD700','#ADFF2F','#40E0D0','#87CEFA','#A9A9A9']
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: false},
            dataView : {show: false, readOnly: false},
            restore : {show: false},
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
    series : [
        {
            name: 'Times',
            type: 'map',
            mapType: 'china',
            roam: true,
            itemStyle:{
                normal:{
                    label:{
                        show:false,
                    }
                },
                emphasis:{label:{show:false}}
            },
            data:[
                {name: '北京',value: 3},
                {name: '天津',value: 1},
                {name: '上海',value: 7},
                {name: '重庆',value: 1},
                {name: '河北',value: 2},
                {name: '河南',value: 3},
                {name: '云南',value: 1},
                {name: '辽宁',value: 1},
                {name: '黑龙江',value: 1},
                {name: '湖南',value: 7},
                {name: '安徽',value: 1},
                {name: '山东',value: 1},
                {name: '新疆',value: 4},
                {name: '江苏',value: 2},
                {name: '浙江',value: 11},
                {name: '江西',value: 4},
                {name: '湖北',value: 6},
                {name: '广西',value: 3},
                {name: '甘肃',value: 2},
                {name: '山西',value: 12},
                {name: '内蒙古',value: 1},
                {name: '陕西',value: 2},
                {name: '吉林',value: 1},
                {name: '福建',value: 3},
                {name: '贵州',value: 3},
                {name: '广东',value: 20},
                {name: '青海',value: 2},
                {name: '西藏',value: 1},
                {name: '四川',value: 3},
                {name: '宁夏',value: 1},
                {name: '海南',value: 7},
                {name: '台湾',value: 0},
                {name: '香港',value: 5},
                {name: '澳门',value: 1}
            ]
        }
    ]
};
                    
