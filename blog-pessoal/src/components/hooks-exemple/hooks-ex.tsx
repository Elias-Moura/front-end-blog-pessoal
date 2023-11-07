import { useEffect, useState } from "react"

function HookExemple() {
    const [ clicked, setClicked ] = useState(false);
    const [ mensage, setMensage ] = useState('');

    useEffect(
        () => {
            if (clicked) {
                setMensage("Você clicou!")
            }
        }
    , [clicked]
    );

    return (
        <div>
            <button onClick={() => {setClicked(true)}}> Não clique aqui! </button>
            <p>{mensage}</p>
        </div>
    )
}

export default HookExemple;