import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";

export const runtime = "edge";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-8 pt-0">
        <div className="bg-white px-6 sm:px-12 md:px-24 lg:px-36">
          <div className="w-full min-h-[500px] rounded-xl bg-[url('/assets/notebook.jpg')]">
            <div className="w-full h-full bg-gradient-to-r from-white via-transparent to-transparent py-8 sm:py-12 md:py-16 px-6 sm:px-12 md:px-24">
              <h1 className="text-4xl sm:text-5xl text-green-400 md:text-6xl">
                Attendy
              </h1>
              <p className="pr-6 sm:pr-12 md:pr-20 mt-4 sm:mt-6 md:mt-8 max-w-md">
                A comprehensive web app solution aims to revolutionize
                attendance tracking for educational institutions
              </p>

              <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row gap-4">
                <Link
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 w-28 py-2 rounded-lg text-white font-bold sm:mb-0"
                  href={"/register"}
                >
                  Register
                </Link>
                <Link
                  className="flex items-center justify-center border-green-500 hover:bg-green-500/30 transition ease-linear duration-300 border-2 w-full sm:w-28 py-2 rounded-lg text-green-500  font-bold"
                  href={"/login"}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
