class Counter {

  static globalCount = 0;
  
  constructor(responsible) {
    this.responsible = responsible;
    this.count = 0;
  }

  increment() {
    this.count++;
    Counter.globalCount++;
  }

  getResponsible() {
    return this.responsible;
  }

  getGlobalCount() {
    return Counter.globalCount;
  }

  getIndividualCount() {
    return this.count;
  }

}

counter1 = new Counter('Juan');
counter1.increment();
counter1.increment();
counter1.increment();

counter2 = new Counter('Pedro');
counter2.increment();
counter2.increment();

console.log('counter1', counter1.getResponsible(), counter1.getIndividualCount(), counter1.getGlobalCount());