import Router from 'next/router';


export default async function viewCountry(countryCode) {
    console.log(`viewing country ${countryCode}`)
    await Router.push('/p/[name]', `/p/${countryCode}`)
}
  