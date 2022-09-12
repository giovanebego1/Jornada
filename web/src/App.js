import './App.css';
import 'boxicons';

function App() {
  return (
    <div className="App">
        <head>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
          <script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>
        </head>
        <body>
            <navbar class="sidebar">
              <header>
                <div class="image-text">
                  <span class="image">
                      <img src="#" alt="logo"></img>
                  </span>
                  <div class="text header-text"> 
                    <span class="name">CodingLab</span>
                    <span class="profession">Web developer</span>
                  </div>
                </div>

                <box-icon name='chevron-right' id="toggle"></box-icon>
              </header>
              <div class="menu-bar">
                <div class="menu">
                  <li class="search-box">
                    <a href="#">
                      <box-icon name='search-alt'></box-icon>
                        <input type="search" placeholder="Search..."></input>
                    </a>
                  </li>
                  <ul class="menu-links">
                    <li class="nav-link">
                      <a href="#">
                        <box-icon name='home' class="icon"></box-icon>
                        <span class="text nav-text">Home</span>
                      </a>
                    </li>
                    <li class="nav-link">
                      <a href="#">
                        <box-icon name='bar-chart-alt-2' class="icon"></box-icon>
                        <span class="text nav-text">Dashboard</span>
                      </a>
                    </li>
                    <li class="nav-link">
                      <a href="#">
                        <box-icon name='bar-chart-alt' class="icon"></box-icon>
                        <span class="text nav-text">Graphs</span>
                      </a>
                    </li>
                    <li class="nav-link">
                      <a href="#">
                        <box-icon name='pie-chart-alt-2' class="icon"></box-icon>
                        <span class="text nav-text">Etc</span>
                      </a>
                    </li>
                    <li class="nav-link">
                      <a href="#">
                        <box-icon name='home' class="icon"></box-icon>
                        <span class="text nav-text">X</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="botton-content">
                  <li class="">
                    <a href="#">
                      <box-icon name='log-out' class="icon"></box-icon>
                      <span class="text nav-text">Log out</span>
                    </a>
                  </li>

                  <li class="mode">
                    <div class="moon-sun">
                      <box-icon name='sun' class="sun"></box-icon>
                      <box-icon name='moon' class="moon"></box-icon>
                    </div>
                    <span class="mode-text text">
                      Dark mode
                    </span>
                    <div class="toggle-switch">
                      <span class="switch">
s
                      </span>
                    </div>
                  </li>
                </div>
              </div>
            </navbar>
        </body>
    </div>
  );
}

export default App;
