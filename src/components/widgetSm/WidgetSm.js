import { Visibility } from '@mui/icons-material'
// styles
import style from './widgetSm.module.css'

export const WidgetSm = () => {
  return (
    <article className={ style.widgetSm }>
       <span className={ style.title }>New Join Member</span>
       <ul className={ style.list }>
           <li className={ style.listItem }>
               <img className={ style.image } src="https://images.pexels.com/photos/11612904/pexels-photo-11612904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pictruek" />
               <section className={ style.user}>
                   <span className={ style.userName }>Anna Keller</span>
                   <span className={ style.userTitle }>Software Engineer</span>
               </section>
               <button className={ style.button }>
                    <Visibility className={ style.icon } />
                   <span className={ style.button_title }>Display</span>
               </button>
           </li>
           <li className={ style.listItem }>
               <img className={ style.image } src="https://images.pexels.com/photos/11612904/pexels-photo-11612904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pictruek" />
               <section className={ style.user}>
                   <span className={ style.userName }>Anna Keller</span>
                   <span className={ style.userTitle }>Software Engineer</span>
               </section>
               <button className={ style.button }>
                    <Visibility className={ style.icon } />
                   <span className={ style.button_title }>Display</span>
               </button>
           </li>
           <li className={ style.listItem }>
               <img className={ style.image } src="https://images.pexels.com/photos/11612904/pexels-photo-11612904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pictruek" />
               <section className={ style.user}>
                   <span className={ style.userName }>Anna Keller</span>
                   <span className={ style.userTitle }>Software Engineer</span>
               </section>
               <button className={ style.button }>
                    <Visibility className={ style.icon } />
                   <span className={ style.button_title }>Display</span>
               </button>
           </li>
           <li className={ style.listItem }>
               <img className={ style.image } src="https://images.pexels.com/photos/11612904/pexels-photo-11612904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pictruek" />
               <section className={ style.user}>
                   <span className={ style.userName }>Anna Keller</span>
                   <span className={ style.userTitle }>Software Engineer</span>
               </section>
               <button className={ style.button }>
                    <Visibility className={ style.icon } />
                   <span className={ style.button_title }>Display</span>
               </button>
           </li>
           <li className={ style.listItem }>
               <img className={ style.image } src="https://images.pexels.com/photos/11612904/pexels-photo-11612904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pictruek" />
               <section className={ style.user}>
                   <span className={ style.userName }>Anna Keller</span>
                   <span className={ style.userTitle }>Software Engineer</span>
               </section>
               <button className={ style.button }>
                    <Visibility className={ style.icon } />
                   <span className={ style.button_title }>Display</span>
               </button>
           </li>
           <li className={ style.listItem }>
               <img className={ style.image } src="https://images.pexels.com/photos/11612904/pexels-photo-11612904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pictruek" />
               <section className={ style.user}>
                   <span className={ style.userName }>Anna Keller</span>
                   <span className={ style.userTitle }>Software Engineer</span>
               </section>
               <button className={ style.button }>
                    <Visibility className={ style.icon } />
                   <span className={ style.button_title }>Display</span>
               </button>
           </li>
       </ul>
    </article>
  )
}
