// **Problem 1** Schedule future dates
// *******************************************************************************************

function consecutiveDates(startDate, repeatCount, daysOffset) {
  const arr = []
  for (let i= 0; i <= repeatCount; i += 1) {
    const newDate = new Date(startDate)
    newDate.setDate(startDate.getDate() + daysOffset * i)
    arr.push(newDate) 
  }
  return arr
}

const problem1 = consecutiveDates(new Date(2019, 0, 1), 4, 3)
console.log(problem1)

// **Problem 2** Measure execution time
// Using Date calculate the number of milliseconds used to execute. 
// *******************************************************************************************



// **Problem 3** Order dates
// Given an array of dates return an ordered array of dates. 
// *******************************************************************************************

function orderDate(dates) {
  const newDates = dates.sort( (a, b) => {
    return a - b
  })
  return newDates
}

const bday_two = new Date('Sept 26, 1965')
const bday_three = new Date('Oct 26, 2055')
const bday_one = new Date('Jan 26, 2000')
console.log(orderDate([bday_one, bday_two, bday_three]))

// **Problem 4** What's next?
// Given an array of dates find the date that will happen next.
// You need to find the date that is closest to now but not before. 
// *******************************************************************************************

function nextDate(dates){
  const now = new Date()
  for (let i = 0; i < dates.length; i += 1) {
    const date = dates[i]
    if (date > now) {
      return date
    }
  }
  return false
}

const bday_3 = new Date('April 26, 2022')
const bday_2 = new Date('Sept 26, 1965')
console.log(nextDate([bday_2, bday_3]))

// **Problem 5** When's your birthday?
// Birthday planner. Write a function that takes a date (birthday) and a year, 
// and returns the day of the week for that date in that year. 
// *******************************************************************************************

function matildesBirthday(date, year) {
  const weekday= ['Sun', 'Mon', 'Tues', 'Thur', 'Fri', 'Sat']
  const newDate = new Date(date)
  newDate.setFullYear(year)
  const day = newDate.getDay()
  return weekday[day]
}

const bday_9 = matildesBirthday('Oct 03', 1092)
console.log(bday_9)