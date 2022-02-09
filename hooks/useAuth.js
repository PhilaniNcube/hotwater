import { useRouter } from 'next/router';
import { useState } from 'react';
import { supabase } from '../client';

const useAuth = () => {
  const signInWithGoogle = () => supabase.auth.signIn({ provider: 'google' });
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  async function fetchProfile() {
    const profileData = await supabase.auth.user();

    if (!profileData) {
      router.push('/signin');
    } else {
      setProfile(profileData);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return {
    signInWithGoogle,
    profile,
    setProfile,
    fetchProfile,
    signOut,
  };
};

export default useAuth;
