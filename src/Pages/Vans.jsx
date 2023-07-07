import React, { useEffect, useState } from 'react';
import '../server';
import '../App.css';

const vans=[]

const Vans = () => {
    const [vans,setVans]= useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
             const response =await fetch('/api/vans');
             const van = await response.json();
             setVans(van.vans);
            } catch (error){
                console.log(error);
            }
        };
        fetchData();
    },[]);
    console.log(vans);
  return (
    <section className='van-list-container'>
       <div className='van-list'>
           {vans.map((van)=>{
            const{id,name,price,imageUrl,type}= van;
               return (
                   <div key={id} className='van-tile'>
                    <img src={imageUrl} alt={imageUrl} style={{height:'200px'}}/>
                    <div className='van-info'>
                  <h3>{name}</h3>
                  <p>${price}<span>/day</span></p>
                    </div>
                  <i className={`van-type ${type} selected`}>{type}</i>
                    </div>
               );
           })}
              </div>
</section>
  )
}

export default Vans;
