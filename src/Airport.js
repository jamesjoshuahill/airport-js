function Airport() {
  this.planes = [];
}

Airport.prototype.land = function(plane) {
  if (this.isLanded(plane)) {
    throw new Error("plane has already landed");
  }
  this.planes.push(plane);
}

Airport.prototype.isLanded = function(plane) {
  if (this.planes.includes(plane)) {
    return true;
  }

  return false;
}
