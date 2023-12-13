import { Routes, Route } from "react-router-dom";
import { NewsList, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="" element={<NewsList apiPath="home" title="home" />} />
            <Route path="news/automobiles" element={<NewsList apiPath="automobiles" title="automobiles" />} />
            <Route path="/news/books/review" element={<NewsList apiPath="books/review" title="automobiles" />} />
            <Route path="news/business" element={<NewsList apiPath="business" title="business" />} />
            <Route path="news/fashion" element={<NewsList apiPath="fashion" title="fashion" />} />
            <Route path="news/food" element={<NewsList apiPath="food" title="food" />} />
            <Route path="news/health" element={<NewsList apiPath="health" title="health" />} />
            <Route path="news/arts" element={<NewsList apiPath="arts" title="arts" />} />
            <Route path="news/insider" element={<NewsList apiPath="insider" title="insider" />} />
            <Route path="news/magazine" element={<NewsList apiPath="magazine" title="magazine" />} />
            <Route path="news/movies" element={<NewsList apiPath="movies" title="movies" />} />
            <Route path="news/nyregion" element={<NewsList apiPath="nyregion" title="nyregion" />} />
            <Route path="news/obituaries" element={<NewsList apiPath="obituaries" title="obituaries" />} />
            <Route path="news/opinion" element={<NewsList apiPath="opinion" title="opinion" />} />
            <Route path="news/politics" element={<NewsList apiPath="politics" title="politics" />} />
            <Route path="news/realestate" element={<NewsList apiPath="realestate" title="realestate" />} />
            <Route path="news/science" element={<NewsList apiPath="science" title="science" />} />
            <Route path="news/sports" element={<NewsList apiPath="sports" title="sports" />} />
            <Route path="news/sundayreview" element={<NewsList apiPath="sundayreview" title="sundayreview" />} />
            <Route path="news/technology" element={<NewsList apiPath="technology" title="technology" />} />
            <Route path="news/theater" element={<NewsList apiPath="theater" title="theater" />} />
            <Route path="news/t-magazine" element={<NewsList apiPath="t-magazine" title="t-magazine" />} />
            <Route path="news/travel" element={<NewsList apiPath="travel" title="travel" />} />
            <Route path="news/upshot" element={<NewsList apiPath="upshot" title="upshot" />} />
            <Route path="news/us" element={<NewsList apiPath="us" title="us" />} />
            <Route path="news/world" element={<NewsList apiPath="world" title="world" />} />
            <Route path="search" element={<Search apiPath="search/article" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
