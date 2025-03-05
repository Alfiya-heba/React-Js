
function Button(){

    const styles={
       //Inline Css//
            backgroundColor:"orange",
            color: "white",
            padding:"10px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
      
    }
    return(
        <button style={styles}>Click Me</button>

    );
}

export default Button;