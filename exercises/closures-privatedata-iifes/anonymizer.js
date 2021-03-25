/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
////////////////
// Anonymizer //
////////////////

// Using OLOO create an Account prototype object that anonymizes user
// objects on init. The created object should not have access to the function
// that anonymizes a user other than through the init and reanonymize methods.
// The function that anonymizes creates a 16 character sequence composed of
// letters and numbers. The following are the properties and methods on the
// Account object:

const Account = (function() {
  let userEmail = null;
  let userPassword = null;
  let userFirstName = null;
  let userLastName = null;

  function isValidPassword(password) {
    return password === userPassword;
  }

  function getRandomCharacter() {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomIdx = Math.floor(Math.random() * chars.length);
    return chars[randomIdx];
  }

  function anonymize() {
    let displayName = '';

    for (let idx = 0; idx < 16; idx++) displayName += getRandomCharacter();

    return displayName;
  }

  return {
    reanonymize(password) {
      // reanonymize: This method generates a new 16 character sequence and
      // reassigns it to the displayName property if the password provided is
      // valid. Returns true if successfully re-anonymized. Returns 'Invalid
      // Password' if the password provided is not valid.

      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return true;
      }

      return 'Invalid Password';
    },
    resetPassword(currentPassword, newPassword) {
      // resetPassword: This method asks the user for a new password and reassigns
      // it to the password property. To reset the password, the user must provide
      // the current password. Returns 'Invalid Password' if the password provided
      // is not valid. Returns true if the password is successfully reset.

      if (isValidPassword(currentPassword)) {
        userPassword = newPassword;
        return true;
      }

      return 'Invalid Password';
    },
    firstName(password) {
      // firstName: This method returns the first name of the user if the password
      // provided is valid. Returns 'Invalid Password' if the password provided is
      // not valid.

      return isValidPassword(password) ? userFirstName : 'Invalid Password';
    },
    lastName(password) {
      // lastName: This method returns the last name of the user if the password
      // provided is valid. Returns 'Invalid Password' if the password provided
      // is not valid.

      return isValidPassword(password) ? userLastName : 'Invalid Password';
    },
    email(password) {
      // email: This method returns the email name of the user if the password
      // provided is valid. Returns 'Invalid Password' if the password provided
      // is not valid.

      return isValidPassword(password) ? userEmail : 'Invalid Password';
    },
    displayName() {
      // displayName: This property returns the displayName — the 16 character
      // sequence.
      return this.displayName;
    },
    init(email, password, fName, lName) {
      // init: The init method sets the email, password, firstName, lastName, and
      // displayName of user. The displayName is a 16 character sequence generated
      // for the user. It's used as the display name of a user.
      userEmail = email;
      userPassword = password;
      userFirstName = fName;
      userLastName = lName;
      this.displayName = anonymize();
      // this.data['firstName'] = 'Jay';
      // this.name = 'jay';
      return this;
    }
  };
})();

// let jay = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(jay.name);
// console.log(jay.firstName('123456'));

// for (let prop in jay) {
//   console.log(prop);
// }

// Other than the above properties, methods, and properties inherited
// from Object.prototype, no other method or property should exist on
// the object returned by the Account prototype object.

// Here's a sample for your reference:

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc'));// logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

// Discussion
// The key part of this solution is the use of an IIFE to create a private scope that is only
// accessible to the object returned when executing Object.create(Account).

// Further Exploration
// This solution works but it only works for one set of private data. Here's an extended version of the example run:

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.email('abc'));                  // logs 'Invalid Password'