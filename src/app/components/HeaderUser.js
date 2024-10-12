export default function HeaderUser({ username, creator, creatorName }) {
  return (
    <div
      className={
        "header__connlist__user" +
        (username == creatorName ? " avatar-green" : " avatar-yellow")
      }
      key={`userlist ${username}`}
    >
      {creator ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="35"
          height="35"
          viewBox="0 0 512 512"
          className="header__connlist__user__creator"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="0"
          >
            <path d="M2506 3895 c-31 -11 -160 -134 -596 -570 l-555 -555 -310 311 c-171 171 -323 317 -339 326 -40 21 -123 13 -163 -15 -67 -48 -64 15 -61 -1086 3 -993 3 -995 24 -1023 12 -15 36 -37 55 -48 34 -20 52 -20 1994 -20 1959 0 1960 0 1995 21 19 11 45 35 57 54 l23 33 0 989 c0 1092 3 1033 -62 1080 -33 23 -101 34 -145 24 -19 -5 -134 -113 -348 -327 l-320 -319 -130 131 c-72 72 -142 137 -157 145 -15 8 -49 14 -75 14 -90 0 -153 -63 -153 -153 0 -27 5 -58 11 -70 16 -31 399 -415 431 -433 32 -17 110 -19 141 -3 12 6 127 115 255 242 l232 232 0 -673 0 -672 -1755 0 -1755 0 0 672 0 673 233 -232 c127 -127 242 -236 254 -242 28 -14 108 -14 136 0 12 6 272 260 577 565 l555 554 120 -121 c66 -66 132 -127 147 -135 42 -22 119 -18 158 9 66 44 92 136 57 203 -9 16 -102 115 -209 221 -156 155 -201 193 -233 202 -48 13 -41 13 -89 -4z" />
          </g>
        </svg>
      ) : (
        <></>
      )}
      {username[0] != creatorName[0] ? username[0] : "you"}
    </div>
  );
}
