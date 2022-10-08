import { List, ListItem, ListItemText, Divider,  } from "@mui/material";
import React from "react";

function MenuLateral() {
  return (
    <>
      <List>
        <ListItem button>
          <ListItemText primary="Sua Biblioteca" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Criar Playlist" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Músicas Curtidas" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Seus Episódios" />
        </ListItem>
      </List>
      <Divider
        light
        sx={{
          margin: "1.85em 0",
          backgroundColor: "transparent",
          border: "1px solid transparent",
        }}
      />
      <List>
        <ListItem button>
          <ListItemText primary="Playlist 1" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Playlist 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Playlist 3" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Playlist 4" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Playlist 5" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Playlist 6" />
        </ListItem>
      </List>
    </>
  );
}

export default MenuLateral;
