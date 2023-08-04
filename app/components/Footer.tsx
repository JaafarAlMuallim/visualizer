import Image from "next/image";
export default function Footer() {
  return (
    // <footer className="backdrop-blur-sm bg-slate-800 p-4 py-7">
    <footer className="backdrop-blur-sm bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 p-4 py-7">
      <div className="flex flex-col md:flex-row justify-between items-center mx-20">
        <div className="flex items-center sm:mb-0 text-sm text-gray-400 font-medium order-1 text-center">
          <a
            className="no-underline text-sm text-gray-400 font-medium"
            href="https://www.linkedin.com/in/jaafar-al-muallim"
          >
            © 2023 Made By{" "}
            <span className="whitespace-nowrap underline text-white">
              Jaafar Al-Muallim.
            </span>
          </a>
        </div>
        <div className="order-2 mt-5 md:mt-0 flex flex-row justify-between items-center">
          <ul className="flex flex-row justify-between items-center">
            <li className="mx-2">
              <a href="https://twitter.com/Ja3far032">
                <Image
                  src="/social/twitter.svg"
                  height={40}
                  width={40}
                  alt="Twitter Old Logo"
                />
              </a>
            </li>
            <li className="mx-2">
              <a href="https://www.instagram.com/wrath_12">
                <Image
                  src="/social/instgram.svg"
                  height={40}
                  width={40}
                  alt="instagram Logo"
                />
              </a>
            </li>
            <li className="mx-2">
              <a href="https://www.linkedin.com/in/jaafar-al-muallim">
                <Image
                  src="/social/linkedIn.svg"
                  height={40}
                  width={40}
                  alt="linkedin Logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
