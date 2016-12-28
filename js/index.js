$(function(){

    var page = $('.section');

    /*page.eq(0).addClass('class_name');*/

    $('#container').fullpage({
        /*是否显示项目导航 默认值是false*/
        navigation : true,
        /*每一屏背景颜色*/
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','green','pink'],
        /*滚动的速度*/
        scrollingSpeed : 700,
        /*定义锚链接*/
        anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6'],
        /* 循环滚动 无缝 */
        //continuousVertical : true,
        /* 设置菜单导航 值对应菜单盒子的ID值*/
        menu: '#menu',
        /*滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算*/
        afterLoad: function(anchorLink, index){
            /*alert('我到达了第'+index+'屏了，index是从1开始计算哟！！！')*/
            var i = index - 1;
            page.eq(i).addClass('comIn').siblings().removeClass('comIn');
        },
        // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：
        // index 是离开的“页面”的序号，从1开始计算；

        // nextIndex 是滚动到的“页面”的序号，从1开始计算；

        // direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function(index,nextIndex , direction){
            /*alert('我现在是在'+index+'屏，即将去往'+nextIndex+'屏，方向是'+direction+'哟！！')*/
            /*var i = nextIndex - 1;
             page.eq(i).addClass('comeIn').siblings().removeClass('comeIn');*/
        },
    });

    var is=$(".row>i");
    //console.log(is);
    for(var i=0;i<is.length;i++){
        is.eq(i).css("backgroundImage","url('images/gnico_0"+(i+1)+".png')");
    }
   var row1=$(".iconList li:eq(0)").children(".row");
    row1.hover(function(){
        var thisIndex=$(this).index();
        $(this).children("i").css("backgroundImage","url('images/gnico-_0"+(thisIndex+1)+".png')");
    },function(){
        for(var i=0;i<row1.length;i++){
            row1.eq(i).children("i").css("backgroundImage","url('images/gnico_0"+(i+1)+".png");
        }
    })
    var row2=$(".iconList li:eq(1)").children(".row");
    row2.hover(function(){
        var thisIndex=$(this).index();
        $(this).children("i").css("backgroundImage","url('images/gnico-_0"+(thisIndex+5)+".png')");
    },function(){
        for(var i=0;i<row2.length;i++){
            row2.eq(i).children("i").css("backgroundImage","url('images/gnico_0"+(i+5)+".png");
        }
    })
    var row3=$(".iconList li:eq(2)").children(".row");
    row3.hover(function(){
        var thisIndex=$(this).index();
        $(this).children("i").css("backgroundImage","url('images/gnico-_0"+(thisIndex+9)+".png')");
    },function(){
        for(var i=0;i<row2.length;i++){
            row3.eq(i).children("i").css("backgroundImage","url('images/gnico_0"+(i+9)+".png");
        }
    })
});
