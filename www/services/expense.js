angular.module('starter').factory('expenseService', function(){
   
    var service = {
        
        data:{
            expenses:[
                {
                    id:0,
                    amount:100,
                    description:'Test 1',
                    date : new Date(),
                    category:'pets'
                },
                {
                    id:1,
                    amount:300,
                    description:'Test 2',
                    date : new Date(new Date().getTime()-60000),
                    category:'cosmetics'
                },
                {
                    id:2,
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
                date : new Date(),
                id : service.data.expenses.length
            };
            
            service.data.expenses.push(expense);
            
        },
        removeExpense:function(id){
            
            angular.forEach(service.data.expenses, function(expense, i){
               
                if(id === expense.id){
                    
                    service.data.expenses.splice(i, 1);
                    
                }
                
            });
            
        }
        
    };
    
    return service;
    
});