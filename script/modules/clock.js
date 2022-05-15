import glof from './glof'
const _ = new glof()

function clock(_year, _month, _days, _hours, _minutes, _seconds) {
  const year = document.querySelector(_year)
  const month = document.querySelector(_month)
  const days = document.querySelector(_days)
  const hours = document.querySelector(_hours)
  const minutes = document.querySelector(_minutes)
  const seconds = document.querySelector(_seconds)

  const now = new Date()
  year.textContent = now.getFullYear()
  month.textContent = _.getZero(now.getMonth())
  days.textContent = _.getZero(now.getDate())
  hours.textContent = _.getZero(now.getHours())

  setInterval(getTime, 1000)

  function getTime() {
    const timeNow = new Date()
    minutes.textContent = _.getZero(timeNow.getMinutes())
    seconds.textContent = _.getZero(timeNow.getSeconds())
  }
}
export default clock
