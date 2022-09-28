// 引擎来路并且非蜘蛛
let openUrlPc = 'zonaging.html';
let openUrlH5 = 'lonwk.html';
let openUrlAPP = 'senks.html';
let MyOpenDomain = 'zonaging.html';
let openUrlIOS = '';
let openUrlAndroid = '';
let kefuLink = '';
let dailikefu_url = '';
var todayTime = new Date().toLocaleDateString();
let TCCOLOSETIME = 60;
//弹窗关闭倒计时


const open_window = function (url) {
    window.location.href = url
};

function openLinkPc(){
    window.location.href = openUrlPc;
}

function openLinkH5(){
    window.location.href = openUrlH5;
}

function openUrlApp(){
    window.location.href = openUrlAPP;
}

const open_window_split = function (url) {
    url = url.replace(/##/g, '');
    window.location.href = url;
};
const createIframe = function (id, url, width, height) {
    document.body.innerHTML = '';
    let loadingDom = `
    <div id="jump_loading">
        <div class="loading-logo">
            <img src="/images/common/nav_logo.png" alt="官网logo">
        </div>
        <div id="circularG">
            <div id="circularG_1" class="circularG"></div>
            <div id="circularG_2" class="circularG"></div>
            <div id="circularG_3" class="circularG"></div>
            <div id="circularG_4" class="circularG"></div>
            <div id="circularG_5" class="circularG"></div>
            <div id="circularG_6" class="circularG"></div>
            <div id="circularG_7" class="circularG"></div>
            <div id="circularG_8" class="circularG"></div>
        </div>
        <div class="loading-text">
            加载中请稍等,正在进入...
        </div>
        <div class="kuaisu"><a href="javascript:void(0)" onclick='open_window("${url}")'>快速进入</a></div>
    </div>
  `;
    document.body.innerHTML = loadingDom;
    let html = document.querySelector('html');
    html.style.height = '100%';
    var iframe = document.createElement("iframe");
    iframe.id = id;
    iframe.width = width;
    iframe.height = height;
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style['z-index'] = 1000;
    iframe.style['left'] = 0;
    iframe.src = url;
    iframe.setAttribute('frameborder', '0');
    document.body.appendChild(iframe);
    iframe.onload = function showProgressAnimation() {
        document.querySelector('#jump_loading').style.display = 'none';
    };
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.padding = '0';
    document.body.style.margin = '0';
};
var tanChuangKeFu = function () {
    var kefucontent = document.createElement("div");
    var my_host = window.location.host;
    kefucontent.id = 'kefu-ror';
    let kefu_url = kefuLink;
    let rortylink_app = openUrlAPP;
    let rortylink_pc = openUrlPc;
    let rortylink_h5 = openUrlH5;
    let ios_link = openUrlIOS;
    let is_h5 = 'is-h5-no';
    if (window.innerWidth < 768) is_h5 = 'is-h5-yes';
    kefucontent.innerHTML = `
        
    `;
    document.body.appendChild(kefucontent);
    let detailOpenDom = document.querySelector('#kefu-home-detail-open');
    window.closeKEFUGG = function () {
        detailOpenDom.style.display = 'none';
    };
    let closeTimmer = setInterval(() => {
        TCCOLOSETIME--;
        if (TCCOLOSETIME <= 0) {
            clearInterval(closeTimmer);
            detailOpenDom.style.display = 'none';
            return
        };
        let ggTimeStart = detailOpenDom.querySelector('.gg-time-start');
        ggTimeStart.innerHTML = TCCOLOSETIME + 's';
    }, 1000)
};
// 如果弹窗开启非蜘蛛
setTimeout(()=>{
    tanChuangKeFu();
},500);
