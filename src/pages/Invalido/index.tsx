import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createTheme,
  CssBaseline,
  Box,
  Grid,
  ThemeProvider,
  Link,
} from "@mui/material";
import { Link as Enviar } from "react-router-dom";
import AreaPerfil from "../../components/AreaPerfil";
import Header from "../../components/Header";
import MaisTocados from "../../components/MaisTocados";
import MenuLateral from "../../components/MenuLateral";
import MusicasMaisTocadas from "../../components/MusicasMaisTocadas";
import NaoEncontrada from "../../components/NaoEncontrada";
import PlaylistsPublicas from "../../components/PlaylistsPublicas";
import GlobalStyle from "../../styles/global";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Invalido = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ maxHeight: "100vh", overflowY: "hidden" }}>
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
          <Grid xs={2} sx={{ backgroundColor: "#0b0b0b" }} p={1}>
            <MenuLateral />
          </Grid>

          <Grid
            xs={10}
            sx={{
              background:
                'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url("../src/assets/img/test1.jpg")',
              backgroundRepeat: "repeat",
              backgroundSize: "contain",
            }}
          >
            <AreaPerfil />

            <Grid container>
              <Grid
                m={2}
                p={3}
                sx={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,1))",
                  width: "100%",
                  height: "60vh",
                  borderRadius: "5px",
                  position: 'relative',
                }}
              >
                <NaoEncontrada />
                <Enviar to="/">
                  <Link
                    color="inherit"
                    sx={{ 
                      color: "#A7A7A7", 
                      cursor: "pointer",
                      position: 'absolute',
                      top: '32px',
                      right: '32px',
                    }}
                  >
                    Voltar
                  </Link>
                </Enviar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Invalido;
