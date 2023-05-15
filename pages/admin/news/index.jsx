import { FormEvent, useState } from "react";
import { supabase } from "../../../utils/supabase";


const News = () => {
  //https://tqindzrnxqulmtsuoqaz.supabase.co/storage/v1/object/sign/news/myteam.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJuZXdzL215dGVhbS5qcGciLCJpYXQiOjE2ODQxNzk2NjAsImV4cCI6MTY4NDI2OTY2MH0.J3zbY1vGyV48q_Xy3c3iUaGYvnLZq-nuyYRITjLyXLA&t=2023-05-15T19%3A40%3A59.505Z

  const IMG_UR =
    "https://tqindzrnxqulmtsuoqaz.supabase.co/storage/v1/object/public/news";

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    setLoading(true);
    // upload image to supabase storage
    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;
    const { data, error } = await supabase.storage
      .from("news")
      .upload(filePath, file);

      if(error) {
        alert(error.message)
        setLoading(false)
        return
      } else {
        setImage(`${IMG_UR}/${fileName}?t=${Date.now()}`)
        setLoading(false)
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   const formData = new FormData(e.currentTarget)

   const { title, url, content } = Object.fromEntries(formData.entries());
   console.log(title, url, content);

   if(image === "" || !title  || !url  || !content) {
      throw new Error("Please fill in all fields")
   }

   const {data, error} = await supabase.from("news").insert([
    {title:title, url:url, content:content, image:image}
   ]).select('*').single()


   console.log({news: data, error: error})

   if(error === null) {
      alert("News article added successfully")
   } else if (error) {
     alert(error.message)
   }

   setLoading(false)
  }

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold">Add News Articles</h1>
        <div className="mt-5">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl border border-neutral-300 p-8 rounded-lg"
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="title" className="text-neutral-500 font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-2/3 p-3 outline-slate-300 border border-slate-200 rounded-md bg-slate-100"
              />
            </div>
            <div className="flex flex-col space-y-1 mt-3">
              <label htmlFor="url" className="text-neutral-500 font-medium">
                Article Link
              </label>
              <input
                type="url"
                id="url"
                name="url"
                required
                className="w-2/3 p-3 outline-slate-300 border border-slate-200 rounded-md bg-slate-100"
              />
            </div>
            <div className="flex flex-col space-y-1 mt-3">
              <label htmlFor="image" className="text-neutral-500 font-medium">
                Article Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                required
                accept="image/*"
                onChange={uploadImage}
                className="w-2/3 p-3 outline-slate-300 border border-slate-200 rounded-md bg-slate-100"
              />
            </div>
            <div className="flex flex-col space-y-1 mt-3">
              <label htmlFor="content" className="text-neutral-500 font-medium">
                Article Summary
              </label>
              <textarea
                rows={5}
                id="content"
                name="content"
                className="w-full p-3 outline-slate-300 border border-slate-200 rounded-md bg-slate-100"
              ></textarea>
            </div>

            <div className="flex flex-col space-y-1 mt-3">
              <button
                disabled={loading}
                type="submit"
                className={`bg-blue-600 text-white font-bebas font-semibold text-lg px-4 py-2 tracking-widest  rounded-md ${
                  loading ? "animate-pulse" : ""
                }`}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default News;
