function lowerCaseWords (mixedArray){
    return new Promise (function (resolve, reject) {
        if (!Array.isArray(mixedArray)) {
        reject(new Error("It must be an array"));
        return;
        }

        const result = mixedArray
        .filter(function(item){
            return typeof item === 'string';
        })
        .map(function(word){
            return word.toLowerCase();
        });

    resolve(result);
   
    });
    
}

const inputArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(inputArray)
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.error(error.message);
    });