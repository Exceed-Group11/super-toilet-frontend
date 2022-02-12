import axios from 'axios'
// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import CardToilet from '../components/CardToilet'
import EstimateTime from '../components/EstimateTime'

const Home = () => {
    const toilet1 = 1
    const toilet2 = 2
    const toilet3 = 3
    const toiletStatus1 = getToiletStatus(1)
    const toiletStatus2 = getToiletStatus(2)
    const toiletStatus3 = getToiletStatus(3)
    // const toiletTime1 = getToiletTime(1)

    console.log(getToiletStatus(1))

    async function getToiletStatus (id) {
        const response = await axios.get(
            `http://8e16-27-55-84-122.ngrok.io/toilet/${id}`)
        const status = await response.data.results[0].status
        console.log(status)
        return status
    }

    // async function getToiletTime (id) {
    //     const response = await axios.get(
    //         `http://8e16-27-55-84-122.ngrok.io/toilet/${id}`)
    //     const time = await response.data.results[0].time_in
    //     // console.log(time)
    //     return time
    // }

    // var date = new Date(toiletTime1 * 1000);
    // var hours = date.getHours();
    // var minutes = "0" + date.getMinutes();
    // var formattedTime = hours + ':' + minutes.substr(-2);
    // console.log(date)
    // console.log(hours)
    // console.log(minutes)
    // console.log(formattedTime)
   
    return (
        <div className='container'>
            <Banner />
            <EstimateTime/>
            <div className='card-list'>
                <CardToilet id={toilet1} status={toiletStatus1} />
                <CardToilet id={toilet2} status={toiletStatus2} />
                <CardToilet id={toilet3} status={toiletStatus3} />
            </div>
        </div>
    )
}

export default Home