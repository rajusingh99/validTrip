var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function isValidTrips(trips, shipment) {
    var pickups = shipment.pickups, drops = shipment.drops;
    var allPoints = new Set(__spreadArray(__spreadArray([], pickups, true), drops, true));
    var _loop_1 = function (point) {
        var startTripExists = trips.some(function (trip) { return trip.start === point; });
        var endTripExists = trips.some(function (trip) { return trip.end === point; });
        if (!startTripExists && !endTripExists) {
            return { value: false };
        }
    };
    for (var _i = 0, allPoints_1 = allPoints; _i < allPoints_1.length; _i++) {
        var point = allPoints_1[_i];
        var state_1 = _loop_1(point);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return true;
}
var trips = [
    { start: "A", end: "W" },
    { start: "B", end: "W" },
    { start: "W", end: "C" },
    { start: "W", end: "D" }
];
var shipment = {
    pickups: ["A", "B"],
    drops: ["C", "D"]
};
console.log(isValidTrips(trips, shipment));
