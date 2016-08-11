'use strict';

var app=angular.module('roomManageApp');

app.controller('RoomaddBuilding',['$scope','$http','dialog','$rootScope','roomCheckServices',function ($scope, $http, dialog,$rootScope,roomCheckServices) {
  var vm = this;
  $scope.userid=$rootScope.user.userid;
  $scope.username=$rootScope.user.username;
  vm.jsondata={bname:"",bheight:"",bplace:"",create_by:$scope.userid,create_name:$scope.username,bcode:"",roomtype:"",roomnum:""}
  vm.getHotelRoomtypeList = function(){
    roomCheckServices.getHotelRoomtypeList().then(function (response) {
      if(response.data.code == "200"){
        vm.hotelRoomtypeList = response.data.body.data;
        vm.jsondata.roomtype=vm.hotelRoomtypeList[0].id;
      }
    });
  };
  //添加楼栋
  vm.addbuilding = function () {
   if($scope.myForm.$valid){
      $http.post(lpt_host + '/zeus/ws/hotel/hBuilding/save', vm.jsondata)
      .success(function(data){
        // alert("添加成功!");
        $scope.closeThisDialog(data);
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
}]);