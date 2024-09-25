import React from "react";
import { useSelector } from "react-redux";

export const SideBar = () => {

    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

    if(!isMenuOpen)return null ;
        
        return (
        <div className="p-5 shadow-lg w-48">
          <ul>
            <li>Home</li>
            <li>shorts</li>
            <li>Vidos</li>
            <li>Live</li>
            <li>porn</li>
          </ul>
          <h1 className="font-bold pt-5">Subscription</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>porn</li>
          </ul>
    
          <h1 className="font-bold pt-5">Watch later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>porn</li>
          </ul>
          <h1 className="font-bold pt-5">okok later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>porn</li>
          </ul>
          <h1 className="font-bold pt-5">/l later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>porn</li>
          </ul>
          <h1 className="font-bold pt-5">C later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>porn</li>
          </ul>
        </div>
      )
    
  
};
