   async function myExample(){
    let myPromise =  new Promise (function (resolve){
        setTimeout(function(){
            {
                resolve("i am novil ");
            }
        },5000)    
    })
    document.getElementById("first").innerHTML = await myPromise
   };
   myExample();