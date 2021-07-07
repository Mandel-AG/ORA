<template>
  <div class="video-wrap">
    <video loop :autoplay="true" :muted="true">
      <source :src="mp4" type="video/mp4">
    </video>
  </div>
</template>
<script>

export default {
  name: "Video",
  props: {
    mp4: String
  }
}
</script>