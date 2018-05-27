import auth0 from 'auth0-js';
import history from '../history';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'threshold.eu.auth0.com',
        clientID: 'p761QEvGdACDqD7n_o90vBpxKyx2ge8J',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://threshold.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login = () => {
        this.auth0.authorize();
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/home');
            } else if (err) {
                history.replace('/home');
                console.log(err);
            }
        });
    }

    logout = () => {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/home');
    }

    isAuthenticated  = () => {
        // Check whether the current time is past the 
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}