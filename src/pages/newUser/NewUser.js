import style from './newUser.module.css'

export const NewUser = () => {
    return (
        <main className={ style.newUser }>
            <h1 className={ style.title }>New User</h1>
            <form className={ style.form } >
                <section className={ style.item }>
                    <label htmlFor="username">Username</label>
                    <input id='username' type="text" placeholder='Alex92' />
                </section>
                <section className={ style.item }>
                    <label htmlFor="fullname">Full Name</label>
                    <input id='fullname' type="text" placeholder='Alex Hernandez' />
                </section>
                <section className={ style.item }>
                    <label htmlFor="email">Username</label>
                    <input id='email' type="email" placeholder='Alex@email.com' />
                </section>
                <section className={ style.item }>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" placeholder='password' />
                </section>
                <section className={ style.item }>
                    <label htmlFor="phone">Phone</label>
                    <input id='phone' type="text" placeholder='+57 321 9357450' />
                </section>
                <section className={ style.item }>
                    <label htmlFor="address">Address</label>
                    <input id='address' type="text" placeholder='Puente Nacional / Colombia' />
                </section>
                <section className={ style.item }>
                    <label htmlFor="gender">Gender</label>
                    <div className={ style.genderContainer }>
                        <input id='male' type="radio" value="male" name='male'/>
                        <label htmlFor="male">Male</label>
                        <input id='female' type="radio" value="female" name='female'/>
                        <label htmlFor="female">Female</label>
                        <input id='other' type="radio" value="other" name='other'/>
                        <label htmlFor="other">Other</label>
                    </div>
                </section>
                <section className={ style.item }>
                    <label >Active</label>
                    <select className={ style.select} name="userSelect" id="userSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </section>
                <button className={ style.button }>Create</button>
            </form>
        </main>
    )
}
