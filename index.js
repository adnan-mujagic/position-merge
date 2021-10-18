export default function main(data, tolerance){
    for(let i=0; i<data.length-1; i++){
        console.log(i)
        if(data[i]){
            data[i]=[data[i]];
            for(let j=i+1; j<data.length; j++){
                console.log(i+" "+j)
                if(data[j]){
                    if(checkClose(data[i], data[j], tolerance)){
                        console.log("should merge")
                        merge(data, i, j)
                        j--;
                        console.log(data)
                    }
                }
            }
        }
    }
}

function checkClose(objectOne, objectTwo, tolerance){
    let latitudeDifference = objectOne.length>1 ? Math.abs(calculateEstimatedPosition(getAllGroupedPositions(objectOne)).latitude - objectTwo.coordinates.latitude) : Math.abs(getAllGroupedPositions(objectOne)[0].latitude - objectTwo.coordinates.latitude);
    let longitudeDifference = objectOne.length>1 ? Math.abs(calculateEstimatedPosition(getAllGroupedPositions(objectOne)).longitude - objectTwo.coordinates.longitude) : Math.abs(getAllGroupedPositions(objectOne)[0].longitude - objectTwo.coordinates.longitude);
    if(latitudeDifference<=tolerance && longitudeDifference<=tolerance){
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