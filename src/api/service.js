import api from "./index";

const ENDPOINTS = {
    spots: "/spots"
}

const getAllSpots = async () => {
    try {
        const response = await api.get(ENDPOINTS.spots)
        return response
    } catch (error) {
        throw Error(error)
    }
}

const getSelectedSpot = async (id) => {
    try {
        const response = await api.get(
            `${ENDPOINTS.spots}?filters[id][$eqi]=${id}&populate=*`
        )
        return response
    } catch (error) {
        throw Error(error)
    }
}

export { getAllSpots, getSelectedSpot }
