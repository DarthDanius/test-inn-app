import ModalError from './ModalError'
import { errorUnshift } from '@redux/slices/errorsSlice'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/reduxHook'

export interface ModalsProps {
    className? : string
}

export const Modals = ( props: ModalsProps ) => {
    const dispatch = useAppDispatch()
    const errors = useAppSelector(state => state.errors.errors)

    return <>                
        <ModalError
            error={errors[0]}
            close={()=>{
                dispatch(errorUnshift())
            }}
        />
    </>
}