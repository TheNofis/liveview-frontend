import { useState } from "react";

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
                    <div
                      className={
                        "header__connlist__user" +
                        (user?.username == userData?.username
                          ? " avatar-green"
                          : " avatar-yellow")
                      }
                      key={`userlist ${user.username}`}
                    >
                      {user?.username[0] != userData?.username[0]
                        ? user?.username[0]
                        : "you"}
                    </div>
                  ) : (
                    <></>
                  ),
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
