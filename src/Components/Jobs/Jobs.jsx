import './Jobs.css'
import Onejob from '../Onejob/Onejob'
import { useState,useEffect } from 'react'

function Jobs(){
    const [infoarray,setinfoarray]=useState([])

    useEffect(()=>{
        function Callapi(){
          console.log("fire");
          fetch("http://localhost:3000/jobs").then((response)=>{
              return response.json();
          }).then((finalresult)=>{
                console.log(finalresult);
                setinfoarray(finalresult)
          });
        }
      
        Callapi()
      },[])
    return(
        <div className='jobscontainer'>
        {
          infoarray.map((eachjob)=>{
            return <Onejob key={eachjob.id}  eachjob={eachjob}></Onejob>
          })
          
          

        }
        </div>
    )
}

export default Jobs