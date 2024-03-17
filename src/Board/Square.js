// Square : a reusable component that takes in user input

import './styles/Square.css'

// TODO: event listener for onClick

const Square = ({value}) => {
    return (
        <>
            <button className="square-container"> 
                <h3 className="square-value">{value}</h3>
            </button>
        </>
    )
}

export default Square