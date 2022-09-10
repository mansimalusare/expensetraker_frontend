import React from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from "axios";



const Delete = () =>{


    const {userID} = useParams();
    const navigate = useNavigate();
    const deletHandler = () =>{
    axios.delete(`http://localhost:4000/user/${userID}`)
    .then((res) =>{
        alert("user delete successfuly");
        navigate("/");
    }).catch((err) =>{
        alert(err);
    })
}
    return(
        <div>
            <button onClick = {deletHandler}>Delete</button>
            <button onClick={() => navigate(`/expenses`)}>Cancel</button>
        </div>

    );
};

export default Delete;