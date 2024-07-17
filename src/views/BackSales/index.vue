<template>
  <el-header class="bg-main flex items-center justify-end"> </el-header>
  <el-main>
    <div class="flex py-5">
      <div ref="pieChartRef" class="w-1/2 h-[400px]"></div>
      <div ref="barChartRef" class="w-1/2 h-[400px]"></div>
    </div>
  </el-main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const pieChartRef = ref(null)
const barChartRef = ref(null)
let pieChart = null
let barChart = null

const pieOption = {
  title: {
    text: '近10筆訂單銷售類別',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['阿里山茶系列', '台灣紅茶系列', '凍頂烏龍茶系列', '台灣綠茶系列']
  },
  series: [
    {
      name: '銷售量',
      type: 'pie',
      radius: '50%',
      center: ['50%', '60%'],
      data: [
        { value: 13, name: '阿里山茶系列' },
        { value: 21, name: '台灣紅茶系列' },
        { value: 10, name: '凍頂烏龍茶系列' },
        { value: 13, name: '台灣綠茶系列' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

const barOption = {
  title: {
    text: '各類別營業額',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '15%',
    right: '10%',
    bottom: '10%',
    top: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['台灣綠茶系列', '凍頂烏龍茶系列', '台灣紅茶系列', '阿里山茶系列'],
    axisLabel: {
      interval: 0,
      rotate: 0
    }
  },
  series: [
    {
      name: '營業額',
      type: 'bar',
      data: [6100, 4240, 10020, 1620],
      barWidth: '40%', // 調整這個值來改變長條的寬度
      itemStyle: {
        borderRadius: [0, 4, 4, 0] // 給長條添加圓角
      }
    }
  ]
}

onMounted(() => {
  try {
    if (pieChartRef.value && barChartRef.value) {
      pieChart = echarts.init(pieChartRef.value)
      barChart = echarts.init(barChartRef.value)
      pieChart.setOption(pieOption)
      barChart.setOption(barOption)
      window.addEventListener('resize', handleResize)
    } else {
      console.error('Chart containers not found')
    }
  } catch (error) {
    console.error('Error initializing charts:', error)
  }
})

onUnmounted(() => {
  if (pieChart) {
    pieChart.dispose()
  }
  if (barChart) {
    barChart.dispose()
  }
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  if (pieChart) {
    pieChart.resize()
  }
  if (barChart) {
    barChart.resize()
  }
}
</script>