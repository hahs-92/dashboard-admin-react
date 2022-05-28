//componnets
import { FeaturedInfo } from '../components/featuredInfo/FeaturedInfo'
//styles
import style from './home.module.css'

export const Home = () => {
    return (
        <main className={ style.home }>
            <FeaturedInfo />
        </main>
    )
}
