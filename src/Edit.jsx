
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Edit = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    console.log(userID);

 
 


        const [item , setItem] = useState("");
        const [price , setprice] = useState();
        const [date , setdate] = useState(new Date());

        
   useEffect(() =>{
    axios.get(`http://localhost:4000/user/${userID}`)
    .then(async(res) =>{
          const rawData = await res.data[0];
          console.log(rawData);
          console.log(rawData.item);
          setItem(rawData.item);
          setprice(rawData.price);
          setdate(rawData.date);
    })
    .catch(err => console.log(err));
},[]);

    const updateHandlet = (e) => {
        e.preventDefault();
        const dataObj = {
            item,
            price,
            date
        }
        axios.put(`http://localhost:4000/user/${userID}`, dataObj)
            .then(res => {
                alert("User Updated");
                navigate("/");
            })
            .catch(err => {
                alert(err);
            })
    }

    return (
        <>
            <div className="main"> 
             <form onSubmit={updateHandlet}>
                <div>
                    <label htmlFor='Title'> Title</label>
                    <input type="text" name='title' onChange={e => setItem(e.target.value)} value={item} required />
                </div>
                <div>
                    <label className='Amountdata' htmlFor='Amount'> Amount</label>
                    <input type="number" name='amount' onChange={e => setprice(e.target.value)} value={price} required />
                </div>
                <div>
                    <label className='Datedata' htmlFor='date'> Date</label>
                    <input type="date" onChange={e => setdate(e.target.value)} value={date} />
                </div>


                <input className='AddExpense' type="submit" value="Edit Expence" />


            </form>
            </div>

        </>

    );
};

export default Edit;
