import Hero from "@/components/Hero";
import StreamVideos from "@/components/StreamVideos";

const HomePage = async ({ params }) => {
  return (
    <>
      <Hero />
      <StreamVideos lang={params.lang} />
    </>
  );
};

export default HomePage;
