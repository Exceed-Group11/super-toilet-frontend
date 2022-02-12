import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import CardToilet from '../components/CardToilet'
import EstimateTime from '../components/EstimateTime'

const url = 'https://ecourse.cpe.ku.ac.th/exceed11/api/toilet/'
const urlEst = 'https://ecourse.cpe.ku.ac.th/exceed11/api/toilet/statistic/'

const Home = () => {
    const [toiletState, setToiletState] = useState([])
    const [estTime, setEstTime] = useState('')


    const getToilet = async () => {
        const response = await axios.get(url)
        const toilets = response.data.result
        setToiletState(toilets)
    }

    const getEstTime = async () => {
        const response = await axios.get(urlEst)
        const estTime = response.data.time_average
        setEstTime(estTime)
    }

    useEffect(() => {
        getToilet()
        getEstTime()
    }, [])

    console.log(estTime)

    // async function getToiletStatus (id) {
    //     const response = await axios.get(
    //         `http://8e16-27-55-84-122.ngrok.io/toilet/${id}`)
    //     return response
    // }

    // async function getToiletTime (id) {
    //     const response = await axios.get(
    //         `http://8e16-27-55-84-122.ngrok.io/toilet/${id}`)
    //     const time = await response.data.results[0].time_in
    //     // console.log(time)
    //     return time
    // }

    function timeFormat(time) {
        var date = new Date(time * 1000)
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime
    } 

    return (
        <div className='container'>
            <Banner />
            <EstimateTime est={estTime}/>
            <ul className='card-list'>
                {toiletState.map((toilet) => {
                    const { toilet_id, time_in, status } = toilet;
                    const formattedTime = timeFormat(time_in)
                    return (
                        <li key={toilet_id}>
                            <CardToilet id={toilet_id} status={status} time={formattedTime}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home