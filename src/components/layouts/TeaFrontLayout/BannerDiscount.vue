<template>
  <section class="discount">
    <div class="row">
      <div class="col">
        <h2>歡慶開幕，限時 <span class="text-danger fw-bold"> 5折 </span>優惠</h2>
        <p class="fs-3 text-danger">立刻領取折價券</p>
        <button type="button" class="btn btn-warning btn-lg" @click="getCoupon">點我領取</button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.discount {
  background-image: url(@/assets/images/coupon.jpg);
  background-position: 50% 50%;
  background-size: cover;
  margin: 20px 0;

  .row {
    justify-content: center;
    display: flex;
    padding: 20px;
  }
}
</style>