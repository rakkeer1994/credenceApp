import React, {useState} from 'react'
import './subscription/subForm.css'
const AddProduct = () => {
    const [proName, setProName]=useState()
    const [cost, setCost]=useState()
  return (
    <div>
        <div className='subformstyling'>
               <h1>Create New Product</h1>
               <form>
                   <input type='text' value={proName} onChange={(e)=>{setProName(e.target.value)}} placeholder='product name'/> <br/> <br/>
                   <input type='number' value={cost} onChange={(e)=>{setCost(e.target.value)}} placeholder='manufacturing cost'/> <br/> <br/>
                   <button className='btnSubmit'>Submit</button>
               </form>
        </div>
    </div>
  )
}

export default AddProduct