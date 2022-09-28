$(function () {
    $('.proa').on('click', function () {
        $(this).addClass('tabselect').siblings('.proa').removeClass('tabselect');
        $(this).find('.icon').addClass('active');
        $(this).siblings('.proa').find('.icon').removeClass('active');
    })
    $('.tya').click(function () {
        $('.contenta').show().siblings().hide();
    })
    $('.zra').click(function () {
        $('.show1a').show().siblings().hide();
    })
    $('.cpa').click(function () {
        $('.show2a').show().siblings().hide();
    })
    $('.dja').click(function () {
        $('.show3a').show().siblings().hide();
    })
    $('.dza').click(function () {
        $('.show4a').show().siblings().hide();
    })
    $('.qpa').click(function () {
        $('.show5a').show().siblings().hide();
    })

    $('.prob').on('click', function () {
        $(this).addClass('tabselect').siblings('.prob').removeClass('tabselect');
        $(this).find('.icon').addClass('active');
        $(this).siblings('.prob').find('.icon').removeClass('active');
    })
    $('.tyb').click(function () {
        $('.contentb').show().siblings().hide();
    })
    $('.zrb').click(function () {
        $('.show1b').show().siblings().hide();
    })
    $('.cpb').click(function () {
        $('.show2b').show().siblings().hide();
    })
    $('.djb').click(function () {
        $('.show3b').show().siblings().hide();
    })
    $('.dzb').click(function () {
        $('.show4b').show().siblings().hide();
    })
    $('.qpb').click(function () {
        $('.show5b').show().siblings().hide();
    })
})



var viewHeight = document.documentElement.clientHeight;

function lazyload() {
    var eles = document.querySelectorAll('img[data-original][lazyload]')
    Array.prototype.forEach.call(eles, function (item, index) {
        var rect
        if (item.dataset.original === "")
            return
        rect = item.getBoundingClientRect()
        if (rect.bottom >= 0 && rect.top < viewHeight) {
            ! function () {
                var img = new Image()
                img.src = item.dataset.original
                img.onload = function () {
                    item.src = img.src
                }
                item.removeAttribute("data-original")
                item.removeAttribute("lazyload")
            }()
        }
    })
}
lazyload()
document.addEventListener("scroll", lazyload)
