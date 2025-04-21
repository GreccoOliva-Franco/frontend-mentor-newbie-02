import NoSSR from "@/lib/no-ssr";
import CardList from "./card-list";

export default function Home() {
  return (
    <div className="grid grid-cols-1 justify-center gap-1 p-7 mt-7">
      <h1 className="text-2xl text-center font- font-light text-gray-400">
        Reliable, efficient delivery
      </h1>
      <h2 className="text-2xl text-center font-semibold text-gray-500">
        Powered by Technology
      </h2>
      
      <p className="mt-3 text-center text-sm tracking-wide font-light">
        Our Artificial Intelligence powered tools use millions of project data points 
        to ensure that your project is successful
      </p>

      <div className="mt-11">
        <NoSSR>
          <CardList />
        </NoSSR>
      </div>
    </div>
  );
}
