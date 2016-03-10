angular.module('starter').controller('ExpensesCtrl', function($scope, expenseService, $ionicActionSheet){
   
    $scope.order = true;
    $scope.sortBy = 'date';
    
    $scope.expenses = expenseService.data.expenses;
    
    $scope.toggleOrder = function(){
        
        $scope.order = !$scope.order;
        
    };
    
    $scope.expenseAction = function(expense){
        
        // Show the action sheet
       var hideSheet = $ionicActionSheet.show({
         destructiveText: 'Delete',
         titleText: 'Edit expense',
         cancelText: 'Cancel',
         destructiveButtonClicked: function(){
           
            expenseService.removeExpense(expense.id);
            hideSheet();
             
         },
         cancel: function() {
              // add cancel code..
            },
         buttonClicked: function(index) {
             console.log(index);
           return true;
         }
       });
        
    };
    
    $scope.getSum = function(){
        
        var total = 0;
        
        angular.forEach($scope.expenses, function(expense, i){
           
            total += expense.amount;
            
        });
        
        return total;
        
    }
    
});