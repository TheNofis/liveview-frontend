import { useState } from "react";

export default function Header({ socket }) {
  const [userData, setUserData] = useState(null);
  const [userList, setUserList] = useState(null);

  socket.on("userList", setUserList);
  socket.on("userData", setUserData);
  return (
    <header className="header">
      <div className="header__name">LiveServer</div>
      <div className="header__profile">
        {userData?.username ? (
          <>
            <div className="header__profile__avatar">
              {userData?.username[0]}
            </div>
            <span className="header__profile__name">{userData?.username}</span>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
