import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const supabase = useSupabaseClient();
  const cookie = useCookie('auth');
  const router = useRouter();
  const user = ref(null);
  const isLoggedIn = computed(() => !!user.value);

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

    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });
      if (error) throw error;
      user.value = authData.user;
      router.push('/member/detail');
    } catch (error) {
      console.error(error);
      error_message.value = {
        username: error.message,
        password: 'password error',
      };
    } finally {
      isLoading.value = false;
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      user.value = null;
      router.push('/');
    } catch (error) {
      console.error(error);
    }
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
    checkAuth,
    user,
    isLoggedIn
  };
});
