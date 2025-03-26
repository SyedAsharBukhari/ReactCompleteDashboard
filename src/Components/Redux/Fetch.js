import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useState } from "react";


export const fetchnews = createAsyncThunk("fetch_news", async () => {
try{
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d079b36bc98e4f0f9dbfe94e2081b800");
    console.log("ok data aa rha h");
    return response.data.articles;
}catch(error){
    console.log("error aa rha h");
}
});


export const fetchcrimenews = createAsyncThunk("fetch_crime_news", async (_, thunkAPI)=>{
    try{
        const crimeresponse = await axios.get("https://newsdata.io/api/1/news?apikey=pub_763377aedc45ddd301ce665a3182f602bc080&country=us&language=en&category=crime")
        console.log("crime data sahi aa rha h",crimeresponse); 
        return crimeresponse; 
    }catch (error) {
        console.error(" Error fetching crime news:", error);
        return thunkAPI.rejectWithValue("Failed to fetch crime news");
      }
})