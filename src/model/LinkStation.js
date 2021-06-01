
/**
 * Class to represent a LinkStation that powers devices.
 * @author Ville Lohkovuori
 * (06/2020)
 */
 class LinkStation {

  /**
   * Create a LinkStation.
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @param {number} reach - distance to which the LinkStation provides power
   */
  constructor(x, y, reach) {

    this.x = x;
    this.y = y;
    this.reach = reach;
  }

  /**
   * Calculate the LinkStation's provided power (at a given distance point).
   * @param {number} x - x coordinate of distance point
   * @param {number} y - y coordinate of distance point
   * @return {number} power - the provided power
   */
  powerAt(x, y) {

    const deviceDistance = Math.sqrt((this.x - x)**2 + (this.y - y)**2);

    return deviceDistance > this.reach ? 0 : (this.reach - deviceDistance)**2;
  }
}

export default LinkStation;