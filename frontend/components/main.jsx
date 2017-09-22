import React from 'react';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import RestaurantFormContainer from './restaurant/restaurant_form_container';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends React.Component {
  render(){
    return(
      <div className="main-component">
        {/* <Switch> */}
          <Route
            path='/restaurants/:restaurantId'
            component={RestaurantShowContainer}/>
          <Route exact path='/' component={RestaurantIndexContainer} />
          <Route exact path='/restaurants' component={RestaurantFormContainer}/>
        {/* </Switch> */}
      </div>
    );
  }
}

export default withRouter(connect()(Main));