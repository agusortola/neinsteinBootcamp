import { createContext } from "react";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [newQuestion, setNewQuestion] = useState({})

    const { data } = useFetch("http://localhost:8000/questions");

    useEffect(()=>{
        console.log('newQuestion', newQuestion)
        fetch("http://localhost:8000/questions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newQuestion),
          }).then(() => {
            console.log("new question added");
          });
    },[newQuestion])


  return (
    <DataContext.Provider value={{ data, setNewQuestion}}>{children}</DataContext.Provider>
  );
};
