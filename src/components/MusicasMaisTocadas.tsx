import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as Enviar } from "react-router-dom";

import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";

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
        <Enviar to="/Invalido">
          <Link underline="hover" sx={{ color: "#A7A7A7", cursor: "pointer" }}>
            Ver tudo
          </Link>
        </Enviar>
      </Box>

      <Box
        sx={{
          minWidth: "1200px",
        }}
      >
        <List>
          <ListItem button>
            <span style={{ marginRight: "1em" }}>1</span>
            <ListItemText
              sx={{ minWidth: "200px" }}
              primary="FAME - A COLORS ENCORE"
            />

            <Typography
              variant="body1"
              sx={{
                width: "100%",
                textAlign: "center",
                color: "#A7A7A7",
              }}
            >
              Fame - A COLORS ENCORE
            </Typography>

            <FontAwesomeIcon icon={faHeart} />
            <span style={{ marginLeft: "2em" }}>01:51</span>
          </ListItem>
          <ListItem button>
            <span style={{ marginRight: "1em" }}>2</span>

            <ListItemText
              sx={{ minWidth: "200px" }}
              primary="MEGA DO MAL CAMINHO"
            />
            <Typography
              variant="body1"
              sx={{
                width: "100%",
                textAlign: "center",
                color: "#A7A7A7",
              }}
            >
              MEGA DO MAL CAMINHO
            </Typography>

            <FontAwesomeIcon icon={faHeart} />
            <span style={{ marginLeft: "2em" }}>01:51</span>
          </ListItem>

          <ListItem button>
            <span style={{ marginRight: "1em" }}>3</span>

            <ListItemText
              sx={{ minWidth: "200px" }}
              primary="Dancin - Krono Remix"
            />
            <Typography
              variant="body1"
              sx={{
                width: "100%",
                textAlign: "center",
                color: "#A7A7A7",
              }}
            >
              Ibiza 2019
            </Typography>

            <FontAwesomeIcon icon={faHeart} />
            <span style={{ marginLeft: "2em" }}>01:51</span>
          </ListItem>

          <ListItem button>
            <span style={{ marginRight: "1em" }}>4</span>

            <ListItemText
              sx={{ minWidth: "200px" }}
              primary="Still Dont Know My Name"
            />
            <Typography
              variant="body1"
              sx={{
                width: "100%",
                textAlign: "center",
                color: "#A7A7A7",
              }}
            >
              Euphoria (Original Score from the HBO Series)
            </Typography>

            <FontAwesomeIcon icon={faHeart} />
            <span style={{ marginLeft: "2em" }}>01:51</span>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default MusicasMaisTocadas;
