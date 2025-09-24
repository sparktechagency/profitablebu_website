import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.profitablebusinessesforsale.com/api/v1',
    // http://159.65.217.35:8001
    prepareHeaders: (headers) => {
        const token = (localStorage.getItem('accessToken'));
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['overview'],
    endpoints: () => ({})
});


export const imageUrl = 'https://api.profitablebusinessesforsale.com'
export const SOCKET_BASE = "https://api.profitablebusinessesforsale.com";