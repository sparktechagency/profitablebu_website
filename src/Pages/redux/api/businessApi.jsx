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

    getSingleBusiness: builder.query({
      query: ({ businessId }) => {
        return {
          url: `/business/single-business?businessId=${businessId}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getSingleSubscription: builder.query({
      query: ({ subscriptionId }) => {
        return {
          url: `/subscription/get-single-subscription-plan?subscriptionId=${subscriptionId}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getSingleIterestUser: builder.query({
      query: ({ businessId }) => {
        return {
          url: `/business/get-single-business-with-users?businessId=${businessId}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getDetailsSingleIterestUser: builder.query({
      query: ({ businessId, interestedId }) => {
        return {
          url: `/business/interested-buyers-details?businessId=${businessId}&interestedId=${interestedId}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllBusiness: builder.query({
      query: () => {
        return {
          url: `/interested/interested-business`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

      getSingleFormat: builder.query({
      query: ({formationId}) => {
        return {
          url: `/formation/single-format?formationId=${formationId}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

      getAllHomeBusiness: builder.query({
      query: ({businessRole}) => {
        return {
          url: `/business/filter-business-by-business-role?businessRole=${businessRole}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),


    getAllBusinessHome: builder.query({
      query: () => {
        return {
          url: `business/all-business`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

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

    addInterest: builder.mutation({
      query: (data) => {
        return {
          url: "interested/make-interested",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    addBusinessValuation: builder.mutation({
      query: (data) => {
        return {
          url: "/business/business-valuation",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    addBusiness: builder.mutation({
      query: (data) => {
        return {
          url: "/business/create-business",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateSingle: builder.mutation({
      query: ({ formData, id }) => {
        return {
          url: `/business/update-business/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getAllBusinesFilter: builder.query({
      query: ({ category, location ,country, ageOfListing, sortBy,businessType, ownerShipType, askingPrice,searchText,businessRole}) => {
        let url = `business/filter-business`;

        const params = [];
        if (category) params.push(`category=${category}`);
        if (location) params.push(`location=${location}`);
         if (country) params.push(`country=${country}`);
          if (ageOfListing) params.push(`ageOfListing=${ageOfListing}`);
           if (sortBy) params.push(`sortBy=${sortBy}`);
            if (businessType) params.push(`businessType=${businessType}`);
             if (ownerShipType) params.push(`ownerShipType=${ownerShipType}`);
              if (askingPrice) params.push(`askingPrice=${askingPrice}`);
              if (searchText) params.push(`searchText=${searchText}`);
                 if (businessRole) params.push(`businessRole=${businessRole}`);

        if (params.length > 0) {
          url += `?${params.join("&")}`;
        }

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    // deleteFaq: builder.mutation({
    //     query: (id) => {
    //         return {
    //             url: `/manage/delete-faq/${id}`,
    //             method: 'DELETE'
    //         }
    //     },
    //     invalidatesTags: ['updateProfile']
    // }),

    getPlane: builder.query({
        query: ({role}) => {
            return {
                url: `/subscription/get-subscription-plan?role=${role}`,
                method: "GET",
            };
        },
        providesTags: ["updateProfile"],
    }),
    postCheckout: builder.mutation({
        query: (data) => {
            return {
                url: "/payment/checkout",
                method: "POST",
                body: data,
            };
        },
        invalidatesTags: ["updateProfile"],
    }),

      getCategtory: builder.query({
        query: () => {
            return {
                url: "/category/get-all-category",
                method: "GET",
            };
        },
        providesTags: ["updateProfile"],
    }),


     getTopCategtory: builder.query({
        query: () => {
            return {
                url: "/business/top-category",
                method: "GET",
            };
        },
        providesTags: ["updateProfile"],
    }),

     getAllFormate: builder.query({
        query: () => {
            return {
                url: "/formation/get-all-format",
                method: "GET",
            };
        },
        providesTags: ["updateProfile"],
    }),

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

export const {
  useGetAllBusinessQuery,
  useAddBusinessMutation,
  useGetSingleBusinessQuery,
  useUpdateSingleMutation,
  useGetSingleIterestUserQuery,
  useGetDetailsSingleIterestUserQuery,
  useAddBusinessValuationMutation,
  useGetAllBusinessHomeQuery,
  useAddInterestMutation,
  useGetAllBusinesFilterQuery,
  useGetAllHomeBusinessQuery,
  useGetPlaneQuery,
  usePostCheckoutMutation,
  useGetCategtoryQuery,
  useGetSingleSubscriptionQuery,
  useGetTopCategtoryQuery,
  useGetAllFormateQuery,
  useGetSingleFormatQuery
} = businessApi;
