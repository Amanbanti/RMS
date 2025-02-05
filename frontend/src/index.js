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
import AdminDashboard from "./screens/HomeScreens/Dashboard";
import CreateTenant from "./screens/TenantScreens/CreateTenant"
import ViewTenant from "./screens/TenantScreens/ViewTenants"
import RegisterlandLord from './screens/LandLordScreens/LandLordRegistrationForm';
import ViewLandlord from './screens/LandLordScreens/ViewLandlord';
import CreateProperty from './screens/Properties/CreateProperty'
import ViewProperty from './screens/Properties/ViewProperty'
import CreatePropertyUnit from './screens/PropertyUnits/CreatePropertyUnit';
import ViewPropertyUnit from './screens/PropertyUnits/ViewPropertyUnits';
import CreateLease from './screens/Leases/CreateLease'
import ViewLease from './screens/Leases/ShowLeases'
import TerminatedLeases from './screens/Leases/TerminatedLeases'
import AdminRoute from './components/AdminRoutes';
import UserRoute from './components/UserRoutes'
import UserDashboard from './screens/Users/Dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      <Route index element={<HomeScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />

      {/* Admin Routes */}
      
      <Route path="admin" element={<HomeScreen />}>
        <Route path="" element={<AdminRoute/>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="tenant/create" element={<CreateTenant />} />
          <Route path="tenant/view" element={<ViewTenant />} />
          <Route path="landlord/create" element={<RegisterlandLord />} />
          <Route path="landlord/view" element={<ViewLandlord />} />
          <Route path="property/create" element={<CreateProperty />} />
          <Route path="property/view" element={<ViewProperty />} />
          <Route path="property-unit/create" element={<CreatePropertyUnit />} />
          <Route path="property-unit/view" element={<ViewPropertyUnit />} />
          <Route path="lease/create" element={<CreateLease />} />
          <Route path="lease/show" element={<ViewLease />} />
          <Route path="lease/terminate" element={<TerminatedLeases />} />
        </Route>
      </Route>

     {/* User Routes */}
      <Route path="" element={<UserRoute/>}>
          <Route path="/dashboard" element={<UserDashboard />} />
      </Route>


    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <HelmetProvider>
       
          <RouterProvider router={router}/>
  
  </HelmetProvider>
  </React.StrictMode>
);

  
reportWebVitals();
