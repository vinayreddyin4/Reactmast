import React from 'react';

export default class Product extends React.Component {

   
    priceHandler(){
        this.setState({
            
        })
    }
   
    render(){
        return (
            <div>
            <div style={{display:'flex',padding:'20px',height:'200px',width:'500px',backgroundColor:'#44B6EC'}}>
                <div style={{display:'flex',flex:1,flexDirection:'column'}}>
                    <div style={{display:'flex',height:'30%'}}>
                        <div style={{display:'flex',flex:3,height:'30%',alignItems:'center',justifyContent:'flex-start'}}>
                            <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'40px',fontWeight:'bold',color:'white'}}>
                               {this.props.title}
                            </span>
                        </div>
                       <div style={{display:'flex',flex:1,height:'30%',alignItems:'center',justifyContent:'flex-start'}}>
                           <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',color:'white'}}>
                                 {this.props.carModel}
                            </span>
                        </div>
                    </div>
                    <div style={{display:'flex',height:'40%',alignItems:'center',justifyContent:'flex-start', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1}}>
                        <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',color:'white'}}>
                        </span>
                    </div>
                    <div onClick = {() => this.priceHandler()} style={{display:'flex',backgroundColor: this.props.isAvailable ? "white" : "orange", height:'25%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1}}>
                        <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'}}>
                            {this.props.button}
                        </span>
                    </div>
                </div>
            </div>    
        </div>
        );
    }

}

Product.propTypes = {
    title:React.PropTypes.string.isRequired,
    button:React.PropTypes.string.isRequired,
    isAvailable:React.PropTypes.bool
}

Product.defaultProps = {
    title:"title is missing",
    button: "button is missing"
}
