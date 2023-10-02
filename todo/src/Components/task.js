import React, { Component } from "react";
import { Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Slider from "@mui/material/Slider";
import "../styles/task.css";
import { useState } from "react";
export default function Task(props) {
  const { col, setCol } = useState(props.col);
  return (
    <div className="row d-flex main">
      <div className="col-3">{props.name}</div>
      <Box className="col-3">
        <CircleIcon sx={{ fontSize: 10, color: props.col }} /> {props.lev}
      </Box>
      <div className="col-3">
        <Slider
          disabled
          value={props.status ?? 25}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          aria-label="Disabled slider"
          sx={{
            "&.Mui-disabled": {
              color: props.col,
            },
          }}
        />
      </div>
      <div className="col-3">{props.date}</div>
    </div>
  );
}
