// import { useState,useEffect } from 'react'
import './Onejob.css'


function Onejob({eachjob}){
    const combinedarray = [...eachjob.languages,...eachjob.tools]
    console.log(combinedarray)
    return(
        <div className='mainone' style={eachjob.featured==true? {borderLeft:"solid 3px hsl(180, 36%, 52%)"}:null}>
            <div className='leftdiv'>
                <div className='logo'>
                    <img className='joblogo' src={eachjob.logo}/>
                </div>
                <div className='info'>
                    <div className='firstinfo'>
                        <label className='company'>{eachjob.company}</label>
                        {eachjob.new == true ? <label className='new'>NEW!</label>:null}
                        {eachjob.featured == true ? <label className='featured'>FEATURED</label>:null}
                    </div>
                    <label className='position'>{eachjob.position}</label>
                    <div className='lastinfo'>
                        <label>{eachjob.postedAt}</label>
                        <label>.</label>
                        <label>{eachjob.contract}</label>
                        <label>.</label>
                        <label>{eachjob.location}</label>
                    </div>
                </div>
            </div>
            <div className='rightdiv'>
                {
                    combinedarray.map((combined)=>{
                      return  <button className='mybtn'>{combined}</button>;
                    })
                }
            </div>
        </div>
    )
}

export default Onejob