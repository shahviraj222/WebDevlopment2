import React,{useState} from "react";
import './NewExpense.css';
import './ExpenseForm.css'

const ExpenseForm = (prop) => {
    const [EnteredTitle,setEnterdTitle]=useState('')
    const [EnteredAmount,setEnteredAmount]=useState('');
    const[EnteredDate,setEnteredDate]=useState('');
    const changetitle =(event)=>{
        // console.log(event);//this print the event object on console in this object we get value attribute in that value we have value of title which taken on the form
        
        // console.log(event.target.value);
       setEnterdTitle(event.target.value); 

    };
    const changeAmount=(event)=>
    {
        setEnteredAmount(event.target.value); 
    }
    const changeDate=(event)=>
    {
        setEnteredDate(event.target.value); 
    }
    const sumbitHandler=()=>{
       
        const EnteredData={
            tit:EnteredTitle,
            d:new Date(EnteredDate),
            a:EnteredAmount

        };
        prop.onSaveEnteredData(EnteredData);
        // error();
        // 
        // Audit usage of navigator.userAgent, navigator.appVersion, and navigator.platform
        // console.log(EnteredData); //because of some security issue we are not be able to see in chrome
    
     }
     const [expense,setExp]=useState();
     const addexpense=()=>
     {
         setExp([expense,...expense]);
     }
    return <form onSubmit={sumbitHandler}>
        {/* form taking input of date ,title and amount*/}
        <div className="new-expense__controls" >
            <div className="new-expense__controls">
                <label for="ti">Title</label>
                <input type='text' id="ti" onChange={changetitle} />
            </div>
            <div className="new-expense__controls">
                <label for="cna">Amount</label>
                <input type='number' id="cna" onChange={changeAmount} />
            </div>
            <div className="new-expense__controls"> 
                <label for="date">Date</label>
                <input type='date' id="date" onChange={changeDate}/> 
            </div>
            <div className="new-expense__action">
                <button type="sumbit" >Add Expense</button>
            </div>
        </div>
    </form>
}
export default ExpenseForm