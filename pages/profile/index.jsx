import { useRouter } from 'next/router';
import ProfileNav from '../../components/Profile/ProfileSidebar';

import cookie from 'cookie';
import { supabase } from '../../utils/supabase';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import { useUser } from '@supabase/auth-helpers-react';

const Profile = ({ data, error, profile }) => {
  console.log({ data, error, profile });

  const  user  = useUser();

  return (
    <ProfileNav>
      <div className="px-6 lg:px-12 py-6">
        <h1 className="text-2xl">Profile: {user && user.email}</h1>
        <section className="w-full mt-4">
          <ProfileInfo profile={profile} />
        </section>
      </div>
    </ProfileNav>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  supabase.auth.session = () => ({ access_token: `${token}` });
  const token = cookie.parse(req.headers.cookie)['sb:token'];

  let { data: quotes, error } = await supabase.from('quotes').select('*');

  let { data: profile } = await supabase
    .from('profile')
    .select('*')
    .single();

  return {
    props: {
      data: quotes,
      error,
      profile,
    },
  };
}
