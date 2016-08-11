'use strict';

var app=angular.module('roomManageApp');

app.controller('editRoom',['$scope','$http','dialog','$rootScope','roomCheckServices',function ($scope, $http, dialog,$rootScope,roomCheckServices) {
  var vm = this;
  $scope.userid=$rootScope.user.userid;
  $scope.username=$rootScope.user.username;
  // vm.jsondata={h_f_id:$scope.f_id,rid:"",rtname:"",create_by:$scope.userid,create_name:$scope.username,roomno:""};
    vm.queryHotelRoom = {
    rtname:$scope.hr.rtname,
    rid:$scope.hr.rid
  };

  vm.jsondata={id:$scope.hr.id,h_f_id:$scope.hr.h_f_id,rid:$scope.hr.rid,rtname:$scope.hr.rtname,update_by:$scope.userid,update_name:$scope.username,roomno:$scope.hr.roomno,rstatus:$scope.hr.rstatus};
    //房间类型查询
  vm.getHotelRoomtypeList = function(){
    roomCheckServices.getHotelRoomtypeList().then(function (response) {
      if(response.data.code == "200"){
        vm.hotelRoomtypeList = response.data.body.data;
      }
    });
  };
  // vm.editgetroom=function(){
  // 	if ($scope.hr!=null) {
  // 		vm.queryHotelRoom.rid=hr.rid;
  // 		vm.jsondata.roomno=hr.roomno;
  // 	};
  // }
  //添加房间
  vm.editRoom = function () {
   if($scope.myForm.$valid){
   	vm.jsondata.rid=vm.queryHotelRoom.rid;
      $http.post(lpt_host + '/zeus/ws/hotel/hRoom/update', vm.jsondata)
      .success(function(data){
        // alert("添加成功!");
         if(data.code == "200"){
           $scope.closeThisDialog(data);
        }else{
          dialog.notify(data.msg, 'error');
        }
      }).error(function(data) {
        dialog.notify(data.msg, 'error');
      });
    }
    $scope.myForm.submitted = true;
  };
    vm.cancel = function(){
    $scope.closeThisDialog(null);
  };
 vm.getHotelRoomtypeList();
 // vm.editgetroom();
}]);