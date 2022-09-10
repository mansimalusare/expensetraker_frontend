import react, { useState } from 'react';
import DateExpenses from './DateExpenses';
import Filter from './Filter';
import Chart from './Chart';
import "./Expenses.css";
import { NavLink } from 'react-router-dom';



const Expenses = (props) => {

    console.log(props.dummydata);

    const [upcomingyear, setupcomingyear] = useState();


    const Filtervalue = (Filteryear) => {
        console.log(Filteryear);
        setupcomingyear(Filteryear);
    }

    let Recorddata = props.dummydata.filter(row => {
        if (upcomingyear == 'ALL') {
            return (row)
        }
        else {
            return (
               new Date(row.date).getFullYear() == upcomingyear
            )
        }


    });



    return (
        <>
            <div className='maincontainer'>
                <Filter Filtervalue={Filtervalue} />
                <Chart Recorddata={Recorddata} />
            </div>
            {
                Recorddata.reverse().map(row => {
                    return (
                        <div className='maincontainer'>
                            <div className='expenceList'>
                                <DateExpenses row={row} />
                                <div className='item'>
                                    <h1>{row.item}</h1>
                                </div>
                                <div className='price'>
                                    ${row.price}
                                </div>
                                
                                <div className="Edititem">
                                <NavLink exact to={`/edit/${row._id}`}>
                                <button type="button" class="btn btn-info mt-5">Edit</button></NavLink>               
                                </div>
                                <div className="Deleteitem">
                               <NavLink exact to = {`/deleteitem/${row._id}`}> <button type="button"  onclick={() => navigate(`/delete${row._id}`)}className="btn btn-danger mt-5">Delete</button></NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}
export default Expenses;
