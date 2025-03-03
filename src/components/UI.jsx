import React from 'react'
import { PiDotsThreeCircle } from "react-icons/pi";
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";


const UI = ({ revenue, user }) => {
    return (
        <>

            <div className='card'>
                <div className='top'>
                    <div className='upper'>
                        <h4>Revenue</h4>
                        <h1 className='icon'><PiDotsThreeCircle /></h1>
                    </div>
                    <div className='lower'>
                        <h2>${revenue}</h2>
                        <h1><FiArrowDownRight /></h1>
                        <p>16%</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='upper'>
                        <h4>Total Users</h4>
                        <h1 className='icon'><PiDotsThreeCircle /></h1>
                    </div>
                    <div className='lower'>
                        <h2>{user}
                        </h2>
                        <h1><FiArrowUpRight /></h1>
                        <p>346</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UI


// components with props -------->

{/* <UI revenue={435756} user={93656} />
        <UI revenue={4357} user={936} />
        <UI revenue={4357} user={936} /> */}