import React from 'react'
import moment from "moment"
import { DatePicker } from 'antd';

const Calendar = () => {

  const [date] = React.useState('01/01/2015',)

  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    return (
        <>
            <DatePicker defaultValue={moment(date, dateFormatList[0])} format={dateFormatList} />
        </>
    )
}

export default Calendar
