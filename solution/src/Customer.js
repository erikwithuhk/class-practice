class Customer extends User {
  constructor(name) {
    super(name);
    this.imageURL = 'http://images.clipartpanda.com/person-clip-art-GinaS.png';
    this.className = 'customer';
  }
  askQuestion() {
    return 'How much is this?';
  }
}
