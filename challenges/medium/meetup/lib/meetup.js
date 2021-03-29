// Meetups //
/////////////

// Meetups are a great way to meet people who share a common
// interest. Typically, meetups happen monthly on the same day
// of the week. For example, a meetup's meeting may be set as:

// The first Monday of January 2021
// The third Tuesday of December 2020
// The teenth wednesday of December 2020
// The last Thursday of January 2021
// In this program, we'll construct objects that represent a meetup 
// Each object takes a month number (1-12) and a year (e.g., 2021).
// Your object should be able to determine the exact date of the
// meeting in the specified month and year. For instance, if you
// ask for the 2nd Wednesday of May 2021, the object should be
// able to determine that the meetup for that month will occur
// on the 12th of May, 2021.

// The descriptors that may be given are strings: 'first', 'second',
// 'third', 'fourth', 'fifth', 'last', and 'teenth'. The case of the
// strings is not important; that is, 'first' and 'fIrSt' are
// equivalent. Note that "teenth" is a made up word. There was a
// meetup whose members realised that there are exactly 7 days
// that end in '-teenth'. Therefore, it's guaranteed that each
// day of the week (Monday, Tuesday, ...) will have exactly one
// date that is the "teenth" of that day in every month. That is,
// every month has exactly one "teenth" Monday, one "teenth" Tuesday,
// etc. The fifth day of the month may not happen every month, but
// some meetup groups like that irregularity.

// The days of the week are given by the strings 'Monday', 'Tuesday',
// 'Wednesday', 'Thursday', 'Friday', 'Saturday', and 'Sunday'. Again,
// the case of the strings is not important.

// Define a class Meetup with a constructor taking a month and a year
// and a method day(weekday, schedule).
// where weekday is one of: monday, tuesday, wednesday, etc.
// and schedule is: first, second, third, fourth, fifth, last, or
// teenth.

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  day(weekday, schedule) {
    let dayNumber = Meetup.DAY_NAMES.indexOf(weekday.toLowerCase());
    let dayType = schedule.toLowerCase();
    switch (schedule.toLowerCase()) {
      case 'last':
        return this._getLast(dayNumber);
      case 'teenth':
        return this._getTeenth(dayNumber);
      default:
        return this._getOrdinal(dayNumber, dayType);
    }
  }

  _getTeenth(dayNumber) {
    let date = new Date(this.year, this.month, 13); // start on 13th

    // loop to find first instance of desired DOW
    while (date.getDay() !== dayNumber) {
      date.setDate(date.getDate() + 1);
    }

    return new Date(this.year, this.month, date.getDate());
  }

  _getLast(dayNumber) {
    let date = new Date(this.year, this.month + 1, 0);

    // loop backwards to find first instance of desired DOW
    while (date.getDay() !== dayNumber) {
      date.setDate(date.getDate() - 1);
    }

    return new Date(this.year, this.month, date.getDate());
  }

  _getOrdinal(dayNumber, dayType) {
    let ordinal = Meetup.SCHEDULE_OPTIONS[dayType];
    let date = new Date(this.year, this.month, 1);
    let lastDate = new Date(this.year, this.month + 1, 0).getDate();

    // loop to find first instance of desired DOW
    while (date.getDay() !== dayNumber) {
      date.setDate(date.getDate() + 1);
    }

    this.date = date.getDate() + (7 * (ordinal - 1));

    if (this.date > lastDate) return null;

    return new Date(this.year, this.month, this.date);

  }

  static DAY_NAMES = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ]

  static SCHEDULE_OPTIONS = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
  }
}

module.exports = Meetup;