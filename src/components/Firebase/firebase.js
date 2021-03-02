import app from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyAbVMUz44F3b-sMNJfW8uG3HUyDl0o-j-Q",
    authDomain: "road-to-react-6460c.firebaseapp.com",
    projectId: "road-to-react-6460c",
    storageBucket: "road-to-react-6460c.appspot.com",
    messagingSenderId: "227032973996",
    appId: "1:227032973996:web:7339f4207803b7eee09509",
    measurementId: "G-8VCBNFGVZ4"
  };

  class Firebase {
      constructor() {
          app.initializeApp(config);

          this.auth = app.auth();
      }
        
//      *** Auth API ***
        doCreateUserWithEmailAndPassword = (email, password) => 
            this.auth.doCreateUserWithEmailAndPassword(email, password); 

        doSignInWithEmailAndPassWord = (email, password) => 
            this.auth.signInWithEmailAndPassword(email, password);

        doSignOut = () => this.auth.signOut();

        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

        doPasswordUpdate = password => 
            this.auth.currentUser.updatePassword(password);
}
  export default Firebase;    
  