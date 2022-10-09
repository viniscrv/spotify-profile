import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Collapse,
  ListItemButton,
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
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

function MenuLateral() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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

        <ListItemButton onClick={handleClick}>
        <ListItemText primary="Suas playlists" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>


        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Playlist 01" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Playlist 02" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Playlist 03" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Playlist 04" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Playlist 05" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Playlist 06" />
          </ListItemButton>
        </List>
      </Collapse>

      </List>
    </>
  );
}

export default MenuLateral;
