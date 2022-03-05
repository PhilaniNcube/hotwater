import { useRouter } from 'next/router';
import ProfileNav from '../../components/Profile/ProfileSidebar';
import { useQuotes } from '../../hooks/quotes';
import { useUser } from '../../Context/AuthContext';
import cookie from 'cookie';
import { supabase } from '../../utils/supabase';

const Profile = ({ data, error }) => {
  console.log({ data, error });

  const { user } = useUser();

  return (
    <ProfileNav>
      <div className="px-6 lg:px-12 py-6">
        <h1 className="text-2xl">Profile: {user && user.email}</h1>
        <section className="w-full mt-4"></section>
      </div>
    </ProfileNav>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const token = cookie.parse(req.headers.cookie)['sb:token'];

  supabase.auth.session = () => ({ access_token: `${token}` });

  let { data: quotes, error } = await supabase.from('quotes').select('*');

  return {
    props: {
      data: quotes,
      error,
    },
  };
}
