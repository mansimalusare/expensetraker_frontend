import react, { useState } from 'react';
import "./Expenceform.css";
import axios from "axios";

const Expenseform = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [formview, setformview] = useState(false);
    console.log(title);
    console.log(amount);
    console.log(date);
    const submitHandler = (e) => {
        e.preventDefault();
        const dataobject = {
            item: title,
            price: amount,
            date: new Date(date),
            id: parseInt(Math.random() * 1000)
        }


        axios.post("http://localhost:4000/user",dataobject)
          .then(() =>{
                alert("data has been sent successfully....");
                window.location.reload();
          })
          .catch(err =>{
            alert("data could not send");
          });
      
        console.log(dataobject);
        props.expenceData(dataobject);
        alert("data add successfully!");
        setTitle("");
        setAmount(0);
        setDate();
        setformview(false);
    }
    return (
        <>
            <form onSubmit={submitHandler} className={formview == true ? 'dblock' : 'dNone'}>
                <div>
                    <label htmlFor='Title'> Title</label>
                    <input type="text" name='title' onChange={e => setTitle(e.target.value)} value={title} required />
                </div>
                <div>
                    <label className='Amountdata' htmlFor='Amount'> Amount</label>
                    <input type="number" name='amount' onChange={e => setAmount(e.target.value)} value={amount} required />
                </div>
                <div>
                    <label className='Datedata' htmlFor='date'> Date</label>
                    <input type="date" onChange={e => setDate(e.target.value)} value={date} />
                </div>


                <input className='AddExpense' type="submit" value="Add Expence" />


            </form>
            <div className={formview ? 'dNone' : 'dblock itemsform'} />
            <button onClick={() => setformview(true)} className={formview == true ? 'dNone' : 'dblock from addNewExpenses'}> Add New Expence</button>
        </>
    );
}
export default Expenseform;