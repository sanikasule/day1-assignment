import { useNavigate } from "react-router-dom"

function Portfolio({image, name, age, value, onBack}){
    return(
        <div style={{width: '300px', height:'300px', border: 'solid black', alignContent: 'center'}}>
            <img src={image} alt="alternate text" style={{width: '100px', height: '100px'}}/>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Value: {value}</p>
            <button onClick={onBack}>Back</button>
        </div>
    )
}

export default Portfolio