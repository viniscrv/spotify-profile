import logoSpotify from "../../src/assets/img/png-spotify2.png";
import { Box, TextField, Avatar, Button } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <>
        <img src={logoSpotify} alt="" style={{ width: "120px" }} />
          <Box
          display='flex'
          alignItems='center'
          >
            <TextField
              color="success"
              label="O que você quer ouvir?"
              variant="filled"
              size="small"
              sx={{ width: "290px" }}
            />
          </Box>
          <Avatar alt="Vemy Sharp" src="../src/assets/img/profile.jpg" />
    </>
  )
}

export default Header