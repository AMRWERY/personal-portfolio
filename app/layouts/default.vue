<template>
  <div>
    <div
      class="bg-background text-text-primary font-body antialiased min-h-screen selection:bg-accent selection:text-on-accent overflow-x-hidden transition-colors duration-(--duration-standard)"
    >
      <Header active-route="home" />

      <main>
        <slot />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>