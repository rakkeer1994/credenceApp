import React from 'react'
import data from './data.json'




const All = () => {
  console.log(data)
  return (
    <div>
        <h1>all component</h1>
        <table>
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
        </table>
    </div>
  )
}

export default All