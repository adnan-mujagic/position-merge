# Position Merge Package

This is an algorithm with approximate complexity of O(NlogN) that takes an array of data with coordinates and merges the objects that are physically close to each other into subarrays.
It has one publicly accessible function `main(data: Array[], tolerance: Number)`. Please make sure that the data array that you provide has at least one element!

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

This is a number that determines whether two coordinates are close to each other. It is checking the closest path between the two points using Pythagorean theorem. Basically if there are two coordinates A(x1, y1) and B(x2, y2), when checking whether they are close based on specified tolerance it will check if `(abs(x2-x1))² + (abs(y2-y1))² <= tolerance²`

```
let tolerance = 1; // Integer Number
let tolerance = 1.5321 // Float Number
... any other legal number
```
