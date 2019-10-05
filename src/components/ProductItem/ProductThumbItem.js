import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class ProductThumbItem extends Component {
    render(){
    var {product} = this.props;
    var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
    var statusClass = product.status ? 'warning' : 'default';
    return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img src={product.img} alt=''/>
                    <div className="caption">
                        <h3>{product.name}</h3>
                        <p>
                            Giá: {product.price} VND
                        </p>
                        <p>
                            Trạng Thái: <span className={`label label-${statusClass}`}>{statusName}</span>
                        </p>
                        <p className="mt-10">
                            <Link to={`product/${product.id}/info`} className="btn btn-primary mr-10">Xem Chi Tiết</Link>
                            <button type="button" className="btn btn-success">Mua Hàng</button>    
                        </p>
                    </div>
                </div>
            </div>
               
    );
}
}
export default ProductThumbItem;
