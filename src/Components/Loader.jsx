/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Loader.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <div className="relative flex items-center justify-center">
        <TailSpin
          height="120"
          width="120"
          color="#cbbde5"
          ariaLabel="loading"
        />
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
