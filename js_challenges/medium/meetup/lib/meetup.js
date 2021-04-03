////////////
// Meetup //
////////////

// Typically meetups happen on the same day of the week.

// Examples of general descriptions are:

// The first Monday of January 2017
// The third Tuesday of January 2017
// The wednesteenth of January 2017
// The last Thursday of January 2017
// The descriptors you are expected to parse are: first, second,
// third, fourth, fifth, last, monteenth, tuesteenth, wednesteenth,
// thursteenth, friteenth, saturteenth, sunteenth

// Note that "Monteenth", "Tuesteenth", etc are all made up words.
// There was a meetup whose members realised that there are exactly
// 7 days that end in '-teenth'. Therefore, one is guaranteed that
// each day of the week (Monday, Tuesday, ...) will have exactly
// one date that is named with '-teenth' in every month.

// Given examples of a meetup dates, each containing a month, day,
// year, and descriptor calculate the date of the actual meetup.
// For example, if given "The first Monday of January 2017", the
// correct meetup date is 2017/1/2.

function meetupDay(year, month, dow, type) {
  const DOW = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  }

  let meetupDay = new Date(year, month, 1);
  let endOfMonth = new Date(year, month + 1, 0);
  let dayNumber = DOW[dow.toLowerCase()];

  // find teenths
  if (type.toLowerCase().includes('teenth')) return teenth();

  // find last
  if (type.toLowerCase().includes('last')) return last();

  // find ordinals
  return ordinal(parseInt(type));

  function ordinal(count) {
    let counter = 0;
    let lastDay = endOfMonth.getDate();

    for (let idx = 1; idx <= lastDay; idx++) {
      meetupDay.setDate(idx);
      if (meetupDay.getDay() === dayNumber) counter += 1;
      if (counter === count) return meetupDay;
    }

    throw new Error(`Month doesn't have ${count}th ${dow}`);
  }

  function last() {
    let lastDay = endOfMonth.getDate();

    for (let idx = lastDay; idx >= 1; idx--) {
      meetupDay.setDate(idx);
      if (meetupDay.getDay() === dayNumber) return meetupDay;
    }
  }

  function teenth() {
    for (idx = 13; idx <= 19; idx++) {
      meetupDay.setDate(idx);
      if (meetupDay.getDay() === dayNumber) return meetupDay;
    }
  }
}

// describe("meetupDay()", () => {
//   test("test monteenth of may 2013", () => {
//     expect(meetupDay(2013, 4, "Monday", "teenth")).toEqual(
//       new Date(2013, 4, 13)
//     );
//   });


module.exports = meetupDay;