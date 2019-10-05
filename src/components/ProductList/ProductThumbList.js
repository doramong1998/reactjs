import React, {Component} from 'react';
class ProductThumbList extends Component {
    render(){
    return (
        <div className="container">
            {this.props.children}
        </div>   
    );
}
}
export default ProductThumbList;
