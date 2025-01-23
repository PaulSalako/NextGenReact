
function ButtonInline(){

        const styles =  {
            
        backgroundColor: "hsl(240, 58%, 51%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",

        }


        return(
            <>
                <h3>Inline Styling</h3>
                <button style={styles}> Click me</button>
                <hr />
            </>
        )
}
export default ButtonInline