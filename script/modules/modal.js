function modal(_modal, _close, _btnOpen, _hideStyle, _showStyle) {
  const modal = document.querySelector(_modal)
  const close = document.querySelector(_close)
  const btnOpen = document.querySelector(_btnOpen)

  function createModal(parent, start, x, hideStyle, showStyle) {
    let open = false
    parent.addEventListener('click', (e) => {
      if (e.target === parent && open) {
        closeModal(parent)
        open = false
      }
    })
    start.addEventListener('click', () => {
      openModal(parent)
      open = true
    })
    x.addEventListener('click', () => {
      closeModal(parent)
      open = false
    })
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Escape' && open) {
        closeModal(parent)
      }
    })

    function closeModal(item) {
      item.classList.remove(showStyle)
      item.classList.add(hideStyle)
    }
    function openModal(item) {
      item.classList.remove(hideStyle)
      item.classList.add(showStyle)
    }
  }
  createModal(modal, btnOpen, close, _hideStyle, _showStyle)
}

export default modal
