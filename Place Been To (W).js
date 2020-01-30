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
        data:['']
    },
    dataRange: {
        x: 'left',
        y: 'bottom',
        splitList: [
            {start: 1, end: 1, label: 'have been to'},
            {end: 0, label: '0'}
        ],
        color: ['#FF4500', '#A9A9A9']
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
            'world': true
        }
    },
    series : [
        {
            name: 'Times',
            type: 'map',
            mapType: 'world',
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
                {name: 'China',value: 1},
                {name: 'Japan',value: 1},
                {name: 'United Kingdom',value: 1},
                {name: 'Norway',value: 1},                
                {name: 'Denmark',value: 1},                
                {name: 'Sweden',value: 1},                
                {name: 'Finland',value: 1},  
                {name: 'Estonia',value: 1},                
            ]
        }
    ]
};
                    
