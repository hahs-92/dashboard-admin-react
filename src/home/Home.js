//componnets
import { Chart } from '../components/chart/Chart'
import { FeaturedInfo } from '../components/featuredInfo/FeaturedInfo'
//styles
import style from './home.module.css'
//dummy data
import { userData } from '../dummyData'

export const Home = () => {
    return (
        <main className={ style.home }>
            <FeaturedInfo />
            <Chart
                title="User Analytics"
                data={ userData }
                label="name"
                dataKey="Active User"
                grid
            />
        </main>
    )
}
