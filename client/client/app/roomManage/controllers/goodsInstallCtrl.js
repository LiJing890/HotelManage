'use strict';

var goodsInsController=angular.module('roomManageApp');
rcconfigController.controller('goodsInstallCtrl',['$scope','$filter','settingService','dialog',function ($scope,$filter,settingService,dialog) {
	var vm = this;
	vm.rctype=1;
	vm.getGoodsList=function(){
		vm.strdata={rows:999,page:1,rctype:vm.rctype}
		settingService.getRcList(vm.strdata).then(function(data){
			if (data.status==200) {
				vm.goodsInstallCtrl=data.data.body.data;
			};
		});
	};
	vm.changecat=function(){
		vm.getGoodsList();
	};
	vm.getGoodsList();
	vm.clickToDelete = function (rc) {
		if(confirm('确认是否要删除[' + rc.rcname + ']?')) {

			settingService.deleteRoomConfigById(rc.id).then(function(data){
				if (data.status==200) {
					vm.getGoodsList();
					dialog.notify("删除成功!", 'success');
					// alert("删除成功!");
				}else{
					// alert("error message: 删除失败！" );
					dialog.notify('删除失败！', 'error');
				};
			});	
		}
	};

	vm.clickToEdit = function (rc) {
		$scope.rc = rc;
		dialog.open({ 
			template : 'app/roomManage/views/update.html',
			     className: 'ngdialog-theme-default custom-box',
			      scope : $scope,//将scope传给test.html,以便显示地址详细信息  
			      preCloseCallback : function(data) {
			      	if(data != null && data.status=="200"){
			      		vm.getGoodsList();
			      		$scope.rc =null;
			      		// dialog.notify("编辑成功!", 'success');
			      	}else{
			      		$scope.rc =null;
			      	}
			      }
			  });
	};

	vm.clickToAdd = function (rctype) {
		$scope.rctype = rctype;
		dialog.open({ 
			template : 'app/roomManage/views/update.html',
			className: 'ngdialog-theme-default custom-box',
				      scope : $scope,//将scope传给test.html,以便显示地址详细信息  
				      preCloseCallback : function(data) {
				        // if(confirm('Are you sure you want to close without saving your changes?')) {
				        //   return true;
				        // }
				        // return false;
				        if(data != null && data.status=="200"){
				        	vm.getGoodsList();
				        	// dialog.notify("添加成功!", 'success');
				        }
				    }
				});
	};
}]);