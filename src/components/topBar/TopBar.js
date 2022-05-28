//styles
import style from './topBar.module.css'
// components
import  NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export const TopBar = () => {
    return (
        <section className={ style.topBar }>
            <div className={ style.topBar_Wrapper }>
                <section className={ style.topLeft }>
                    <span className={ style.logo }>Logo</span>
                </section>
                <section className={ style.topRight }>
                    <div className={ style.icons_Wrapper }>
                        <NotificationsNoneIcon  className={ style.icon }/>
                        <span className={ style.iconBag}>2</span>
                    </div>
                    <div className={ style.icons_Wrapper }>
                        <LanguageIcon className={ style.icon } />
                        <span className={ style.iconBag}>2</span>
                    </div>
                    <div className={ style.icons_Wrapper }>
                        <SettingsIcon className={ style.icon } />
                    </div>
                    <img className={ style.topAvatar} src="https://media.istockphoto.com/photos/woman-wearing-vr-glasses-s-picture-id1351141161?b=1&k=20&m=1351141161&s=612x612&w=0&h=OtUJG9i3wmeufIAuTTjISAz7AQVRB3bCOQyp12gNNuw=" alt="top-avatar" />
                </section>
            </div>
        </section>
    )
}
