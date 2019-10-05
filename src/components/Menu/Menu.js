import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';
const menus= [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    },
    {
        name: 'Đăng Nhập',
        to: '/login',
        exact: false
    },

]

const MenuLink = ({label,to,activeOnlyWhenExact}) =>{
    return (
        <Route 
            path = {to}
            exact = {activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className = {active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render(){
    return (
        <div>
            <div className="navbar navbar-default">
            <span className="navbar-brand">Không mua được gì đâu :v</span>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                    {this.showLogout()}
                </ul>    
            </div>
        </div>
    );
}
    showLogout = () => {
        var result = null;
        
        if(sessionStorage.getItem('user')){
            return (
                <button type="button" className="btn btn-lg btn-danger" onClick={this.Logout}>Đăng xuất</button> 

            )
            
        }
        return result;
    }
    Logout = () =>{
        if(sessionStorage.getItem('user')){
        sessionStorage.clear();
        return <Link to="/" />
        }
    }
    showMenu = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu,index) => {
                if(sessionStorage.getItem('user')){
                return (
                    <MenuLink 
                        key={index}
                        label = {menu.name}
                        to = {menu.to}
                        activeOnlyWhenExact = {menu.exact}
                        />
                );
            }
            else {
                if(menu.to !== "/product-list" )
                return(
                    <MenuLink 
                        key={index}
                        label = {menu.name}
                        to = {menu.to}
                        activeOnlyWhenExact = {menu.exact}
                        />           
                );
            }
            return result;
            });
        }
        return result;
    }
}
export default Menu;



