import './Jobs.css'
import Onejob from '../Onejob/Onejob'
// import { useState,useEffect } from 'react'

function Jobs(){
    const infoarray =[
      {
        id: 1,
        company: "Photosnap",
        logo: "./src/assets/images/photosnap.svg",
        new: true,
        featured: true,
        position: "Senior Frontend Developer",
        role: "Frontend",
        level: "Senior",
        postedAt: "1d ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["HTML", "CSS", "JavaScript"],
        tools: []
      },
      {
        id: 2,
        company: "Manage",
        logo: "./src/assets/images/manage.svg",
        new: true,
        featured: true,
        position: "Fullstack Developer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "1d ago",
        contract: "Part Time",
        location: "Remote",
        languages: ["Python"],
        tools: ["React"]
      },
      {
        id: 3,
        company: "Account",
        logo: "./src/assets/images/account.svg",
        new: true,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2d ago",
        contract: "Part Time",
        location: "USA Only",
        languages: ["JavaScript"],
        tools: ["React", "Sass"]
      },
      {
        id: 4,
        company: "MyHome",
        logo: "./src/assets/images/myhome.svg",
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "5d ago",
        contract: "Contract",
        location: "USA Only",
        languages: ["CSS", "JavaScript"],
        tools: []
      },
      {
        id: 5,
        company: "Loop Studios",
        logo: "./src/assets/images/loop-studios.svg",
        new: false,
        featured: false,
        position: "Software Engineer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "1w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["JavaScript", "Ruby"],
        tools: ["Sass"]
      },
      {
        id: 6,
        company: "FaceIt",
        logo: "./src/assets/images/faceit.svg",
        new: false,
        featured: false,
        position: "Junior Backend Developer",
        role: "Backend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "UK Only",
        languages: ["Ruby"],
        tools: ["RoR"]
      },
      {
        id: 7,
        company: "Shortly",
        logo: "./src/assets/images/shortly.svg",
        new: false,
        featured: false,
        position: "Junior Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["HTML", "JavaScript"],
        tools: ["Sass"]
      },
      {
        id: 8,
        company: "Insure",
        logo: "./src/assets/images/insure.svg",
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["JavaScript"],
        tools: ["Vue", "Sass"]
      },
      {
        id: 9,
        company: "Eyecam Co.",
        logo: "./src/assets/images/eyecam-co.svg",
        new: false,
        featured: false,
        osition: "Full Stack Engineer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "3w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["JavaScript", "Python"],
        tools: ["Django"]
      },
      {
        id: 10,
        company: "The Air Filter Company",
        logo: "./src/assets/images/the-air-filter-company.svg",
        new: false,
        featured: false,
        position: "Front-end Dev",
        role: "Frontend",
        level: "Junior",
        postedAt: "1mo ago",
        contract: "Part Time",
        location: "Worldwide",
        languages: ["JavaScript"],
        tools: ["React", "Sass"]
      }
    ];
    // const [infoarray,setinfoarray]=useState([])

    // useEffect(()=>{
    //     function Callapi(){
    //       console.log("fire");
    //       fetch("http://localhost:3000/jobs").then((response)=>{
    //           return response.json();
    //       }).then((finalresult)=>{
    //             console.log(finalresult);
    //             setinfoarray(finalresult)
    //       });
    //     }
      
    //     Callapi()
    //   },[])
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