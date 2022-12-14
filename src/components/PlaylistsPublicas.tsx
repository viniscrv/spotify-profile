import { Box, Typography, Link } from "@mui/material";
import React from "react";
import CardPlaylist from "./CardPlaylist";
import { Link as Enviar } from "react-router-dom";

const PlaylistsPublicas = () => {
  return (
    <div>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        mt={5}
        mr={1}
      >
        <Box mb={3}>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Playlists públicas
          </Typography>
        </Box>
        <Enviar to="/Invalido">
          <Link underline="hover" sx={{ color: "#A7A7A7", cursor: "pointer" }}>
            Ver tudo
          </Link>
        </Enviar>
      </Box>

      <Box display="flex" flexWrap="wrap">
        <CardPlaylist
          nome="Playlist 01"
          imgPlaylist="../src/assets/img/cat1.jpg"
        />
        <CardPlaylist
          nome="Playlist 02"
          imgPlaylist="../src/assets/img/cat2.jpg"
        />
        <CardPlaylist
          nome="Playlist 03"
          imgPlaylist="../src/assets/img/cat3.jpg"
        />
        <CardPlaylist
          nome="Playlist 04"
          imgPlaylist="../src/assets/img/cat4.jpg"
        />
        <CardPlaylist
          nome="Playlist 05"
          imgPlaylist="../src/assets/img/cat5.jpg"
        />
        <CardPlaylist
          nome="Playlist 06"
          imgPlaylist="../src/assets/img/cat6.jpg"
        />
      </Box>
    </div>
  );
};

export default PlaylistsPublicas;
