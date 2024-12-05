import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("login", () => {
  const supabase = useSupabaseClient();
  const cookie = useCookie('auth');
  const router = useRouter();
  const user = ref(null);

  const error_message = ref({
    username: "",
    password: "",
  });

  const isLoading = ref(false);

  const handleLoading = () => {
    isLoading.value = !isLoading.value;
  };

  const signUp = async (data: any) => {
    if (isLoading.value) return;
    isLoading.value = true;

    const result = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: 'John',
          age: 27,
        }
      }
    });

    console.log(result)
  }

  const signInWithPassword = async (data) => {
    if (isLoading.value) return;
    isLoading.value = true;

    const result = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password
    });

    console.log(result)

    isLoading.value = false;
    // try {
    //   // https://vue-lessons-api.vercel.app
    //   const res = await $fetch("https://vue-lessons-api.vercel.app/auth/login", {
    //     method: "POST",
    //     body: { username, password },
    //   });

    //   console.log(res);
    //   // save token (example logic can be added here)
    //   cookie.value = {
    //     token: res.data.token,
    //   }

    //   router.replace("/");
    // } catch (error) {
    //   const { username } = error.response._data.error_message;
    //   error_message.value = {
    //     username,
    //     password: 'password error',
    //   };
    // } finally {
    //   isLoading.value = false;
    // }
  };

  const signOut = async () => {
    const result = await supabase.auth.signOut();
    console.log(result)
  }

  const checkAuth = async () => {
    // // https://vue-lessons-api.vercel.app
    // if(!cookie.value) return;
    // try {
    //   await $fetch("https://vue-lessons-api.vercel.app/testToken", {
    //     method: "POST",
    //     headers: {
    //       Authorization: cookie.value?.token
    //     }
    //   })
    //   console.log("驗證成功")
    // } catch (error) {
    //   router.replace("/")
    //   cookie.value = null;
    // }
    
  }

  return {
    error_message,
    isLoading,
    handleLoading,
    signUp,
    signInWithPassword,
    signOut,
    checkAuth
  };
});
