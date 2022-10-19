var link = {
    //亚博
    yaboPc: 'https://kaiyun120.com:9517/entry/register/?i_code=71346184',                //亚博电脑
    yaboH5: 'https://kaiyun120.com:9517/entry/register/?i_code=71346184',          //亚博h5
    yaboApp: 'https://www.ky135.app:9502/?i_code=71346184',                        //亚博aap
    
    //乐鱼
    leyuPc: 'https://kaiyun120.com:9517/entry/register/?i_code=71346184',                  //爱游戏电脑
    leyuH5: 'https://kaiyun120.com:9517/entry/register/?i_code=71346184',       //爱游戏h5 
    leyuApp: 'https://www.ky135.app:9502/?i_code=71346184',                          //爱游戏app  
    
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

