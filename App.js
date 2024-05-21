// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import CarouselComponent from './Components/CarouselComponent';

function App() {
    return (
        <div className="App">

          <div>
            <img src='data:image/png;base64,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' 
            width="350" 
     height="150"/>

          </div>


            <h1>We have the best review's in Google</h1>

            <h2>Excellent</h2> <br></br>

            <div>
              <img src='https://t3.ftcdn.net/jpg/02/99/18/64/240_F_299186481_cdoocHoGwpa17aUOyQZXRWmP6gcQXNOz.jpg'width="350"
              height="150"/>
            </div>

            <h4>Based on 300 Reviews</h4>
            <div className='img1'>
            <img src='data:image/jpeg;base64,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' width="150" 
            height="150" />
            </div>

            <CarouselComponent />
        </div>
    );
}

export default App;
