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
    $scope.switch=true;

});
app.controller('cMain', function($scope,CommonUtils) {
    //选课
    $scope.tab=1;
    $scope.week1s=[
        {week:"周一",checked:false,courseName:"街舞基础课",teacher:"李天牛",time:"9:00-10:00",danceType:"街舞",payCourseTime:"3课时",classType:"基础版",courseType:"基础版"}
    ]
    $scope.week2s=[
        {week:"周二",checked:false,courseName:"街舞进阶1",teacher:"李天牛",time:"9:00-10:00",danceType:"街舞",payCourseTime:"3课时",classType:"进阶版",courseType:"进阶版"}
    ]
    $scope.week3s=[
        {week:"周三",checked:false,courseName:"街舞进阶2",teacher:"李天牛",time:"9:00-10:00",danceType:"街舞",payCourseTime:"3课时",classType:"进阶版",courseType:"进阶版"}
    ]
    $scope.week4s=[
        {week:"周四",checked:false,courseName:"街舞进3",teacher:"李天牛",time:"9:00-10:00",danceType:"街舞",payCourseTime:"3课时",classType:"进阶版",courseType:"进阶版"}
    ]
    $scope.week5s=[
        {week:"周五",checked:false,courseName:"街舞进阶4",teacher:"李天牛",time:"9:00-10:00",danceType:"街舞",payCourseTime:"3课时",classType:"进阶版",courseType:"进阶版"}
    ]
    $scope.week6s=[
        {week:"周六",checked:false,courseName:"街舞进阶5",teacher:"李天牛",time:"9:00-10:00",danceType:"街舞",payCourseTime:"3课时",classType:"进阶版",courseType:"进阶版"}
    ]
    $scope.week7s=[
        {week:"周日",checked:false,courseName:"街舞进阶6",teacher:"李天牛",time:"9:00-10:00",danceType:"街舞",payCourseTime:"3课时",classType:"进阶版",courseType:"进阶版"}
    ]


    //左侧导航栏
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
    //操作弹框
    $scope.memberHander=function(){
        layer.open({
            type: 1,
            shade: 0.3,
            shadeClose:true,
            closeBtn: 0,
            area: ['auto', 'auto'], //宽高
            title: false, //不显示标题
            content: $('.mainMemberHandle'), //捕获的元素
        });
    }
    //会员扣课
    $scope.deductCourse=function(){
        layer.closeAll();
        layer.open({
            type: 1,
            shade: 0.3,
            shadeClose:true,
            closeBtn: 0,
            area: ['auto', 'auto'], //宽高
            title: false, //不显示标题
            content: $('.deductCourse'), //捕获的元素
        });
    }
    //充值
    $scope.chargeValue=function(){
        layer.closeAll();
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
    //会员选课弹框
    $scope.chooseCourse=function(){
        layer.closeAll();
        layer.open({
            type: 1,
            shade: 0.3,
            shadeClose:true,
            closeBtn: 0,
            area: ['auto', 'auto'], //宽高
            title: false, //不显示标题
            content: $('.selectCourse'), //捕获的元素
            cancel: function(index){
                layer.close(index);
                this.content.show();
                $('.selectCourse').css("display","none");
            }
        });
    }
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