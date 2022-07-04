import * as React from 'react'
import _ from 'lodash'
import TextField from '@mui/material/TextField'


export default function SearchBar({ allCountries, onSearchQuery }) {
    function onSearch(event) {
        const searchTerm = event.target.value
        if (searchTerm === '') {
            onSearchQuery(allCountries)
        } else {
            // Search is case insensitive
            onSearchQuery(allCountries.filter(country => 
                country.name.toLowerCase().includes(searchTerm.toLowerCase())))
        }
    }

    const debouncedChangeHandler = React.useMemo(
        () => _.debounce(onSearch, 300), [])
    
    React.useEffect(() => {
        // Clean up the debounce handler because we don't want it to run when component has unmounted
        return () => {
          debouncedChangeHandler.cancel()
        }
    }, [])
    
    return (
        <form>
            <TextField sx={{ ml: 175, flexGrow: 1 }}
                id='search-bar'
                className='text'
                onInput={(event) => { debouncedChangeHandler(event) }}
                label='Search for a country'
                variant='outlined'
                placeholder='Search...'
                size='small'
            />
        </form>
    )
}
