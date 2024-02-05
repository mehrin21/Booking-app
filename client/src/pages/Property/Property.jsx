import React from 'react'
import './Property.css'
import { useQuery } from "react-query";
import { useLocation } from 'react-router-dom';
import { getProperty } from '../../utils/api';
import { PuffLoader } from 'react-spinners'
import { AiFillHeart } from 'react-icons/ai'

const Property = () => {

    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id))
    // console.log(data)
    if (isLoading) {
        return (
            <div className="wrapper flexCenter" style={{ height: '60vh', justifyContent: 'center' }}>
                <PuffLoader
                    height="80"
                    width='80'
                    radius={1}
                    color='#4066ff'
                    aria-label='puff-loading'
                />
            </div>
        )
    }

    if (isError) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching</span>
                </div>
            </div>
        )
    }

    return (
        <div className='wrapper'>
            <div className="flexColStart paddings innerWidth property-container">
                <div className="like">
                    <AiFillHeart size={24} color='white' />
                </div>

                <img src={data?.image} alt="" />

                <div className="flexCenter property-details">
                    {/* LEFT SIDE  */}
                    <div className="flexColStart left">
                    <div className="flexStart head">
                        <span className='primaryText'>{data?.title}</span>
                        <span className='orangeText' style={{fontSize:'1.5rem'}}>${data?.price}</span>
                    </div>

                    {/* Facilities */}
                    <div className="flexStart facilities">
                        <div className="flexStart facility">
                            <FaShower size={20} color="#1F3E72"/>
                            <span>{data?.facilities?.bathrooms} Bathrooms</span>
                        </div>
                        <div className="flexStart facility"></div>
                        <div className="flexStart facility"></div>
                    </div>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="right">
                        djfasjhgf
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property
