import react, { useState } from 'react';
import "./Filter.css";

const Filter = (props) => {
    const [Filteryear, setFilteryear] = useState("ALL");
    const selectyear = (e) => {
        setFilteryear(e.target.value);
    }


    console.log(Filteryear);
    props.Filtervalue(Filteryear)
    return (
        <div className='filteryear'>

            <div className="Filterdata">
                <span> Filter By Year = </span>
            </div>

            <select onChange={selectyear} className='filteryearid'>
                <option value='ALL'>ALL</option>

                <option value="2021">2021</option>
                <option value="2022"> 2022</option>
                <option value="2023"> 2023</option>
                <option value="2024"> 2024</option>
                <option value="2025"> 2025</option>
                <option value="2026"> 2026</option>

            </select>


        </div>


    );
}
export default Filter;