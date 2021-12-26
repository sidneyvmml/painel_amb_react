import React from 'react'

export default props => {
    if(props.visivel){
        return props.children
    }
    else{
        return false
    }
}