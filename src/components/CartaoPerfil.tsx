import { Box, Avatar, Typography } from "@mui/material";
import React from "react";

const CartaoPerfil = (props: { nome: string; imgPerfil: string }) => {
  return (
    <>
      <Box
        p={2}
        mr={2}
        sx={{
          maxWidth: "180px",
          width: "100%",
          height: "260px",
          backgroundColor: "#0c0c0c",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#282828",
          },
        }}
        display="flex"
        flexDirection="column"
        justifyContent="initial"
      >
        <Avatar
          alt="Vemy Sharp"
          src={props.imgPerfil}
          sx={{ width: 150, height: 150 }}
        />
        <Typography variant="h6">{props.nome}</Typography>
        <Typography variant="body1" sx={{ color: "#A7A7A7" }}>
          Artista
        </Typography>
      </Box>
    </>
  );
};

export default CartaoPerfil;
