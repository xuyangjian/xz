var link = {
    //亚博
    yaboPc: 'https://www.ky346.com:9517/register/?i_code=71346184',                //亚博电脑
    yaboH5: 'https://www.4l0tf.com:9978/entry/register/?i_code=71346184',          //亚博h5
    yaboApp: 'https://www.kyty36.app:9961/?i_code=71346184',                        //亚博aap
    
    //乐鱼
    leyuPc: 'https://www.ky346.com:9517/register/?i_code=71346184',                  //爱游戏电脑
    leyuH5: 'https://www.4l0tf.com:9978/entry/register/?i_code=71346184',       //爱游戏h5 
    leyuApp: 'https://www.kyty36.app:9961/?i_code=71346184',                          //爱游戏app  
    
    //客服                                                        
    contact: 'http://hd66.tv/'                                
}



function getDevice() {
    if (/(Android|IOS|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry)/i.test(navigator.userAgent)) {
        return 'mobile'
    } else {
        return 'pc'
    }
}
const device = getDevice();



function register(key) {
    if (key === 'yabo') {
        window.location.href = device == 'pc' ? link.yaboPc : link.yaboH5;
    } else if( key === 'leyu') {
        window.location.href = device == 'pc' ? link.leyuPc : link.leyuH5;
    } else {
        window.location.href = link[key]
    }
}

function contact () {
    window.open(link.contact);
}

