import Image from "next/image";
import Categories from "@/components/Categories";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <div className="">
      <Categories />
      <Blogs />
    </div>
  );
}
