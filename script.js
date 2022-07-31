const getToDos = (resource,callback)=>{

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
            callback(undefined,data)
    
            // If the state indicates request completed, but the status isn't success, log an error
        } else if (request.readyState === 4){
            callback("Request failed because of Error: " + request.status, undefined)
        }
    })
    
    // Sets the endpoint and type of request for the http request
    // In this case we want to GET data and the endpoint we're getting it from it jsonplaceholder
    
    request.open("GET",resource)
    // This sends the http request, activating it
    request.send()
    }
    

    // Callback hell, avoid this with the use of promises
    getToDos("todos/todos.json",(err,data)=>{
        console.log(data)
        getToDos("todos/mario.json",(err,data)=>{
            console.log(data)
            getToDos("todos/shaun.json",(err,data)=>{
                console.log(data)
        
                })
            })
        })
    