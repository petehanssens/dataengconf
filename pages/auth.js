import First from "../components/auth/registration/first";
import Second from "../components/auth/registration/second";
import Third from "../components/auth/registration/third";
import Fourth from "../components/auth/registration/fourth";
import Fifth from "../components/auth/registration/fifth";
import Sixth from "../components/auth/registration/sixth";
import React, { useState } from "react";

export default function Form() {
  const [page, setPage] = useState(0);
  function handleSubmit() {
    setPage(page + 1);
  }
  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
      case 3:
        return <Fourth />;
      case 4:
        return <Fifth />;
      case 5:
        return <Sixth />;
      default:
        return <First />;
    }
  };

  return (
    <>
      {conditionalComponent()}
      <button onClick={handleSubmit}>
        {page === 0 || page === 1 ? "Next" : "Submit"}
      </button>
    </>
  );
}
