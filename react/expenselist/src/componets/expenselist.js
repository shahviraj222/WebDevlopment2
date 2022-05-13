import './expenselist.css'
import React,{useState} from 'react';
// all ways first letter of componets is in capital 
// here we pass values or data in components using prop methode (attribute)
function Expense(prop) {
    // let title=prop.title
    //this is not going to change my dom=display in browser it
    // now we required state to change the dom

    // const stremo = () => {  
    //     console.log("Removed");
    //     title='Updated!';
    //     console.log(title); //here my title is updated but down wala code is not called
    // }
     
    const [title,setTitle]=useState(prop.title);

    // if we click on change the do this 
    const stremo = () => {
          console.log(title);
            setTitle('Updated!!');
            console.log(title);
        }
    const date = prop.date;

      
    return <div className="expense-item">
       
        <div className='expensedate'>
            {/* String(prop.date.getMonth()).padStart(2, '0') */}
            <div>{prop.date.toLocaleString('default', { month: 'long' })}</div>
            <div>{prop.date.getFullYear()}</div>
            <div>{String(prop.date.getDate()).padStart(2, '0')}</div>
        </div>
        <div className="expense-item__description">
            {/* here in h2 prop.title must matches with one of the element of !!app's expen!!*/}
            <h2>{title}</h2>
            <div className="expense-item__price">{prop.amount}</div>
        </div>
        <button onClick={stremo}>change</button>
    </div>
}
export default Expense