class User {
  constructor(name) {
    this.name = name;
  }
  setClickListener(node) {
    node.addEventListener('click', (e) => {
      const userType = e.target.getAttribute('class');
      const speechText = document.querySelector('.speech p');
      if (userType === 'customer') {
        speechText.innerHTML = this.name + ': ' + this.askQuestion();
      } else if (userType === 'vendor') {
        speechText.innerHTML = this.name + ': ' + this.respond();
      }
    });
  }
  render() {
    const userNode = document.createElement('img');
    userNode.setAttribute('src', this.imageURL);
    userNode.setAttribute('class', this.className);
    this.setClickListener(userNode);
    document.body.appendChild(userNode);
  }
}
