import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container text-center">
      {/* <!-- nav --> */}
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <h1>Navigation</h1>
      </div>
    </nav>

    {/* <!-- header --> */}
    <header>
      <div className="jumbotron">
        <h1>Header</h1>
      </div>
    </header>

    {/* <!-- main --> */}
    <main>
      {/* <!-- services --> */}
      <section id="services">
        <h1>Services</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="well well-lg"><h1>1</h1></div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="well well-lg"><h1>2</h1></div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="well well-lg"><h1>3</h1></div>
          </div>
        </div>
      </section>

      {/* <!-- about --> */}
      <section id="about">
        <h1>About</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-8">
            <div className="well well-lg"><h1>4</h1></div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="well well-lg"><h1>5</h1></div>
          </div>
        </div>
      </section>

      {/* <!-- contact --> */}
      <section id="contact">
        <h1>Contact</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="well well-lg"><h1>6</h1></div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="well well-lg"><h1>7</h1></div>
          </div>
        </div>
      </section>
    </main>

    {/* <!-- footer --> */}
    <footer>
      <div className="jumbotron">
        <h1>Footer</h1>
      </div>
    </footer>

    </div>
  );
}

export default App;
