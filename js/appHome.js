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
