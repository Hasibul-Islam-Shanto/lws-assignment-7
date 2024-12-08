import LinkButton from "@/components/LinkButton";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center w-full mt-56">
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
          <div className="w-full flex justify-center">
            <LinkButton
              link="/"
              title="Back to Home"
              className={
                "bg-colorPurple hover:bg-opacity-80 text-white px-4 py-2 rounded-full text-base"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
