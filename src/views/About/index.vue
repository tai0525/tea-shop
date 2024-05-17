<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <h1 class="text-center text-3xl pb-3">{{ t('about_us') }}</h1>
      <div class="row-auto justify-center">
        <div class="flex justify-center items-center md:cols-12 lg:cols-6">
          <img
            src="https://images.pexels.com/photos/6545418/pexels-photo-6545418.jpeg?auto=compress&cs=tinysrgb&w=600"
            class="max-w-md"
          />
        </div>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row-auto mb-5">
        <div class="flex-col items-center flex my-3">
          <p class="text-xl">
            「茶」，這個字拆解後，就是人處在草木之間，對千千萬萬華人而言，茶就好似清風明月一樣的與我們同在。喝茶確實已不是為了止渴而為的一樁小事，而是具有精神意義的行為。
          </p>
        </div>

        <p class="text-xl">
          沁記茶行，位於台中市太平區，走過了百年的日子，目前由第四代吳維合先生經營。傳承了選茶的專業經驗，走訪台灣各地茶區、越過各個山頭，從選茶開始，製茶、分級、包裝都親手監製，以時間所積累的深厚底蘊，及無可取代的焙茶技術，謹守最完美的茶品細節，並在各大茶葉賽事中屢獲大獎。
        </p>
      </div>

      <div class="row-auto mt-10">
        <div class="md:cols-6">
          <div class="flex flex-col">
            <h2 class="font-semibold text-3xl">{{ t('contact_us') }}</h2>
            <p class="text-xl py-2">{{ t('contact_content') }}</p>

            <div class="m-2">
              <ul class="list-none text-2xl">
                <li class="pb-2">
                  <el-icon><PhoneFilled /></el-icon> 04-2022-2022
                </li>
                <li class="pb-2">
                  <el-icon><Message /></el-icon> chinji2022@example.com
                </li>
                <li>
                  <el-icon><Location /></el-icon> 台中市太平區新平路二段100號
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="md:cols-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7281.833363231639!2d120.715064!3d24.139564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc67044ef4a06e8d1!2z6Ie65Lit5biC5aSq5bmz5Y2A5a6c5qyj5ZyL5rCR5bCP5a24!5e0!3m2!1szh-TW!2stw!4v1666576625627!5m2!1szh-TW!2stw"
          width="100%"
          height="400"
          style="border: 0"
          loading="lazy"
          class="pt-3"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>