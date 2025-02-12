import { createContext, useEffect, useState } from "react";
import React from "react";
import { dummyCourses } from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allcourses, setAllCourses] = useState([]);

  // Fetch all Courses

  const fetchALlCourses = async () => {
    setAllCourses(dummyCourses);
  };
  useEffect(() => {
    fetchALlCourses();
  }, []);

  const value = {
    currency,
    allcourses,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
