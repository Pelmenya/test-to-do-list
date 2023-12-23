import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { host } from '../constants';
import { TTask } from '../../types/t-task';

export const toDoListApi = createApi({
    reducerPath: 'toDoList',
    baseQuery: fetchBaseQuery({
        baseUrl:  host + '/to-do-list',

    }),
    tagTypes: [],
    endpoints: (builder) => ({
        getAllTasks: builder.query<TTask[] | null, any>({
            query: () => ({
                url: '',
                method: 'GET',
            }),
        }),
        postCreateTask: builder.mutation<TTask, any>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body,
            }),
        }),
    }),
});

// Export hooks for usage in functional components
export const {
    useLazyGetAllTasksQuery,    
    usePostCreateTaskMutation,
} = toDoListApi;