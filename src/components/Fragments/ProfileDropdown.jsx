import {  useRef, useState } from "react";
// import jwt_decode from "jwt-decode";
// const token = localStorage.getItem("token");

const ProfileDropdown = ({ handleLogout }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

//   useEffect(() => {
//     getUsername(token);
//   }, []);

//   const getUsername = (token) => {
//     const decoded = jwt_decode(token);
//     console.log(decoded);
//     return decoded.user;
//   };
  return (
    <>
      <div className="relative">
        <img
          ref={imgRef}
          onClick={() => setOpen(!open)}
          src="https://i.pinimg.com/564x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
          alt="Profile Image"
          className="h-10 w-10 object-cover border-4 border-gray-400 rounded-full cursor-pointer"
        />
        {open && (
          <div
            ref={menuRef}
            className="bg-white p-4 w-30 shadow-lg absolute -left-14 top-18"
          >
            <ul>
              <li
                className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
