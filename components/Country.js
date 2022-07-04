import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import viewCountry from '../lib/viewCountry'


export default function Country({ country }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="150"
        image={country.flags.png}
        alt="flag"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Population: ${country.population}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Region: ${country.region}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* A country might not have a capital. */}
          {`Capital: ${country.capital ? country.capital: '-'}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => viewCountry(country.alpha3Code)} size="small">View</Button>
      </CardActions>
    </Card>
  )
}
