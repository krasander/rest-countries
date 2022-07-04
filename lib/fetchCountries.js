
export async function fetchCountries() {
    const response = await fetch('http://restcountries.com/v2/all')
    const fetchedCountries = await response.json()
    return fetchedCountries
}

export async function fetchSingleCountryByAlphaCode(code) {
    const response = await fetch(`http://restcountries.com/v2/alpha/${code}`)
    const fetchedCountry = await response.json()
    return fetchedCountry
}
