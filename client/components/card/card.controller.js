webCourses.controller('cardCtrl', function($scope) {
    // ЗАГЛУШКА ДЛЯ ГЕНЕРАЦИИ КУРСОВ
    $scope.showcards = false;

    $scope.coursesArray = [
        {
            "name": "Javascript for dummies",
            "desc": "Entry-level tutorials for Front-End Javascript",
            "picture": "images/development-bg.png",
            "tags": ['javascript'],
            "rating": 7.8
        }, {
            "name": "Beginner CSS",
            "desc": "CSS From Zero to Hero",
            "picture": "images/development-bg.png",
            "tags": ['css', 'webdesing'],
            "rating": 8.1
        }, {
            "name": "HTML5 Fundamentals",
            "desc": "Learn about modern HTML",
            "picture": "images/development-bg.png",
            "tags": ['html', 'webdesign'],
            "rating": 6.0
        }, {
            "name": "Django for Perverts",
            "desc": "How to set up a simple server in Python",
            "picture": "images/development-bg.png",
            "tags": ['django', 'python', 'backend'],
            "rating": 8.3
        }, {
            "name": 'Javascript for Dummies',
            "desc": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum obcaecati pariatur provident praesentium atque consequatur qui quam ut nostrum minima iusto animi eligendi quaerat.',
            "tags": ['javascript'],
            "rating": 6.4
        }, {
            "name": 'Front-End Bootcamp',
            "desc": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum obcaecati pariatur provident praesentium atque consequatur qui quam ut nostrum minima iusto animi eligendi quaerat.',
            "picture": "images/development-bg.png",
            "tags": ['javascript', 'frontend'],
            "rating": 7.1
        }, {
            "name": 'The CSS 3 styling guides',
            "desc": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum obcaecati pariatur provident praesentium atque consequatur qui quam ut nostrum minima iusto animi eligendi quaerat.',
            "picture": "images/development-bg.png",
            "tags": ['css', 'webdesign'],
            "rating": 5.9
        }, {
            "name": 'SVG intercourse',
            "desc": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum obcaecati pariatur provident praesentium atque consequatur qui quam ut nostrum minima iusto animi eligendi quaerat.',
            "picture": "images/development-bg.png",
            "tags": ['webdesign'],
            "rating": 6.8
        }, {
            "name": 'HTML5: what\'s new',
            "desc": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum obcaecati pariatur provident praesentium atque consequatur qui quam ut nostrum minima iusto animi eligendi quaerat.',
            "picture": "images/development-bg.png",
            "tags": ['webdesign', 'html'],
            "rating": 8.1
        }
    ];
});
