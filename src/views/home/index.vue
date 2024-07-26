<script setup lang="ts">
import http from '@/utils/request'

const a = ref()
const getData = async () => {
  const url = 'https://live.huya.com/liveHttpUI/getLiveList'
  const data = {
    iGid: 0,
    iPageNo: 4,
    iPageSize: 3
  }
  const res = await http.get(url, data)
  a.value = JSON.stringify(res, null, 2)
}

// getData()

const postData = async () => {
  const url = 'https://webwan.huya.com/wan/sq/history'
  const data = {
    _t: 1722003666228,
    _r: 'ZRcCmhiNcHXR46rf7rkeBKX2DPfKrHwr',
    _s: 'a1c237e7cd5aa4aa3eb5d318ecc2be86ecd5a2eb8fc9b751a1f08c3210e950c1'
  }
  const res = await http.post(url, data)
  a.value = JSON.stringify(res, null, 2)
}
postData()
</script>

<template>
  <layout>
    <template #header>111</template>

    <div>Home</div>
    <div style="white-space: pre">{{ a }}</div>
    <icon name="close"></icon>
    <div>111222</div>

    <template #footer>Footer</template>
  </layout>
</template>
