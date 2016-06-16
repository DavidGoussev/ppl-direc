describe('Users factory', function() {
  var Users;

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

  //angular.mock.module from angular-mocks
  //before each test (beforeEach method provided by Jasmine), load api.users module
  beforeEach(angular.mock.module('api.users'));

  //before each test, set injected Users factory (_users_) to local Users var
  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  // final test to verify the Users factory
  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  describe('.all()', function() {

    //verify that 'all' method on Users var
    it('should exist', function() {
      expect(Users.all).toBeDefined();
    });

    //verify that calling all() returns hardcoded list of users in userList
    it('should return a list of users', function() {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', function() {

    it('should exist', function() {
      expect(Users.findById).toBeDefined();
    });

    it('should return one user obj if exists', function() {
      expect(Users.findById('2')).toEqual(singleUser);
    });

    it('should return undefined if user not found', function() {
      expect(Users.findById('AB')).not.toBeDefined();
    });

  });
});
