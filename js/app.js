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
  $loginSection.hide();
  $signupSection.hide();
  $homeSection.hide();
  $profileSection.hide();
  $friendsSection.hide();
  $navBar.hide();
  $logout.hide();
  $splashSection.fadeOut(2000, function() {
  $loginSection.fadeIn(3000);
  });

});
//Splash Page End//
//FIREBASE//
// var config = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: ""
// };
// firebase.initializeApp(config);

//NAVIGATION//

//showing home//


$logingBtn.click(function(e) {
  e.preventDefault();
  var userName = data.querySelector('input[type="text"]');
  var password = data.querySelector('input[type="password"]');

  if (userName.value === 'Kamoseal' && password.value === 'KarlaSerna'){
    window.location.href = 'home.html'
  } else {
    alert('Ingresa una cuenta válida');
  }
});


//showing profile//
$profileBtn.click(function() {

console.log('profile');



});

//showing friends//

$friendsBtn.click(function() {

console.log('friends');



});

//showing logout//
$logingBtn.click(function() {

console.log('logout');



});

//FUNCTIONS//

//new post//

//add friend//

//delete friend//

//like//

//tag friend//
