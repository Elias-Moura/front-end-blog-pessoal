import './home.css';
import HomeLogo from '../../assets/home/Home.jpg';
import { useState } from 'react';
import PropsExemple from '../../components/props-exemple/props-ex';
import HookExemple from '../../components/hooks-exemple/hooks-ex';

interface Props {
    title: string,
    description: string,
}

function Home({ title="Olá.", description="Seja bem vindo!" } : Props) {
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter +1);
    }

    return (
        <div className='container__home'>
            <h1 className='titulo'>Home</h1>
            <p>{title} {description}</p>
            <p>O valor é: {counter}</p>
            <button onClick={handleClick}>Adicionar 1</button>
            <PropsExemple mensage='Minha mensagem passada como props!' />
            <HookExemple/>
            <img src={HomeLogo} className='img' alt="Imagem tela inicial." />
        </div>
    )
}

export default Home;