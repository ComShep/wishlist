<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  validate: route => /^\d+$/.test(String(route.params.id)),
})

const route = useRoute()

const { data: wishlist, error } = await useFetch(`/api/wishlists/${route.params.id}`)

if (error.value) {
  throw createError({ statusCode: error.value.statusCode, message: 'Вишлист не найден', fatal: true })
}

useSeoMeta({
  title: () => wishlist.value?.title,
})
</script>

<template>
  <UContainer
    v-if="wishlist"
    class="py-10"
  >
    <UButton
      to="/lists"
      icon="i-lucide-arrow-left"
      label="Мои вишлисты"
      color="neutral"
      variant="link"
      class="mb-4"
    />
    <h1 class="text-2xl font-semibold break-words">
      {{ wishlist.title }}
    </h1>
  </UContainer>
</template>
