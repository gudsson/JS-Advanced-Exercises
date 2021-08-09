// Implement the following diagram using the pseudo-classical approach.
// Subclasses should inherit everything from the superclass and not just
// the methods. Reuse the constructors of the superclass when implementing
// a subclass.

// Hint
// Revisit this article on inheritance on MDN for an idea on how to reuse the
// constructor of the superclass when implementing a subclass and inherit not
// just the methods.

// IMPLEMENTATION

// Mixin
const Professional = {
  invoice() {
    console.log(`${this.fullName()} is Billing customer`);
  },
  payTax() {
    console.log(`${this.fullName()} Paying taxes`);
  }
};

function delegate(context, methodOwner, methodName) {
  return function(...args) {
    return methodOwner[methodName].call(context, ...args);
  };
}

// Extend functionality
function extend(instance, mixin) {
  let methodNames = Object.keys(mixin);

  methodNames.forEach(method => {
    instance[method] = delegate(instance, mixin, method);
  });

  return instance;
}

// Pseudo-classes
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

function Doctor(firstName, lastName, age, gender, specialty) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialty = specialty;
}
Doctor.prototype = Object.create(Person.prototype);

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
};

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}
Professor.prototype = Object.create(Person.prototype);

Professor.prototype.teach = function() {
  console.log('teaching');
};

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() {
  console.log('Studying');
};

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}
GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function() {
  console.log('Researching');
};

// Example Run
let doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), Professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), Professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

Professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'

// Discussion
// The solution leverages a modified delegate function from the earlier
// exercise. It was modified so that we can mimic how mixins are expected
// to behave — that is, methods from the mixin use state from the object
// they are being called on and call on other methods on the object they
// are mixed in to. The delegate function now accepts three arguments:
// callingObject, methodOwner, and methodName. The callingObject is
// added so that the method is called with it as the context. Related
// to this, it's worth noting that extend is used with the object returned
// by the new constructor. This is done so that object extended has the
// states.

// The key here is observing the code and the result from the example run;
// that changes to a method on the Professional mixin were also reflected
// on the prototype object (e.g., Doctor.prototype and Professor.prototype)
// and that the mixin uses state (i.e, firstName) and methods (i.e., fullName)
// from the object that it extended. The extend function simply iterates over
// all the keys of the mixin object and uses that to create and, consequently,
// delegate methods for the prototype object.