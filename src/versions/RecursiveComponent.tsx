/*  2024-07-23 04:01:47

Idea from Sam Selikoff:
https://www.youtube.com/watch?v=6UU2Ey4KZr8&ab_channel=SamSelikoff

*/

import { ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

type FolderType = {
  name: string;
  folders?: FolderType[];
};

const folders: FolderType[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [
          { name: "Action", folders: [{ name: "John Wick.mp4" }] },
          { name: "Comedy", folders: [{ name: "Love over gold.mp4" }] },
        ],
      },
      { name: "Music", folders: [] },
      { name: "Pictures", folders: [] },
      { name: "password.txt" },
    ],
  },
];

const RecursiveComponent = () => {
  return (
    <div>
      <h1>RecursiveComponent</h1>

      <div className="p-8 max-w-sm mx-auto">
        <ul>
          <li className="my-1.5">
            <ul className="pl-6">
              {folders.map((folder) => (
                <Folder folder={folder} key={folder.name} />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

function Folder({ folder }: { folder: FolderType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex flex-row items-center gap-1.5">
        {folder.folders && folder.folders.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRightIcon
              className={`size-4 text-gray-500 ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        )}
        {folder.folders ? (
          <FaFolderOpen
            className={`size-6 text-sky-500 ${
              folder.folders.length === 0 ? "ml-5" : ""
            }`}
          />
        ) : (
          <IoDocumentTextOutline className="ml-5 size-6 text-gray-500" />
        )}
        {folder.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <li className="my-1.5" key={folder.name}>
              <Folder folder={folder} key={folder.name} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default RecursiveComponent;
