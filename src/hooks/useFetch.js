import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const [searchResult, setSearchResult] = useState()
    const urlElement = queryTerm ? `search/v2/articlesearch.json?q=${queryTerm}&` : `topstories/v2/${apiPath}.json?`
    const url = `https://api.nytimes.com/svc/${urlElement}api-key=${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        async function fetchNews(){
          const response = await fetch(url);
          const json = await response.json();
          const result = queryTerm?json.response.docs:json.results
          setData(result)
          setSearchResult(result.length !== 0 ? true : false)
        }
        fetchNews();
      }, [url, queryTerm])      

  return { data, searchResult }
}