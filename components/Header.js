import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'


export default function Header({ currentTheme, setCurrentTheme }) {
  function toggleTheme() {
    if (currentTheme === 'dark') {
      setCurrentTheme('light')
    } else {
      setCurrentTheme('dark')
    }
  }

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Where in the world?
          </Typography>
          <IconButton sx={{ ml: 12 }} onClick={toggleTheme} color='inherit'>
            {currentTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
