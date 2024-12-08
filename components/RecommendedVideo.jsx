import { getVideos } from "@/utils/video-data";
import RecommededVideoCard from "./RecommededVideoCard";
import { getDictionary } from "@/app/[lang]/dictionaries";

const RecommendedVideo = async ({ lang }) => {
  const videos = await getVideos();
  const dict = await getDictionary(lang);
  return (
    <>
      <div className="lg:w-1/4">
        <h2 className="text-xl font-semibold mb-4">{dict.You_may_like}</h2>
        <div className="space-y-4">
          {videos.slice(5, 10).map((video) => (
            <RecommededVideoCard key={video.videoId} video={video} lang={lang} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendedVideo;
