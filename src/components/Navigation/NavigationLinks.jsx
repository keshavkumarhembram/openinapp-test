import React from 'react'

import Links from './Links'
import DashBoardIcon from '../Utils/Icons/DashBoardIcon'
import ChartIcon from '../Utils/Icons/ChartIcon'
import TicketIcon from '../Utils/Icons/TicketIcon'
import DocumentIcon from '../Utils/Icons/DocumentIcon'
import CalendarIcon from '../Utils/Icons/CalendarIcon'
import NotificationIcon from '../Utils/Icons/NotificationIcon'
import SettingsIcon from '../Utils/Icons/SettingsIcon'

function NavigationLinks() {
  return (
    <ul className='flex flex-col gap-8 ml-8 mt-12'>
        <Links  name="Dashboard" to='/user/dashboard' ><DashBoardIcon /> </Links>
        <Links  name="Upload" to='/user/upload' > <ChartIcon /> </Links>
        <Links  name="Invoice" to='/user/invoice'> <TicketIcon /> </Links>
        <Links  name="Schedule" to='/user/schedule'> <DocumentIcon /> </Links>
        <Links  name="Calendar" to='/user/calendar'> <CalendarIcon /> </Links>
        <Links  name="Notification" to='/user/notification'> <NotificationIcon /> </Links>
        <Links  name="Settings" to='/user/settings'> <SettingsIcon /> </Links>
    </ul>
  )
}

export default NavigationLinks