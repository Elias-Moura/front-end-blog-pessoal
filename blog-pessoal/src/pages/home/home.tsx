import './home.css';
import HomeLogo from '../../assets/home/Home.jpg';

interface Props {
    title: string,
    description: string,
}

function Home({ title="Olá.", description="Seja bem vindo!" } : Props) {
    return (
        <>
            <h1 className='titulo'>Home</h1>
            <p>{title} {description}</p>
            <img src={HomeLogo} className='img' alt="Imagem tela inicial." />
        </>
    )
}

export default Home;