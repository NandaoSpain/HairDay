const periods = document.querySelectorAll('.period')

periods.forEach((period) => {
  period.addEventListener('click', (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      const item = e.target.closest("li")
      const { id } = item.dataset

      if(id) {
        const isConfirm = confirm("Certeza?")
        
        if (isConfirm) {
          item.remove()
        }
      }
    }
  })
})
