import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase , ref , set , get , child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmdzL26YnLsUNyYFEcpCiaxxsdz9IArfA",
  authDomain: "wanabur-bdff8.firebaseapp.com",
  projectId: "wanabur-bdff8",
  storageBucket: "wanabur-bdff8.appspot.com",
  messagingSenderId: "914223497528",
  appId: "1:914223497528:web:c37ff29a904c9f4aa981cd"
};

const app = initializeApp(firebaseConfig);