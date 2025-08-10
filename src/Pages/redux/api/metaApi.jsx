import { baseApi } from "./baseApi";

const businessApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getCount: builder.query({
    //     query: () => {
    //         return {
    //             url: `/meta/get-dashboard-meta-data`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    getFaq: builder.query({
      query: ({ userRole }) => {
        return {
          url: `/faq/get-all-faq?role=${userRole}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    // getAllBusiness: builder.query({
    //     query: () => {
    //         return {
    //             url: `business/all-business`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    // getUserGrowth: builder.query({
    //     query: (year) => {
    //         return {
    //             url: `/meta/user-chart-data?year=${year}`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    // getFaq: builder.query({
    //     query: () => {
    //         return {
    //             url: `/manage/get-faq`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    addFaq: builder.mutation({
        query: (data) => {
            return {
                url: "/faq/create-faq",
                method: "POST",
                body: data,
            };
        },
        invalidatesTags: ["updateProfile"],
    }),

    updateFaq: builder.mutation({
        query: ({ formData, id }) => {
            return {
                url: `/faq/update-faq?faqId=${id}`,
                method: "PATCH",
                body: formData,
            };
        },
        invalidatesTags: ["updateProfile"],
    }),

    deleteFaq: builder.mutation({
        query: (id) => {
            return {
                url: `/faq/delete-faq?faqId=${id}`,
                method: 'DELETE'
            }
        },
        invalidatesTags: ['updateProfile']
    }),

    // getTermsConditions: builder.query({
    //     query: () => {
    //         return {
    //             url: "/manage/get-terms-conditions",
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["terms"],
    // }),
    postSubscriber: builder.mutation({
        query: (email) => {
            return {
                url: "/subscriber/create-subscriber",
                method: "POST",
                body: email,
            };
        },
        invalidatesTags: ["terms"],
    }),

    postSchedule: builder.mutation({
        query: (data) => {
            return {
                url: "/schedule/make-schedule",
                method: "POST",
                body: data,
            };
        },
        invalidatesTags: ["terms"],
    }),

    //   getPrivecy: builder.query({
    //     query: () => {
    //         return {
    //             url: "/manage/get-privacy-policy",
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["terms"],
    // }),
    // postPrivecy: builder.mutation({
    //     query: (data) => {
    //         return {
    //             url: "/manage/add-privacy-policy",
    //             method: "POST",
    //             body: data,
    //         };
    //     },
    //     invalidatesTags: ["terms"],
    // }),
  }),
});

export const { useGetFaqQuery,usePostScheduleMutation, useAddFaqMutation, usePostSubscriberMutation, useDeleteFaqMutation, useUpdateFaqMutation } = businessApi;
