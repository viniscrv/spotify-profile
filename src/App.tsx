import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Avatar, Box, Grid, Link, Typography } from "@mui/material";
import MenuLateral from "./components/MenuLateral";
import Header from "./components/Header";
import AreaPerfil from "./components/AreaPerfil";
import MaisTocados from "./components/MaisTocados";

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
          <Header />
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          xs={2}
          sx={{ backgroundColor: "#0b0b0b", borderRadius: "10px" }}
          p={1}
        >
          <MenuLateral />
        </Grid>

        <Grid
          xs={10}
          sx={{
            background:
              'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url("../src/assets/img/test10.jpg")',
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
          }}
        >
          <AreaPerfil />

          <Grid container>
            <Grid
              m={1}
              p={3}
              sx={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,.9))",
                minHeight: "70vh",
                width: "100%",
                borderRadius: "20px",
                marginRight: '2em'
              }}
            >
              <MaisTocados />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
