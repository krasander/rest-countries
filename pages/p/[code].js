import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { fetchSingleCountryByAlphaCode } from '../../lib/fetchCountries';
import viewCountry from '../../lib/viewCountry';
import Router from 'next/router';
import { CssBaseline } from '@mui/material';
import getThemes from '../../components/Theme';

export async function getServerSideProps({ params }) {
    const country = await fetchSingleCountryByAlphaCode(params.code)
    const neighbours = country.borders
        ? await Promise.all(country.borders.map(async (border) => await fetchSingleCountryByAlphaCode(border)))
        : []
    
    const data = {
        country: country,
        neighbours: JSON.stringify(neighbours),
    }
    return {
      props: { data }
    }
}


export default function DetailedCountry({ data }) {
    const [currentTheme, setCurrentTheme] = React.useState()
    React.useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme) {
            setCurrentTheme(theme)
        } else {
            setCurrentTheme('dark')
        }
    })
    const { darkTheme, lightTheme } = getThemes()

    return (
        <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Button style={{ marginBottom: 50}} variant="outlined" onClick={() => Router.back()}>
                Back
            </Button>
      <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 400, height: 'auto' }}
                image={data.country.flags.png}
                alt=""
            />
      <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 10}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                {data.country.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                <b>Native name:</b> {data.country.nativeName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                <b>Population:</b> {data.country.population} 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                <b>Region:</b> {data.country.region}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                <b>Sub Region:</b> {data.country.subregion}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                <b>Capital:</b> {data.country.capital ? data.country.capital : '-'}
            </Typography>
              </CardContent>

              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                <b>Bordering countries: </b>
                </Typography> 
                  {JSON.parse(data.neighbours).map(neighbour => (
                      <Button key={ neighbour.name } variant="contained" onClick={() => viewCountry(neighbour.alpha3Code)}>
                        {neighbour.name}      
                    </Button>
            ))}
        </Box>
      </Box>
            </Card>
            </ThemeProvider>
  );
}
