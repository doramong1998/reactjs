import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage';
import LoginPage from './pages/LoginPage/LoginPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/login',
        exact: false,
        main: ({history}) => <LoginPage history={history} />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history} />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match,history}) => <ProductActionPage match ={match} history={history} />
    },
    {
        path: '/product/:id/info',
        exact: false,
        main: ({match}) => <ProductInfoPage match ={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]
export default routes;