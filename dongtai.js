
lucide.createIcons();


const daohangxiangmu = document.querySelectorAll('.biaoqianxiang');
const neirongbufen = document.querySelectorAll('.biaoqianneirong');

daohangxiangmu.forEach(xiangmu => {
    xiangmu.addEventListener('click', function() {

        daohangxiangmu.forEach(daohang => daohang.classList.remove('xuanzhong'));
        neirongbufen.forEach(bufen => bufen.classList.remove('xuanzhong'));


        this.classList.add('xuanzhong');


        const mubiaoid = this.getAttribute('data-biaoqian');
        document.getElementById(mubiaoid).classList.add('xuanzhong');
    });
});


let dangqianhuadong = 0;
const huadongtupian = document.querySelectorAll('.lunbotu');
const zhishideng = document.querySelectorAll('.lunbozhishi');
const lunboqiyi = document.querySelector('.lunbotupian');
const shangyigeanniu = document.querySelector('.shangyigeanniu');
const xiayigeanniu = document.querySelector('.xiayigeanniu');


function gengxinlunbo() {
    lunboqiyi.style.transform = `translateX(-${dangqianhuadong * 100}%)`;

    zhishideng.forEach((zhishi, suoyin) => {
        zhishi.classList.toggle('xuanzhong', suoyin === dangqianhuadong);
    });
}


xiayigeanniu.addEventListener('click', () => {
    dangqianhuadong = (dangqianhuadong + 1) % huadongtupian.length;
    gengxinlunbo();
});


shangyigeanniu.addEventListener('click', () => {
    dangqianhuadong = (dangqianhuadong - 1 + huadongtupian.length) % huadongtupian.length;
    gengxinlunbo();
});


zhishideng.forEach((zhishi, suoyin) => {
    zhishi.addEventListener('click', () => {
        dangqianhuadong = suoyin;
        gengxinlunbo();
    });
});





setInterval(() => {
    dangqianhuadong = (dangqianhuadong + 1) % huadongtupian.length;
    gengxinlunbo();
}, 5000);



let dangqianxinwen = 0;
const xinwenxiangmu = document.querySelectorAll('.xinwenxiang');

function gengxinxinwen() {
    xinwenxiangmu.forEach((xiang, suoyin) => {
        xiang.classList.toggle('xuanzhong', suoyin === dangqianxinwen);
    });

    dangqianxinwen = (dangqianxinwen + 1) % xinwenxiangmu.length;
}

setInterval(gengxinxinwen, 3000);




const wentixiangmu = document.querySelectorAll('.wenti');
wentixiangmu.forEach(xiang => {
    const wenti = xiang.querySelector('.wentiwenti');
    wenti.addEventListener('click', () => {
        xiang.classList.toggle('xuanzhong');
        const tubiao = wenti.querySelector('i');
        if (xiang.classList.contains('xuanzhong')) {
            tubiao.setAttribute('data-lucide', 'chevron-up');
        } else {
            tubiao.setAttribute('data-lucide', 'chevron-down');
        }
        lucide.createIcons();
    });
});
