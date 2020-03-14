# Population Factory

Population Factory generates an entire population to test your API, Web Application, you name it.

# Installation

` npm install population-factory --save `

# Usage 
```
const pf = require('population-factory');

let population = pf.factory({
    population: 100,
    factory_name: 'My Factory',
    author: 'George Zafiris'
});

console.log(population);
```
