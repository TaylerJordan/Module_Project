import modal from './modules/modal'
import clock from './modules/clock'
document.addEventListener('DOMContentLoaded', () => {
  modal('.modal', '.close', '.open-modal-btn', 'hide', 'show')
  clock('#year', '#month', '#days', '#hours', '#minutes', '#seconds')
})
