angular.module('starter').factory('expenseService', function(){
   
    var service = {
        
        data:{
            expenses:[
                {
                    amount:100,
                    description:'Test 1',
                    date : new Date(),
                    category:'pets'
                },
                {
                    amount:300,
                    description:'Test 2',
                    date : new Date(new Date().getTime()-60000),
                    category:'cosmetics'
                },
                {
                    amount:180,
                    description:'Test 3',
                    date : new Date(new Date().getTime()-120000),
                    category:'bills'
                }
            ]
        },
        addExpense:function(amount, description, category){
            
            var expense = {
                amount : amount,
                description : description,
                category : category,
                date : new Date()
            };
            
            service.data.expenses.push(expense);
            
        }
        
    };
    
    return service;
    
});