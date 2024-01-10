import { redirect } from 'react-router-dom';

export const useAuthVerifier = () => {
    
    const trackToPages = () => {
        if(localStorage.getItem('access_token')){
            redirect('/home');
        } else {
            redirect('/auth');
        }
    };
    return {
        trackToPages
    }
}

export default useAuthVerifier;