import Vue from 'vue';


let navbar = new Vue({
  el:"#teambit-app",
  data: {
      logo:{
        logoSmall:"public/assets/img/navbar/logo-small.svg",
        logoTxt:"public/assets/img/navbar/logo.svg"
      },
      navbarItems:{
        item1:"solution",
        item2:"pricing",
        item3:"blog",
        item4:"sign in",
      },
      btnSignUp:{
        imgTxt:"public/assets/img/navbar/google-logo.svg",
        txt:"Sign up",
        link:"https://www.google.com/accounts/Login",
      },
      header:{
        title:"Understand, recognize and develop your people",
        subtitle:"Understand, recognize and develop your people",
        btnTxt:["Sign up with Google","Sign up with Slack"],
        btnImg:["public/assets/img/navbar/google-logo.svg","public/assets/img/navbar/slack-logo.svg"],
        btnLink:["https://www.google.com/accounts/Login","https://www.google.com/accounts/Login"],
        headerImg:"public/assets/img/navbar/illustration-main.jpg",
      }

    }

  });
