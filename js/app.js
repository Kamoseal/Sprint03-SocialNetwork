//VARIABLES//
//sections//
$splashSection = $('#splash');
$loginSection = $('#login');
$signupSection = $('#signup');
$homeSection = $('#home');
$profileSection = $('#profile');
$friendsSection = $('#friends');
$navBar = $('#principal-nav');
$logout = $('#logout');
$siteFooter = $('footer');
//buttons//
$logingBtn = $('#login-btn');
$profileBtn = $('#profile-btn');
$friendsBtn = $('#friends-btn');
$logoutBtn = $('#logout-btn');
//DOCUMENT//
$(document).ready(function(e){
  //Nav, Modals and Select//
  $(".button-collapse").sideNav();
  $('select').material_select(); //activates selections in modals
  $('.modal').modal();
  //Nav, Modals and Select End//
  //Splash Page//
  // $loginSection.hide();
  // $signupSection.hide();
  // $homeSection.hide();
  // $profileSection.hide();
  // $friendsSection.hide();
  // $navBar.hide();
  // $logout.hide();
  // $siteFooter.hide();


  // ocultar splash y mostrar login
  $splashSection.fadeOut(4000, function(initial) {
    $loginSection.slideDown(3000);
    $siteFooter.show();
  });

  //Splash Page End//
  //FIREBASE//


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVcausjRwZtoyt5u43LHPa_lhuHEWpxas",
    authDomain: "letteringlife-98ae6.firebaseapp.com",
    databaseURL: "https://letteringlife-98ae6.firebaseio.com",
    projectId: "letteringlife-98ae6",
    storageBucket: "letteringlife-98ae6.appspot.com",
    messagingSenderId: "354310615902"
  };
  firebase.initializeApp(config);
//

//NAVIGATION//

//showing home//

  $logingBtn.click(function(e) {
    e.preventDefault();
     var userName = $("input[name='username']").val();
     var password = $("input[name='password']").val();

    if (userName === "Kamoseal" && password === "KarlaSerna"){
      window.location.href = "views/home.html"
    }else {
      alert("El nombre de usuario o contraseña es incorrecta");
    }
  });

});
//Splash Page End//
//NAVIGATION//


// $profileBtn.click(function() {
//
// console.log('profile');
//
//
//
// });
//
// //showing friends//
//
// $friendsBtn.click(function() {
//
// console.log('friends');
//
//
//
// });
//
// //showing logout//
// $logingBtn.click(function() {
//
// console.log('logout');
//
//
//
// });
//
// //FUNCTIONS//
//
// //new post//
//
// //add friend//
//
// //delete friend//
//
// //like//
//
// //tag friend//
