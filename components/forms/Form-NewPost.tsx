"use client";
import { Button } from "@/components/ui/button";
import { PostBlogFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const FormNewPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof PostBlogFormSchema>>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: zodResolver(PostBlogFormSchema),
  });

  const onSubmit = (values: z.infer<typeof PostBlogFormSchema>) => {
    console.log(values);
    reset();
  };

  return (
    <div className=" max-w-4xl mx-auto ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 p-10 h-full w-full bg-slate-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 "
      >
        <div className="md:text-4xl text-white font-semibold flex justify-center">
          ADD NEW POST
        </div>
        {/* title */}
        <label>
          <span className="label text-white font-semibold">Title</span>
        </label>
        <input
          {...register("title")}
          type="text"
          placeholder="Add Title"
          className="input input-bordered input-secondary w-full text-white "
        />
        {/* description  */}
        <span className="label text-white font-semibold">Description</span>

        <textarea
          {...register("description")}
          className="textarea textarea-info w-full text-white md:min-h-64"
          placeholder="Add Description"
        ></textarea>
        {/* submit button  */}
        <Button
          disabled={isSubmitting}
          variant="ghost"
          className="md:text-lg text-slate-200 outline outline-1 font-semibold "
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default FormNewPost;
