"use client";

import { useRouter } from "next/navigation";

const LinkButton = ({ className, link, title }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(link);
  };
  return (
    <>
      <button className={`${className}`} onClick={handleClick}>
        {title}
      </button>
    </>
  );
};

export default LinkButton;
