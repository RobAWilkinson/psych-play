import React from 'react';
import Header from './header';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div className="psTheme">
        <Header />
        <div className="container-fluid" id="centerStuff">
          <div className="row">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
