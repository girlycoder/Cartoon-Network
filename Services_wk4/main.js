var app = angular.module('powerApp', []);

app.controller('mainCtrl', function ($scope, cartoonService) {

    $scope.cartoon;

    $scope.addItem = function () {
        cartoonService.addItem($scope.cartoon);
        console.log('no pick me')
    };

    $scope.getCartoons = function () {
        console.log("here i am")
        return cartoonService.getCartoons();
    };
});

app.service('cartoonService', function () {

    var cartoons = [{
            title: "Power Puff Girls",
            description: "I love this show",
            url: "http://static.comicvine.com/uploads/original/2/26503/624762-powerpuffgirls8.jpg"
    }, {
            title: "Spiderman and his Amazing Friends",
            description: "My kids love the original",
            url: "http://www.animationmagazine.net/wordpress/wp-content/uploads/Spider-Man-and-His-Amazing-Friends-post-2.jpg"
    }, {
            title: "Courage the Cowardly Dog",
            description: "What were they thinking!",
            url: "http://www.hdwallpapersos.com/wp-content/uploads/2014/11/courage-the-cowardly-dog-in-house.jpg"
                },
        {
            title: "Pink Panther",
            description: "For some reason it captivates the kids",
            url: "http://images.sodahead.com/polls/001597243/307710031_pinkpanther2_answer_2_xlarge.jpeg"
                }];

    this.getCartoons = function () {
        return cartoons;
    };
    this.addItem = function (cartoon) {
        cartoons.push(cartoon);
    };
});