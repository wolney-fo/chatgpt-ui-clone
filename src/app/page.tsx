import { SideBar } from "@/components/SideBar";
import { chatGPTReleaseNotesUrl } from "@/config";
import { FiSun, FiZap, FiAlertTriangle } from "react-icons/fi";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />

        <main className="flex flex-col items-center h-screen w-screen">
          <div className="my-auto mx-auto">
            <h1 className="text-4xl font-semibold text-center mt-6 my-auto mb-16 flex gap-2 items-center justify-center">
              ChatGPT
            </h1>
            <div className="flex items-start text-center gap-3.5">
              <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                  <FiSun size={"1.5rem"} /> Examples
                </h2>
                <ul className="flex flex-col gap-3.5 w-full max-w-[15rem] m-auto">
                  <li>
                    <button className="w-full bg-white/5 p-3 rounded-md hover:bg-[#202123]">
                      {'"Explain quantum computing in simple terms" →'}
                    </button>
                  </li>
                  <li>
                    <button className="w-full bg-white/5 p-3 rounded-md hover:bg-[#202123]">
                      {
                        '"Got any creative ideas for a 10 year old`s birthday?" →'
                      }
                    </button>
                  </li>
                  <li>
                    <button className="w-full bg-white/5 p-3 rounded-md hover:bg-[#202123]">
                      {'"How do I make an HTTP request in Javascript?" →'}
                    </button>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                  <FiZap size={"1.5rem"} /> Capabilities
                </h2>
                <ul className="flex flex-col gap-3.5 w-full max-w-[15rem] m-auto">
                  <li className="w-full bg-white/5 p-3 rounded-md">
                    Remembers what user said earlier in the conversation
                  </li>
                  <li className="w-full bg-white/5 p-3 rounded-md">
                    Allows user to provide follow-up corrections
                  </li>
                  <li className="w-full bg-white/5 p-3 rounded-md">
                    Trained to decline inappropriate requests
                  </li>
                </ul>
              </div>

              <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                  <FiAlertTriangle size={"1.5rem"} /> Limitations
                </h2>
                <ul className="flex flex-col gap-3.5 w-full max-w-[15rem] m-auto">
                  <li className="w-full bg-white/5 p-3 rounded-md">
                    May occasionally generate incorrect information
                  </li>
                  <li className="w-full bg-white/5 p-3 rounded-md">
                    May occasionally produce harmful instructions or biased
                    content
                  </li>
                  <li className="w-full bg-white/5 p-3 rounded-md">
                    Limited knowledge of world and events after 2021
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-auto">
            <input
              className="mb-2 bg-[#40414F] rounded-md py-3 pl-4 w-full shadow-[0_0_15px_rgba(0,0,0,0.10)] focus:outline-none"
              type="text"
              placeholder="Send a message..."
            />
            <span className="text-center text-xs text-white/50 mb-3">
              <a
                className="underline"
                href={chatGPTReleaseNotesUrl}
                target="_blank"
              >
                ChatGPT Mar 23 Version
              </a>
              . Free Research Preview. ChatGPT may produce inaccurate
              information about people, places, or facts.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
