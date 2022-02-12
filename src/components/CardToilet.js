import React from "react"
import Status from "./Status";

const CardToilet = ({ id, status}) => {


    return (
        <div className='card'>
            <Status status={status}/>
            <div className="card-detail">
                <p className="toilet-no" >Toilet No. {id}</p>
                <p className="time-in" >Time in : HH:MM</p>
                <p className="time-use" >Time Use : MM:SS</p>
            </div>
        </div>
    )
}



export default CardToilet;