import './Promises.css'

function Promises(){
    
    return(
        <div>
            <div className="content-container">
            <div className="learn-title">Promises</div>
             <div className="content1">What is a Promise</div>
             <div className="subcontent1">
                 A promise is exactly what you would think it is. A promise! 
                 When you ask someone to promise to do something there are essentially only two options.
                 Either they are able to do it, or they can't. The same goes from promises in Javascript. A Promise is 
                 code that commits to doing something with the possibility of two different outcomes. One being that the code/promise is completed
                 meaning that the promise is resolved, and the second being the promise failed, so the promise is rejected. Now, based on these two outcomes
                 it lets us behave accordingly. If a promise is completed, it is usually followed by a <code>.then()</code> which is basically the next
                 steps to be done after the promise was resolved. But, it's important to account for the case of a rejection, so a 
                 <code>.catch()</code> is used in these particular cases.
                 
             </div>
             
             <div className="subcontent1">
                 
             </div>
             
             <div className="subcontent1">
               
             </div>
            </div>


        </div>
    )
}

export default Promises

