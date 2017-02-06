(function () {

	// Reference the flur-app module
	angular.module('flur-app', [])

	.controller('PhotoController', PhotoController)

  .filter('fbShareFilter', function () {
    return function (path) {
      return "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdavelee.io%2Fflur%23photo-box%3FshareId%3D" + path + "&amp;src=sdkpreparse";
    };
  });

	function PhotoController ($scope, $location) {

    var vm = this;

    var share_id = $location.search().shareId;

    vm.goToPhotos = function () {
        console.log("hello");
      	$('html,body').animate({scrollTop: $("#photo-box").offset().top},'slow');
    };

		vm.getAllPhotos = function (share_id) {
      var photos = [];
      var once = true;
      console.log(share_id);
      for (var i = 1; i < 5; i++) {
        var r = Math.floor((Math.random() * 817) + 1);
        if (share_id != null && once == true) {
          r = share_id.substr(0,4);
          once = false;
        }
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

    vm.getAllPhotos(share_id);
	}
})();
