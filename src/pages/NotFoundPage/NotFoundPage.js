import React, {Component} from 'react';
class NotFoundPage extends Component {
    render(){
    return (
        <div className="container">
            <div class="alert alert-warning">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Khong tim thay trong</strong>
            </div>
            
        </div>
    );
}
}
export default NotFoundPage;