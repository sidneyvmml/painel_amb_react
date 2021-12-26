import React from 'react'
import If from '../../utils/if'
import './custom.css'

export default props => (
    <If visivel={ true }>
        <button className={'btn btn-'+props.style} onClick={props.onClick} href={props.href} target="_blank">
            {props.label} <i className={'fa fa-'+props.icon}></i>
        </button>
    </If>
)

