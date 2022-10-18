import { Box, Button, Typography } from "@mui/material";
import React from "react";
import undraw from '../assets/img/undraw_page_not_found_re_e9o6 (2).svg'

const NaoEncontrada = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={undraw} style={{width: '25%'}}/>
    </Box>
  );
};

export default NaoEncontrada;
