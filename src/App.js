import React, {useState} from 'react'
import { AiOutlineBell } from "react-icons/ai";
import {GiSofa} from 'react-icons/gi'


import All from './component/All'
import Subscription from './component/Subscription';
import Lumsump from './component/Lumsump';
import {BiBath, BiDesktop} from 'react-icons/bi'
import {IoIosArrowForward} from 'react-icons/io'
import './App.css'
const App = () => {

    const [changePath, setChangePath]=useState("all")
  return (
    <div>
        <div className='headerDiv'>
            <div className='headerLeft'>
                <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWURx3t2bwuUyhaUT2f_NkG6eNPJPjyC910WQFs8RzoZd043ozTtGi35MvLXDotEfX120&usqp=CAU' alt='loading....'/></div>
                 <div className='logoName'>CREDENC PRICER</div> 
            </div>
            <div className='headerRight'>
            <div><AiOutlineBell/></div> <div className='login'>SK</div> 
            </div>
        </div>

        <div className='mainDiv'>
            <div className='maindivLeft'>
                <div style={{marginTop:"12%"}}><div><GiSofa/> Sofa <IoIosArrowForward/></div>
                <div><BiBath/> BathTub <IoIosArrowForward/></div>
                <div><BiDesktop/> Desktop <IoIosArrowForward/></div></div>
                <div style={{position:"absolute", bottom:"0"}}><button>Add New Product</button></div>
            </div>
            <div className='maindivRight'>
                <div className='header'>
                  <div style={{marginTop:"2%", width:"88%"}}><button className='detailBtn' onClick={()=>setChangePath("all")}>All</button>
                  <button className='detailBtn' onClick={()=>setChangePath("subscription")}>Subscription</button>
                  <button className='detailBtn' onClick={()=>setChangePath("lumsump")}>Lumsump</button></div>
                  <div style={{position:"absolute", right:"0", marginTop:"2%"}}><button>Add More Pricing</button></div>
                </div>
                <div className='table'>
                    { changePath==="all" && <All/> }
                    { changePath==="subscription" && <Subscription/> }
                    { changePath==="lumsump" && <Lumsump/> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default App