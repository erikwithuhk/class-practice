class Vendor extends User {
  constructor(name) {
    super(name);
    this.imageURL = 'http://static.wixstatic.com/media/05aa3c_1d8d3b6755edac0867afc4c03d898b58.gif';
    this.className = 'vendor';
  }
  respond() {
    const price = prompt('Enter a number between 1 and 100');
    return `That costs ${price} million dollars`;
  }
}
