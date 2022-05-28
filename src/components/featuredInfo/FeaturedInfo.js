//icons
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
//styles
import style from './featuredInfo.module.css'

export const FeaturedInfo = () => {
    return (
        <section className={ style.featured}>
            <article className={ style.item}>
                <span className={ style.title }>Revanue</span>
                <div className={ style.moneyContainer }>
                    <span className={ style.money }>$2,415</span>
                    <span className={ style.rate }>
                        -11.4 <ArrowDownward className={ `${ style.icon } ${style.negative }` } />
                    </span>
                </div>
                <span className={ style.sub }>Compared to last month</span>
            </article>
            <article className={ style.item}>
                <span className={ style.title }>Sales</span>
                <div className={ style.moneyContainer }>
                    <span className={ style.money }>$4,415</span>
                    <span className={ style.rate }>
                        -1.4 <ArrowDownward className={ `${ style.icon } ${style.negative }` } />
                    </span>
                </div>
                <span className={ style.sub }>Compared to last month</span>
            </article>
            <article className={ style.item}>
                <span className={ style.title }>Cost</span>
                <div className={ style.moneyContainer }>
                    <span className={ style.money }>$2,215</span>
                    <span className={ style.rate }>
                        +2.4 <ArrowUpward className={ style.icon } />
                    </span>
                </div>
                <span className={ style.sub }>Compared to last month</span>
            </article>
        </section>
    )
}
