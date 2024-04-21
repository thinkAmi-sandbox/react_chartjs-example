// import './App.css'
// import {createRouter} from "@tanstack/react-router";
// import {routeTree} from "./routeTree.gen.ts";
//
//
//
// function App() {
//   const alwaysShowTooltip = {
//     id: 'alwaysShowTooltip',
//     afterDraw(chart: ChartJS) {
//       const { ctx } = chart
//       ctx.save()
//
//       chart.data.datasets.forEach((_dataset, i) => {
//         chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
//           const {x, y} = datapoint.tooltipPosition(false)
//
//           const text: string = chart.data.labels ?
//             (chart.data.labels[index] ?? '' + ': ' + chart.data.datasets[i].data[index]).toString() : ''
//           const textWidth = ctx.measureText(text).width
//           ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
//
//           ctx.fillRect(x - (textWidth + 10) / 2, y - 25, textWidth + 10, 20 )
//
//           // triangle
//           ctx.beginPath()
//           ctx.moveTo(x, y)
//           ctx.lineTo(x - 5, y - 5)
//           ctx.lineTo(x + 5, y - 5)
//           ctx.fill()
//           ctx.restore()
//
//           // text
//           ctx.font = '12px Arial'
//           ctx.fillStyle = 'white'
//           ctx.fillText(text, x - (textWidth / 2), y - 10)
//           ctx.restore()
//         })
//       })
//     }
//   }
//
//   ChartJS.register(ArcElement, Tooltip, Legend, alwaysShowTooltip)
//   ChartJS.overrides.pie.plugins.legend.position = 'right'
//
//   const data = {
//     labels: ['奥州ロマン', 'シナノゴールド', 'ピンクレディ', 'ブラムリー'],
//     datasets: [
//       {
//         label: '購入数',
//         data: [1, 5, 3, 2],
//         backgroundColor: [
//           'firebrick', 'gold', 'pink', 'lightgreen'
//         ],
//         borderColor: [
//           'firebrick', 'gold', 'pink', 'lightgreen'
//         ],
//         borderWidth: 1
//       }
//     ]
//   }
//
//   const options = {
//     plugins: {
//       tooltip: {
//         enabled: true,
//         legend: {
//           position: 'right'
//         }
//       }
//     }
//   }
//
//   return (
//     <>
//       <Pie data={data} options={options} />
//     </>
//   )
// }
//
// export default App
