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

export { MailIcon, LockIcon, AccountIcon, UnlockFillIcon };
