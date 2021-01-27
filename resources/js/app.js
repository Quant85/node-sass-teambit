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
        link:"https://www.boolean.careers/",
      },

    }

  });
