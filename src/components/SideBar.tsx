"use client";
import { useEffect } from "react";
import { openAiHelpLink, userChatList, userName, userPicUrl } from "@/config";
import Image from "next/image";
import {
  FiPlus,
  FiMessageSquare,
  FiUser,
  FiMoreHorizontal,
  FiTrash2,
  FiSettings,
  FiLogOut,
  FiExternalLink,
} from "react-icons/fi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

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
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="flex w-full items-center gap-2.5 rounded-md p-3 text-sm transition-colors duration-200 hover:bg-[#343541]">
                  <Image src={userPicUrl} width={17} height={17} alt="User" />
                  <div className="grow text-left text-white">{userName}</div>
                  <FiMoreHorizontal />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className="bg-[#050509] w-full rounded-md overflow-hidden text-sm">
                  <DropdownMenu.Item className="py-1 focus:outline-none">
                    <a
                      href={openAiHelpLink}
                      target="_blank"
                      className="flex gap-3 items-center cursor-pointer p-3 transition-colors duration-200 hover:bg-gray-700"
                    >
                      <FiExternalLink /> Help & FAQ
                    </a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="py-1 border-t border-white/20 focus:outline-none">
                    <a
                      href=""
                      className="flex gap-3 items-center cursor-pointer p-3 transition-colors duration-200 hover:bg-gray-700"
                    >
                      <FiTrash2 /> Clear conversations
                    </a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="py-1 border-b border-white/20 focus:outline-none">
                    <a
                      href=""
                      className="flex gap-3 items-center cursor-pointer p-3 transition-colors duration-200 hover:bg-gray-700"
                    >
                      <FiSettings /> Settings
                    </a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="py-1 focus:outline-none">
                    <a
                      href="https://github.com/wolney-fo"
                      className="flex gap-3 items-center cursor-pointer p-3 transition-colors duration-200 hover:bg-gray-700"
                    >
                      <FiLogOut /> Log out
                    </a>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </nav>
    </aside>
  );
}
