////////////////
// Robot Name //
////////////////

// Write a program that manages robot factory settings.

// When robots come off the factory floor, they have no name.
// The first time you boot them up, a random name is generated,
// such as RX837 or BC811.

// Every once in a while, we need to reset a robot to its factory
// settings, which means that their name gets wiped. The next time
// you ask, it will respond with a new random name.

// The names must be random; they should not follow a predictable
// sequence. Random names means there is a risk of collisions.
// Your solution should not allow the use of the same name twice
// when avoidable.

class Robot {
  constructor() {
    this.id = null;
  }

  name() {
    if (this.id) return this.id;

    while (true) {
      this.id = Robot._generateName();
      if (!Robot.allRobots.includes(this.id)) break;
    }
    Robot.allRobots.push(this.id);

    return this.id;
  }

  reset() {
    let nameIdx = Robot.allRobots.indexOf(this.id);
    Robot.allRobots.splice(nameIdx, 1);
    this.id = null;
  }

  static _generateName() {
    let name = '';
    for (let idx = 0; idx < 2; idx++) name += Robot._getRandomChar();
    for (let idx = 0; idx < 3; idx++) name += Robot._getRandomDigit();
    
    return name;
  }

  static _getRandomDigit() {
    return Math.floor(Math.random() * 10).toString();
  }

  static _getRandomChar() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars[Math.floor(Math.random() * chars.length)];
  }

  static allRobots = [];
}

module.exports = Robot;