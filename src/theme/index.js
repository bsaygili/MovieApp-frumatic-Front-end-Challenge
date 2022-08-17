import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {
  margin: 0 ;
  padding: 0 ;
  box-sizing:border-box;
  outline:none;
}
html{
    scrollbar-color: #000 white;
    scrollbar-width: thin;
    overflow-x:hidden;

}
body{
  overflow-x:hidden;
  font-family: 'Roboto', sans-serif;
  scrollbar-color: #000 white;
  scrollbar-width: thin; 
  -webkit-font-smoothing: antialiased !important; 
  

}

body::-webkit-scrollbar {
  color:#fff; 
  width: 10px; 
}
body::-webkit-scrollbar-track {
  background: #fff;
  scrollbar-width: thin; 
}
body::-webkit-scrollbar-thumb {
  background-color: black;    /* color of the scroll thumb */
  scrollbar-width: thin;
   /* creates padding around scroll thumb */
}
textarea,
input[type="text"],
input[type="number"],
input[type="button"],
input[type="submit"],
input[type="email"],
input[type="tel"],
input[type="password"]{
     -webkit-appearance: none;
     border-radius: 0;
}
button, input,textarea{
  outline:none !important;
}

.nav-pills {
  background-color: rgb(55, 55, 64);
  text-decoration: none;
  margin-top: 20px;
  height: 625px;
}
.col-sm-3 {
  background-color: rgb(55, 55, 64);
}

.nav-item {
  padding-left: 5px;
  text-decoration: none;
}
.nav-link {
  color: white;
}
.nav-link svg {
  margin-right: 15px;
}
.head {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
}
.cardtop {
  border: 2px solid #007bff !important;
  border-radius: 10px !important;
  height: 100px !important;
}
.cardtop:hover {
  color: rgb(236, 0, 75);
}
.card-title,
.card-text {
  text-align: center !important;
}


`;

export default GlobalStyle;
