(function () {

	// Reference the flur-app module
	angular.module('flur-app', [])

	.controller('PhotoController', PhotoController);

	function PhotoController ($scope) {

    var vm = this;

    vm.goToPhotos = function () {
        console.log("hello");
      	$('html,body').animate({scrollTop: $("#photo-box").offset().top},'slow');
    };

		vm.getAllPhotos = function () {
      var photos = [];
      for (var i = 1; i < 5; i++) {

        var r = Math.floor((Math.random() * 817) + 1);
        var flurImage = {};
        var path = ("0000" + r).substr(-4,4) + ".gif";
        flurImage.url = "https://flur.davelee.io/photos/" + ("0000" + r).substr(-4,4) + ".gif";
        flurImage.url_thumb = "https://flur.davelee.io/thumbnails/" + ("0000" + r).substr(-4,4) + ".jpg";

        var photo = {};
        photo.image = flurImage;
        photo.platform = path;

        photos.push(photo);
      }
      vm.photos = photos;
		};

    vm.getAllPhotos();
	}
})();
