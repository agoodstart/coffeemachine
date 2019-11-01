class Thenable {
  constructor(callback, time) {
    this.callback = callback;
    this.time = time;
  }
  then(resolve, reject) {
    setTimeout(() => resolve(this.callback()), this.time); // (**)
  }
}

export default Thenable;