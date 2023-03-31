let dt = DateTime.local();
//let dt = DateTime.local(2017, 5, 15, 8, 30);


let now = DateTime.now();

dt = DateTime.fromObject({day: 22, hour: 12, zone: 'America/Los_Angeles', numberingSystem: 'beng'})
DateTime.fromISO("2017-05-15")          //=> May 15, 2017 at midnight
DateTime.fromISO("2017-05-15T08:30:00") //=> May 15, 2017 at 8:30
console.log(DateTime)
console.log(dt)
