import Header from "@/components/Header";
import React from "react";

const LangLayout = ({ children, params }) => {
  return (
    <>
      <Header lang={params.lang} />
      {children}
    </>
  );
};

export default LangLayout;
