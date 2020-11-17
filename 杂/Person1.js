function Person(name) {
    let queue = [];
    let _person = {
        sayHi: function () {
          queue.push(() => {
            console.log(`Hi! This is ${name}!`);
            this.next();
          });
        },
        eat: function (meal) {
          queue.push(() => {
            console.log(`Eat ${meal} ~`);
            this.next();
          });
          return this;
        },
        sleep: function (second) {
          queue.push(() => {
            console.log(`等待 ${second} 秒`);
            setTimeout(() => {
              console.log(`wake up after ${second}`);
              this.next();
            }, second * 1000);
          });
          return this;
        },
        sleepFirst: function (second) {
          queue.unshift(() => {
            console.log(`等待 ${second} 秒`);
            setTimeout(() => {
              console.log(`wake up after ${second}`);
              this.next();
            }, second * 1000);
          });
          return this;
        },
        next: function () {
          let fn = queue.shift();
          fn && fn();
        }
      };
      
      _person.sayHi();
      setTimeout(function () {
        _person.next();
      });
      return _person;
}
Person("Dan").sleepFirst(3).eat("dinner");