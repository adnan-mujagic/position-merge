function main(data, tolerance){
    if(data.length==1){
        data[0] = [data[0]];
        return;
    }
    for(let i=0; i<data.length-1; i++){
        if(data[i]){
            data[i]=[data[i]];
            for(let j=i+1; j<data.length; j++){
                if(data[j]){
                    if(checkClose(data[i], data[j], tolerance)){
                        merge(data, i, j)
                        j--;
                    }
                }
            }
        }
    }
    if(!data[data.length-1].length){
        data[data.length-1] = [data[data.length-1]]
    }
}

function checkClose(objectOne, objectTwo, tolerance){
    let firstObjectEstimatedPosition = calculateEstimatedPosition(getAllGroupedPositions(objectOne));
    let latitudeDifference = Math.abs(firstObjectEstimatedPosition.latitude - objectTwo.coordinates.latitude)
    let longitudeDifference = Math.abs(firstObjectEstimatedPosition.longitude - objectTwo.coordinates.longitude)
    if(Math.pow(latitudeDifference, 2) + Math.pow(longitudeDifference, 2) <= Math.pow(tolerance, 2)){
        return true;
    }
    return false;
}

function merge(array, i, j){
    array[i].push(array[j])
    array.splice(j, 1);
}

function calculateEstimatedPosition(arrayOfCoordinates){
    let sumLat = 0;
    let sumLong = 0;
    for(let i=0;i<arrayOfCoordinates.length;i++){
        sumLat+=arrayOfCoordinates[i].latitude;
        sumLong+=arrayOfCoordinates[i].longitude;
    }
    return {latitude: sumLat/arrayOfCoordinates.length, longitude: sumLong/arrayOfCoordinates.length}
}

function getAllGroupedPositions(data){
    let allPositions = []
    for(let i = 0; i<data.length; i++){
        allPositions.push(data[i].coordinates)
    }
    return allPositions;
}

//Usage example

let data = [
    {
        id:1,
        coordinates:{
            latitude:0,
            longitude:0
        }
    
    },
    {
        id:2,
        coordinates:{
            latitude:3,
            longitude:4
        }
    
    },
    {
        id:3,
        coordinates:{
            latitude:20,
            longitude:20
        }
    
    },
    {
        id:4,
        coordinates:{
            latitude:30,
            longitude:30
        }
    
    },
    {
        id:5,
        coordinates:{
            latitude:2,
            longitude:0
        }
    
    }
]

main(data, 5)

console.log(data)