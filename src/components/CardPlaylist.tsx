import {
  Box,
  Typography,
} from "@mui/material";
import React from "react";

const CardPlaylist = (props: { nome: string; imgPlaylist: string }) => {
  return (
    <div>
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
        <img
          style={{ borderRadius: "5px", marginBottom: "1em" }}
          src={props.imgPlaylist}
        />
        <Typography variant="h6">{props.nome}</Typography>
      </Box>
    </div>
  );
};

export default CardPlaylist;
