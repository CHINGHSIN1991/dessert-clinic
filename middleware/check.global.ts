export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStatusStore();
  store.setIsMenuOpen(false)
})
