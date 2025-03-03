import React from 'react'

const Transaction = ({ amt, date, time, credit, status, amount, imageUrl }) => {
    return (
        <div className='tran'>
            <div className='first'>
                <img src={imageUrl} alt="img" />
                <div>
                    <h1>{amt}</h1>
                    <p>{credit}</p>
                </div>
            </div>
            <div>
                <h1>{date}</h1>
                <p>{time}</p>
            </div>
            <div>
                <h1 className='status'>{status}</h1>
            </div>
            <div>
                <h1>{amount}</h1>
            </div>
        </div>
    )
}

export default Transaction