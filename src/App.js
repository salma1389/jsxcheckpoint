
import './App.css';
import myWonderfulImage from "./cat_corona-style.jpg"
import myWonderfulVideo from "./video/Elissa.mp4"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
          <h1 class="title red">Your name here</h1>
          <br />
          <img src="/cat-image.jpg" alt="cat-ima" /> 
          <br />
          <img src={myWonderfulImage} alt="cat_corona-style" />
          </div>
          <video width="1000" height="500" controls>
          <source src={myWonderfulVideo} type="video/mp4" />
          </video>
    </div>
  );
}

export default App;
