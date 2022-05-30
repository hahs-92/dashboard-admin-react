import { Link } from 'react-router-dom'
//styles
import style from './product.module.css'
//components
import { Chart } from '../../components/chart/Chart'
//dummy data
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'

export const Product = () => {
    return (
        <main className={ style.product }>
            <section className={ style.header }>
                <h1 className={ style.title }>Product</h1>
                <Link to="/newProduct">
                    <button className={ style.addButton }>Create</button>
                </Link>
            </section>
            <section className={ style.top }>
                <article className={ style.topLeft }>
                    <Chart
                        data={ productData }
                        title="Sales Performance"
                        label="name"
                        dataKey="Sales"
                        grid
                    />
                </article>
                <article className={ style.topRight }>
                    <section className={ style.infoTop }>
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="product" />
                        <span className={ style.productName }>Apple Airpods</span>
                    </section>
                    <section className={ style.infoBottom }>
                        <div className={ style.infoItem }>
                            <span className={ style.infoKey }>id:</span>
                            <span className={ style.infoValue }>123</span>
                        </div>
                        <div className={ style.infoItem }>
                            <span className={ style.infoKey }>sales:</span>
                            <span className={ style.infoValue }>2345</span>
                        </div>
                        <div className={ style.infoItem }>
                            <span className={ style.infoKey }>active:</span>
                            <span className={ style.infoValue }>yes</span>
                        </div>
                        <div className={ style.infoItem }>
                            <span className={ style.infoKey }>in stock:</span>
                            <span className={ style.infoValue }>no</span>
                        </div>
                    </section>
                </article>
            </section>
            <section className={ style.bottom }>
                <form className={ style.form }>
                    <section className={ style.formLeft }>
                        <label htmlFor="name">Product Name:</label>
                        <input id='name' type="text" placeholder='Airpod' />
                        <label htmlFor="stock">In Stock</label>
                        <select name="stock" id="stock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="active">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </section>
                    <section className={ style.formRight}>
                        <article className={ style.upload }>
                            <img
                                className={ style.uploadImage }
                                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="avatar" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />

                        </article>
                        <button className={ style.button }>Update</button>
                    </section>
                </form>
            </section>
        </main>
    )
}
