import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
//styles
import style from './user.module.css'

export const User = () => {
    return (
        <main className={ style.user }>
            <section className={ style.header }>
                <h1 className={ style.title}>Edit User</h1>
                <Link to="/newUser" >
                    <button className={ style.addButton }>Create</button>
                </Link>
            </section>
            <section className={ style.content }>
                <article className={ style.show }>
                    <section className={ style.showTop }>
                        <img
                            className={ style.showTopImage }
                            src="https://media.istockphoto.com/photos/woman-wearing-vr-glasses-s-picture-id1351141161?b=1&k=20&m=1351141161&s=612x612&w=0&h=OtUJG9i3wmeufIAuTTjISAz7AQVRB3bCOQyp12gNNuw="
                            alt="avatar"
                        />
                        <div className={ style.showTopTitle }>
                            <span className={ style.showTopUsername }>
                                Anna Becker
                            </span>
                            <span className={ style.showTopUserRole }>
                                SoftWare Engineer
                            </span>
                        </div>
                    </section>
                    <section className={ style.showBotton }>
                        <span className={ style.showBottomTitle }>
                            Account Details
                        </span>
                        <div className={ style.showBottomInfo } >
                            <PermIdentity className={ style.icon } />
                            <span className={ style.showBottomInfoTilte  }>
                                annabeck99
                            </span>
                        </div>
                        <div className={ style.showBottomInfo } >
                            <CalendarToday className={ style.icon } />
                            <span className={ style.showBottomInfoTilte  }>
                                31.08.1992
                            </span>
                        </div>
                        <span className={ style.showBottomTitle }>
                            Contact Details
                        </span>
                        <div className={ style.showBottomInfo } >
                            <PhoneAndroid className={ style.icon } />
                            <span className={ style.showBottomInfoTilte  }>
                                +57 321 9357540
                            </span>
                        </div>
                        <div className={ style.showBottomInfo } >
                            <MailOutline className={ style.icon } />
                            <span className={ style.showBottomInfoTilte  }>
                                annabeck99@email.com
                            </span>
                        </div>
                        <div className={ style.showBottomInfo } >
                            <LocationSearching className={ style.icon } />
                            <span className={ style.showBottomInfoTilte  }>
                                Puente Nacional / Colombia
                            </span>
                        </div>
                    </section>
                </article>
                <article className={ style.update }>
                    <span className={ style.updateTitle }>Edit</span>
                    <form className={ style.updateForm }>
                        <section className={ style.updateLeft}>
                            <article className={ style.updateItem }>
                                <label htmlFor="username">Username</label>
                                <input
                                    className={ style.updateInput }
                                    id="username"
                                    type="text"
                                    placeholder='annabeck99'
                                />
                            </article>
                            <article className={ style.updateItem }>
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                    className={ style.updateInput }
                                    id="fullname"
                                    type="text"
                                    placeholder='Anna Becker'
                                />
                            </article>
                            <article className={ style.updateItem }>
                                <label htmlFor="email">Email</label>
                                <input
                                    className={ style.updateInput }
                                    id="email"
                                    type="email"
                                    placeholder='annabeck99@email.com'
                                />
                            </article>
                            <article className={ style.updateItem }>
                                <label htmlFor="phonenumber">Phone</label>
                                <input
                                    className={ style.updateInput }
                                    id="phonenumber"
                                    type="text"
                                    placeholder='+ 57 321 9357540'
                                />
                            </article>
                            <article className={ style.updateItem }>
                                <label htmlFor="address">Address</label>
                                <input
                                    className={ style.updateInput }
                                    id="address"
                                    type="text"
                                    placeholder='annabeck99'
                                />
                            </article>
                        </section>
                        <section className={ style.updateRight }>
                            <article className={ style.updateUpload }>
                                <img
                                    className={ style.updateImage }
                                    src="https://media.istockphoto.com/photos/woman-wearing-vr-glasses-s-picture-id1351141161?b=1&k=20&m=1351141161&s=612x612&w=0&h=OtUJG9i3wmeufIAuTTjISAz7AQVRB3bCOQyp12gNNuw="
                                    alt="avatar"
                                />
                                <label htmlFor="file"><Publish  className={`${ style.icon } ${style.upload}` } /></label>
                                <input id="file" type="file" style={{display: "none"}}/>
                            </article>
                            <button className={ style.updateButton }>Update</button>
                        </section>
                    </form>
                </article>
            </section>
        </main>
    )
}
