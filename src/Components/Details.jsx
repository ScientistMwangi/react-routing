import React,{useState,useEffect} from 'react';
import '../App.css';

function Details(match) {
    // State
const [actorDetails,setActorDetails]=useState({});
console.log(match.match.params.url);

// Api Call
const customUrl="https://swapi.co/api/people/";
const fetchDetails=async()=>{
    const details=await fetch(customUrl+match.match.params.url);
    const actor=await details.json();
    console.log(actor);
    setActorDetails(actor);
    
}
// Execute the Api call after component mount
useEffect(()=>{
    fetchDetails();
},[]);

return (
    <div className="App">
        <h1>Actors Details</h1>
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Height</th>
                <th scope="col">Hair-Color</th>
                </tr>
            </thead>
            <tbody>
                 <tr>
                <th scope="row">{match.match.params.url}</th>
                <td><i className="fa fa-heart-o"></i>{actorDetails.name}</td>
                <td>{actorDetails.height}</td>
                <td>{actorDetails.hair_color}</td>

                </tr>
            </tbody>
            </table>
         </div>
    
  );
}

export default Details;
