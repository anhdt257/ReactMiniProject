import React from 'react'
import PropTypes from 'prop-types'

function ChildComponent(props){
    const {num,color} = props

    return(
        <div>
            Count number: {num}
            <div style={{background:color, width:"40px",height:"40px"}}></div>
        </div>
    )
}


ChildComponent.propTypes = {
    num:PropTypes.number.isRequired,
    color:PropTypes.string
}

ChildComponent.defaultProps = {
    color:"red"
}

export default ChildComponent