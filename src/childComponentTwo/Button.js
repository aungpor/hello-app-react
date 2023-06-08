import React, {useState} from 'react'

const Button = ({Label, onClick}) => {

    return(
        <div>
            <button onClick={onClick} type="button">
                {Label}
            </button>
        </div>
    )
}

export default Button