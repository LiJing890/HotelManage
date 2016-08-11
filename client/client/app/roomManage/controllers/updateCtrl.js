'use strict';

var rcgoodsController=angular.module('roomManageApp');
rcgoodsController.controller('rcgoods',['$scope','settingService','dialog',function ($scope,settingService,dialog) {
	var vm=this;
vm.jsondata={rcname:"",rccode:"",mcprice:"",rcprice:"",rcstatus:"0",rctype:""};
	vm.updateRcGood=function(){
		
		settingService.getRoomGoodById($scope.rc.id).then(function(data){
			if (data.data.code==200) {
				vm.jsondata.rcname=data.data.body.rcname;
				vm.jsondata.rccode=data.data.body.rccode;
				vm.jsondata.mcprice=data.data.body.mcprice;
				vm.jsondata.rcprice=data.data.body.rcprice;
				vm.jsondata.rcstatus=data.data.body.rcstatus;
				vm.jsondata.rctype=$scope.rc.rctype;
			};
		});
	};
	vm.update=function(){
		if($scope.myForm.$valid){
			if (vm.jsondata.rctype=="") {
				vm.jsondata.rctype=$scope.rctype;
				settingService.saveRoomGood(vm.jsondata).then(function(data){
					if (data.data.code==200) {
						$scope.closeThisDialog(data);
						dialog.notify("新增成功!", 'success');
					}else{
						// alert(data.data.msg);
						dialog.notify(ata.data.msg, 'error');
					};
				});
			}else{
				vm.jsondata.id=$scope.rc.id;
				settingService.updateRoomGoodById(vm.jsondata).then(function(data){
					if (data.data.code==200) {
						$scope.closeThisDialog(data);
						dialog.notify("编辑成功!", 'success');
					}else{
						dialog.notify(ata.data.msg, 'error');
						
					};
				});
			}
		}else{
			$scope.myForm.submitted = true;
		}
		
	};
	vm.cancel = function(){
		$scope.closeThisDialog(null);
	};
	if ($scope.rc!=null) {
		vm.updateRcGood();
	};	
}]);