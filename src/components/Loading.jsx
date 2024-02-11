import React from "react";
import loading from "../../src/assets/loading.gif";

function Loading() {
  return (
    <div className="h-screen w-full bg-black relative">
      <img
        className="h-1/2 w-1/2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  "
        src={loading}
      ></img>
    </div>
  );
}

export default Loading;
