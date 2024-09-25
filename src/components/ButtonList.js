import React from "react";
import { Button } from "./Button";

export const ButtonList = () => {

  const list = [
    "All", 
    "Music", 
    "Gaming", 
    "News", 
    "okok", // original list items
    "Movies", 
    "Live", 
    "Sports", 
    "Learning", 
    "Podcasts", 
    "Fashion", 
    "Tech", 
    "Comedy", 
    "Travel", 
    "Fitness", 
    "Vlogs", 
    "Food", 
    "Documentaries"
  ];  return (
    <div className="flex">

{list.map((item, index) => (
        <Button key={index} name={item} />
      ))}

      <Button name="All" />
      <Button name="Music" />
      <Button name="Gaming" />
      <Button name="News" />
      <Button name="Movies" />
      <Button name="Live" />
      <Button name="Sports" />
      <Button name="Learning" />
      <Button name="Podcasts" />
      <Button name="Fashion" />
      <Button name="Tech" />
      <Button name="Comedy" />
      <Button name="Travel" />
      <Button name="Fitness" />
      <Button name="Vlogs" />
      <Button name="Food" />
      <Button name="Documentaries" />
    </div>
  );
};
