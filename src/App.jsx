import { useState } from 'react'
import './App.css'
import UI from './components/UI'
import Container from './components/Container'
import Transaction from './components/Transaction'
import { CiMenuKebab } from "react-icons/ci";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <div className='center'>
          <div className='top'>
            <div>
              <h1>Recent Transactions</h1>
              <p>Transaction overview</p>
            </div>
            <div className='icon'>
              <h1> <CiMenuKebab /></h1>
            </div>
          </div>
          <div className='cont'>
            <h1>Card</h1>
            <h1>Date</h1>
            <h1 style={{ marginLeft: 20 }}>Status</h1>
            <h1>Amount ($)</h1>
          </div>

          <Transaction amt='54667' date='Mar 03,2025' time='11:00 am' credit='credit' status='Verified' amount='2896.00' imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqk61OZUkndFUfVIFjJfU3jhv5mgr3HiX3EA&s" />

          <Transaction amt='12357' date='Feb 27,2025' time='10:00 am' credit='Credit' status='Pending' amount='2896.00' imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXhn6AV_1wHXjcUg6FANdGXo9vTUD3MBJ0w&s" />

          <Transaction amt='546567' date='Mar 5,2025' time='08:00 am' credit='Debit' status='Rejected' amount='2896.00' imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqk61OZUkndFUfVIFjJfU3jhv5mgr3HiX3EA&s" />

          <Transaction amt='87357' date='Jan 12,2025' time='01:00 pm' credit='Credit' status='Verified' amount='3796.00' imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXhn6AV_1wHXjcUg6FANdGXo9vTUD3MBJ0w&s" />
        </div>
      </div >
    </>
  )
}

export default App
