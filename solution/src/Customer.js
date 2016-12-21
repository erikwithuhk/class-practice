class Customer extends User {
  constructor(name) {
    super(name);
    this.node = document.querySelector('.customer');
  }
  askQuestion() {
    return 'How much is this?';
  }
}
