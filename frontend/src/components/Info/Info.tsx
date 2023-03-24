import React from 'react'
import { Col } from 'react-bootstrap'

export interface InfoProps {
    className?: string,
    data: any
}

export const Info = ( props: InfoProps ) => {

    return <Col className={props.className} dangerouslySetInnerHTML={{__html: props.data}}></Col>
}