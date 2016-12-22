class Vendor extends Person {
  respond() {
    const price = prompt('How much is it?');
    console.log(`${this.name}: That costs ${price} million dollars.`);
  }
}
