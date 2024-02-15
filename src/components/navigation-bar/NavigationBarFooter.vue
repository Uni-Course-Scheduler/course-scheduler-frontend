<script setup lang="ts">

</script>

<template>
  <RouterLink class="logout" to="#">Abmelden</RouterLink>
  <footer>
    <RouterLink to="#">Impressum</RouterLink>
    <span class="dot"></span>
    <RouterLink to="#">Datenschutz</RouterLink>
    <span class="dot"></span>
    <RouterLink to="#">Kontakt</RouterLink>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: var(--column-gap-m);
  padding: 1.25rem 0.625rem 0;
  border-top: 1px solid var(--main-border);

}

footer a {
  width: 100px;
  font-size: var(--font-size-xs);
  font-weight: var(--text-medium);
  color: var(--text-light-secondary);
  text-align: center;
}

footer a:first-child {
  text-align: right;
}

footer a:last-child {
  text-align: left;
}

.dot {
  display: block;
  width: 0.313rem;
  height: 0.313rem;
  border-radius: 50%;
  background-color: var(--main-border);
}

.logout {
  font-size: var(--font-size-xs);
  font-weight: var(--text-medium);
  color: var(--text-light-secondary);
  text-align: center;
  text-decoration: underline;
  margin-bottom: 1.1rem;
}
</style>