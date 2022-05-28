//icons
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material'
//styles
import style from './sideBar.module.css'


export const SideBar = () => {
    return (
        <aside className={ style.sideBar }>
            <div className={ style.wrapper }>
                <menu className={ style.Menu }>
                    <h3 className={ style.title}>Dashboard</h3>
                    <ul className={ style.list }>
                        <li className={ `${style.listItem} ${style.active}` }>
                            <LineStyle className={ style.icon } />
                            <span>Home</span>
                        </li>
                        <li className={ style.listItem }>
                            <Timeline className={ style.icon } />
                            <span>Analytics</span>
                        </li>
                        <li className={ style.listItem }>
                            <TrendingUp className={ style.icon } />
                            <span>Sales</span>
                        </li>
                    </ul>
                </menu>
                <menu className={ style.Menu }>
                    <h3 className={ style.title}>Quick menu</h3>
                    <ul className={ style.list }>
                        <li className={ `${style.listItem} ${style.active}` }>
                            <PermIdentity className={ style.icon } />
                            <span>Users</span>
                        </li>
                        <li className={ style.listItem }>
                            <Storefront className={ style.icon } />
                            <span>Products</span>
                        </li>
                        <li className={ style.listItem }>
                            <AttachMoney className={ style.icon } />
                            <span>Transactions</span>
                        </li>
                         <li className={ style.listItem }>
                            <BarChart className={ style.icon } />
                            <span>Reports</span>
                        </li>
                    </ul>
                </menu>
                <menu className={ style.Menu }>
                    <h3 className={ style.title}>Notifications</h3>
                    <ul className={ style.list }>
                        <li className={ `${style.listItem} ${style.active}` }>
                            <MailOutline className={ style.icon } />
                            <span>Mail</span>
                        </li>
                        <li className={ style.listItem }>
                            <DynamicFeed className={ style.icon } />
                            <span>Feedback</span>
                        </li>
                        <li className={ style.listItem }>
                            <ChatBubbleOutline className={ style.icon } />
                            <span>Messages</span>
                        </li>
                    </ul>
                </menu>
                <menu className={ style.Menu }>
                    <h3 className={ style.title}>Staff</h3>
                    <ul className={ style.list }>
                        <li className={ `${style.listItem} ${style.active}` }>
                            <WorkOutline className={ style.icon } />
                            <span>Manage</span>
                        </li>
                        <li className={ style.listItem }>
                            <Timeline className={ style.icon } />
                            <span>Analytics</span>
                        </li>
                        <li className={ style.listItem }>
                            <Report className={ style.icon } />
                            <span>Reports</span>
                        </li>
                    </ul>
                </menu>
            </div>
        </aside>
    )
}
