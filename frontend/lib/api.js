

const BASE_URL = `http://classwork.engr.oregonstate.edu:${import.meta.env.VITE_BACKEND_PORT}`

console.log('base url', BASE_URL)
// attractions
export async function getAttractions() {
    const response = await fetch(`${BASE_URL}/attractions`)
    const data = await response.json()
    console.log(data)
    return data
}

// road trip routes
export async function getRoadTripRoutes() {
    const response = await fetch(`${BASE_URL}/roadTripRoutes`)
    const data = await response.json()
    return data
}

// road trippers
export async function getRoadTrippers() {
    const response = await fetch(`${BASE_URL}/roadTrippers`)
    const data = await response.json()
    return data
}

// trip budgets
export async function getTripBudgets() {
    const response = await fetch(`${BASE_URL}/tripBudgets`)
    const data = await response.json()
    return data
}

// places
export async function getPlaces() {
    const response = await fetch(`${BASE_URL}/places`)
    const data = await response.json()
    return data
}

// road trip places
export async function getRoadTripPlaces() {
    const response = await fetch(`${BASE_URL}/roadTripPlaces`)
    const data = await response.json()
    return data
}