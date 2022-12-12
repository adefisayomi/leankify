import {useState, useEffect} from 'react'
import AsideMenu from './AsideMenu';
import Routes from '../../routes'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';



export default function Aside () {

    const [menu, setMenu] = useState('chat');
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleChangeMenu = (event, newValue) => {
        setMenu(newValue);
    };

    useEffect(() => {
        if (mobileOpen) {
        setMobileOpen(false);
        }
    }, [menu]);

    return (
        <>
        
            <AsideMenu
                sidebarConfig={TOPICS}
                menu={menu}
                isOpenSidebar={mobileOpen}
                onChangeMenu={handleChangeMenu}
                onCloseSidebar={() => setMobileOpen(false)}
            />
        </>
    )
}

const TOPICS = [
    {
      title: 'chat',
      icon: <MarkUnreadChatAltIcon sx= {{color: 'green', fontSize: '25px'}} />,
      url: Routes.dashboard.chat
    },
    {
      title: 'mail',
      icon: <MarkEmailUnreadIcon sx= {{color: 'orange', fontSize: '25px'}}/>,
      url: Routes.dashboard.mail,
    },
    {
      title: 'calender',
      icon: <CalendarMonthIcon sx= {{color: 'secondary', fontSize: '25px'}}/>,
      url: Routes.dashboard.calender
    }
  ];