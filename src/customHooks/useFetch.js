import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData]=useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
          if(response.ok) {
            return response.json(); 
          }
          throw response;
        })
      .then((resp) => {
          setData(resp);
      })
      .catch(err => {
        console.log("Error Reading data " + err);
    });
  }, [url]);
  
  return {data};
};

export default UseFetch;