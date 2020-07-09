import React from 'react';


class HelloWorld extends React.Component{
    render(){
        return(
            <div>
            <h1>Hi {this.props.name}</h1>
            </div>

        )
    }
    
}
export default HelloWorld;