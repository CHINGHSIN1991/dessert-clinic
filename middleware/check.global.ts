export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStatusStore();
  const section = to.name?.split('-')[0]
  store.setCurrentSection(section)
})
