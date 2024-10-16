import { useState } from "react";
import HeaderUser from "./HeaderUser";

export default function Header({ socket }) {
  const [userData, setUserData] = useState(null);
  const [userList, setUserList] = useState(null);

  socket.on("userList", setUserList);
  socket.on("userData", setUserData);

  return (
    <header className="header">
      <div className="header__name">LiveView</div>
      {userData?.username ? (
        <div className="header__info">
          <div className="header__connlist">
            {userList != null
              ? userList.map((user) =>
                  user?.username ? (
                    <HeaderUser
                      username={user?.username}
                      creator={user?.creator}
                      creatorName={userData?.username}
                    />
                  ) : null,
                )
              : null}
          </div>
          <div className="header__profile">
            <>
              <div className="header__profile__avatar">
                {userData?.username[0]}
              </div>
              <span className="header__profile__name">
                {userData?.username}
              </span>
            </>
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
