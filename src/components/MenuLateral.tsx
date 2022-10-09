import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faBookmark,
  faCoffee,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function MenuLateral() {
  return (
    <>
      <List>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faBookBookmark} />
          </ListItemIcon>
          <ListItemText primary="Sua Biblioteca" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faPlus} />
          </ListItemIcon>
          <ListItemText primary="Criar Playlist" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faHeart} />
          </ListItemIcon>
          <ListItemText primary="Músicas Curtidas" />
        </ListItem>
        <ListItem button>
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
        <ListItem button>
          <ListItemText primary="Lofi hip hop - beats to relax/study to" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Rap Workout" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="DOPE." />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Top Brasil" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="No Cap" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="TRAPPERZ" />
        </ListItem>
      </List>
    </>
  );
}

export default MenuLateral;
