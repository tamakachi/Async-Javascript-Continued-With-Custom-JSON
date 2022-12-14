const getToDos = (resource)=>{

    return new Promise((resolve,reject)=>{
    
    // Creates a new XMLHttpRequest object, which can be used for HTTP requests with API's etc..
    
    const request = new XMLHttpRequest();
    
    //  Fires a callback function every time the http request state changes
    //  States are from 1-4
    //  4 means the request is completed and ready to be used
    
    request.addEventListener("readystatechange",()=>{
        
        // .readyState 4 means request completed, status 200 means the data was retrieved successfully
        if (request.readyState === 4 && request.status === 200){
            // Converts the JSON from string format into Javascript Object
            // JSON stands for Javascript object notation
            const data = JSON.parse(request.responseText)
            //logs the response of the request, in this case it's a JSON
            resolve(data)
    
            // If the state indicates request completed, but the status isn't success, log an error
        } else if (request.readyState === 4){
            reject("Request failed because of Error: " + request.status, undefined)
        }
    })
    
    // Sets the endpoint and type of request for the http request
    // In this case we want to GET data and the endpoint we're getting it from it jsonplaceholder
    
    request.open("GET",resource)
    // This sends the http request, activating it
    request.send()
    })

    }
    
// Promise chaining, use this to avoid callback hell
// Inside the .then{} insert a return for the following get request and then simply add a .then at the end of that block
// A promise will return and when it completes it will fire the second.then
// You only need one .catch at the end to catch all errors

    getToDos('todos/todos.json').then((data)=>{
        console.log("Promise 1 todos.json resolved:" ,data)
        return getToDos('todos/shaun.json')
    }).then((data)=>{
        console.log("Promise 2 shaun.json resolved:",data)
        return getToDos("todos/mario.json")
    }).then((data)=>{
        console.log("Promise 3 mario.json resolved:",data)
    })
    .catch((error)=>{
        console.log("Promise rejected:", error)
    })



    // Callback hell, avoid this with the use of promises
    // getToDos("todos/todos.json",(err,data)=>{
    //     console.log(data)
    //     getToDos("todos/mario.json",(err,data)=>{
    //         console.log(data)
    //         getToDos("todos/shaun.json",(err,data)=>{
    //             console.log(data)
        
    //             })
    //         })
    //     })

    // Promise basics

        const doSomething = () =>{

            // Returns a promise, when resolve() is used it fires .then, when reject() is used
            // Then .catch is fired
            return new Promise((resolve,reject)=>{

                resolve('Some data')
                reject('some error')

            })
        }

        doSomething().then((data)=>{
            console.log(data)
         }).catch((error)=>{
            console.log(error)
         })