import React, { useState } from 'react'
import data from './dataSub.json'
import './subForm.css'
const SubsForm = () => {
    const [btnValue, setBtnValue]=useState("")
    const [amount, setAmount]=useState()
    const [times, setTimes]=useState("")
    const [discount, setDiscount]=useState()
    const [catchData, setCatchData]=useState({
        pricingModel:"",
        status:"",
        amount:"",
        pricing:"",
        profit:""
    })
    const [changePopup, setChangePopup]=useState("Subscription")
    const SubFormHandle=(e)=>{
        e.preventDefault();
        console.log(btnValue,amount,times,discount)
        // amount.value=""
        // discount.value=""
        setCatchData({...catchData, pricingModel:btnValue,amount:amount,profit:discount,pricing:times })
        data.push(catchData)
        console.log(data)
    }
  return (
    <div>
        
        <div className='subformstyling'>
        <h1>Add New Pricing Modal</h1>
            <form onSubmit={SubFormHandle}>
            <div><button className='btntype' onClickCapture={()=>{setChangePopup("Subscription")}} onClick={()=>{setBtnValue("Subscription")}}>Subscription</button> <button className='btntype' onClickCapture={()=>{setChangePopup("Lumpsump")}} onClick={()=>{setBtnValue("Lumpsump")}}>Lumpsump</button> <button className='btntype' onClickCapture={()=>{setChangePopup("EMI")}} onClick={()=>{setBtnValue("EMI")}}>EMI</button></div> <br/>
            {
                changePopup==="Subscription" && <div>
                <input type='number' value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Amount' /> <br/> <br/>
                <div><button className='btnTime' onClick={()=>setTimes("Monthly")}>Monthly</button> <button className='btnTime' onClick={()=>setTimes("yearly")}>Yearly</button></div> <br/>
                <input type='number' value={discount} onChange={(e)=>setDiscount(e.target.value)} placeholder='discount' /> <br/> <br/>
                </div>
            }
            {
                changePopup==="Lumpsump" && <div>
                    <input type='number' value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Amount'/><br/> <br/>
                    <input type='number' value={discount} onChange={(e)=>setDiscount(e.target.value)} placeholder='discount' /><br/> <br/>
                </div>
            }

             {
                 changePopup==="EMI" && <div>
                     <input type='number' value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Base Amount'/><br/> <br/>
                     <input type='number' value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='No. installment'/><br/> <br/>
                     <input type='number' value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='interest per installment'/><br/> <br/>
                     <input type='number' value={discount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='discount'/><br/> <br/>

                 </div>
             }
            <button className='btnSubmit'>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default SubsForm