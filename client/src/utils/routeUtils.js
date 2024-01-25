import authService from "../services/authService";

const protectRoute = (component) => {
   if(!authService.isAuthenticated()){
    window.location.href = '/login';
    return null;
   }
   return component;
  };
  
  export default {
    protectRoute,
  };
  