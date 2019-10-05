import React, {Component} from 'react';
import { connect } from 'react-redux';
import {actGetProductRequest} from '../../actions/index';
class ProductInfoPage extends Component {

    constructor(props){
        super(props);
        this.state={
            txtName: '',
            txtPrice: '',
            chkbStatus: '',
            id: '',
            txtNumber: '',
            txtImg: '',
            sttLabel:''
        }
    }
    componentDidMount(){
        var {match} =this.props;
        if(match){
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status === true? 'Còn Hàng':'Hết Hàng' ,
                sttLabel: itemEditing.status === true? 'warning' : 'default',
                txtNumber: itemEditing.number,
                txtImg: itemEditing.img
            })
        }
    }
    render(){
        var {txtName,txtPrice,chkbStatus,txtImg,sttLabel} = this.state;
    return (
        <div className="container">       
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <img src={txtImg} class="img-responsive" alt=""/>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h1>Tên sản phẩm: {txtName}</h1>
                    <h2>Giá: {txtPrice} VND</h2>
                    <span className={`label label-${sttLabel}`}>{chkbStatus}</span>
                    <p>Thông tin chi tiết: ....</p>
                    <button type="button" class="btn btn-success">Mua Hàng</button>
                </div>
                
            </div>
            
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}


const mapDispatchToProps = (dispatch,props) =>{
    return {
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductInfoPage);
