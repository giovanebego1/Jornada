import "./App.css";
import "boxicons";

function App() {
  /*
  const body = document.querySelector("body"),
    sidebar = body.querySelector("nav"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
  });

  modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      modeText.innerText = "Light mode";
    } else {
      modeText.innerText = "Dark mode";
    }
  });
  */
  return (
      <div className="App">
        <head>
          <link
            href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
            rel="stylesheet"
          ></link>
          <script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>
        </head>
        <body>
          <nav class="sidebar">
            <header>
              <div class="image-text">
                <span class="image">
                  <img src="#" alt="logo"></img>
                </span>
                <div class="text header-text">
                  <span class="name">CTRL Financy</span>
                  <span class="profession">Web developer</span>
                </div>
              </div>
              <box-icon name="chevron-right" class="toggle"></box-icon>
            </header>
            <div class="menu-bar">
              <div class="menu">
                <li class="search-box">
                  <a href="#">
                    <box-icon name="search-alt"></box-icon>
                    <input type="search" placeholder="Search..."></input>
                  </a>
                </li>
                <ul class="menu-links">
                  <li class="nav-link">
                    <a href="#">
                      <box-icon name="home" class="icon"></box-icon>
                      <span class="text nav-text">Home</span>
                    </a>
                  </li>
                  <li class="nav-link">
                    <a href="#">
                      <box-icon name='clipboard' class="icon"></box-icon>
                      <span class="text nav-text">Recursos Humanos</span>
                    </a>
                  </li>
                  <li class="nav-link">
                    <a href="#">
                      <box-icon name="clipboard" class="icon"></box-icon>
                      <span class="text nav-text">Comercial</span>
                    </a>
                  </li>
                  <li class="nav-link">
                    <a href="#">
                      <box-icon name="clipboard" class="icon"></box-icon>
                      <span class="text nav-text">Marketing</span>
                    </a>
                  </li>
                  <li class="nav-link">
                    <a href="#">
                      <box-icon name="network-chart" class="icon"></box-icon>
                      <span class="text nav-text">Inteligencia Artificial</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="botton-content">
                <li class="">
                  <a href="#">
                    <box-icon name="log-out" class="icon"></box-icon>
                    <span class="text nav-text">Log out</span>
                  </a>
                </li>

                <li class="mode">
                  <div class="moon-sun">
                    <box-icon name="sun" class="sun"></box-icon>
                    <box-icon name="moon" class="moon"></box-icon>
                  </div>
                  <span class="mode-text">Dark mode</span>
                  <div class="toggle-switch">
                    <span class="switch"></span>
                  </div>
                </li>
              </div>
            </div>
          </nav>
        </body>
      </div>
  );
}

export default App;
