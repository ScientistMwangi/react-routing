import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Shop() {

// State 
const[items,setItems]=useState([]);


// Api call    
const customUrl="https://swapi.co/api/people/";
//const url2="https://swapi.co/api/people/1/";
//console.log(url2.substring(url2.length,customUrl.length));
const fetchItems=async()=>{
    const data=await fetch(customUrl);
    const items=await data.json();
    console.log(items);
   // console.log(items.count);
   // console.log(items.next);
   // console.log(items.results);
    setItems(items.results);
};
// Run the API call when component mounts
useEffect(()=>{
    fetchItems();
},[]);

return (
    <div className="App">
        
            {items.map((item,index)=>(
            <h1 key={item.url}>
               <Link to={`shop/${item.url.substring(item.url.length,customUrl.length)}`}>
                    {item.name}
               </Link> 
            </h1>
            ))} 
    </div>
  );
}

export default Shop;
