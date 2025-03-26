import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcrimenews } from "../Redux/Fetch";

function Data1() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcrimenews());
  }, [dispatch]);

  const { crimeData, crimeError, crimeStatus } = useSelector(
    (state) => state.Newsdata
  );

  console.log("hello", crimeData);

  return (
    <div>
      <div>
        {crimeStatus === "succeed" ?( 
          crimeData?.map((news, index) => <h1 key={index}>{news.title}</h1>)
        ) : (
          <p>Loading or no data found.</p>
        )}
      </div>
    </div>
  );
}

export default Data1;
