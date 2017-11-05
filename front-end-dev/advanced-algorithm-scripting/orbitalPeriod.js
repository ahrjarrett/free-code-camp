const GM = 398600.4418
const earthRadius = 6367.4447
const { PI, sqrt, pow, round } = Math

const _orb = alt =>
  round(2 * PI * sqrt(pow((earthRadius + alt), 3) / GM))

const orbitalPeriod = (arr) =>
  arr.map(satellite => ({
    name: satellite.name,
    orbitalPeriod: _orb(satellite.avgAlt)
  }))

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))
