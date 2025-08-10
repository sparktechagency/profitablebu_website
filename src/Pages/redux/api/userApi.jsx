import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    registerActivation: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/activate-account",
          method: "POST",
          body: data,
        };
      },
    }),

    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    feedback: builder.mutation({
      query: (data) => {
        return {
          url: "/feedback/post-feedback",
          method: "POST",
          body: data,
        };
      },
    }),

    getProfile: builder.query({
      query: () => {
        return {
          url: "/user/user-detail",
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    forgotPassword: builder.mutation({
      query: (email) => {
        return {
          url: "/auth/forget-password",
          method: "POST",
          body: email,
        };
      },
    }),

    verifyEmail: builder.mutation({
      query: ({ data }) => {
        return {
          url: "/auth/verify-email-check-otp",
          method: "PATCH",
          body: data,
        };
      },
    }),

    verifyOtp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forget-password-check-otp",
          method: "PATCH",
          body: data,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/reset-password",
          method: "PATCH",
          body: data,
        };
      },
    }),

    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: "/user/update-profile",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/change-password",
          method: "PATCH",
          body: data,
        };
      },
    }),
    getHostUser: builder.query({
      query: ({ user, page, search }) => {
        return {
          url: `/dashboard/get-all-user?role=${user}&page=${page}&searchTerm=${search}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useRegisterActivationMutation,
  useFeedbackMutation,
  useLoginUserMutation,
  useGetProfileQuery,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useGetHostUserQuery,
  useVerifyEmailMutation,
} = useApi;
