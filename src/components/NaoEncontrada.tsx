import { Box, Button, Typography } from "@mui/material";
import React from "react";

const NaoEncontrada = () => {
  return (
    <Box
      sx={{
        width: "max-content",
        margin: '2em auto',
      }}
    >
      <Typography variant="h2" mb={5}>
        Página não encontrada
      </Typography>
      <Button variant="contained" size="large" color="success" sx={{width: '100%', padding: '1.2em'}}>
        Voltar
      </Button>
    </Box>
  );
};

export default NaoEncontrada;
