import { getVideos } from "@/utils/video-data";
import Videos from "@/components/Videos";

const VideosPage = async ({ params }) => {
  const videos = await getVideos();
  return (
    <div className="container mx-auto px-4 py-4">
      <Videos videos={videos} lang={params.lang} />
    </div>
  );
};

export default VideosPage;
