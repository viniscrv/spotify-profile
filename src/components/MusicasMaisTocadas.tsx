import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import CartaoPerfil from "./CartaoPerfil";

const MusicasMaisTocadas = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        mt={5}
        mr={1}

      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Músicas mais tocadas este mês
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#A7A7A7", margin: ".6em 0" }}
          >
            Visível apenas para você
          </Typography>
        </Box>
        <Link underline="hover" sx={{ color: "#A7A7A7", cursor: "pointer" }}>
          Ver tudo
        </Link>
      </Box>

      <Box
        sx={{
          minWidth: "1200px",
        }}
      >
        <List sx={{}}>
          <ListItem button>
            <span style={{ marginRight: "1em" }}>1</span>
            <ListItemText primary="FAME - A COLORS ENCORE" />
          </ListItem>
          <ListItem button>
            <span style={{ marginRight: "1em" }}>2</span>

            <ListItemText primary="MEGA DO MAL CAMINHO" />
          </ListItem>

          <ListItem button>
            <span style={{ marginRight: "1em" }}>3</span>

            <ListItemText primary="Dancin - Krono Remix" />
          </ListItem>

          <ListItem button>
            <span style={{ marginRight: "1em" }}>4</span>

            <ListItemText primary="Still Dont Know My Name" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default MusicasMaisTocadas;
