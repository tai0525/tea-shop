<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <ul v-for="item in footerList" :key="item.id">
          <Link style="width: 1em; margin-right: 10px" />
          <Share style="width: 1em; margin-right: 10px" />
          <Location style="width: 1em; margin-right: 10px" />
          <el-button link @click="changePage(item.link)"
            ><el-button :icon="UserFilled"
          /></el-button>
          <!-- <RouterLink to="/login">
            <el-icon><UserFilled /></el-icon>
          </RouterLink> -->
        </ul>
        <div class="text">
          <p>
            本網站僅供個人作品使用 <br />
            Copyright © 2024 made by tai0525
          </p>
        </div>
      </div>
    </div>
  </footer>

  <el-backtop :bottom="100" />
</template>
  <script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'
import { UserFilled } from '@element-plus/icons-vue'

const router = useRouter() //到此頁面
const changePage = (link) => {
  router.push(link)
}

const footerList = ref([
  {
    id: 1,
    link: '/login',
    type: 'icon'
  }
])
</script>

  <style lang="scss" scoped>
$main-color: #994e3d;
.footer {
  background: $main-color;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    font-size: 35px;
    padding: 10px 0;
  }
  .text {
    text-align: center;
    padding: 5px;
  }
}
</style>