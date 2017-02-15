//layer调用标准
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
}
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
    $scope.gridOptions1 = {
        enableRowSelection: false,
        enablePaginationControls: false,
        useExternalPagination: false,//是否使用分页按钮
        rowHeight: 20,
        columnDefs: [
            {
                field: 'name',
                displayName: '优惠券名称',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableCellEdit: false
            },
            {
                field: 'number',
                displayName: '编码',
                width: '12%',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableCellEdit: false
            },
            {
                field: 'exchangeValid',
                displayName: '兑换有效期',
                width: '15%',
                cellTemplate:'<span>{{grid.appScope.getTimeStr(row.entity.exchangeStart)}}至{{grid.appScope.getTimeStr(row.entity.exchangeEnd)}}</span>',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableCellEdit: false
            },
            {
                field: 'useValid',
                displayName: '使用有效期',
                width: '15%',
                cellTemplate:'<span>{{grid.appScope.getTimeStr(row.entity.useStart)}}至{{grid.appScope.getTimeStr(row.entity.useEnd)}}</span>',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableCellEdit: false // 是否可编辑
            },
            {
                field: 'money',
                displayName: '金额',
                cellTemplate:'<span>{{grid.appScope.getMoney(row.entity)}}</span>',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableCellEdit: false },
            {
                field: 'description',
                displayName: '使用说明',
                width:'15%',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableCellEdit: false
            },
            {
                field: 'exchangeCount',
                displayName: '可兑换次数',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableCellEdit: false
            },
            {
                field: 'useCount',
                displayName: '已兑换次数',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                enableCellEdit: false
            },
            {
                field: 'handle',
                displayName: '操作',
                enableColumnMenu: false,// 是否显示列头部菜单按钮
                cellTemplate:'<span class="chatHandle" ng-click="grid.appScope.editCoupon(row.entity)"><img class="iconHandle" src="/es/dist/img/icon_edit.png"></span>',
                enableCellEdit: false
            }

        ],
        enableHorizontalScrollbar :  0, //grid水平滚动条是否显示, 0-不显示  1-显示
        enableVerticalScrollbar : 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
        onRegisterApi : function( gridApi ) {
            $scope.gridApi1 = gridApi;
        }
    };
});
app.controller('homeController', function($scope,$http) {
    $http.get('/AndiDanceFrontend/andi/js/100.json')
        .success(function(data) {
            $scope.classSituations = data;
        });
    $http.get('/AndiDanceFrontend/andi/js/200.json')
        .success(function(data) {
            $scope.todayCourses = data;
        });
});
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