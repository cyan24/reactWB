import React from 'react';
import ReactDOM from 'react-dom';
import ListWB from  './components/list-wb.jsx';//微博列表组件

var dataList=[{},{}];//这里存储的是后端传来的数据。包括头像，内容，点赞数等等
dataList=[  
   {
        headUrl:'http://f10.topitme.com/l/201001/18/12638218076582.jpg',
        nickName:'summer',
        content:'一些美好的..',
        NoCollect:132,
        NoForward:202,
        NoComment:142,
        NoPointGreat:423,
        contentImgUrls:[
           "http://f10.topitme.com/l/201009/05/12836676803394.jpg",
           "http://f10.topitme.com/l/201010/23/12878226683223.jpg",
           "http://f10.topitme.com/l/201010/27/12881713571501.jpg",
           "http://f10.topitme.com/l/201010/10/12866953609188.jpg",
           "http://f10.topitme.com/l/201010/04/12861946828667.jpg",
           "http://f10.topitme.com/l/201009/18/12848193209875.jpg"
        ]
    },
    {
        headUrl:'http://f10.topitme.com/l/200912/17/12609793551649.jpg',
        nickName:'cyan',
        content:'分享内容',
        NoCollect:1032,
        NoForward:2202,
        NoComment:1342,
        NoPointGreat:1423,
        contentImgUrls:[
           "http://f10.topitme.com/l/201007/28/12803199708390.jpg",
           "http://f10.topitme.com/l/201008/01/12806693126743.jpg"
        ]
    }
    ];
ReactDOM.render(<ListWB data={dataList} />,
  document.getElementById('place')
);