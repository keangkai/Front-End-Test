import React from 'react'
import moment from 'moment'
import { TimePicker } from 'antd';

const Time = () => {

    return (
        <div>
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')}  />
        </div>
    )
}

export default Time
