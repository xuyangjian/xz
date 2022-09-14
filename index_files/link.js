var link = {
    //亚博
    yaboPc: 'https://www.6p71h.com:7443/register/?i_code=2011991',                //亚博电脑
    yaboH5: 'https://www.79ohxn.com:6443/entry/register/?i_code=2011991',          //亚博h5
    yaboApp: 'https://www.stiuic.com:9663/?i_code=2011991',                        //亚博aap
    
    //乐鱼
    leyuPc: 'https://www.sv588.com:9960/register/?i_code=0642513',                  //爱游戏电脑
    leyuH5: 'https://www.4t14u.com:9975/entry/register/?i_code=0642513',       //爱游戏h5 
    leyuApp: 'https://www.g9fy5.com:9109/?i_code=0642513',                          //爱游戏app  
    
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

