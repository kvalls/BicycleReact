import {useNavigate} from 'react-router-dom';
import Footer from '../components/footer';

function Main() {

  const navigate = useNavigate();

  const goToHelloWorld = () => {
    navigate("/helloworld");
  }

  return (
    <>
      <p>This is my last war</p>
      <button onClick={goToHelloWorld}>I go, to Anime World</button>
      <Footer />
    </>
  );
}

export default Main;