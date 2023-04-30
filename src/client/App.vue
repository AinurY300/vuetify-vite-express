<template>
  <Suspense>
    <!-- component with nested async dependencies -->
    <v-app>
      <v-navigation-drawer/>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>

    <!-- loading state via #fallback slot -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
