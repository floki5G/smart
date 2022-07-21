import "./App.css"
import { Body } from "./body";
function App() {



  return (

    <div className="App">



      <div >
        {/* navbar  */}
        <nav class="navbar  navbar-expand-lg " style={{}}>
          <div class="container-fluid" style={{ "width": "100%" }}>
            <a class="navbar-brand" href="#">
              <img src="https://fleksa.s3.eu-central-1.amazonaws.com/fleksa/img/logo.png" height="60px" />
            </a>

            <div class="collapse navbar-collapse " id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto n1">

                <li class="nav-item ml-lg-3 ">
                  <a class="nav-link  text-light" href="#">HOME</a>
                </li>
                <li class="nav-item ml-lg-3 ">
                  <a class="nav-link  text-light" href="#">MENU</a>
                </li>
                <li class="nav-item ml-lg-3">
                  <a class="nav-link  text-light" href="#">RESERVATION</a>
                </li>
                <li class="nav-item ml-lg-3">
                  <a class="nav-link  text-light" href="#">CONTACT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">LOGIN</a>
                </li>
                <li class="nav-item">
                  <img  style={{"borderRadius":"50px"}} src="https://roma.fleksa.com/assets/svg/flag-united-kingdom.svg" alt="dds" height="50px"  width="50px" />
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main class=" cover  ">

          <div class="d-flex align-items-center justify-content-between s4">
            <div class="col col-sm-7 text-center text-xl-left col-xl-4 offset-xl-2">
              <h1 class="s1">Smart Pizza Rodga</h1>
              <p class="s2">Italian style pizza, Burgers, 100% Halal</p>
              <div><i class="fa-regular fa-clock"></i> Today 09:00 - 19:00</div>
              <div className="mt-4">
                <button class="btn bg-light  mx-2" type="submit">PICK UP <i class="fa-solid fa-note-sticky"></i> </button>
                <button class="btn bg-light  mx-2" type="submit"> CHANGE SHOP <i class="fa-solid fa-note-sticky"></i></button>

              </div>



            </div>
            <div class="col col-sm-7 text-center text-xl-left col-xl-4 offset-xl-2">
              <span class="b1">OFFER </span>
              <ul>
                <li className="s2"> <span className="p1">TEST190</span> Discount of 5 € on orders above 10 € </li>
                <li className="s2">Test offer for all users for limited period for only <br /> admin</li>
              </ul>
              <ul>
                <li className="s2"> <i class="fa-solid fa-tag"></i><span className="p1"> PIZZA50</span> Discount of 50% on orders above 0 €</li>
                <li className="s2">50 % off on everything </li>
              </ul>
            </div>
          </div>
        </main>


      </div>
        <Body />
    </div>


  );
}

export default App;


