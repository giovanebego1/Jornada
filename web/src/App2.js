import "./App.css";
import "boxicons";

function App() {
  
  return (
    <body>
        <div class="navigation">
            <ul>
                <li class="list active">
                    <a href="#">
                        <span class="icon">
                            <box-icon name='home'></box-icon>
                        </span>
                        <span class="title">Home</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon">
                            <box-icon name='bar-chart-alt-2'></box-icon>
                        </span>
                        <span class="title">Dash board</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon">
                            <box-icon name='line-chart'></box-icon>
                        </span>
                        <span class="title">Home</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon"></span>
                        <span class="title">Home</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon"></span>
                        <span class="title">Home</span>
                    </a>
                </li>
            </ul>
        </div>
    </body>
  );
}

export default App;
