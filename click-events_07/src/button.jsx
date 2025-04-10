function Button(){
    let count=0;
    const handleClick=(name)=>{
        if(count<5){
            count++;
            console.log(`${name} has clicked me ${count} times!!!`);
        }
        else{
            console.log(`${name} stop clicking me please!!!`);
        }

    } 
    //const handleClick2=(name)=> console.log(`${name} Stop Click Me!!!!`);
    return(<button onClick={()=>handleClick("Alfiya")}>Click Me</button>)
    

}
export default Button;