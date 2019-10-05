import React, {Component} from 'react';
import ProductList from './../../components/ProductList/ProductThumbList';
import ProductItem from './../../components/ProductItem/ProductThumbItem';
import {connect} from 'react-redux';
import {actFetchProductsRequest} from './../../actions/index';
class HomePage extends Component {
    componentDidMount(){
        this.props.fetchAllProducts();
    }
    render(){
    var {products} = this.props;

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ProductList>
                {this.showProducts(products)}
            </ProductList>
        </div>
    );
}
    showProducts(products){
        var result = null;
        if(products.length > 0){
            result = products.map((product,index)=>{
                return(
                    <ProductItem 
                        key={index}
                        product = {product}
                        index = {index}
                        onDelete =  {this.onDelete}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


const mapDispatchToProps = (dispatch,props) =>{
    return {
            fetchAllProducts : () => {
                dispatch(actFetchProductsRequest());
            },
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
