import "./SyncVsAsync.css";

function SyncVsAsync(){
    
    


    return (
        <div>
           <div className="content-container">
             
             <div className="content1">Synchronous vs Asynchronous</div>
             <div className="subcontent1">
                 Synchronous code is code that begins at the top of a JS file, and executes
                 line by line until it reaches the bottom. Similarly, asynchronous code starts at the top
                  and executes line by line, except during execution it can run into async functions/code.
                  When it reaches these points in the code, this means that it will wait for a response
                   which can cause it to take a different amount of time. So while waiting, this can cause
                    the code to be executed in different orders (not the predictable top to bottom) which might make
                    it difficult to follow. 
             </div>
             <div className="example1"></div>
             <div className="subcontent1">
                 The expected output of the above code would result in a 0 followed by a 1.
                  This is how synchronous code runs, top to bottom. But, to better understand asynchronous
                   functions, we can use the <code>setTimeout()</code> function. This functions takes to parameters 
                   where the first is a function, and the second is a certain amount of time to delay until the function is called.
                   Now if we were to add this function to the code above, the output is slightly different.
             </div>
             <div className="example2"></div>
             <div className="subcontent1">
                 The output for the above code is '100' then '1', and finally 'Timeout: 100'. The reasons 
                 that setTimeout is printing 100 is because of it being asynchronous. All the other code continues to run
                while the setTimeout is waiting to execute the function inside. So once it reaches its delay time, then it executes
                the function, and at the time of execution, variable 'a' is already reassigned to 100.
             </div>
             <div className="content1">Async Await</div>
             <div className="subcontent1">
                 When writing code, certain functions can be started with the keyword <code>async</code> which 
                 tells javascript that the function has asynchronous properties. Using this keyword can make it easier to
                interact with promise objects (looks a lot cleaner too!). But it is important to pair the keyword with another one: <code>await</code>.
                <code>await</code> lets us know that we want to wait for the response from the promise. Now error handling can become slightly
                different, but the main thing to note is to use a <code>try{} catch{} </code> block. In the example below, you can
                see how simplified the code becomes using the two keywords, especially in cases with chained <code>.then()</code>s.
             </div>
             <div className="example3"></div>
             <div className="subcontent1">
                Now using async await keywords, interacting with the promise becomes a bit more recognizable. 
             </div>
             <div className="example4"></div>
             <div className="subcontent1">
                In this application, async await was used for API calls as well. For the function that makes an API call,
                it is preceeded by a <code>async</code> keyword. And just like the example, the response also has an <code>await</code>
                keyword as well. 
             </div>
{/* To Do

-Async Await
-fetch functions (get,post,update,delete)

*/}
             
           </div>
           
           
        </div>

    

    )
}
export default SyncVsAsync