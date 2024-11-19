import dayjs from "dayjs"

const form = document.querySelector('form')
const selectedDate = document.getElementById("date")

const dateToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = dateToday
selectedDate.min = dateToday

form.onsubmit = (e) => {
  e.preventDefault()
}