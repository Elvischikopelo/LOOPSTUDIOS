
import Footer from './components/footer';
import Grid from './components/Grid';
import Hero from './components/hero';
import ImageBox from './components/imageBox';
import Nav from './components/nav';



function App() {
  return (

    <div className='flex-col flex'>

      <Nav/>,
        <Hero/>,
        <ImageBox/>,
        <Grid/>,
        <Footer/>
    </div>


  );
}

export default App;
