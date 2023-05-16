/* eslint-disable @next/next/no-img-element */
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { supabaseService } from "../../../utils/supabaseService";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "../../../utils/supabase";

const NewsArticles = ({news}) => {

const router = useRouter()

const deleteArticle = async (id) => {

  const confirmation = confirm(`Are you sure you want to delete this article?`)

  if (!confirmation) return

  // delete a supabase article from the news table
  const { data, error } = await supabase.from('news').delete().eq('id', id)

  if (error) {
    console.log(error)
    alert('There was an error deleting the article')
  } else {
    alert('Article deleted successfully')
    router.reload()
  }
}


  return (
    <main className="py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-slate-700">
            News Articles
          </h1>
          <Link href="/admin/news" passHref>
            <span className="tracking-widest px-6 py-2 rounded-md bg-blue-600 text-white font-semibold font-bebas">
              Add An Article
            </span>
          </Link>
        </div>

        {news.length === 0 ? (
          <div className="flex items-center justify-center mt-4">
            <h3 className="text-2xl font-semibold text-slate-700">
              No news articles
            </h3>
          </div>
        ) : (
          <div className="mt-4">
            <table className="w-full">
              <thead className="bg-slate-300">
                <tr className="text-left text-xl font-semibold text-slate-700">
                  <th className="px-4 py-2">Thumbnail</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">URL</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {news.map((article) => (
                  <tr
                    key={article.id}
                    className="text-sm text-slate-700 py-2 px-3 odd:bg-slate-100"
                  >
                    <td className="px-4 py-2">
                      <img
                        src={article.image}
                        width={80}
                        height={50}
                        alt={article.title}
                        className="w-24 h-16 object-cover"
                      />
                    </td>
                    <td className="px-4 py-2 font-semibold text-slate-600 text-md max-w-[50ch]">
                      {article.title}
                    </td>
                    <td className="px-4 py-2 font-semibold text-slate-600 text-md max-w-[50ch]">
                      <Link href={article.url}>Read Original Article</Link>
                    </td>
                    <td className="px-4 py-2 font-semibold text-slate-600 text-md">
                      {new Date(article.created_at).toLocaleDateString("ZA", {
                        dateStyle: "medium",
                      })}
                    </td>
                    <td className="px-4 py-2">
                      <svg
                        onClick={() => deleteArticle(article.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 cursor-pointer text-white px-2 py-2 rounded-md bg-red-600 hover:bg-red-500 hover:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};
export default NewsArticles;


export async function getServerSideProps(ctx) {
  const supabase = createServerSupabaseClient(ctx);



  const {
    data: { session },
  } = await supabase.auth.getSession();

  let { data: isAdmin } = await supabase.rpc("is_admin");
  if (!isAdmin)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  let { data: news, error } = await supabaseService
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  return {
    props: {
      news,
    },
  };
}
