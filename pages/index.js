import * as React from 'react';
import Header from '../components/Header'
import NestedGrid from '../components/NestedGrid'
import Regions from '../components/Regions'
import SearchBar from '../components/SearchBar';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { fetchCountries } from '../lib/fetchCountries';
import { CssBaseline, Toolbar } from '@mui/material';
import getThemes from '../components/Theme';


export async function getStaticProps() {
  const fetchedCountries = await fetchCountries()
  
  return { props: { fetchedCountries } }
}

export default function App({ fetchedCountries }) {
  const [countries, setCountries] = React.useState(fetchedCountries)
  const allCountries = [...fetchedCountries]
  const [currentTheme, setCurrentTheme] = React.useState()

  React.useEffect(() => {
    const theme = localStorage.getItem('theme')
      if (theme) {
        setCurrentTheme(theme)
      } else {
        setCurrentTheme('light')
      }
  })

  function updateTheme(theme) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
    setCurrentTheme(theme)
  }

  const { darkTheme, lightTheme } = getThemes()

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline/>
      <Header currentTheme={ currentTheme} setCurrentTheme={ updateTheme } />
      <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Regions sx={{ mr: 2, mx: 200 }} allCountries={allCountries} onRegionChange={setCountries} />
            <SearchBar sx={{ mr: 200 }} allCountries={allCountries} onSearchQuery={setCountries}/>
          </Toolbar>
      </Box>
      <NestedGrid countries={countries} />
     </ThemeProvider>
  )
}
