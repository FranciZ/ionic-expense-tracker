angular.module('starter').controller('NewExpenseCtrl', function($scope, expenseService, $state, $timeout){
   
    $scope.expense = {};
    
    $scope.categories = [
        'groceries',
        'bills',
        'leisure',
        'pets',
        'household',
        'cosmetics'
    ];
    
    $scope.addExpense = function(){
      
        expenseService.addExpense(
            $scope.expense.amount,
            $scope.expense.description, 
            $scope.expense.category
        );
    
        $state.go('app.expenses');
        
    };
    
});









