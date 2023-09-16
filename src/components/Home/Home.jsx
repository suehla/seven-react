import React, { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Card from "../Card/Card";

const Home = () => {
    const [allElements,setAllElements]= useState([]);
    const [selectedElements,setSelectedElements]=useState([]);
    const [prize, setPrize]=useState(0);
    const [credit, setCredit]=useState(0);

   
   useEffect (() => {
    fetch("data.json")
     .then((res) => res.json())
     .then((data) => setAllElements(data));
  
   }, []);
   console.log(allElements);

   const handleSelectElement = (actor) => {

     const isExist = selectedElements.find((item) => item.id == actor.id);
     let count = actor.prize;
    
     let num = parseInt(actor.credit);
     

     if(isExist){
        return alert("already booked");
         }
         else{
            selectedElements.forEach(item => {
                count = count + item.prize;
                
                num =num + item.credit;
            })
            
            const totalCredit = 20 - num;
             setPrize(count);
             setCredit(totalCredit);
            setSelectedElements([...selectedElements,actor]);
         }

   

  }



    return (
        <div className="container">
            <div className="home-container">
                <div className="card-container">
                 {
                    allElements.map((actor) =>(
                        <div key={actor.id} className="card">
                    <div className="card-photo">
                        <img className="photo" src={actor.image}/>
                    </div>
                    <h3>{actor.name}</h3>
                    <p>it is a long established fact that a reader 
                     will be distracted by the readable content 
                     of a page when looking at its layout.
                   </p>
                    <div className="info">
                      <div className="svg"><image className="svg-name"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></image>
                      <p>Price : {actor.prize}</p></div>
                      <div className="svg"><image className="svg-name"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16"> <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/> </svg></image>
                      <p>Credit : {actor.credit}</p></div>
                    </div>
                    <button onClick={()=>handleSelectElement(actor)}
               className="btn">Select</button>
                    
                </div>
                    ))
                 }
                </div>
                <div className="cards">
                    <Card selectedElements={selectedElements} prize={prize}
                    credit={credit}></Card>
                </div>
            </div>
        </div>
    )
}
export default Home;