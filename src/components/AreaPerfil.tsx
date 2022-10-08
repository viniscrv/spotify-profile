import { Box, Avatar, Typography } from "@mui/material";
import React from "react";

const AreaPerfil = () => {
  return (
    <div>
      <Box style={{ display: "flex", alignItems: "center", margin: "1em 2em" }}>
        <Avatar
          alt="Vemy Sharp"
          src="../src/assets/img/profile.jpg"
          sx={{
            width: 260,
            height: 260,
            border: "5px solid transparent",
            outline: "3px solid #fff",
            '&:hover': {
                filter: 'contrast(140%)'
            }
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
    </div>
  );
};

export default AreaPerfil;
