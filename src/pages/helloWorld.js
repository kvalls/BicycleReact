import {useNavigate} from 'react-router-dom';
import Counter from '../components/counter';
import Footer from '../components/footer';

function HelloWorld() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  }

  return (
    <>
      <p>This is my last war</p>
      <button onClick={goToMain}>Back to Main</button>
      <Counter/>
      <Footer />
    </>
  );
}

export default HelloWorld;