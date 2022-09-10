import react from 'react';
import Chartlist from "./Chartlist";
import "./Chart.css";

const Chart = (props) => {
    let chartdatapoint = [{ label: "Jan", price: 0 },
    { label: "Feb", price: 0 },
    { label: "Mar", price: 0 },
    { label: "Apr", price: 0 },
    { label: "May", price: 0 },
    { label: "Jun", price: 0 },
    { label: "Jul", price: 0 },
    { label: "Aug", price: 0 },
    { label: "Sept", price: 0 },
    { label: "Oct", price: 0 },
    { label: "Nov", price: 0 },
    { label: "Dec", price: 0 },
    ]
    for (let record of props.Recorddata) {
        let month =new Date(record.date).getMonth();
        chartdatapoint[month].price = record.price;
    }
    let priceArray = props.Recorddata.map(row => row.price);
    let maxprice = Math.max(...priceArray);
    return (
        <div className='dflex'>
            {
                chartdatapoint.map(record => {
                    return (
                        <Chartlist label={record.label} value={record.price} maxprice={maxprice} />
                    );
                })
            }

        </div>
    );
};



export default Chart;