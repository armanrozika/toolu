// icon:mail-outline | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="rgb(75 85 99)"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      fill="rgb(75 85 99)"
      viewBox="0 0 16 16"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M2.5 9a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2V9z" />
      <path
        fillRule="evenodd"
        d="M4.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z"
      />
    </svg>
  );
}

function AccountIcon(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="rgb(75 85 99)"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z" />
    </svg>
  );
}
function UnlockFillIcon(props) {
  return (
    <svg
      fill="rgb(75 85 99)"
      viewBox="0 0 16 16"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M.5 9a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2V9z" />
      <path
        fillRule="evenodd"
        d="M8.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z"
      />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="rgb(75 85 99)"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 3L2 12h3v8h14v-8h3M9 18H7v-6h2m4 6h-2v-8h2m4 8h-2v-4h2"
      />
    </svg>
  );
}

function PeopleIcon(props) {
  return (
    <svg
      fill="rgb(75 85 99)"
      viewBox="0 0 16 16"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      />
    </svg>
  );
}
function AnalyticsIcon(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="rgb(75 85 99)"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M27.028 25.367a1.953 1.953 0 01-1.947 1.947H6.918a1.953 1.953 0 01-1.947-1.947V7.204c0-1.071.876-1.947 1.947-1.947h18.163c1.071 0 1.947.876 1.947 1.947v18.163zm0-13.18l-1.992-1.342a2.344 2.344 0 10-4.184.828l-4.307 6.586a2.333 2.333 0 00-2.059.488l-2.883-1.659c.015-.106.025-.213.025-.323a2.344 2.344 0 10-4.506.906l-2.153 1.997v2.125l3.198-2.967a2.334 2.334 0 002.717-.354l2.813 1.619a2.343 2.343 0 104.155-.986l4.277-6.54a2.332 2.332 0 002.065-.409l2.833 1.909v-1.878z"
      />
    </svg>
  );
}
function AccountCogIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="rgb(75 85 99)"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10 4a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4m7 8a.26.26 0 00-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.193 4.193 0 000 1l-1.06.82a.26.26 0 00-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 00-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5 0-.17-.01-.33-.04-.5l1.06-.82a.26.26 0 00.06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0019 12h-2m-7 2c-4.42 0-8 1.79-8 4v2h9.68a7 7 0 01-.68-3 7 7 0 01.64-2.91c-.53-.06-1.08-.09-1.64-.09m8 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5z"
      />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="rgb(75 85 99)"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 4.75c0-.412.338-.75.75-.75h.5c.412 0 .75.338.75.75v.5c0 .412-.338.75-.75.75h-.5A.753.753 0 017 5.25v-.5zM10 12H6v-1h1V8H6V7h3v4h1z"
      />
      <path
        fill="currentColor"
        d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
      />
    </svg>
  );
}

function TrashFillIcon(props) {
  return (
    <svg
      fill="rgb(75 85 99)"
      viewBox="0 0 16 16"
      height="1.3em"
      width="1.3em"
      {...props}
    >
      <path
        fillRule="currentColor"
        d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
      />
    </svg>
  );
}

function CloseCircleIcon(props) {
  return (
    <svg viewBox="0 0 1024 1024" fill="red" height="2em" width="2em" {...props}>
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
    </svg>
  );
}

export {
  MailIcon,
  LockIcon,
  AccountIcon,
  UnlockFillIcon,
  HomeIcon,
  PeopleIcon,
  AnalyticsIcon,
  AccountCogIcon,
  InfoIcon,
  TrashFillIcon,
  CloseCircleIcon,
};
