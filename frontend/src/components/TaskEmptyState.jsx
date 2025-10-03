import React from 'react'
import { Card } from './ui/card'
import { Circle } from 'lucide-react'


const TaskEmptyState = ({ filter }) => {
    return (
        <Card
            className="p-8 text-center border-0 bg-gradient-card shadow-custom-md"
        >
            <div className='space-y-3'>
                <Circle className='mx-auto size-12 text-muted-foreground'>
                    <div>
                        <h3 className='font-medium text-foreground'>
                            {
                                filter === 'active' ?
                                    "Không có nhiệm vụ nào đang làm." :
                                    filter === 'completed' ?
                                        "Không có nhiệm vụ nào hoàn thành." : "Không có nhiệm vụ nào."
                            }
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                            {
                                filter === 'all' ? "Thêm nhiệm vụ đầu tien vào để bắt đầu" :
                                    `Chuyển sang tất cả thấy những nhiệm vụ khác"
                                    ${filter === 'active' ? "đã hoàn thành" : "đang làm"}`
                            }
                        </p>
                    </div>
                </Circle>
            </div >

        </Card >
    )
}

export default TaskEmptyState