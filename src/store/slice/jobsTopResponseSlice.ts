// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import httpClient from '@/libs/httpClient'
// import type {
//   JobsResponse,
//   Aggregations,
//   JobItem,
//   Pagination
// } from '@/types/jobs'

// export type JobsTopResponseState = {
//   aggregations: Aggregations | null
//   items: JobItem[]
//   pagination: Pagination | null
//   status: 'idle' | 'loading' | 'succeeded' | 'failed'
//   errorMessage: string | null
// }

// const initialState: JobsTopResponseState = {
//   aggregations: null,
//   items: [],
//   pagination: null,
//   status: 'idle',
//   errorMessage: null,
// }

// export const fetchJobsTopResponse = createAsyncThunk<JobsResponse['result'], { limit?: number; errorMessage?: string; softType?: string } | undefined>(
//   //成功時に返す型: JobsResponse['result']
//   'jobsTopResponse/fetchJobsTopResponse',
//   //action type の名前（識別子）
//   async (args, { rejectWithValue }) => {
//     try {
//       const res = await httpClient.get<JobsResponse>('/jobs', {
//         params: { limit: args?.limit ?? 10, softType: 'NEW_POSTING' },
//         //
//       })
//       return res.data.result
//     } catch {
//       return rejectWithValue(args?.errorMessage ?? '求人情報の取得に失敗しました')
//       //args?.errorMessage ??これは引数で渡さなかったら消してもいい。柔軟性を持たせるなら渡す
//     }
//   }
// )
// // もしエラーを分けたいならこうする
// // catch (e: any) {
// //   if (e.response?.status === 404) {
// //     return rejectWithValue('データが存在しません')
// //   }
// //   return rejectWithValue('通信に失敗しました')
// // }
// // 👉 エラーごとに出し分けできる



// export const jobsTopResponseSlice = createSlice({
//   name: 'jobsTopResponse',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchJobsTopResponse.pending, (state) => {
//         state.status = 'loading'
//         state.errorMessage = null
//       })
//       .addCase(fetchJobsTopResponse.fulfilled, (state, action) => {
//         state.aggregations = action.payload.aggregations ?? null
//         state.items = action.payload.items ?? []
//         state.pagination = action.payload.pagination ?? null
//         state.status = 'succeeded'
//         state.errorMessage = null
//       })
//       .addCase(fetchJobsTopResponse.rejected, (state, action) => {
//         state.status = 'failed'
//         state.errorMessage =
//           (action.payload as string) ??
//           action.error.message ??
//           '不明なエラー'
//       })
//   },
// })

// export default jobsTopResponseSlice.reducer
