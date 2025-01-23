import styles from './Button.module.css'


function ButtonM(){

    return(<>
            <hr />
            <h2>Modules Linking</h2>
            <button className={styles.button}>Click me</button>
            <button className={styles.button2}>Do not click</button>
            <hr />
            </>
            )

}
export default ButtonM