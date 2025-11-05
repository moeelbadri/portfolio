/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Loader.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="relative flex items-center justify-center">
        <span className="loader-spinner" aria-label="loading indicator" />
        <span
          style={{ fontFamily: "SuperMario" }}
          className="absolute text-primary-400 text-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          b
        </span>
      </div>
    </div>
  );
};

export default Loader;
