import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Search from "./Search";
import Products from "./Products";
import Trades from "./Trades";

class AppContainer extends Component {
  render() {
    return (
		  <div>
        <Header />
        <main>
          <Switch>
	    {/* Para que es este switch? 
	    Sería bueno poner un component Footer y que este component se ajuste al final de la página al renderizar.
	    */}
          {
            /*

            <Route exact path='/jugar' component={Home}/>
            */
          }
            <Route exact path='/' component={Search}/>
            <Route path='/products' component={Products}/>
            <Route path='/trades' component={Trades}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default AppContainer;
