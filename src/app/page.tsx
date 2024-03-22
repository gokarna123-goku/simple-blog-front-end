import Categories from "@/components/Categories";
import Blogs from "@/components/Blogs";

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    }
  }

  try {
    const res = await fetch("http://localhost:1337/api/categories", options);
    const categories = await res.json();
    return categories;
  } catch (error) {
    console.error(error);
  }
}


async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    }
  }

  try {
    const res = await fetch("http://localhost:1337/api/blogs?populate=*", options);
    const blogs = await res.json();
    return blogs;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  return (
    <div className="">
      <Categories categories={categories} />
      <Blogs blogs={blogs} />
    </div>
  );
}
