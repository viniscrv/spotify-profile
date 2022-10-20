import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Collapse,
  ListItemButton,
  Alert,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faBookmark,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function MenuLateral() {
  const [open, setOpen] = React.useState(false);
  const [expandir, setExpandir] = React.useState(false);

  const handleClick = () => {
    if (open === false){
      setOpen(!open)
    } 
  };


  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faBookBookmark} />
          </ListItemIcon>
          <ListItemText primary="Sua Biblioteca" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faPlus} />
          </ListItemIcon>
          <ListItemText primary="Criar Playlist" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faHeart} />
          </ListItemIcon>
          <ListItemText primary="Músicas Curtidas" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faBookmark} />
          </ListItemIcon>
          <ListItemText primary="Seus Episódios" />
        </ListItem>
      </List>
      <Divider light sx={{}} />
      <List
        sx={{
          color: "#A7A7A7",
        }}
      >
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Lofi hip hop - beats to relax/study to" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Rap Workout" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="DOPE." />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Top Brasil" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="No Cap" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="TRAPPERZ" />
        </ListItem>

        <ListItemButton onClick={() => setExpandir(!expandir)}>
          <ListItemText primary="Suas playlists" />
          {expandir ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={expandir} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={handleClick} sx={{ pl: 4 }}>
              <ListItemText primary="Playlist 01" />
            </ListItemButton>
            <ListItemButton onClick={handleClick} sx={{ pl: 4 }}>
              <ListItemText primary="Playlist 02" />
            </ListItemButton>
            <ListItemButton onClick={handleClick} sx={{ pl: 4 }}>
              <ListItemText primary="Playlist 03" />
            </ListItemButton>
            <ListItemButton onClick={handleClick} sx={{ pl: 4 }}>
              <ListItemText primary="Playlist 04" />
            </ListItemButton>
            <ListItemButton onClick={handleClick} sx={{ pl: 4 }}>
              <ListItemText primary="Playlist 05" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Não há nada aqui
        </Alert>
      </Snackbar>
    </>
  );
}

export default MenuLateral;
