import {combineReducers, configureStore, Middleware} from '@reduxjs/toolkit'
import errorsReduser from '@redux/slices/errorsSlice'
import companiesSlice from '@redux/slices/companiesSlice'
import { AxiosError, isAxiosError } from 'axios'
import { isErrorResponse } from '@apptypes/index'

const rootReduser = combineReducers({
    company: companiesSlice,
    errors: errorsReduser
})

const serializeErrorsMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.payload instanceof Error) {
        if ( isAxiosError(action.payload) ) {
            const axiosError = action.payload as AxiosError
            const title = ''

            if ( axiosError.response && axiosError.response.data && isErrorResponse( axiosError.response.data ) ) {
                const {message} = axiosError.response.data
                action.payload = {message, title}

            } else {
                const {message} = axiosError
                action.payload = {message, title}
            }
            
        } else {
            const {message, title} = action.payload
            action.payload = {message, title}
        }
    }
    next(action);
}

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(serializeErrorsMiddleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']