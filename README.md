# Population Factory

Population Factory generates an entire population to test your API, Web Application, you name it. Each individual citizen has the conventional characteristics of the everyday life (tax, name, lastname, address, etc) and some additional medical parameters such as Step Count, Calories, HR(Heart Rate) etc.

# Installation

`npm i population-factory`

# Usage 
```
const pf = require('population-factory');

let population = factory({
    population: factory_value,
    factory_name: 'factory_callsign',
    author: 'population_author'
});

console.log(population);
```

* *factory_value* / *integer*
* *'factory_callsign'* / *string*
* *'population_author* / *string*

