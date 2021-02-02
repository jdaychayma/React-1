import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="App">
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Contact-Us</a>
      </nav>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#1" data-slide-to="0" class="active"></li>
          <li data-target="#2" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img id="1" class="d-block w-100" src="https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img id="2" class="d-block w-100" src="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png" alt="Second slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <form style={{ margin: 50 }}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Position</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Student</option>
            <option>Instructer</option>
            <option>Others</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
export default App ;

