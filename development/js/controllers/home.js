app.controller('HomeController',function($scope){
  $scope.showList = function(e){
    var $el = $(e.target),
        text = $el.html().toLowerCase(),
        id = '#' + text + 'List';

    if($el.hasClass('active')){
      $el.removeClass('active');
      $('body').find(id).hide();
      $('body').find('.filters').hide();
    }

    else{
      $el.addClass('active');
      $('body').find('.filters').show();
      $('body').find(id).slideDown();
    }
  }
})
