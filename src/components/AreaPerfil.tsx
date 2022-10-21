import { Box, Avatar, Typography } from "@mui/material";
import React from "react";

const AreaPerfil = () => {
  return (
    <>
      <Box
        style={{ alignItems: "center", margin: "1em 2em" }}
        display="flex"
        flexWrap="wrap"
      >
        <Avatar
          alt="Vemy Sharp"
          src="../src/assets/img/profile2.jpg"
          sx={{
            width: 260,
            height: 260,
            border: "5px solid transparent",
            outline: "3px solid #fff",
            "&:hover": {
              filter: "brightness(80%)",
            },
          }}
        />
        <Box style={{ margin: "1.6em" }}>
          <p>PERFIL</p>
          <Typography variant="h1" sx={{ fontWeight: "500" }}>
            Vinícius
          </Typography>
          <p>6 playlists públicas</p>
        </Box>
      </Box>
    </>
  );
};

export default AreaPerfil;
