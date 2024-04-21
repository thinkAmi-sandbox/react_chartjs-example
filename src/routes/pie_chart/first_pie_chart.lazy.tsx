import {createLazyRoute} from "@tanstack/react-router"
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js'
import {Pie} from 'react-chartjs-2'


const Component = () => {
  ChartJS.register(ArcElement, Tooltip, Legend)

  const data = {
    labels: ['奥州ロマン', 'シナノゴールド', 'ピンクレディ', 'ブラムリー'],
    datasets: [
      {
        label: '購入数',
        data: [1, 5, 3, 2],
        backgroundColor: [
          'firebrick', 'gold', 'pink', 'mediumseagreen'
        ],
        borderColor: [
          'firebrick', 'gold', 'pink', 'mediumseagreen'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <Pie data={data} />
  )
}

export const Route = createLazyRoute('/pie_chart/first_pie_chart')({
  component: Component
})
