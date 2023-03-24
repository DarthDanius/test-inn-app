import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import companiesService, { CompaniesData } from "@services/companiesService";
import { errorPush } from "@redux/slices/errorsSlice";
import { isErrorApp } from "@apptypes/index";

// thunk
export const getDataByINN = createAsyncThunk('company/getDataByINN', async (inn: string, thunkApi)=>{
    try {
        thunkApi.dispatch(setProgress(true))
        const companyData = await companiesService.getByINN(inn)
        thunkApi.dispatch(setCompanyData(companyData))
        thunkApi.dispatch(setProgress(false))

    } catch (error) {
        if (isErrorApp(error)) {
            thunkApi.dispatch(errorPush(error))
        }
        thunkApi.dispatch(setProgress(false))
    }
})

// slice
const initialState: {
    process: boolean,
    companyData: CompaniesData
} = {
    process: false,
    companyData: ''
}
const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setProgress(state, action:PayloadAction<boolean>) {
            state.process = action.payload
        },
        setCompanyData(state, action:PayloadAction<CompaniesData>) {
            state.companyData = action.payload
        },
    },
})

export const {setProgress, setCompanyData} = companySlice.actions
export default companySlice.reducer