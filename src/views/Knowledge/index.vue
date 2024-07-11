<template>
  <el-container class="px-8">
    <el-header class="text-2xl font-semibold underline decoration-solid decoration-main"
      >台灣茶常見種類：帶你了解六大茶系
    </el-header>
    <el-main>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" :label="t('knowledge.name')" width="200" />
        <el-table-column prop="category" :label="t('knowledge.category')" width="200" />
        <el-table-column prop="processing" :label="t('knowledge.processing')" />
      </el-table>
    </el-main>
  </el-container>

  <el-container class="px-8">
    <el-header class="text-2xl font-semibold underline decoration-solid decoration-main"
      >台灣茶的六大產區在哪裡？
    </el-header>
    <el-main>
      <ol class="list-decimal">
        <li class="py-2" v-for="item in knowledgeList" :key="item.id">{{ item.desc }}</li>
      </ol>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const tableData = [
  {
    name: '綠茶',
    category: '屬不發酵茶',
    processing:
      '綠茶是完全不經過發酵階段，直接進行「炒菁」或「蒸菁」等加熱處理的茶類。由於茶葉乾燥過程不需經過發酵程序，讓茶葉的葉綠色澤能夠完整保存，因此茶湯最接近原有的茶葉原色。'
  },
  {
    name: '黃茶',
    category: '屬部分發酵茶',
    processing:
      '黃茶是經過部分發酵的茶，發酵程度約10-20%，與綠茶的差別在於黃茶在「揉捻」和「乾燥」之間多了一道「燜堆渥黃」的手續，讓茶葉與茶湯比起綠茶更略帶了一些金黃明亮，代表茶品有湖南的君山銀針、安徽的霍山黃芽等。'
  },
  {
    name: '白茶',
    category: '屬部分發酵茶',
    processing:
      '白茶也是屬於輕度發酵的茶，發酵度約5-10％，不經過「揉捻」手續，只接將細嫩的茶葉曬乾或烘乾，外型非常接近茶葉原型，茶葉背面略帶嫩芽上才有的細絨毛，又稱「白毫」。現今的白茶大多來自中國福建，以銀針白毫最為著名。'
  },
  {
    name: '青茶',
    category: '屬部分發酵茶',
    processing:
      '青茶，也就是俗稱的烏龍茶，屬於部分發酵的茶，根據不同的品種可以有15%-85%的發酵度落差，而青茶的茶湯深度也會根據發酵度影響，常見的青茶有輕發酵的文山包種茶、中發酵的凍頂烏龍。'
  },
  {
    name: '紅茶',
    category: '屬全發酵茶',
    processing:
      '紅茶是一種全發酵茶，也因為經過發酵的過程，紅茶可以比其它茶葉有更長的保存時間，也因此，紅茶能夠透過長程運輸傳到世界各地，是世界上僅次於白開水之外排名第二普及的飲料，佔全球茶葉總產量的七成以上。'
  },
  {
    name: '黑茶',
    category: '屬後發酵茶',
    processing:
      '黑茶是一種透過長期陳放茶葉，讓其中的麴菌發酵而成的發酵茶，茶葉大多會壓製成團狀或餅狀，泡出來的長湯顏色呈黑褐色且略微混濁。黑茶主要的產地位於中國雲南，雲南普洱茶就是黑茶的一種。'
  }
]

const knowledgeList = ref([
  {
    id: 1,
    desc: '鹿谷茶區：南投是台灣產茶重要的茶區，鹿谷鄉茶區最具名的就是凍頂烏龍，凍頂山上的鳳凰村,永隆村,彰雅村所產的凍頂烏龍更是令人驚艷。除了烏龍茶以外魚池鄉的日月潭紅茶也是非常受歡迎，其中最出名的是紅玉紅茶，其茶湯明亮鮮紅是亞洲有名的紅茶精品之一，茶香有著天然肉桂和淡淡的薄荷香，口感鮮明溫潤，帶著香氣與天然的甘甜。'
  },
  {
    id: 2,
    desc: '玉山茶區：玉山茶區的茶葉有的帶有杉木的香味，更有的帶有淡奶香味，值得細細品味。位在南投縣信義鄉的玉山茶區，海拔約為1000-1800公尺，主要茶種是青心烏龍和金萱茶。玉山茶區常年雲霧繚繞，水氣豐沛，茶區產出來的茶特別香醇回甘，可惜的是地勢原因導致茶葉產量不多。'
  },
  {
    id: 3,
    desc: '阿里山茶區：最有名的就是阿里山烏龍茶，當地氣候涼爽寒冷，而且早晚雲霧繚繞日照時間少，如此優質的環境培養出柔軟厚實的茶菁。阿里山茶區的烏龍茶，香氣淡雅回甘茶味不澀，是早期台灣高級茶的代稱，也是揚名海外的台灣茶葉。'
  },
  {
    id: 4,
    desc: '杉林溪茶區：海拔約為1800公尺左右，位於南投竹山鎮，是阿里山的支脈，衫林溪茶區終年生長在杉樹之間，沖泡出來的茶略帶杉樹味道，帶著杉木香和綠竹味是杉林溪茶區的特有茶香，讓人有種置身於森林中洗滌靈魂的療癒感。'
  },
  {
    id: 5,
    desc: '梨山茶區：位於海拔1600至2600公尺，是台灣平均高度最高的茶區，梨山茶區因為日夜溫差大且冬季常有下雪因此茶葉生長緩慢，造就茶菁結構厚實口感甘醇，也因為海拔高度高茶葉冷礦味特別的重。梨山也盛產高山水果，茶園分佈在果樹之中，茶樹在成長時會吸收天然果香，因此製作出來的梨山茶會帶有天然果香非常特別，非常值得細細品味。'
  },
  {
    id: 6,
    desc: '大禹嶺茶區：海拔高度約2800公尺，是六大茶區中最高海拔的茶區，由於茶葉生長在高海拔地區，所以茶葉的苦澀度偏低葉片也比一般茶葉更加厚實，大禹嶺茶區所產的茶葉茶湯氣味非常厚實香氣十足，厚實的茶葉經過低烘培低發酵，沖泡時茶香撲鼻而來，入口後鮮明的口感令人印象深刻，特殊的醇厚豆香帶有高山烏龍的霸氣香味，令茶人品嚐後趨之若鶩。'
  }
])
</script>
