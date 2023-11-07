
interface Props {
    mensage:string;
}

function PropsExemple({ mensage }:Props) {
    return (
        <div>
            <p>Esse é um componente que recebe props.</p>
            <p>Sua mensagem: {mensage}</p>
        </div>
    )
}

export default PropsExemple;