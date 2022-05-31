import './Promises.css'

function Promises(){
    
    return(
        <div>
            <div className="content-container">
            
             <div className="content1">What is a Promise</div>
             <div className="subcontent1">
                 A promise is exactly what you would think it is. A promise! 
                 When you ask someone to promise to do something there are essentially only two options.
                 Either they are able to do it, or they can't. The same goes from promises in Javascript. A Promise is 
                 code that commits to doing something with the possibility of two different outcomes. One being that the code/promise is completed
                 meaning that the promise is resolved, and the second being the promise failed, so the promise is rejected. Now, based on these two outcomes
                 it lets us behave accordingly. If a promise is completed, it is usually followed by a <code>.then()</code> which is basically the next
                 steps to be done after the promise was resolved. But, it's important to account for the case of a rejection, so a 
                 <code>.catch()</code> is used in these particular cases. An example of a promise without the <code>.then()</code>
                 or <code>.catch()</code> can be seen below.
             </div>
             <div className="promise1"></div>
             
             <div className="content1">
                 Interacting With Promises
             </div>
             <div className="subcontent1">
                Now given a promise object like in the example, you want to be able to use the data 
                that is returned. Like mentioned earlier, depending on the response of the promise, there are two routes that can be taken. 
                The <code>.then()</code> is used once a promise is resolved. When using it, it is appended to the end of a 
                promise object. Similarly, the <code>.catch()</code> is added after the final <code>.then()</code> (There can be multiple .then()
                 if promises are <a href="https://javascript.info/promise-chaining">chained</a>). In both the then and catch, you are then able to use the
                 returned data from the promise object as you please. In the example below, it will print the data it recieves from the promise object.
             </div>
             <div className="promise2"></div>
             <div className="subcontent1">
                When creating this web application, a promise object is used whenever the 'Random Quote' button is pressed. It gets data from an API,
                and depending on the result (resolved or reject), it handles the response accordingly. On the resolved response,
                a random quote is displayed, but if an error were to occur, the catch function would handle that as well.
                <br />* To see the code feel free to visit the github *
             </div>
            </div>
            


        </div>
    )
}

export default Promises

