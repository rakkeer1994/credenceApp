import React from 'react'
import data from './data.json'




const All = () => {
  // console.log(data)
  return (
    <div>
        {/* <h1>all component</h1> */}
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

export default All

{/* <table>
          <tbody>
            {
              data.map((val)=>{
                return(
                 <>
                 <tr>
                   <td>{val.pricing}</td>
                   <td>{val.profit}</td>
                   <td>{val.amount}</td>
                   <td>{val.pricingModel}</td>
                   <td>{val.status}</td>
                 </tr>
                 </>
                )
              })
            }
          </tbody>
        </table> */}