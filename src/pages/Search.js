import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { SearchCard } from "../components";
import Loader from "../components/Spinner";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: news, searchResult} = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);
  // console.log(news, 'kk')
  return (
    <main>
 
      {searchResult ?
      <>
        <section className="py-7  ">
          <p className="text-3xl text-gray-700 dark:text-white">{`Result for '${queryTerm}'` }</p>
        </section> 
        <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap"> 
            { news.map((newsInfo) => (
                <SearchCard key={newsInfo.web_url} newsInfo={newsInfo} />
              )) }          
            </div>
        </section>
      </> : 
      <section className="py-7">        
            <div className="flex flex-row justify-center">
                <div className="flex flex-col place-items-center ">
                <Loader /> 
               <p className="text-3xl pt-5 text-gray-700 dark:text-white">{`Searching for '${queryTerm}'` }</p>
                </div>
            </div>
        </section>
      
          }
    </main>
  )
}
