import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops.....! Something went wrong!</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
}

export default Error;
