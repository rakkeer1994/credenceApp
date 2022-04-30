import React from 'react'
import data from './dataEmi.json'
const Emi = () => {
  return (
    <div style={{marginTop:"15px"}}>
        {
          data.map((val, ind)=>{
            return(
              <div className='priceList'>
                  <div style={{fontWeight:"bold"}}>pricing option {ind+1}</div>
                  <div>{val.profit}</div>
                  <div>{val.amount}</div>
                  <div>{val.pricingModel}</div>
                  <div>{val.status}</div>
              </div>
            )
          })
        }
    </div>
  )
}

export default Emi