import { Box, Typography, Link, Avatar } from "@mui/material";
import React from "react";

const MaisTocados = () => {
  return (
    <div>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Artistas mais tocados este mês
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#A7A7A7", margin: '.6em 0' }}>
            Visível apenas para você
          </Typography>
        </Box>
        <Link sx={{ color: "#A7A7A7" }}>Ver tudo</Link>
      </Box>

      <Box
      display='flex'
      justifyContent='space-between'
      sx={{
        maxWidth: '800px'
      }}
      >
          <Box
            p={2}
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
            alignItems="initial"
            justifyContent="center"
          >
            <Avatar
              alt="Vemy Sharp"
              src="../src/assets/img/boogie.jpg"
              sx={{ width: 150, height: 150 }}
            />
            <Typography variant="h6">A Boogie Wit da Hoodie</Typography>
            <Typography variant="body1" sx={{ color: "#A7A7A7" }}>
              Artista
            </Typography>
          </Box>
          <Box
            p={2}
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
            alignItems="initial"
            justifyContent="center"
          >
            <Avatar
              alt="Vemy Sharp"
              src="../src/assets/img/boogie.jpg"
              sx={{ width: 150, height: 150 }}
            />
            <Typography variant="h6">A Boogie Wit da Hoodie</Typography>
            <Typography variant="body1" sx={{ color: "#A7A7A7" }}>
              Artista
            </Typography>
          </Box>
          <Box
            p={2}
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
            alignItems="initial"
            justifyContent="center"
          >
            <Avatar
              alt="Vemy Sharp"
              src="../src/assets/img/boogie.jpg"
              sx={{ width: 150, height: 150 }}
            />
            <Typography variant="h6">A Boogie Wit da Hoodie</Typography>
            <Typography variant="body1" sx={{ color: "#A7A7A7" }}>
              Artista
            </Typography>
          </Box>
          <Box
            p={2}
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
            alignItems="initial"
            justifyContent="center"
          >
            <Avatar
              alt="Vemy Sharp"
              src="../src/assets/img/boogie.jpg"
              sx={{ width: 150, height: 150 }}
            />
            <Typography variant="h6">A Boogie Wit da Hoodie</Typography>
            <Typography variant="body1" sx={{ color: "#A7A7A7" }}>
              Artista
            </Typography>
          </Box>
      </Box>
    </div>
  );
};

export default MaisTocados;
