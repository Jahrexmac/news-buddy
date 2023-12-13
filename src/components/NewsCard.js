import Backup from "../assets/images/backup.png"

export const NewsCard = ({newsInfo}) => {
  const {title, url, multimedia, abstract} = newsInfo;
  const image = multimedia ? `${newsInfo.multimedia[2].url}` : Backup ;

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-600  dark:border-gray-700 m-3">
          <div className="flex justify-center">
            <img className="" src={image} alt="" />
            </div>  
        <div className="p-5">
            <p className="mb-2 text-md font-bold text-gray-900 dark:text-white">{title}</p>
            <p className="text-sm my-2 dark:text-yellow-100">{abstract}</p>
            <a href={url} className="p-2 text-white text-sm bg-blue-500 dark:bg-blue-800 rounded-md"  target="_blank" rel="noreferrer">Read</a>
        </div>
    </div>
  )
}
