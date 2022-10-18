import { Box, Typography, Link , Avatar, Badge } from "@mui/material";
import { Link as Enviar } from "react-router-dom";
import React, { useState } from "react";
import CartaoPerfil from "./CartaoPerfil";

const MaisTocados = () => {
  return (
    <div>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        mt={1}
        mr={1}
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Artistas mais tocados este mês
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#A7A7A7", margin: ".6em 0" }}
          >
            Visível apenas para você
          </Typography>
        </Box>
        <Enviar to='/Invalido'>
          <Link underline="hover" sx={{ color: "#A7A7A7", cursor: "pointer" }}>
            Ver tudo
          </Link>
        </Enviar>
      </Box>

      <Box
        display="flex"
        sx={{
          maxWidth: "1200px",
        }}
      >
        <CartaoPerfil
          nome="A Boogie Wit da Hoodie"
          imgPerfil={"../src/assets/img/boogie.jpg"}
        />
        <CartaoPerfil
          nome="Justin Bieber"
          imgPerfil={"../src/assets/img/justin.jpg"}
        />
        <CartaoPerfil
          nome="Travis Scott"
          imgPerfil={"../src/assets/img/travis.jpg"}
        />
        <CartaoPerfil
          nome="The Weeknd"
          imgPerfil={"../src/assets/img/weeknd.jpg"}
        />
        <CartaoPerfil
          nome="Selton DJ"
          imgPerfil={"../src/assets/img/selton.jpg"}
        />
        <CartaoPerfil
          nome="The Neighborhood"
          imgPerfil={"../src/assets/img/neighborhood.jpg"}
        />
      </Box>
    </div>
  );
};

export default MaisTocados;
