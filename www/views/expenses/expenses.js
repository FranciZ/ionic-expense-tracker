angular.module('starter').controller('ExpensesCtrl', function($scope, expenseService){
   
    $scope.order = true;
    $scope.sortBy = 'date';
    
    $scope.expenses = expenseService.data.expenses;
    
    $scope.toggleOrder = function(){
        
        $scope.order = !$scope.order;
        
    };
    
    $scope.getSum = function(){
        
        var total = 0;
        
        angular.forEach($scope.expenses, function(expense, i){
           
            total += expense.amount;
            
        });
        
        return total;
        
    }
    
});