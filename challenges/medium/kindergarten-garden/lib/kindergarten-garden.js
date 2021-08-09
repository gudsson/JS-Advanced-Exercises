/////////////////////////
// Kindergarten Garden //
/////////////////////////

// The kindergarten class is learning about growing plants.
// The teachers thought it would be a good idea to give them
// actual seeds, plant them in actual dirt, and grow actual plants.

// They've chosen to grow grass, clover, radishes, and violets.

// To this end, they've put little styrofoam cups along the
// window sills, and planted one type of plant in each cup,
// choosing randomly from the available types of seeds.

// [window][window][window]
// ........................ # each dot represents a styrofoam cup
// ........................
// There are 12 children in the class:

// Alice, Bob, Charlie, David,
// Eve, Fred, Ginny, Harriet,
// Ileana, Joseph, Kincaid, and Larry.
// Each child gets 4 cups, two on each row. The children are assigned
// to cups in alphabetical order.

// The following diagram represents Alice's plants:

// [window][window][window]
// VR......................
// RG......................
// So in the row nearest the window, she has a violet and a radish;
// in the row behind that, she has a radish and some grass.

// Your program will be given the plants from left-to-right starting
// with the row nearest the windows. From this, it should be able to
// determine which plants belong to which students.

// For example, if it's told that the garden looks like so:

// [window][window][window]
// VRCGVVRVCGGCCGVRGCVCGCGV
// VRCCCGCRRGVCGCRVVCVGCGCV
// Then if asked for Alice's plants, it should provide:

// Violets, radishes, violets, radishes
// While asking for Bob's plants would yield:

// Clover, grass, clover, clover

class Garden {
  constructor(diagram, students = Garden.STUDENTS) {
    this.rows = diagram.split(`\n`);
    this.students = students.sort();
    this.cups = this._distributeCups();
    this._convertNamesToProperties();
  }

  _distributeCups() {
    let cups = {};

    this.rows.forEach(row => {
      let cupPairs = row.match(/.{1,2}/g);
      cupPairs.forEach((pair, idx) => {
        let student = this.students[idx];
        pair = pair.split('').map(letter => Garden.PLANTS[letter]);
        if (cups[student]) cups[student].push(...pair);
        else cups[student] = pair;
      })
    });
    return cups;
  }

  static PLANTS = {
    G: `grass`,
    C: `clover`,
    R: `radishes`,
    V: `violets`
  }

  _convertNamesToProperties() {
    Object.keys(this.cups).forEach(name => {
      this[name.toLowerCase()] = this.cups[name];
    });
  }

  // static STUDENTS = {
  //   alice`,
  //   bob`,
  //   charlie`,
  //   david`,
  //   eve`,
  //   fred`,
  //   ginny`,
  //   harriet`,
  //   ileana`,
  //   joseph`,
  //   kincaid`,
  //   larry:
  // };

  static STUDENTS = [
    `alice`,
    `bob`,
    `charlie`,
    `david`,
    `eve`,
    `fred`,
    `ginny`,
    `harriet`,
    `ileana`,
    `joseph`,
    `kincaid`,
    `larry`
  ];


}

module.exports = Garden;