import React from 'react';
import ReactDOM from 'react-dom/client';  
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
// import store from './store';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HelmetProvider} from 'react-helmet-async'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen';
import Dashboard from "./screens/HomeScreens/Dashboard";
import CreateTenant from "./screens/TenantScreens/CreateTenant"
const router =createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
          <Route index={true} path="/" element={<HomeScreen/>}/>
            <Route path="/" element={<HomeScreen />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tenant/create" element={<CreateTenant />} />
        </Route>
         <Route  path="/login" element={<LoginScreen/>}/>
         <Route  path="/register" element={<RegisterScreen/>}/>
         

          {/* <Route path="" element={<PrivateRoute/>}>
              <Route  path="/profile" element={<ProfileScreen/>}/>
          </Route>

          <Route path="" element={<AdminRoute/>}>
              <Route  path="/admin/orderlist" element={<OrderListScreen/>}/>

          </Route> */}
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <HelmetProvider>
       
          <RouterProvider router={router}/>
  
  </HelmetProvider>
  </React.StrictMode>
);

  
reportWebVitals();
