import Header from '../components/Header.jsx';
import Teaser from '../components/Teaser.jsx';
import Dataset from '../components/Dataset.jsx';
import Motivation from '../components/Motivation.jsx';
import FutureWork from '../components/FutureWork.jsx';
import ImprovedModel from '../components/ImprovedModel.jsx';
// import QualitativeAnalysis from '../components/QualitativeAnalysis.jsx';
import BaseModel from '../components/BaseModel.jsx';
import Evaluation from '../components/Evaluation.jsx';
  // import BibTex from '../components/BibTex';
// import Footer from '../components/Footer';

const Home = () => {
  

  return (
    <div>
      <Header />
      <Teaser />
      <Motivation />
      <Dataset/>
       <BaseModel/>
      <ImprovedModel/>
      <Evaluation />
      <FutureWork />

      {/*<BibTex />
      <Footer /> */}
    </div>
  );
};

export default Home;