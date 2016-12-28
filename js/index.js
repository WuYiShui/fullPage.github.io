$(function(){

    var page = $('.section');

    /*page.eq(0).addClass('class_name');*/

    $('#container').fullpage({
        /*�Ƿ���ʾ��Ŀ���� Ĭ��ֵ��false*/
        navigation : true,
        /*ÿһ��������ɫ*/
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','green','pink'],
        /*�������ٶ�*/
        scrollingSpeed : 700,
        /*����ê����*/
        anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6'],
        /* ѭ������ �޷� */
        //continuousVertical : true,
        /* ���ò˵����� ֵ��Ӧ�˵����ӵ�IDֵ*/
        menu: '#menu',
        /*������ĳһ����Ļص����������� anchorLink �� index ����������anchorLink ��ê���ӵ����ƣ�index ����ţ���1��ʼ����*/
        afterLoad: function(anchorLink, index){
            /*alert('�ҵ����˵�'+index+'���ˣ�index�Ǵ�1��ʼ����Ӵ������')*/
            var i = index - 1;
            page.eq(i).addClass('comIn').siblings().removeClass('comIn');
        },
        // ����ǰ�Ļص����������� index��nextIndex �� direction 3��������
        // index ���뿪�ġ�ҳ�桱����ţ���1��ʼ���㣻

        // nextIndex �ǹ������ġ�ҳ�桱����ţ���1��ʼ���㣻

        // direction �ж����Ϲ����������¹�����ֵ�� up �� down��
        onLeave: function(index,nextIndex , direction){
            /*alert('����������'+index+'��������ȥ��'+nextIndex+'����������'+direction+'Ӵ����')*/
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
