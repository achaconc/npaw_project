import { useState, useEffect } from 'react';

//this a custom hooks to get a API response using fetch
//Params:
//url: API url
//filterParam: remove duplicates in the result data acording to this parameter. Nulleable

const UseFetch = (url, filterParam) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const _url = new URL(url);
    var param = _url.searchParams.get("term");
    if(param) {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((resp) => {
        if (filterParam && resp.resultCount > 0) {
          const _results = resp.results.filter((value, index) => {
            return index === resp.results.findIndex(item => {
              return value[filterParam] === item[filterParam];
            });
          });
          setData({
            resultCount: _results.length,
            results: _results
          });

        }
        else
          setData(resp);
      })
      .catch(err => {
        console.log('Error Reading data ' + err);
      });
    }
  }, [url, filterParam]);

  return { data };
};

export default UseFetch;