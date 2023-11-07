import './home.css';
import HomeLogo from '../../assets/home/Home.jpg';

function Home() {
    return (
        <>
            <h1 className='titulo'>Home</h1>
            <img src={HomeLogo} className='img' alt="Imagem tela inicial." />
        </>
    )
}

export default Home;