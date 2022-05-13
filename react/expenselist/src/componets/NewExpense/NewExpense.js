import React from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense= (prop) =>{

    //getting data from ExpenseForm
    const saveEnteredData=(datacomed)=>
    {
        //storing entered data(previous one) in this file 
        const enteredData={
            //previous variable is all data is copy to this object with same variable name 
            ...datacomed,
        //toString() is used to convert object into string
        //value of id is saved 
            id:Math.random().toString()
        };

        //to confirm we print below statement 
        // console.log(enteredData);
        // console.log(enteredData.a);
        prop.onEnteredData(enteredData);
    }

    //pssing entered data to the app.js 
   
    return <div className='new-expense'>
        {/*onSaveEnteredData pointing to saveEnteredData here it isn't going to execute it execute in ExpenseFORM */}
        <ExpenseForm onSaveEnteredData={saveEnteredData}/>
    </div>
};

export default NewExpense;