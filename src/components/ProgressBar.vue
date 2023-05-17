<script setup>
import { useStagesStore } from '../stores/stages'
import iconStar from './icons/iconStar.vue'

const storeStages = useStagesStore()

const backgroundStar = (holdPoints) => {
  return storeStages.sum >= holdPoints ? 'blue' : 'none'
}

const showStar = (id) => {
  return id === 0 ? false : id + 1 === storeStages.stages.length ? false : true
}
const showCup = (id) => {
  return id + 1 === storeStages.stages.length ? true : false
}
</script>
<template>
  <div>
    <!-- <div class="stars-points">
      <div class="star w" v-for="star in 7">
        <icon-star :color="'blue'" />
      </div>
    </div> -->
    <div class="progress">
      <div
        class="progress--percentage"
        :style="{
          width: storeStages.percentAtAllgamesRes() + '%',
        }"
      ></div>
    </div>
    <div class="grid-points">
      <div class="w f" v-for="stage in storeStages.allStages" :key="stage.id">
        <div class="stars-points">
          <div class="star w">
            <icon-star
              v-if="showStar(stage.id)"
              :color="backgroundStar(stage.thresholdPoints)"
            />
            <img v-if="showCup(stage.id)" src="../assets/cup.svg" alt="cup" />
          </div>
        </div>
        <div>{{ stage.thresholdPoints }}</div>
      </div>
    </div>
    <div style="margin-top: 50px;">
      <button @click="storeStages.onIncrease(25)">+25</button>
      <button @click="storeStages.onDecrease(25)">-25</button>
      <button @click="storeStages.onIncrease(100)">+100</button>
      <button @click="storeStages.onDecrease(100)">-100</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-points {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.grid-points .f:first-child {
  .w {
    opacity: 0;
  }
}
.grid-points .f:last-child {
  .w::after {
    opacity: 0;
  }
}
.w {
  text-align: center;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 5px;
  img {
    top: -5px;
    width: 40px;
    position: absolute;
    left: -20px;
  }
}
.stars-points {
  // height: 50px;
  > div:first-child {
    // opacity: 0;
  }
  // div:first-child{
  // 	display: none;
  // }
  @extend .grid-points;
}
.star {
  position: relative;
  top: -25px;
  &::after {
    content: '';
    height: 40px;
    z-index: 3;
    position: absolute;
    right: 0;
    top: 30px;
    border-right: 1px solid grey;
  }
}
.progress {
	background: #EFEFEF;
  width: 100%;
  height: 40px;
  margin-top: 15px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  // border: 1px solid white;
  position: absolute;
  top: 0;
}
.progress--percentage {
  position: absolute;
  height: 40px;
  margin-top: -1px;
  border-radius: 10px;
  background: #3300ff;
}
</style>
