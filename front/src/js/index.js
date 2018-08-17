//  js 的面向对象的方法：
// var banner = new Banner()
//
// function Banner() {
//     console.log("hello world")
//     this.person = "huanchengjie"
//
// }
// 原型链：
//  给定义的函数添加方法：
// Banner.prototype.greet = function (name) {
//     console.log('hello',name)
//
// };
//
// var banner = new Banner()
// banner.greet("heyadong")
// console.log(banner.person)

function Banner() {
    this.count = 0;
    this.bannerUI = $("#bannerUI");
    this.bannerGroup = $("#banner-group");
    this.listenhover(); // 初始化时执行
    this.larrow = $("#left-arrow");
    this.rarrow = $("#right-arrow");
    this.clickarrow();
    this.dotsnum = $("#bannerUI li").length


}
Banner.prototype.dotsinit = function () {
    // 初始化轮播图的dot
    console.log('nihao');
    console.log(this.dotsnum);
    for(var i=0;i<this.dotsnum;i++){
        $("#dots").append('<li></li>');
    }
    $(".dots li").addClass('dot')
};


Banner.prototype.listenhover = function () { // 监听鼠标移动事件
    var self = this;
    this.bannerGroup.hover(function () {
        self.arrowshow(true);
        clearInterval(self.timer) // 鼠标移动到idiv的事件
    },function () {
        self.arrowshow(false);
        self.loop(); // 鼠标移开事件
    })

}
Banner.prototype.loop = function () {
    var self = this;
    this.timer = setInterval(function () {
        $("#dots li").eq(self.count).addClass('active');
        self.count++;
        if(self.count>3) self.count=0;
        self.bannerUI.animate({"left":-798*self.count},500);
        $("#dots li").eq(self.count-1).removeClass('active');
        $("#dots li").eq(self.count).addClass('active');
    },2000)  //定时器 设置2s自动切换轮播图

};
Banner.prototype.run = function () {
    // var count = 0;
    // var bannerUI = $("#bannerUI");
    // setInterval(function () {
    //     if(count>3) count=0;
    //     bannerUI.animate({"left":-798*count},500);
    //     count += 1;
    // },2000)  //定时器 设置2s自动切换轮播图
    this.loop();
    this.dotsinit();
    this.dotsclick();
};
Banner.prototype.arrowshow = function (is_show) {
    // banner图的箭头显示方法
    if(is_show){
        this.larrow.show();
        this.rarrow.show();
    }else {
        this.larrow.hide();
        this.rarrow.hide()
    }

};
// 轮播图左右切换
Banner.prototype.clickarrow = function () {
    var self = this;
    self.larrow.click(function () {
        self.count--;
        if (self.count < 0) self.count = 3;
        //     self.bannerUI.animate({"left":-798*self.count},500)
        // });
        self.animates();
    });
        self.rarrow.click(function () {
            self.count++;
            if (self.count > 3) self.count = 0;
            self.animates();
            //     self.bannerUI.animate({'left':-798*self.count},500)
            // });
        });
    };
// 重构将bannerUI 的动画效果抽象出来.
Banner.prototype.animates = function () {
    $("#dots li").removeClass('active');
    this.bannerUI.animate({'left':-798*this.count},500);
    $("#dots li").eq(this.count).addClass('active');
};
Banner.prototype.dotsclick = function () {
    var self = this;
    $("#dots li").each(function (index,element) {
        // each方法遍历
        $(element).click(function () {
            self.count = index;
            self.animates()
        })
    })
};
$(function() { // 页面加载完成后执行此方法.
    var banner = new Banner();
    banner.run()
});


