import firebase from 'firebase/app';
import 'firebase/auth'
import firebaseApp from './firebase';
import database from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    return firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }
}

export default AuthService;