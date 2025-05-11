import { apiFetch } from "./api";

export const getGuests = async () => {
    const response = await apiFetch('/guest', {
        method: 'GET',
    });
    return response;
}

export const storeGuest = async (guest: any) => {
    const response = await apiFetch('/guest', {
        method: 'POST',
        body: JSON.stringify(guest),
    });
    return response;
}

export const updateGuest = async (guest: any) => {
    const response = await apiFetch(`/guest/${guest.id}`, {
        method: 'POST',
        body: JSON.stringify(guest),
    });
    return response;
}
