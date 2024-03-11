// Square : a reusable component that takes in user input

import './styles/Square.css'

const Square = ({value}) => {
    return (
        <>
            <button className="square"> 
                {value}
            </button>
        </>
    )
}

export default Square