
## UTC and JS Date

<!-- > -->

What's a Date? 

<!-- > -->
<!-- > -->

In JS this includes the year and the time. It pinpoints a point in time down to a millisecond as a number. 

<!-- > -->

Dates in JS are represented as the number of milliseconds since 1970

<!-- > -->

**UNIX Epoch**

What is this? Also known as a timestamp. It's a number that represents the number of seconds since **Thursday, 1 January 1970**. The premise is that each day takes 86,400 seconds. 

<!-- > -->

Dates before the epoch can be expressed as a negative number.

<!-- > -->

Are there any weird things about dates in JS?

<!-- > -->

Plenty, just think of leap years?

<!-- > -->

Can you do Math with this stuff? 

<!-- > -->

Yes! The Date Object, like the Number Object, is a wrapper around a primitive value. 

JS will convert a date to a number when needed. 

<!-- > -->

Make a new date with `new Date()` this returns a new date which represents the moment in time when the command was executed. 

```JS 
const a = new Date()
```

Try this in the console: 

```JS
// Make a date object
var a = new Date()
// Make another Date object
var b = new Date()
// Subtract one from the other
b - a // 5009 ms between dates
console.log(a) // Jul 27 3:45 pm ...
```

<!-- > -->

**Internally a Date is a number in Milliseconds**

Try this with your birthday. You can initialize a date with almost any human readable date string. For example: 

```JS 
var age = new Date('9/26/65')
var now = new Date()
console.log(now - age) // 1698830617401
```

<!-- > -->


```JS 
const newYears = new Date(2020, 0, 1)
// Wed Jan 01 2020 00:00:00 GMT-0800 (PST)
```

Notice the month starts with a 0 index. 

```
0 - Jan
1 - Feb
2 - Mar
3 - April 
4 - May
5 - June 
6 - July 
7 - Aug
8 - Sept
9 - Oct
10 - Nov
11 - Dec
```

<!-- > -->

## Date methods 

The Date object has many instance methods most are getters and setters. There are a few class methods also.

<!-- > -->

### Getters 

These mostly get at components of a date such as a year, month, day, hours, minutes, etc. Some format the date in a variety of ways. 

<!-- > -->

- Date Components 
  - `new Date().getFullYear()  // 2019`
  - `new Date().getMonth()     // 6` July
  - `new Date().getHours()     // 10` 10 AM

<!-- > -->

- Formatted Dates 
  - `new Date().toLocaleString()` 7/27/2019, 10:15:36 AM
  - `new Date().toDateString()` Sat Jul 27 2019

<!-- > -->

### Setters 

Setters change the value of various components of a date. 

<!-- > -->

- `myDate.setMonth(6)` Sets the month to July
  - January === 0

<!-- > -->

- `myDate.setMinutes(30)`

<!-- > -->

_Never mutate source object always make a copy and mutate that to avoid side effects._

```JS
const d = new Date(2019, 0, 10)
const newDate = new Date(d) // Make a new Date from a date
newDate.setMonth(5)

console.log(d) // 10 January 2019
console.log(newDate) // 10 June 2019
``` 

<!-- > -->

### Class Methods 

Date provides a couple of class methods. 

Class methods are methods that are called from the class (class methods are not called from an instance)

<!-- > -->

- `Date.now() // 1564251902406` the ms at the current moment
- `Date.UTC(year, month, day, hour, min, sec, ms)` create date from UTC parameters 
- `Date.parse(string)` creates a date from date string or returns NaN if unable to parse the string. 

<!-- > -->

## Timezones 

- Local time refers to the timezone set on your computer.
- UTC is synonymous with Greenwich Mean Time (GMT) in practice.

By default, almost every date method in JavaScript (except one) gives you a date/time in local time. You only get UTC if you specify UTC.

https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/

<!-- > -->

## Offset dates

An offset date tells you the time between two dates, the distance to a future or past date. 

<!-- > -->

```JS
const date = new Date() // Get today 7/27 (or any date)
const startDate = new Date(date) // copy the date
const dueDate = new Date(date)   // copy the date

// Start date have been 7 days ago
startDate.setDate(date.getDate() - 7) // 7/20

// Due date is 3 days from now
dueDate.setDate(date.getDate() + 3) // 7/30
```

<!-- > -->

Here is an alternate approach

```JS 
var a = new Date()
var b = new Date(a.getYear(), a.getMonth(), a.getDate() - 7)
var c = new Date(a.getYear(), a.getMonth(), a.getDate() + 3)
```

Here b and c have lost the hours, mins, secs, ms. These could have been included if they were needed. 

<!-- > -->

**Delta/difference in dates**

```JS
a.getDate() - b.getDate() // 7
a - b // 59958877622077
```

<!-- > -->

You can also do the math! 

```JS
const date1 = new Date('7/13/2019');
const date2 = new Date('7/15/2019');
// const diffTime = Math.abs(date2.getTime() - date1.getTime());
const diffTime = date2 - date1;
const diffDays = diffTime / (1000 * 60 * 60 * 24); 
console.log(diffDays);
```

<!-- > -->


## Additional Resources

1. https://javascript.info/rest-parameters-spread-operator
1. https://javascript.info/date
1. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
1. https://javascript.info/object-toprimitive
