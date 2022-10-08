import logoSpotify from "../src/assets/img/png-spotify.png";
import test from "../src/assets/img/test.jpg";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {
  Avatar,
  Box,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container sx={{ backgroundColor: "black" }}>
        <Grid
          xs={12}
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ padding: ".4em 1.5em" }}
        >
          <img src={logoSpotify} alt="" style={{ width: "40px" }} />
          <div>
            <TextField
              color="success"
              label="O que você quer ouvir?"
              variant="filled"
              size="small"
              sx={{ width: "290px" }}
            />
          </div>
          <Avatar alt="Vemy Sharp" src="../src/assets/img/profile.jpg" />
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          xs={2}
          sx={{ backgroundColor: "#121212", borderRadius: "10px" }}
          p={1}
          display="flex"
          justifyContent="center"
          flexWrap={"wrap"}
        >
          menu-lateral
        </Grid>

        <Grid
          xs={10}
          sx={{
            background:
              'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("../src/assets/img/test10.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "145% ",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", margin: "1em 2em" }}
          >
            <Avatar
              alt="Vemy Sharp"
              src="../src/assets/img/profile.jpg"
              sx={{ width: 260, height: 260 }}
            />
            <div style={{ margin: "1.6em" }}>
              <p>PERFIL</p>
              <h1>Vinícius</h1>
              <p>6 playlists públicas</p>
            </div>
          </div>

          <Grid container>
            <Grid
              p={1}
              xs={12}
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom, #232323, #212121, #1e1e1e, #1c1c1c, #1a1a1a)",
                minHeight: "70vh",
              }}
            >
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{
                  maxWidth: "100%",
                  padding: "1em 2em",
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: "600" }}>
                    Artistas mais tocados este mês
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#A7A7A7" }}>
                    Visível apenas para você
                  </Typography>
                </Box>
                <Link sx={{ color: "#A7A7A7" }}>Ver tudo</Link>
              </Box>
              <Box
                p={2}
                sx={{
                  maxWidth: "180px",
                  width: "100%",
                  height: "260px",
                  backgroundColor: "#121212",
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
