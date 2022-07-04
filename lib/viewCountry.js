import Router from 'next/router'


export default async function viewCountry(countryCode) {
    await Router.push('/p/[name]', `/p/${countryCode}`)
}
  