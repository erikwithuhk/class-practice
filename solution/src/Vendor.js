class Vendor extends User {
  constructor(name) {
    super(name);
    this.node = document.querySelector('.vendor');
  }
  respond() {
    return 'That costs 1 million dollars';
  }
}
