(function(){
  'use strict';

  var results = rawFootballData.results;

  $(document).ready(function(){

    var $list = $('.results-list');


    results.forEach(function(football){
      var footballText = renderTemplate('football-item', {
        name: football.title,
        image: football.Images[0].url_170x135,
        price: football.price,
        shop: football.Shop.shop_name,
      });
      $list.append(footballText);
    });

  });

  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }



})();
