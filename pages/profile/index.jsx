import { useRouter } from 'next/router';
import ProfileNav from '../../components/Profile/ProfileSidebar';
import { useQuotes } from '../../hooks/quotes';
import { useUser } from '../../Context/AuthContext';

const Profile = () => {
  const { user } = useUser();

  const { quotes, quotesIsLoading, quotesFetching, quotesError } = useQuotes();

  console.log(quotes);

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
