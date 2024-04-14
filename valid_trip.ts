interface Trip {
    start: string;
    end: string;
  }
  
  interface Shipment {
    pickups: string[];
    drops: string[];
  }
  
  function isValidTrips(trips: Trip[], shipment: Shipment): boolean {
    const { pickups, drops } = shipment;
  
    const allPoints = new Set([...pickups, ...drops]);
  
    for (const point of allPoints) {
      const startTripExists = trips.some(trip => trip.start === point);
  
      const endTripExists = trips.some(trip => trip.end === point);
  
      if (!startTripExists && !endTripExists) {
        return false;
      }
    }
  
    return true;
  }
  
  const trips: Trip[] = [
    { start: "A", end: "W" },
    { start: "B", end: "W" },
    { start: "W", end: "C" },
    { start: "W", end: "D" }
  ];
  
  const shipment: Shipment = {
    pickups: ["A", "B"],
    drops: ["C", "D"]
  };
  
  console.log(isValidTrips(trips, shipment)); 
  