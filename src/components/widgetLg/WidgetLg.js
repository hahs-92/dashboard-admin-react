import style from './widgetLg.module.css'

export const WidgetLg = () => {

    const Button = ({ type }) => (
        <button className={ `${ style.button } ${ style[type]}`}>
            { type }
        </button>
    )

    return (
        <article className={ style.widgetLg }>
            <h3 className={ style.title }>Latest Transactions</h3>
            <table className={ style.table }>
                <tr className={ style.tr }>
                    <th className={ style.th }>Customer</th>
                    <th className={ style.th }>Date</th>
                    <th className={ style.th }>Amount</th>
                    <th className={ style.th }>Sattus</th>
                </tr>
                <tr className={ style.tr }>
                    <td className={ style.user }>
                        <img className={ style.userImage } src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                        <span className={ style.userName }>Susan Carrol</span>
                    </td>
                    <td className={ style.date }>2 Jun 2021</td>
                    <td className={ style.amount }>$122.00</td>
                    <td className={ style.status }>
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className={ style.tr }>
                    <th className={ style.th }>Customer</th>
                    <th className={ style.th }>Date</th>
                    <th className={ style.th }>Amount</th>
                    <th className={ style.th }>Sattus</th>
                </tr>
                <tr className={ style.tr }>
                    <td className={ style.user }>
                        <img className={ style.userImage } src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                        <span className={ style.userName }>Susan Carrol</span>
                    </td>
                    <td className={ style.date }>2 Jun 2021</td>
                    <td className={ style.amount }>$122.00</td>
                    <td className={ style.status }>
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className={ style.tr }>
                    <th className={ style.th }>Customer</th>
                    <th className={ style.th }>Date</th>
                    <th className={ style.th }>Amount</th>
                    <th className={ style.th }>Sattus</th>
                </tr>
                <tr className={ style.tr }>
                    <td className={ style.user }>
                        <img className={ style.userImage } src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                        <span className={ style.userName }>Susan Carrol</span>
                    </td>
                    <td className={ style.date }>2 Jun 2021</td>
                    <td className={ style.amount }>$122.00</td>
                    <td className={ style.status }>
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className={ style.tr }>
                    <th className={ style.th }>Customer</th>
                    <th className={ style.th }>Date</th>
                    <th className={ style.th }>Amount</th>
                    <th className={ style.th }>Sattus</th>
                </tr>
                <tr className={ style.tr }>
                    <td className={ style.user }>
                        <img className={ style.userImage } src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                        <span className={ style.userName }>Susan Carrol</span>
                    </td>
                    <td className={ style.date }>2 Jun 2021</td>
                    <td className={ style.amount }>$122.00</td>
                    <td className={ style.status }>
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className={ style.tr }>
                    <th className={ style.th }>Customer</th>
                    <th className={ style.th }>Date</th>
                    <th className={ style.th }>Amount</th>
                    <th className={ style.th }>Sattus</th>
                </tr>
                <tr className={ style.tr }>
                    <td className={ style.user }>
                        <img className={ style.userImage } src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                        <span className={ style.userName }>Susan Carrol</span>
                    </td>
                    <td className={ style.date }>2 Jun 2021</td>
                    <td className={ style.amount }>$122.00</td>
                    <td className={ style.status }>
                        <Button type="Pending" />
                    </td>
                </tr>
            </table>
        </article>
    )
}
