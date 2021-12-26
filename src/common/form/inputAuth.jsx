import React from 'react'
import If from '../../utils/if'

export default props => (
    <If visivel={!props.hide}>
        <div className="form-group has-feedback">
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
            <span className={`glyphicon glyphicon-${props.icon}
            form-control-feedback`}></span>
            <div>
                {props.meta.touched && props.meta.error && <span className='error-field'>{props.meta.error}</span>}
            </div>
        </div>
    </If>
)