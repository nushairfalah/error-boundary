// import logo from './logo.svg';
// import './App.css';
// import Text from './Text.js';
// import TextClass from './TextClass.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className="App-p">
//           Fullstack
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Text text="Wani Piro Text" />
//         <TextClass textclass="Wani Piro Text Class" />
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react';
// import './App.css';
// import Greeting from './Greeting';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Michael', age: 19 },
//       { name: 'Budi', age: 21 },
//       { name: 'Anne', age: 22 }
//     ]
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Greeting from React App</h1>
//         <Greeting name={this.state.persons[0].name} age={this.state.persons[0].age}>
//           Im a Fullstack Developer
//         </Greeting>
//         <Greeting name={this.state.persons[1].name} age={this.state.persons[1].age}></Greeting>
//         <Greeting name={this.state.persons[2].name} age={this.state.persons[2].age}></Greeting>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import './App.css';
// import Greeting from './Greeting';

// class App extends Component {

//   state = {
//     persons: [
//       { name: 'Michael', age: 19 }
//     ]
//   }

//   submitHandler = (event) => {
//     this.setState({
//       persons: [
//         { name: 'Jane' }
//       ]
//     })
//   }

//   render() {
//     return (
//       <div>
//         <p>Nama saya {this.state.persons[0].name}</p>
//         <button onClick={this.submitHandler}>Submit</button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";

export default function MyComponent(props) {
  const [name, setName] = useState("Michael");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <p>Nama saya {name}</p>
      <input
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}
