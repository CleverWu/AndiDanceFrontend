app.service('CommonUtils',function ($http) {




    layer.config({
        extend:'skin/flower/style.css'
    });
    layer.config({
        extend:'skin/diy/style.css'
    });
    var tips_load=function(isOpen){
        if(isOpen==1){
            index1 = layer.load(2,{
                shade: [0.6,'#000000'], //0.1透明度的白色背景
                content:'<div class="loadText">请稍后</div>'
            });
        }else if(isOpen==0){
            layer.close(index1);
        }
    };

    //信息确认弹框
    var tips_info=function(tips){
        layer.alert(tips,{ title:'系统提示',skin:'layer-ext-flower'});
    };
    //信息提示，2秒消失
    var tips_msg=function(tips,icon){
        layer.msg(tips, {icon: icon})
    };
    /*有处理事件的弹框*/
    var tips_handle=function(tips,handle){
        layer.confirm(tips, {title:'系统提示', skin:'layer-ext-flower'}, function(index){
            layer.close(index);
            handle();
        });
    };

    return {
        tips_load:tips_load,
        tips_info:tips_info,
        tips_msg:tips_msg,
        tips_handle:tips_handle
    };
});