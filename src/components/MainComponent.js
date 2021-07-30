import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishdetailComponent from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import HeaderComponent from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  
  constructor(props){
    super(props);
    
    this.state={
      dishes:DISHES,
      slectedDish:null
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
    }

  render(){
    return (
      <div >
        <HeaderComponent/>
        <Menu dishes={this.state.dishes}
         onClick={(dishId)=>this.onDishSelect(dishId)}/>
        <DishdetailComponent
         dishDetail={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
         <Footer/>
      </div>
    )
  }
    
  
}

export default Main;