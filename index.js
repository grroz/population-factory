function factory(options){
    let objs = [];
    let population = (options.population >= 0) ? options.population : Math.round(Math.random() * 3) * 10;
    let populationName = (options.factory_name) ? options.factory_name : Math.random().toString(36).substring(7);
    let author = (options.author) ? options.author : Math.random().toString(36).substring(7);
    let id = 0;
    for(let i = 0; i < population; i++){
            let objName = Math.random().toString(36).substring(7);
            let objValue = Math.round(Math.random() * 10000);
            let objDate = new Date().getTime() + 3200;
            let objLat = Math.random() * 100;
            let objLong = Math.random() * 100;
            let objTax = Math.round(Math.random() * 10000);
            let objAddress = Math.random().toString(36).substring(7);
            let objLast = Math.random().toString(36).substring(7);
            let objEmail = Math.random().toString(36).substring(7) + '@' + Math.random().toString(36).substring(7) + '.com';
            let objHR = Math.round(80 + (Math.random() * 120));
            let objSteps = Math.round(Math.random() * 1000);
            let objGender = Math.round(Math.random() * 2);
            let objBirth = new Date().getTime() + 1005200;
            let objCals = Math.round(Math.random() * 5000);
            let objBP = {
                'systolic_pressure' : Math.round(80 + Math.random() * 50),
                'diastolic_pressure' : Math.round(50 + Math.random() * 30)
            };

            let objCity = Math.random().toString(36).substring(7);
            let objPostal = Math.round(Math.random() * 99999);
            let objOxygen = Math.random() * 100;
            let objGlucose = Math.round(Math.random() * 100);
            let objPhone = '(' + Math.round(100 + Math.random() * 999) + ')' + Math.round(100 + Math.random() * 999) + '-' + Math.round(100 + Math.random() * 999) + Math.round(Math.random() * 9);

            objs.push({
                id: id,
                name: objName,
                lastname: objLast,
                gender: (objGender == 1) ? 'male' : 'female',
                city: objCity, 
                postal: objPostal,
                birth: objBirth,
                email: objEmail,
                value: objValue,
                phone: objPhone,
                lat: objLat,
                long: objLong,
                date: objDate,
                tax: objTax,
                address: objAddress,
                medical : {
                    heartrate: objHR,
                    steps: objSteps,
                    calories: objCals,
                    oxygen : objOxygen,
                    blood_pressure : objBP, 
                    glucose: objGlucose
                }
            });
            id++;
    }

    return [{'population_factory': populationName, 
             'population' : objs, 
             'population_total' : objs.length,
             'population_creator': author }];
}

module.exports.factory = factory;
