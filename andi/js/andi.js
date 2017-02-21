//登录页
$(function(){
    $('.login-box').css('margin-top',($(window).height()-315)/2);
    $('.loginContainer').css('height',($(window).height()));
})
/*//layer调用标准
var layerdiy=function(){
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

        layer.alert(tips,{ skin:'layer-ext-flower'});
    };
    //信息提示，2秒消失
    var tips_msg=function(tips,icon){
        layer.msg(tips, {icon: icon})
    };
    /!*有处理事件的弹框*!/
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
}*/
//以下为angular
var app = angular.module('AnDi', []);
app.controller('navList', function($scope) {
    $scope.navList=[
        {id:0,title:'门店首页',content:[]},
        {id:1,title:'门店会员',content:[]},
        {id:2,title:'公司管理',content:['员工列表','权限设置','教师设置']},
        {id:3,title:'套餐课程',content:['套餐设置','课程模板','课程设置','活动设置']},
        {id:4,title:'财务系统',content:['会员财务','签单情况']},
        {id:5,title:'报表管理',content:['会员情况','课程安排','上课统计']}
    ]
    $scope.navIndex=-1;
    $scope.isActive=function(index){
        $scope.navIndex=index;
    }
});
// 主页控制器
app.controller('homeController', function($scope,$http) {
    $http.get('/dist/AndiDanceFrontend/andi/js/100.json')
        .success(function(data) {
            $scope.classSituations = data;
        });
    $http.get('/dist/AndiDanceFrontend/andi/js/200.json')
        .success(function(data) {
            $scope.todayCourses = data;
        });
});
// 操作处理弹框
app.controller('navHandle', function($scope) {
    $scope.memberHander=function(){
        layer.open({
            skin:'layer-ext-flower',
            type: 1,
            shade: 0.3,
            shadeClose:true,
            closeBtn: 0,
            area: ['auto', 'auto'], //宽高
            title: false, //不显示标题
            content: $('.memberHandle'), //捕获的元素
            cancel: function(index){
                layer.close(index);
                this.content.show();
                $('.memberHandle').css("display","none");
            }
        });
    }

});
app.controller('addMemberController', function($scope) {
    $scope.memberHander=function(){
        layer.open({
            skin:'layer-ext-flower',
            type: 1,
            shade: 0.3,
            shadeClose:true,
            closeBtn: 0,
            area: ['auto', 'auto'], //宽高
            title: false, //不显示标题
            content: $('.memberHandle'), //捕获的元素
            cancel: function(index){
                layer.close(index);
                this.content.show();
                $('.memberHandle').css("display","none");
            }
        });
    }
});
app.controller('memberInfo', function($scope) {
    $scope.chargeValue=function(){
        layer.open({

            type: 1,
            shade: 0.3,
            shadeClose:true,
            closeBtn: 0,
            area: ['auto', 'auto'], //宽高
            title: false, //不显示标题
            content: $('.chargeValue'), //捕获的元素
            cancel: function(index){
                layer.close(index);
                this.content.show();
                $('.chargeValue').css("display","none");
            }
        });
    }
});
app.controller('commonController', function($scope,CommonUtils) {
    $scope.refreshCarda=function(){
        CommonUtils.tips_info("请刷新办会员卡...")
    }
    $scope.bindCarda=function(){
        CommonUtils.tips_handle("绑定会员卡号",function(){})
    }
    $scope.bindCarda=function(){
        CommonUtils.tips_handle("恭喜您,成功创建会员：李天际，卡号254545",function(){

        })
    }
});