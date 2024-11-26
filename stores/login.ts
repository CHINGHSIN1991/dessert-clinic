import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useLoginStore = defineStore("login", () => {
  const cookie = useCookie('auth');
  const router = useRouter();

  const error_message = ref({
    username: "",
    password: "",
  });

  const isLoading = ref(false);

  const handleLoading = () => {
    isLoading.value = !isLoading.value;
  };

  const sendLoginAuth = async ({ username, password }) => {
    if (isLoading.value) return;
    isLoading.value = true;

    try {
      // https://vue-lessons-api.vercel.app
      const res = await $fetch("https://vue-lessons-api.vercel.app/auth/login", {
        method: "POST",
        body: { username, password },
      });

      console.log(res);
      // save token (example logic can be added here)
      cookie.value = {
        token: res.data.token,
      }

      router.replace("/");
    } catch (error) {
      const { username } = error.response._data.error_message;
      error_message.value = {
        username,
        password: 'password error',
      };
    } finally {
      isLoading.value = false;
    }
  };

  const checkAuth = async () => {
    // https://vue-lessons-api.vercel.app
    if(!cookie.value) return;
    try {
      await $fetch("https://vue-lessons-api.vercel.app/testToken", {
        method: "POST",
        headers: {
          Authorization: cookie.value?.token
        }
      })
      console.log("驗證成功")
    } catch (error) {
      router.replace("/login")
      cookie.value = null;
    }
    
  }

  return {
    error_message,
    isLoading,
    handleLoading,
    sendLoginAuth,
    checkAuth
  };
});
