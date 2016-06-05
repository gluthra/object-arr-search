# object-arr-search

Search an object in an array of objects with given key and value


## Installation

```sh
$ npm install object-arr-search
```


## Usage

```js
var inObjSearch = require('object-arr-search');

// inObjSearch(objArray, 'keyName', 'searchValue');
// e.g. if we want to search for keyName = city and
// the value of city being San Jose in the array of
// objects given below

var inputObjArr = [
    {
        "city": "Santa Clara",
        "state": "CA"
    },
    {
        "city": "Mountain View CDP",
        "state": "CA"
    },
    {
        "city": "Boxborough",
        "state": "MA"
    },
    {
        "city": "Beaverton",
        "state": "OR"
    },
    {
        "city": "Dallas",
        "state": "TX"
    },
    {
        "city": "Grass Valley",
        "state": "CA"
    },
    {
        "city": "Laguna Niguel",
        "state": "CA"
    },
    {
        "city": "Chandler",
        "state": "AZ"
    },
    {
        "city": "Minneapolis",
        "state": "MN"
    },
    {
        "city": "Cypress",
        "state": "CA"
    },
    {
        "city": "Manhattan Beach",
        "state": "CA"
    },
    {
        "city": "Sunnyvale",
        "state": "CA"
    },
    {
        "city": "Tucson",
        "state": "AZ"
    },
    {
        "city": "Fargo",
        "state": "ND"
    },
    {
        "city": "Plano",
        "state": "TX"
    },
    {
        "city": "Irvine",
        "state": "CA"
    },
    {
        "city": "Somerset",
        "state": "NJ"
    },
    {
        "city": "Federal Way",
        "state": "WA"
    },
    {
        "city": "Chicago",
        "state": "IL"
    },
    {
        "city": "Duluth",
        "state": "GA"
    },
    {
        "city": "Austin",
        "state": "TX"
    },
    {
        "city": "Wilmington",
        "state": "MA"
    },
    {
        "city": "Mounds View",
        "state": "MN"
    },
    {
        "city": "Pocatello",
        "state": "ID"
    },
    {
        "city": "Stafford",
        "state": "TX"
    },
    {
        "city": "Milpitas",
        "state": "CA"
    },
    {
        "city": "San Jose",
        "state": "CA"
    },
    {
        "city": "Deerfield Beach",
        "state": "FL"
    },
    {
        "city": "Boston",
        "state": "MA"
    },
    {
        "city": "Camarillo",
        "state": "CA"
    },
    {
        "city": "San Diego",
        "state": "CA"
    },
    {
        "city": "Campbell",
        "state": "CA"
    },
    {
        "city": "Solon",
        "state": "OH"
    },
    {
        "city": "Brooklyn Park",
        "state": "MN"
    },
    {
        "city": "Tempe",
        "state": "AZ"
    },
    {
        "city": "Westlake Village",
        "state": "CA"
    },
    {
        "city": "Pullman",
        "state": "WA"
    },
    {
        "city": "Morrisville",
        "state": "NC"
    },
    {
        "city": "San Francisco",
        "state": "CA"
    },
    {
        "city": "Los Angeles",
        "state": "CA"
    },
    {
        "city": "Melbourne",
        "state": "FL"
    },
    {
        "city": "Greensboro",
        "state": "NC"
    },
    {
        "city": "Norwood",
        "state": "MA"
    },
    {
        "city": "Torrance",
        "state": "CA"
    },
    {
        "city": "Phoenix",
        "state": "AZ"
    },
    {
        "city": "Aliso Viejo",
        "state": "CA"
    },
    {
        "city": "Raleigh",
        "state": "NC"
    },
    {
        "city": "Seattle",
        "state": "WA"
    },
    {
        "city": "Carlsbad",
        "state": "CA"
    },
    {
        "city": "Collierville",
        "state": "TN"
    },
    {
        "city": "Newport Beach",
        "state": "CA"
    },
    {
        "city": "Burbank City",
        "state": "CA"
    },
    {
        "city": "Nashua",
        "state": "NH"
    },
    {
        "city": "",
        "state": "CA"
    },
    {
        "city": "Santa Monica",
        "state": "CA"
    }
];

inObjSearch(inputObjArr, 'city', 'San Jose');
//=> true


inObjSearch(inputObjArr, 'city', 'New York');
//=> false

```


## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)