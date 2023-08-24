import React, { useEffect, useState } from "react";
import "./Nav.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import PersonIcon from "@mui/icons-material/Person";
import { yellow } from "@material-ui/core/colors";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <ul className="tab-nav">
        <li className="tab-nav-li">
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li className="tab-nav-li">
          <a href="">TV Shows</a>
        </li>
        <li className="tab-nav-li">
          <a href="">Movies</a>
        </li>
        <li className="tab-nav-li">
          <a href="">New & Popular</a>
        </li>
        <li className="tab-nav-li">
          <a href="">My List</a>
        </li>
        <li className="tab-nav-li">
          <a href="">Browse by Language</a>
        </li>
      </ul>

      <div className="sideBox">
        <div className="iconsS">
          <button>
            <SearchOutlinedIcon
              sx={{
                color: yellow[50],
                fontSize: "35px",
              }}
            />
          </button>
        </div>

        <div className="iconsS">
          <button>
            <NotificationsNoneOutlinedIcon
              sx={{
                color: yellow[50],
                fontSize: "35px",
              }}
            />
          </button>
        </div>

        <div className="iconsS">
          <div className="dropdown">
            <button className="dropbtn">
              <PersonOutlineOutlinedIcon
                sx={{
                  color: yellow[50],
                  fontSize: "35px",
                }}
              />
            </button>
            <div className="dropdown-content">
              <a href="#">
                <PersonOutlineOutlinedIcon
                  sx={{
                    fontSize: "25px",
                  }}
                />
                Saima
              </a>
              <a href="#">
                <PersonOutlineOutlinedIcon
                  sx={{
                    // color: white,
                    // background: "transparent",
                    fontSize: "25px",
                  }}
                />
                Sana
              </a>
              <a href="#">
                <PersonOutlineOutlinedIcon
                  sx={{
                    // color: white,
                    // background: "transparent",
                    fontSize: "25px",
                  }}
                />
                Vikas
              </a>
              <a href="#">
                <PersonOutlineOutlinedIcon
                  sx={{
                    // color: white,
                    // background: "transparent",
                    fontSize: "25px",
                  }}
                />
                Akshita
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <img
        className='nav_avatar'
        src='https://pbs.twimg.com/profile_images/124011999041155'
        alt='Netflix Logo'
      /> */}
    </div>
  );
}

export default Nav;
