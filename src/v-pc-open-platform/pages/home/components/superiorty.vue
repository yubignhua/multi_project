<template>
    <div class="superiority-wrap cy-container">
      <div class="btn left" @click="move('-')">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="btn right" @click="move('+')">
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="superiority-list clearfix" :style="transfromStyle">
        <div class="superiority-item"
             v-for="(item,index) in superiorties"
             :key="index"
             @mouseover="changeHoverState(index,true)"
             @mouseout="changeHoverState(index,false)">
          <div class="item-bg" :class="'item'+index"></div>
          <div class="item-bg-hover" :class="[item.hoverStatus? 'visible':'','item'+index]"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      distance: 0,
      superiorties: [
        {
          hoverStatus: false
        },
        {
          hoverStatus: false
        },
        {
          hoverStatus: false
        },
        {
          hoverStatus: false
        },
        {
          hoverStatus: false
        },
        {
          hoverStatus: false
        }
      ]
    }
  },
  computed: {
    transfromStyle () {
      return {
        transform: `translate(${this.distance}px, 0)`
      }
    }
  },
  methods: {
    move (sb) {
      let distance = this.distance - `${sb}304`
      if (distance >= 0) {
        distance = 0
      }
      if (distance <= -304 * 2) {
        distance = -304 * 2
      }
      this.distance = distance
    },
    changeHoverState (index, val) {
      this.superiorties[index].hoverStatus = val
    }
  }
}
</script>

<style lang='scss' scoped>
  .cy-container{
    overflow-x: hidden;
  }
  .superiority-wrap{
    position: relative;
  }
  .btn{
    position: absolute;
    top: 0;
    width: 50px;
    height: 440px;
    line-height: 440px;
    background: rgba(48,78,125,0.2);
    z-index:20;
    font-size: 40px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:hover{
      background: rgba(48,78,125,0.4);
    }
    &.left{
      border-radius: 18px 0 0 18px;
      left: 0;
    }
    &.right{
      right: 0;
      border-radius: 0 18px 18px 0;
    }
  }
  .superiority-list{
    @include transition();
    min-width: 1800px;
  }
  .superiority-item{
    float: left;
    width: 260px;
    height: 440px;
    overflow: hidden;
    font-size: 0;
    border-radius: 18px;
    &:not(:last-child){
      margin-right: 44px;
    }
  }
  .visible{
    transform:translate3d(0,-440px,0);
  }
  .item-bg{
    height: 100%;
    &.item0{
      background: url('../img/superiority1.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item1{
      background: url('../img/superiority2.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item2{
      background: url('../img/superiority3.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item3{
      background: url('../img/superiority4.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item4{
      background: url('../img/superiority5.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item5{
      background: url('../img/superiority6.png') center center no-repeat;
      background-size: 100% 100%;
    }
  }
  .item-bg-hover{
    height: 100%;
    @include transition();
    &.item0{
      background: url('../img/superiority1_hover.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item1{
      background: url('../img/superiority2_hover.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item2{
      background: url('../img/superiority3_hover.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item3{
      background: url('../img/superiority4_hover.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item4{
      background: url('../img/superiority5_hover.png') center center no-repeat;
      background-size: 100% 100%;
    }
    &.item5{
      background: url('../img/superiority6_hover.png') center center no-repeat;
      background-size: 100% 100%;
    }background-size: 100% 100%;
  }
</style>
