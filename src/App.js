
import './App.css';
import myWonderfulImage from "./cat_corona-style.jpg"
import myWonderfulVideo from "./video/Elissa.mp4"
import './style.css';

function App() {
  return (
    <div className="App">
      <div >
          <h1 className="title red"> Cats Jungle </h1>
          <br />
          <img src="/cat-image.jpg" alt="cat-ima" /> 
          <br />
          <img className="cats" src={myWonderfulImage} alt="cat_corona-style" />
          <img className="cats" src={myWonderfulImage} alt="cat_corona-style" />
          </div>
          <video id="videos" controls>
          <source src={myWonderfulVideo} type="video/mp4" />
          </video>
    </div>
  );
}

export default App;
