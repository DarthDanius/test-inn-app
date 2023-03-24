
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorApp } from "@apptypes/index";

type ErrorState = {
    errors: ErrorApp[]
}
const initialState: ErrorState = {
    errors: [],
}
const errorsSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        errorPush(state, action:PayloadAction<ErrorApp>) {
            const {message, title=''} = action.payload
            state.errors.push( {message, title} )
        },
        errorUnshift(state) {
            state.errors.shift()
        }
    }
})

export const {errorPush, errorUnshift} = errorsSlice.actions
export default errorsSlice.reducer