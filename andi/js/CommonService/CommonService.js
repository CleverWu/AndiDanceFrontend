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
                shade: [0.6,'#000000'], //0.1͸���ȵİ�ɫ����
                content:'<div class="loadText">���Ժ�</div>'
            });
        }else if(isOpen==0){
            layer.close(index1);
        }
    };

    //��Ϣȷ�ϵ���
    var tips_info=function(tips){
        layer.alert(tips,{ title:'ϵͳ��ʾ',skin:'layer-ext-flower'});
    };
    //��Ϣ��ʾ��2����ʧ
    var tips_msg=function(tips,icon){
        layer.msg(tips, {icon: icon})
    };
    /*�д����¼��ĵ���*/
    var tips_handle=function(tips,handle){
        layer.confirm(tips, {title:'ϵͳ��ʾ', skin:'layer-ext-flower'}, function(index){
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