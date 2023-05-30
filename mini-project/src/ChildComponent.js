import React from 'react'
import PropTypes from 'prop-types'

function ChildComponent(props){
    const {num,color} = props
    const name = "Tuan Anh"
    const age = 26
    const isMale = true
    const language = {
        primary:"VN"
    }
    const colorList = ["red","blue","green"]
    return(
        <div>
            Count number: {num}
            <div style={{background:color, width:"40px",height:"40px"}}></div>
            <div>
                <p>Name:{name} - Age:{age} - Language:{language.primary} - Gender:{isMale ? "Male" : "Female"}</p>

                {isMale&& 
                <p>Name:{name} - Age:{age} - Gender:Male</p>
                }   
                {!isMale&&
                <p>Name:{name} - Age:{age} - Gender:Female</p>
                }             
            
                {
                    colorList.length && 
                    <>
                    {colorList.map((color,index)=>{
                        return <p style={{color}} key={index}>{color}</p>
                    })}
                    </>
                }
            </div>
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