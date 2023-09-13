class User {
  constructor(firstName, lastName, age, address) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.address = address
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  incrementAge() {
    this.age++
  }

  getAge() {
    return this.age;
  }
}

const userOne = new User('Luis', 'Ruiz', 23);
const userTwo = new User('Pedro', 'Ruiz', 32);
const userThree = new User('Julieta', 'Ruiz', 13);

console.log(userOne.getFullName())
userOne.incrementAge()
console.log(userOne.getAge())

console.log(userThree.getFullName())
userThree.incrementAge()
console.log(userThree.getAge())