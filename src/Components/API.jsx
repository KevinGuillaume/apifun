import "./API.css"

function API(){
    
    
    return (
    <div>
        <div className="content-container">
            
            <div className="content1">What is a API</div>
            <div className="subcontent1">
                An API (Application Programming Interface) is an interface that lets two pieces
                of software communicate. It helps create an exchange of information based on a certain request.

            </div>
            
            
            <div className="content1">Popular API Protocols</div>
            <div className="subcontent1">
               API's can have different standards when it comes to how data will be communicated.
               Two Protocols that are commonly used are <code>REST</code> and <code>SOAP</code>.
               <br />
               When Comparing the two, they each have their own benefits that make them desirable.
            </div>
            <div className="content1">SOAP</div>
            <div className="subcontent1">
              - Standardized 
              <br />
              - Built in error handling
              <br />
              - Used a lot by enterprises
              <br />
              - Works independently (REST Requires HTTP)
            </div>
            <div className="content1">REST</div>
            <div className="subcontent1">
            - Easy to use 
              <br />
              - Fast 
              <br />
              - Efficient (Uses smaller forms of messages such as JSON)
              
              
            </div>
           </div>
    </div>
    
    )
        
    
}
export default API