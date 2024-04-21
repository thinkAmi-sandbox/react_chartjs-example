import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {Pie} from "react-chartjs-2";
import {createLazyRoute} from "@tanstack/react-router";

const alwaysTooltipPlugin = {
  id: 'alwaysShowTooltip',
  afterDraw(chart: ChartJS) {
    const {ctx} = chart
    chart.data.datasets.forEach((_dataset, i) => {
      chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
        const {x, y} = datapoint.tooltipPosition(false)

        const text = chart.data.labels ?
          (chart.data.labels[index] ?? '' + ': ' + chart.data.datasets[i].data[index]).toString() :
          ''

        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(text, x, y)
      })
    })
  }
}

const Component = () => {
  ChartJS.register(ArcElement, Tooltip, Legend, alwaysTooltipPlugin)
  ChartJS.overrides.pie.plugins.legend.position = 'right'

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

export const Route = createLazyRoute('/pie_chart/pie_chart_with_always_text')({
  component: Component
})