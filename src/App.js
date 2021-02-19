import React from 'react';
import './App.css';



class App extends React.Component {
componentDidMount() {
  console.log('loading...');
  window.gapi.load('auth2', () => {
    window.gapi.auth2.init({
      client_id: '135593514929-07lv33frtb3cose08i0ihplsi7a1jnn1.apps.googleusercontent.com'
    })
    console.log('Api inited')
  })
}

  render() {
    return (
      <div className="App">
       <h1>Google Login</h1>
    <button>Sign in with Google</button>
      </div>
    );
  }
  }



export default App;
