import React from 'react'
import { Spin } from 'antd';


const Loading = () => {
    return (
        <div className="spin">
            <Spin size="large" tip="Loading..." />
        </div>
    )
}

export default Loading
