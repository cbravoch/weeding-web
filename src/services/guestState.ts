import { apiFetch } from "./api";

const getGuestStates = async () => {
    const response = await apiFetch('/guest-state', {
        method: 'GET',
    });
    return response;
}

export { getGuestStates };
