import { useContext } from 'react';
import { Context } from '../../../Auth/AuthProvider/Authprovider';

const useAuth = () => {
   const auth = useContext(Context)
   return auth;
};

export default useAuth;