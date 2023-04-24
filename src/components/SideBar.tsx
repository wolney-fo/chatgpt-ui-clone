import { userChatList, userName, userPicUrl } from "@/config";
import Image from "next/image";
import { FiPlus, FiMessageSquare, FiUser, FiMoreHorizontal } from "react-icons/fi";

export function SideBar() {
  return (
    <aside className="w-80 bg-[#202123] items-start p-2">
      <nav className="flex h-full w-full flex-1 flex-col">
        <a className="flex p-3 mb-2 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 shrink-0">
          <FiPlus />
          <span>New chat</span>
        </a>

        {userChatList.map((chat) => (
          <a
            href=""
            className="flex p-3 mt-2 items-center gap-3 transition-colors duration-200 text-white text-sm hover:bg-[#343541] rounded-md"
            key={chat}
          >
            <span className="flex w-full flex-row justify-between">
              <span className="flex items-center gap-3">
                <FiMessageSquare /> {chat}
              </span>
            </span>
          </a>
        ))}

        <div className="flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm"></div>
        </div>

        <div className="border-t border-white/20 pt-2">
          <a
            className="flex p-3 items-center gap-3 transition-colors duration-200 text-white text-sm hover:bg-[#343541] rounded-md"
            href=""
          >
            <span className="flex w-full flex-row justify-between">
              <span className="gold-new-button flex items-center gap-3">
                <FiUser /> Upgrade to Plus
              </span>
              <span className="rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800">
                NEW
              </span>
            </span>
          </a>
          <div className="relative">
            <button className="flex w-full items-center gap-2.5 rounded-md py-3 px-3 text-sm transition-colors duration-200 hover:bg-[#343541] ui-open:bg-gray-800">
              <Image src={userPicUrl} width={17} height={17} alt="User" />
              <div className="grow text-left text-white">{userName}</div>
              <FiMoreHorizontal />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
