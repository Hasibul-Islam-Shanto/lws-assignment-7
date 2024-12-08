import { getVideos } from "@/utils/video-data";
import Videos from "./Videos";
import Link from "next/link";
import { getDictionary } from "@/app/[lang]/dictionaries";

const StreamVideos = async ({ lang }) => {
  const videos = await getVideos();
  const dict = await getDictionary(lang);
  return (
    <>
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{dict.Streams_of_the_day}</h2>
          <Link
            href={`/${lang}/videos`}
            className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
          >
            {dict.View_all}
          </Link>
        </div>
        <Videos videos={videos} lang={lang} />
      </section>
    </>
  );
};

export default StreamVideos;
