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
This is a number that determines whether two coordinates are close to each other. For example if tolerance is 1, and we are comparing two coordinates `(1, 1), (0.5, 0.5)`: They **will** be merged together. Whereas if the two compared coordinates were `(1, 1), (8, 8)` they would not be considered close and as a result they **won't** merge.
```
let tolerance = 1; // Integer Number
let tolerance = 1.5321 // Float Number
... any other legal number
```
