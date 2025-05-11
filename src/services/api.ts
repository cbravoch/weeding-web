// src/services/api.js
interface FetchOptions extends RequestInit {
    token?: string;
}

export const apiFetch = async (url: string, options: FetchOptions = {}) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
    const response = await fetch(`${baseUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.token && {
          Authorization: `Bearer ${options.token}`,
        }),
      },
      ...options,
    });
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Error en la petición');
    }
  
    return response.json();
};
  