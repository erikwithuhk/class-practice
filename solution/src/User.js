class User {
  constructor(name) {
    this.name = name;
  }
  setClickListener() {
    this.node.addEventListener('click', (e) => {
      const userType = e.target.getAttribute('class');
      const speechText = document.querySelector('.speech p');
      if (userType === 'customer') {
        speechText.innerHTML = this.name + ': ' + this.askQuestion();
      } else if (userType === 'vendor') {
        speechText.innerHTML = this.name + ': ' + this.respond();
      }
    });
  }
}
