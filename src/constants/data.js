import images from "./images"
import React from "react";

const data = {
    user: {
        name: 'Tuatta',
        img: images.avt
    },
    summary: [
        {
            title: 'Часов переработки ',
            subtitle: 'в среднем',
            value: '20',
            percent: 20
        },
        {
            title: 'Должность',
            subtitle: 'на работе',
            value: 'Программист',
            percent: 38
        },
        {
            title: 'Ежемесячный доход',
            subtitle: 'на работе',
            value: '49596',
            percent: 38
        },
        {
            title: 'Лет с момента последнего повышения',
            subtitle: 'на работе',
            value: '1',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Вобликов Валерий Евгеньевич',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Вобликов В.',
            value: 70
        },
        {
            title: 'Вобликов В.',
            value: 40
        },
        {
            title: 'Вобликов В.',
            value: 60
        },
        {
            title: 'Вобликов В.',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data