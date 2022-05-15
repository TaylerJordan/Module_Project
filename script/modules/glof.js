function glof() {
  this.getZero = function (num) {
    if (num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }
}
export default glof
