import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actCheckLoginRequest } from '../../actions';
import {Redirect} from 'react-router-dom';
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
           txtUsername:'',
           txtPassword:''
        }
    }
    
    componentDidMount(){
        this.props.onCheckLogin();
    }

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        })
    }
    onSave = (event) => {
        var {users,history} = this.props;
        var {txtUsername,txtPassword} = this.state;
        var user =
            {
                username: txtUsername,
                password :txtPassword
            }
        if(this.onCheck(users) === 1){
            alert('Đăng nhập thành công');
            sessionStorage.setItem("user",JSON.stringify(user));
            history.goBack();
        }
        else(
            alert('Đăng nhập thất bại')
        )
    }

    onCheck = (users) =>{
        var result = -1;
        var {txtUsername,txtPassword} = this.state;
        if(users.length > 0){
            users.map((user) =>{
              if(user.username === txtUsername && user.password === txtPassword){
                result = 1;
              }
              return 0;
            })
        }
        return result;   
    }

    
    render(){
        if(sessionStorage.getItem('user')){
            return <Redirect to='/product-list' />  
        }
        return (
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <form onSubmit = {this.onSave}>
                        <legend className="mg-at">Đăng Nhập</legend>
                        <div className="form-group">
                            <label>Tên Đăng Nhập: </label>
                            <input type="text" className="form-control" name="txtUsername" onChange = {this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Mật Khẩu: </label>
                            <input type="password" className="form-control" name="txtPassword" onChange = {this.onChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary mr-10">Đăng Nhập</button>
                        <button type="submit" className="btn btn-danger">Đăng Kí</button>
                    </form>
                    
                </div>
            </div>   
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}


const mapDispatchToProps = (dispatch,props) =>{
    return {
        onCheckLogin : () =>{
            dispatch(actCheckLoginRequest());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
