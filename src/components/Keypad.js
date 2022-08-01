// Code Keypad Component Here

function Keypad (){
    function passwordHandler(e){
        console.log("Entering password...")
    }
    
    
    
    return (
        <div>
            <input onChange={passwordHandler} type="password" />
        </div>
    )
}

export default Keypad;