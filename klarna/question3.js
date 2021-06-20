function findRoutes(routes) {
  const departures = routes.map(([a, _]) => a);
  const arrivals = routes.map(([_, b]) => b);
  const origDestMap = routes.reduce((acc, [orig, dest]) => {
    acc[orig] = dest;
    return acc;
  }, {});
  const origin = findOrigin(departures, arrivals);
  const result = getItinerary(origin, origDestMap);

  return result;
}

function findOrigin(departures, arrivals) {
  const arrivalMaps = arrivals.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});

  const origin = departures.find((item) => !arrivalMaps[item]);

  return origin;
}

function getItinerary(origin, origDestMap) {
  let places = [origin];
  let currOrigin = origin;
  while (origDestMap[currOrigin]) {
    places.push(origDestMap[currOrigin]);
    currOrigin = origDestMap[currOrigin];
  }

  const result = places.join(", ");
  return result;
}

// ---------------

let assert = require("chai").assert;

describe("Find Origin", function () {
  it("origin is the one which is not an arrival itself", function () {
    const departures = ["C", "B", "A"];
    const arrivals = ["B", "D", "C"];
    const origin = findOrigin(departures, arrivals);
    assert.equal(origin, "A");
  });
});

describe("Get Itinerary", function () {
  it("it returns whole itinerary based on origin and route map", function () {
    const origin = "A";
    const map = { A: "B", B: "C", C: "D" };
    const result = getItinerary(origin, map);
    assert.equal(result, "A, B, C, D");
  });
});

describe("Follow That Spy", function () {
  it("Should return the correct route", function () {
    assert.deepEqual(
      findRoutes([
        ["MNL", "TAG"],
        ["CEB", "TAC"],
        ["TAG", "CEB"],
        ["TAC", "BOR"],
      ]),
      "MNL, TAG, CEB, TAC, BOR"
    );
    assert.deepEqual(
      findRoutes([
        ["Chicago", "Winnipeg"],
        ["Halifax", "Montreal"],
        ["Montreal", "Toronto"],
        ["Toronto", "Chicago"],
        ["Winnipeg", "Seattle"],
      ]),
      "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"
    );
  });
});
