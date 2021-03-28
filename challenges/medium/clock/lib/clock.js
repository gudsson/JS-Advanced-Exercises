///////////
// Clock //
///////////

// Create a clock that is independent of date.

// You should be able to add minutes to and subtract minutes from
// the time represented by a given clock object. Two clock objects
// that represent the same time should be equal to each other.

// You may not use any built-in date or time functionality; just use
// airthmetic operations.

class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  add(minutes) {
    this._setNewTime(this._getTotalMinutes() + minutes);
    return this;
  }

  subtract(minutes) {
    let newTimeInMinutes = this._getTotalMinutes() - minutes;

    while (newTimeInMinutes < 0) newTimeInMinutes += (60 * 24);

    this._setNewTime(newTimeInMinutes);
    return this;
  }

  _setNewTime(minutes) {
    this.hours = this._getNewHour(minutes);
    this.minutes = this._getNewMinutes(minutes);
  }

  _getNewHour(minutes) {
    return Math.floor(minutes / 60) % 24;
  }

  _getNewMinutes(minutes) {
    return minutes % 60;
  }

  _getTotalMinutes() {
    return (this.hours * 60) + this.minutes; 
  }

  static at(hours, minutes = 0) {
    if (!Number.isInteger(hours) || hours > 23) throw new Error('hours must be integer between 0 and 23');
    if (!Number.isInteger(minutes) || minutes > 59) throw new Error('minutes must be integer between 0 and 59');
    return new Clock(hours, minutes);
  }

  isEqual(clock) {
    return (this.hours === clock.hours && this.minutes === clock.minutes);
  }

  toString() {
    let hour = this.hours.toString();
    let minute = this.minutes.toString();
    return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`
  }
}

module.exports = Clock;