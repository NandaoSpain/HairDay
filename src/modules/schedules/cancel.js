const periods = document.querySelectorAll('.period')
import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

periods.forEach((period) => {
  period.addEventListener('click', async (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      const item = e.target.closest("li")
      const { id } = item.dataset

      if(id) {
        const isConfirm = confirm("Certeza?")
        
        if (isConfirm) {
          await scheduleCancel({ id })
          schedulesDay()
        }
      }
    }
  })
})
