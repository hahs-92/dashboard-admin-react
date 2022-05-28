import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
//styles
import style from './chart.module.css'

export const Chart = ({ data, title, label, dataKey, grid }) => {
    return (
        <article className={ style.chart }>
            <h3 className={ style.title }>{ title }</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1} >
                <LineChart data={data}>
                    <XAxis dataKey={ label } stroke="#5550bd" contentStyle={{ fontSize: 16 }} />
                    <Line dataKey={ dataKey } type="monotone"stroke="#5550bd" />
                    <Tooltip />
                    {
                        grid &&  <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />
                    }
                </LineChart>
            </ResponsiveContainer>
        </article>
    )
}
