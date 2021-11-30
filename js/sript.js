
//1
let  promResponse = ms => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(ms);
            }, ms);
        });
};

let logger = time => console.log(`Resolved после ${time} ms`);
promResponse(2000).then(logger);
promResponse(5000).then(logger);


//2
let rN; 
function EmitRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 20) + 1;
            rN = randomNumber;
            console.log("Запуск через 3 секунды.");
            if (randomNumber >= 10) {
                console.log(randomNumber);
                return resolve();
            }else if (randomNumber < 10){
                return reject();
            } 
        }, 3000);
    });
  }
  
let promise = EmitRandomNumber();
promise.then(() => {
    console.log(`Рандомное число ${rN} > 10`);
    console.log(`Вернулся resolve`);
}).catch(() => {
    console.log(`Рандомное число ${rN} < 10`);
    console.log(`Вернулся reject`);
});