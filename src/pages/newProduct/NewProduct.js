import { Publish } from '@mui/icons-material'
import styles from './newProduct.module.css'

export const NewProduct = () => {
    return (
       <main className={ styles.newProduct }>
            <h1 className={ styles.title }>New Product</h1>
            <form className={ styles.form }>
                <section className={ styles.item }>
                    <label htmlFor="file"><Publish  className={`${ styles.icon } ${styles.upload}` } /></label>
                    <input style={{display: "none"}} type="file" id="file" />
                </section>
                <section className={ styles.item }>
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </section>
                <section className={ styles.item }>
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </section>
                <div className={ styles.item }>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className={ styles.button }>Create</button>
            </form>
       </main>
    )
}
