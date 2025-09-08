import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen w-screen p-5">
      <div className="text-center w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Hi 👋 im yassr, would add more shi in the future, pretty lazy rn,
          thanks for reading this, go back to
          {
            <Link
              href={"https://www.x.com/yassratti"}
              target="_blank"
              className="hover:underline text-blue-600"
            >
              twitter
            </Link>
          }
        </h1>
      </div>
    </div>
  );
}
