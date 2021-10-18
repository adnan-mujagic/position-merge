# Position Merge Package
This is an algorithm with approximate complexity of O(NlogN) that takes an array of data with coordinates and merges the objects that are physically close to each other into subarrays.
It has one publicly accessible function `main(data: Array[], tolerance: Number)`. 
## Usage Example
```
import main from "./node_modules/position-merge"

let data = [
    {
        id:1,
        ...objectRelatedData,
        coordinates:{
            latitude:0,
            longitude:0
        }

    },
    ...
]

main(data, 1);

console.log(data)
```

Please note that you should pass a mutable array as a first parameter to this function as it directly affects the structure of the given array. Make sure your data is declared with a `let` keyword and not `const`!

## Parameter Structure
### 1. data
The first parameter is an array of mutable objects formated similar to the one in the following example: 
```
let data = [
    {
        id:1,
        ...objectRelatedData,
        coordinates:{
            latitude:0,
            longitude:0
        }

    },
    ...
]
```
### 2. tolerance
```
let tolerance = 1; // Integer Number
let tolerance = 1.5321 // Float Number
... any other legal number
```
