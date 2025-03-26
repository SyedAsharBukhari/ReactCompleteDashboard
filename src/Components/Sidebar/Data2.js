import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchnews } from "../Redux/Fetch";

function Data2() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.Newsdata);

  useEffect(() => {
    dispatch(fetchnews());
  }, [dispatch]);

  console.log("data", {
    status: status,
    data: data,
    error: error,
  });

  return (
    <div >

<h1 className="my-4 font-bold text-4xl">current top headlines</h1>
      {status === "succeed" ? (
        <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
          {data?.map((elem, ind) => {
            return (
              <div key={ind} style={{border:"1px solid black", width:"300px",padding:"20px"}}>
                {/* <img
                  src={elem?.image}
                  style={{ objectFit: "contain", width: "100%", height:"200px" }}
                /> */}
                <div>
                  <h1 style={{fontSize:"22px"}}><span style={{color:"red"}}>Author:</span> {elem?.author}</h1>
                  <p><span style={{color:"red"}}>Title:</span> {elem?.title}</p>
                  <p><span style={{color:"red"}}>Description:</span> {elem?.description}</p>
                  {/* <p>{elem?.description}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No Data Available</div>
      )}
    </div>
  );
}

export default Data2;
