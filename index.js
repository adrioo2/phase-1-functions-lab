// Code your solution in this file!
function distanceFromHqInBlocks (location) {
    let headQuarter = 42
  if (location <= 42) {
    return headQuarter - location
  }
else return location - headQuarter
}

function distanceFromHqInFeet(number) {
    return distanceFromHqInBlocks(number) * 264}

function distanceTravelledInFeet(start, destination) {
    let total = start - destination
    let totalTwo = destination - start
    if (destination < start) {
        return total * 264}
    else return totalTwo * 264
        }

        function distanceFromHqInBlocks (location) {
            let headQuarter = 42
          if (location <= 42) {
            return headQuarter - location
          }
        else return location - headQuarter
        }
        
        function distanceFromHqInFeet(number) {
          return distanceFromHqInBlocks(number) * 264}
        
        function distanceTravelledInFeet(start, destination) {
              let total = start - destination
          let totalTwo = destination - start
          if (destination < start) {
              return total * 264}
          else return totalTwo * 264
              }
        function calculatesFarePrice(start,destination) {
          let  distanceOne = distanceTravelledInFeet(start, destination)
          if (distanceOne <= 400) {
            return 0}
          else if (distanceOne > 400 && distanceOne <=2000) {
            return (distanceOne - 400) * 0.02
        }
          else if (distanceOne > 2000 && distanceOne <=2500) {
            return 25}
          else {return 'cannot travel that far'}
          }
          
            