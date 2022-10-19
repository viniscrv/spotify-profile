import logoSpotify from "../../src/assets/img/png-spotify2.png";
import { Box, TextField, Avatar } from "@mui/material";
import { Link as Enviar } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <>
      <Enviar to='/Profile'>
        <img src={logoSpotify} alt="" style={{ width: "120px" }} />
      </Enviar>
      <Box display="flex" alignItems="center">
        <TextField
          color="success"
          label="O que você quer ouvir?"
          variant="filled"
          size="small"
          sx={{ width: "360px" }}
        />
      </Box>
      <Avatar alt="Vemy Sharp" src="../src/assets/img/profile.jpg" />
    </>
  );
};

export default Header;
