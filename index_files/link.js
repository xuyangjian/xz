﻿var link = {

    //亚博

    yaboPc: 'http://ky2791.com',                //亚博电脑

    yaboH5: 'https://kyty57.com/entry/register?i_code=71346184',          //亚博h5

    yaboApp: 'http://ky2791.com',     

                   //亚博aap


    //乐鱼

    leyuPc: 'http://ky2791.com',              //乐鱼电脑

    leyuH5: 'https://kyty57.com/entry/register?i_code=71346184',        //乐鱼h5

    leyuApp: 'http://ky2791.com',                     //乐鱼app


}


function getDevice() {

    if (/(Android|IOS|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry)/i.test

(navigator.userAgent)) {

        return 'mobile'

    } else {

        return 'pc'

    }

}

const device = getDevice();


function register(key) {

    if (key === 'yabo') {

        

window.location.href = device == 'pc' ? link.yaboPc : link.yaboH5;

    } else if (key === 'leyu') {

        window.location.href = device == 'pc' ? link.leyuPc : 

link.leyuH5;

    } else {

        window.location.href = link[key]

    }

}


function contact() {

    window.open(link.contact);

}