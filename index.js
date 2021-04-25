// What is a date? 

// Make a Date
const today = new Date() // Gets the time now
// Print the date
console.log(today, '<- Today')  
// It's really a number
console.log(today.getTime(), '<- Time') 


// It's really the number of milliseconds since 1970
// get the number of years since 1970
console.log('Years since 1970')
// Divide by 1000 to get seconds divide by 60 to get minutes
// divide by 60 to get hours, divide by 24 to get days, 
// divide by 365.25 to get years
console.log(today / 1000 / 60 / 60 / 24 / 365.25) 

// or divide by 86,400 seconds
console.log(today / 1000 / 86400 / 365.25)


console.log('-------- Age --------')

// You can make a date from almost any 
// human readable string for example: 
const bday = new Date('Sept 26, 1965')
// Challenge: Calculate your age with JS
const age = today - bday 
console.log(age, '<- Age in ms')
// Challenge: Calculate your age in secs, mins, hrs, days, years
const matildeBirthday = new Date('Oct 03, 1929')
const matildeAge = today - matildeBirthday
console.log(matildeAge, '<- Age in ms')
console.log(matildeAge / 1000, '<- Age in seconds')
console.log(matildeAge / 1000 / 60, '<- Age in mins')
console.log(matildeAge / 1000 / 60 / 60, '<- Age in hours')
console.log(matildeAge / 1000 / 60 / 60 / 24, '<- Age in days')
console.log(matildeAge / 1000 / 60 / 60 / 24 / 365.25, '<- Age in days')

console.log('-------- BDay --------')

// You can also initialize a date with 
// year, month, date, hours, mins, secs, ms
// (month is 0 indexed Jan == 0)

const newYear = new Date(2021, 0, 1)
// Get the components from a date
console.log(newYear.getFullYear(), newYear.getMonth(), newYear.getDate())
// To get the month by name you might: 
const months = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
// Shows the month for new years
console.log(months[newYear.getMonth()])
// Challenge: Show the month of your birthday
console.log(months[matildeBirthday.getMonth()], '<- birthday month')
// Days of the week are also 0 indexed 0:Sun - 6:Sat 
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
// Challenge: Show the day of the week of your birthday
console.log(days[matildeBirthday.getDay()], '<- birthday day')

console.log('-------- Data Offsets --------')

// Date offsets show the difference between two dates
const date = new Date()          // Start with a date 
const startDate = new Date(date) // copy the date
const dueDate = new Date(date)   // copy the date

// Start date is 7 days ago
// Use setDate to modify the start date subtract 7 days
startDate.setDate( date.getDate() - 7 ) // 7/20

// Due date is 3 days from now
// Use setDate to modify the end date add 3 days
dueDate.setDate( date.getDate() + 3 ) // 7/30

console.log(startDate.getDate(), dueDate.getDate())
console.log(startDate, dueDate)
// Check these dates they should be 7 days ago and 3 days from now


// Try these problems 

console.log('--------- Problem 1 --------')
// Schedule future dates - Given a date return a list of 
// dates separated by a time offset
// date is a Date object
// repeat is a number, the number of repeats 
// offset is a number, the number days between dates returned

function consecutiveDates(date, repeat, offset) {
  const arr = []
  for (let i= 0; i <= repeat; i += 1) {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() + offset * i)
    arr.push(newDate) 
  }
  return arr
}

// Starting date 1/1/2019, repeat 4 times, return dates 
// 3 days apart
const problem1 = consecutiveDates(new Date(2019, 0, 1), 4, 3)
console.log(problem1)

// Should return an array with dates:
// 1. 1/1/2019 <- Starting date
// 2. 1/4/2019 <- Each date 3 days apart
// 3. 1/7/2019
// 4. 1/10/2019

// Stretch goals 
// add a unit for time:
// consecutiveDates(new Date(2019, 0, 1), 3, 1, 'year')
// Should return an array of 3 dates separated by 1 year

// 1. 1/1/2019
// 2. 1/1/2020
// 3. 1/1/2021

function consecutiveDatesTwo(date, repeat = 1, offset = 1, unit = 'day') {
  const arr = []
  for (let i = 0; i <= repeat; i += 1) {
    const newDate = new Date(date)
    switch(unit){
      case 'day':
        newDate.setDate(date.getDate() + offset * i)
        break
      case 'month':
        newDate.setMonth(date.getMonth() + offset * i)
        break
      case 'year':
        newDate.setFullYear(date.getFullYear() + offset * i)
        break
    }
    arr.push(newDate)
  }
  return arr
}

