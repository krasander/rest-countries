import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Country from './Country'


export default function NestedGrid({ countries }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        sx={{ mt: 16, ml: "auto", mr: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 20 }}>
        {countries.map((country) => (
          <Grid item xs={2} sm={4} md={4} key={country.name}>
            <Country country={country}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
