<template>
  <footer class="footer bg-main">
    <!-- <div class=""> -->
    <div class="justify-center">
      <ul class="p-3 flex items-center justify-center" v-for="item in footerList" :key="item.id">
        <!-- <li>
          <UserFilled style="width: 2em; margin-right: 15px" link @click="changePage(item.link)" />
        </li> -->

        <!-- <routerLink :to="'/login'">
            <el-icon><UserFilled /></el-icon>
          </routerLink> -->
      </ul>

      <div class="pb-2 text-center">
        <p class="text-l">
          本網站僅供個人作品使用 <br />
          Copyright © 2024 made by tai0525
        </p>
      </div>
    </div>
    <!-- </div> -->
  </footer>

  <el-backtop :bottom="100" />
</template>
  <script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { ElButton } from 'element-plus'
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
