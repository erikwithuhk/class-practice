class Customer extends Person {
  constructor(name) {
    super(name);
    this.type = 'Customer';
  }
  ask() {
    return `${this.name}: How much is this?`;
  }
  setClickListener() {
    const customerImageNode = document.querySelector('.customer');
    customerImageNode.addEventListener('click', () => {
      const speechParagraph = document.getElementById('speech-paragraph');
      const question = this.ask();
      speechParagraph.innerHTML = question;
    });
  }
}
