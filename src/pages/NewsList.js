import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { NewsCard } from "../components";


export const NewsList = ({apiPath, title}) => {
  const { data: news } = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          { news.map((newsInfo) => (
            <NewsCard key={newsInfo.url} newsInfo={newsInfo} />
          )) }          
        </div>
      </section>
    </main>
  )
}
