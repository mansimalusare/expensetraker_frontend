import react from 'react';
import "./DateExpenses.css";

const DateExpenses = (props) => {

    const month =new Date(props.row.date).toLocaleString("en-us", { month: "long" })
    const date = new Date(props.row.date).getDate();
    const year = new Date(props.row.date).getFullYear();

    return (
        <div className="dateformat">
            <h2>{month}</h2>
            <p>{year}</p>
            <h3>{date}</h3>
        </div>
    )
}
export default DateExpenses;