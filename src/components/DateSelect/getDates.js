export const getYears=()=> {
    const max = new Date().getFullYear()
    const min = max - 100
    const years = []
  
    for (let i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }
export const getValue = (value)=>{
  const numbers= []
  for (let i = 1; i <= value; i++) {
    numbers.push(i)
  }
  return numbers
}

const isLeapYear=year=>{
      if((year % 400 == 0) || ((year % 4 ==0)&&(year % 100 != 0))){
          return true
      }
  return false
}

export const getDays = (month,year)=>{
  let days = getValue(31)
  switch(month){
    case 'Jan':
      break
    case 'Feb':
      const leapYear = isLeapYear(parseInt(year))
      if(leapYear){

        days=getValue(29)
      }else{
        
        days=getValue(28)
      }
      break
      case 'Apr':
        days=getValue(30)
        break
        case 'Jun':
        days=getValue(30)
        break
        case 'Sep':
        days=getValue(30)
        break
        case 'Nov':
        days=getValue(30)
        break
      default:break

  }
  return days
}