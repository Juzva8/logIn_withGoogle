import React from 'react';
import './App.css';



class App extends React.Component {
componentDidMount() {
  console.log('loading...');
  window.gapi.load('auth2', () => {
    window.gapi.auth2.init({
      client_id: '135593514929-07lv33frtb3cose08i0ihplsi7a1jnn1.apps.googleusercontent.com'
    })
    console.log('Api works')

    window.gapi.load('signin2', () => {
      const params = {
        onsuccess: ()  => {
          console.log('User has signed in')
        }
      }
      window.gapi.signin2.render('loginButton', params)
    })
  })
}

  render() {
    return (
      <div className="App">
       <h1>Google Login</h1>
    <div id='loginButton'>Sign in with Google</div>
      </div>
    );
  }
  }



export default App;