const problem_two = consecutiveDatesTwo(new Date(2019, 0, 1), 3, 1, 'year')
console.log(problem_two)


console.log('--------- Problem 2 --------')

// Write a function to order dates
// Takes an array of dates, returns an array of ordered dates

function orderDates(dates) {
  // orders the dates 
  const newArr = [...dates]
  // does a or b come first? 
  // if num is less than 0 - a comes first,
  //  else if num is greater than 0 - b comes first
  newArr.sort( (a, b) => {
    return a - b
  })
  // returns a new array of ordered dates
  return newArr
}

const problem_three = orderDates([today, dueDate, startDate, bday, newYear])
console.log(problem_three)
// [bday, startdate, duedate, newyear]

// Stretch: Return an object containing three keys each holding an array of dates. The keys are: 

// - past: array of dates that happened before today
// - present: all dates that happen today
// - furture: all of the dates that will occur in the future

// { past: [...], present:[...], future:[...] }

function orderPastPresentFuture(dates) { 
  // order dates 
  const newArr = [...dates]
  newArr.sort( (a, b) => {
    return a - b
  })
  // object with three properties - past, present and future 
  const results = {past: [], present: [], future: []}
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const d = today.getDate()

  newArr.forEach((date) => {
    if (year === date.getFullYear() && month === date.getMonth() && d === date.getDate()) {
      results.present.push(date)
      } else if (date < today) {
        results.past.push(date)
      } else {
        results.future.push(date)
      }
  })
  return results
}

const problem_four = orderPastPresentFuture([today, dueDate, startDate, bday, newYear])
console.log(problem_four)

console.log('--------- Problem 3 --------')

// Given an array of dates find the date that will happen next. 
// You need to find the date that is closetest to today
// but not before. 

function nextDate(dates) {
  // find the date that will happen next in dates
  // return the next date
  const now = new Date()
  for (let i = 0; i < dates.length; i += 1) {
    const date = dates[i]
    if (date > now) {
      return date
    }
  }
  return false
}

const problem_five = nextDate([today, dueDate, startDate, bday, newYear])
console.log(problem_five)

// Stretch Goal: Return a human readable string: 
// Your next appointment is 3 days from now. 

function nextDateTwo(dates) {
  const now = new Date()
  // order the dates passed in 
  const newDates = dates.sort((a, b) => {
    return a - b
  })
  // loop over all the items in newDates array 
  for (let i = 0; i < newDates.length; i += 1) {
    // get date out of array 
    const date = dates[i]
    // ask if date is more than now 
    if (date > now) {
      const y = date.getFullYear() - now.getFullYear()
      const m = date.getMonth() - now.getMonth()
      const d = date.getDate() - now.getDate()
      // how long away 
      if (y > 0) {
        return `Your appointment is in ${y} years`
      } else if (m > 0) {
        return `Your appointment is in ${m} month(s)`
      } else {
        return `Your appointment is in ${d} day(s)`
      }
    }
  }
  return false
}

const problem_six = nextDateTwo([today, dueDate, startDate, bday, newYear])
console.log(problem_six)

console.log('--------- Problem 4 --------')

// Birthday planner. Write a function that takes a date (your birthday) 
// and a year, and returns the day of the week for that date in that year. 

function whensYourParty(date, year) {
  // Find the day of the year for your birthday
  // copy the date 
  const newDate = new Date(date)
  // set the year on the date 
  newDate.setFullYear(year)
  // get the day of the week 
  const day = newDate.getDay()
  // find the day from the array of days and return it
  const days = ['Sun', 'Mon', 'Tues', 'Thur', 'Fri', 'Sat']
  return days[day]
}

const problem_seven = whensYourParty(bday, 2024)
console.log(problem_seven)

// Stretch Goal: Return an array listing all 
// the days when your birthday occured since 
// you were born. 

function getBirthdayDays(bday) {
  const arr = []
  const days = ['Sun', 'Mon', 'Tues', 'Thur', 'Fri', 'Sat']
  const thisYear = new Date().getFullYear()
  const birthYear = bday.getFullYear()
  const date = new Date(bday) 
  for ( let i = birthYear; i <= thisYear; i += 1) {
    date.setFullYear(i)
    arr.push(days[date.getDay()])
  }
  return arr
}

console.log(getBirthdayDays(bday))

const nums = [5555, 888, 77, 2222, 1111, 3333]
nums.sort((a,b) => a - b)

console.log('<><><><><><><>')
console.log(nums)
