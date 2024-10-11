export default function Header({ username }) {
  return (
    <header className="header">
      <div className="header__name">LiveServer</div>
      <div className="header__profile">
        {username ? (
          <>
            <div className="header__profile__avatar">{username[0]}</div>
            <span className="header__profile__name">{username}</span>
          </>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
