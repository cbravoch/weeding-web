import { apiFetch } from "./api";

const getUsers = async () => {
    const response = await apiFetch('/users', {
        method: 'GET',
    });
    return response;
}

const validateUser = async (email: string) => {
    const response = await apiFetch(`/validate-user`, {
        method: 'POST',
        body: JSON.stringify({ email }),
    });
    return response;
}

export { getUsers, validateUser };

