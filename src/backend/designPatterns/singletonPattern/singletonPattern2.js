
/*
*1. Basit Singleton Örneği 
*/

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; // varsa aynı nesneyi döndür
    }
    this.zaman = new Date().toLocaleTimeString();
    Singleton.instance = this;
  }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log(s1 === s2); // true
console.log(s1.zaman);  // örn. 04:25:30
console.log(s2.zaman);  // aynı saat -> aynı nesne
