(function() {
  'use strict';

  angular.module('api.users', [])
    .factory('Users', function() {
      var Users = {};
      var userList = [
        {
          id: '1',
          name: 'Sarah',
          role: 'Designer',
          location: 'Seattle',
          twitter: 'giSarah'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          location: 'Seattle',
          twitter: 'Johnybob'
        },
        {
          id: '3',
          name: 'Jim',
          role: 'Developer',
          location: 'Chicago',
          twitter: 'jim234'
        },
        {
          id: '4',
          name: 'John',
          role: 'Designer',
          location: 'Los Angeles',
          twitter: 'designJohn'
        }
      ];

      var singleUser =  {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'Seattle',
                twitter: 'Johnybob'
              };


      //returns hardcoded list of users (userList) - will be replaced by API
      Users.all = function() {
        return userList;
      };

      Users.findById = function(id) {
        return userList.find(function(user) {
          return user.id === id;
        });
      };

      return Users;
    });
})();
