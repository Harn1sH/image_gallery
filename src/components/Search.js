import React from "react";
import { TextField } from "@mui/material";

const Search = ({ searchText }) => {
  return (
    <div>
      <div className="w-screen justify-center items-center flex mt-6">
        <TextField
          label="Search"
          className="w-1/4 border-2"
          onChange={(e) => {
            searchText(e.target.value);
            console.log(e.target.value);
          }}
        ></TextField>
      </div>
    </div>
  );
};

export default Search;
