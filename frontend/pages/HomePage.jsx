import React from 'react'
import Header from '../src/components/Header.jsx'
import AddTask from '../src/components/AddTask.jsx'
import StatsAndFilters from '../src/components/StatsAndFilters.jsx'
import TaskList from '../src/components/TaskList.jsx'
import TaskListPagination from '../src/components/TaskListPagination.jsx'
import DateTimeFilter from '../src/components/DateTimeFilter.jsx'
import Footer from '../src/components/Footer.jsx'

const HomePage = () => {
    return (
        <div className="min-h-screen w-full bg-[#fecff] relative">
            <div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
                        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
                    `
                }}
            >
                <div class="container pt-8 mx-auto relative z-10">
                    <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
                        {/* đầu trang */}
                        <Header />

                        {/* Tạo nhiệm vụ */}
                        <AddTask />

                        {/* Thống kê và Bộc lọc */}
                        <StatsAndFilters />

                        {/* Danh sách nhiệm vụ */}
                        <TaskList />

                        {/* Phân trang */}
                        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                            <TaskListPagination />
                            <DateTimeFilter />
                        </div>
                        {/* Cuối trang */}
                        <Footer />
                    </div>
                </div>

            </div>
        </div>


    )
}

export default HomePage