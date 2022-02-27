import { useRouter } from 'next/router';
import ProfileNav from '../../components/Profile/ProfileSidebar';
import { useQuotes } from '../../hooks/quotes';
import { useUser } from '../../hooks/user';

const Profile = () => {
  const user = useUser();
  const { quotes, quotesIsLoading, quotesFetching, quotesError } = useQuotes();

  const router = useRouter();

  console.log('quotes', quotes);

  if (!user) {
    router.push('/');

    return (
      <div className="flex justify-center items-center min-h-screen"></div>
    );
  }

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
