class Singleton {
  constructor (name) {
    this.name = name
    this.instance = null
  }
  static getInstance (name) {
    if (!this.instance) {
      this.instance = new Singleton(name)
    }
    return this.instance
  }
}
let a = new CreateSingleton('a1')
let b = Singleton.getInstance('b2')
console.log(a === b)
