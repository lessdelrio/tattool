
$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $('select').material_select();

  $(".dropdown-button").dropdown();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('ul.tabs').tabs();
  $(".tabs>.indicator").css("background-color", '#00b8d4');
  $('select').material_select();
  $('.modal').modal();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 2, // Creates a dropdown of 15 years to control year,
    today: 'Hoy',
    clear: 'Limpiar',
    close: 'OK',
    closeOnSelect: false // Close upon selecting a date,
  });
  $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: true, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Limpiar', // text for clear-button
    canceltext: 'Cancelar', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });
  $('.carousel').carousel();
});
