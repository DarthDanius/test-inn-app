import { Button, Form, FormGroup } from "react-bootstrap";
import React, { SyntheticEvent, useState } from 'react'
import classNames from './FormInn.module.scss'

export interface FormInnProps {
    className? : string,
    onSubmit: Function,
}

export const FormInn = (props: FormInnProps) => {
    const {onSubmit, className} = props
    type State = {
        inn: string
    }
    const [state, setState] = useState<State>({
        inn: '7707083893'
    })

    const changeField = (fieldId: string, fieldValue: string) => {
        return setState((oldState)=>{
            let state = {...oldState}
            state[fieldId as keyof State] = fieldValue
            return state
        })
    }

    const onSubmitHander = (e: SyntheticEvent)=>{
        e.preventDefault()
        if (typeof onSubmit === 'function') {
            onSubmit(state.inn)
        }
        return false
    }

    const formClassname = className ? className + ' ' + classNames.form : classNames.form

    return (
        <Form className={formClassname} onSubmit={onSubmitHander}>
            <div className={classNames.formContent}>
                <FormGroup className={classNames.inputGroup}>
                    <Form.Label className={classNames.label} htmlFor={`inn`}>ИНН</Form.Label>
                    <Form.Control className={classNames.input}
                        onChange={(e)=>changeField('inn', e.target.value)}
                        value={state.inn}
                        type="text"
                        name="inn"
                        id={`inn`}
                        required={true}
                    />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
    )

}