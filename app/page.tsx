import FormNewPost from "@/components/forms/Form-NewPost";

export default function Home() {
  return (
    <div
      className="
    h-screen bg-gradient-to-r from-indigo-900 from-10% via-sky-900 via-30% to-emerald-900 to-90%
    md:py-20 p-8"
    >
      <FormNewPost />
    </div>
  );
}
