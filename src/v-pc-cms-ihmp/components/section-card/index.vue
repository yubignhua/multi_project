<template>
  <div class="section">
    <div class="section-title">{{ sectionTitle }}</div>
    <div class="section-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'section-title'
  ]
}
</script>

<style lang='scss' scoped>
  .section {
    padding: 30px;
    background: #fff;
    border-radius: 4px;
    margin-bottom:20px;
  }

  .section-title {
    font-size: 20px;
    line-height: 1.4;
    color: $subjectColor;
    font-weight: 400;
  }

  .section-content {
    margin-top: 22px;
  }
</style>
