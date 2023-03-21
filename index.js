// 1st function
const hqLocation = 42;


function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - hqLocation);
}

console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(35)); 
console.log(distanceFromHqInBlocks(43));


//2nd function
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264; 
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    return distanceInBlocks * feetPerBlock;
  }
  
  console.log(distanceFromHqInFeet(43)); 
  console.log(distanceFromHqInFeet(50)); 
  console.log(distanceFromHqInFeet(35)); 
  

//3rd function
function distanceTravelledInFeet(startingBlock, endingBlock) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(startingBlock - endingBlock);
    return distanceInBlocks * feetPerBlock;
  }
  
  console.log(distanceTravelledInFeet(43, 48)); 
  console.log(distanceTravelledInFeet(50, 35)); 
  console.log(distanceTravelledInFeet(35, 35)); 
  

  //4th function
  function calculateFarePrice(start, destination) {
    const distance = Math.abs(destination - start);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else if (distance >= 2500) {
      return 'cannot travel that far';
    }
  }
   const fare = calculateFarePrice(43, 50);
  console.log(fare); 