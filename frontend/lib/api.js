

const BASE_URL = `http://classwork.engr.oregonstate.edu:${import.meta.env.VITE_BACKEND_PORT}`

console.log('base url', BASE_URL)

/*----------------
/* GETS
/*----------------*/


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

/*----------------
/* POSTS
/*----------------*/

export async function postUser(data) {
    try {
        const response = await fetch(`${BASE_URL}/insert-roadtripper`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
            })
        })
        const result = await response.json()

        if (!response.ok) {
            return { error: result.error }
        }

        return { message: result.message }

    } catch (error) {
        console.error(error)
        return { error: "Could not connect to server" }
    }
}


/*----------------
/* DELETES
/*----------------*/
