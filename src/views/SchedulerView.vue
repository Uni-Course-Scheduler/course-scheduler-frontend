<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<template>
  <main>
      <h2>{{ t('schedulerView.preferences') }}</h2>
      <div class="wrapper"></div>
  </main>
</template>
