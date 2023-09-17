import React from "react";
import { useNavigate } from 'react-router-dom';

function Body(){
    const navigate = useNavigate();
    const options = ["Internship","Pabau","Employment","Career"];

    const handleClick = (option, index) => {
        navigate(`/option/${option}/${index + 1}`);
    };

    return(
        <div className="body">
            {options.map((option, index) => (
                <button key={index} onClick={() => handleClick(option, index)}>
                {option}
                </button>
            ))}
        </div>
    );
}

export default Body;

