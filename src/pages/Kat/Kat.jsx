import { useLoaderData } from 'react-router-dom'
import './Kat.css'

const Kat=()=>{
let{name, imgURL, kittenId, description}=useLoaderData()

return(
    <main id="kat-page">
    <div id="kitty-card">
        <img src={imgURL} alt={name}/>
        <div id="kitty-info">
            <h2>{name}</h2>
            <p>{description}</p>
    </div>
    </div>
    </main>
)
}

export default Kat