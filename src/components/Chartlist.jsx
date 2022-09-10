import React from 'react';
import "./Chartlist.css";
const Chartlist = (props) => {
    let barHeight = "0%";
    if (props.maxprice > 0) {
        barHeight = Math.round((props.value / props.maxprice) * 100);
        console.log(barHeight);

    }
    console.log(props.label);
    return (
        <div className='chart-bar'>
            <div className='chart-bar_inner'>
                <div className='chart-bar_fill' style={{ height: barHeight }}>

                </div>
            </div>
            <label className='chart-bar_label'>{props.label}</label>
        </div>



    );
};




export default Chartlist;