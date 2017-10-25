import React, { Component } from 'react';

import Product from './product';

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
       
        var that = this;
        fetch('https://api.myjson.com/bins/s9dtr')
        .then(function(res){
            return res.json();
        })

        .then(function(jsonResponse){

            console.log(jsonResponse)
            that.setState({
              data:jsonResponse
            })
        })
        .catch(function(err){
            console.log("found an error")
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.data.map(function(eachCar){
                       return <Product key= {eachCar.price} title = {eachCar.carName} button = {eachCar.price} carModel = {eachCar.model} isAvailable = {eachCar.available} />
                    })
                }
            </div>
        );
    }
   
    
}



module.exports = App