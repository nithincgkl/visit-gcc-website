import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import style from "./style.module.css";
// import ReactFlagsSelect from "react-flags-select";
import { CgProfile } from "react-icons/cg";

function Header() {
  const [selected, setSelected] = useState("US");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    // Initialize Bootstrap JS
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollPos > lastScrollPos && currentScrollPos > 100) {
        // Scrolling down
        setHideOnScroll(true);
      } else {
        // Scrolling up
        setHideOnScroll(false);
      }

      setLastScrollPos(currentScrollPos);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${style.headerWrapper} ${hideOnScroll ? style.hidden : ""}`}>
      <nav
        className={`navbar navbar-expand-sm navbar-light ${style.navbar} ${
          scrolled ? style.scrolled : ""
        }`}
        id="navbar"
      >

        <div className="container">


        
              {/*only mobile stiky */}
<div  className={style['navbar_sticky_mobile_container']}>
              <div className={`nav-item ${style["navbar_sticky_mobile"]}`}>
              <Link className="nav-link active" href="/country">
                <img
                  src="../images/01.png"
                  className={style["img-top-logo"]}
                  alt=""
                />
                Explore
              </Link>
            </div>
            <div  className={`nav-item ${style["navbar_sticky_mobile"]}`}>
              <Link className="nav-link active" href="/">
                <img
                  src="../images/02.png"
                  className={style["img-top-logo"]}
                  alt=""
                />
                Plan
              </Link>
            </div>
            <div  className={`nav-item ${style["navbar_sticky_mobile"]}`}>
              <Link className="nav-link active" href="/">
                <img
                  src="../images/03.png"
                  className={style["img-top-logo"]}
                  alt=""
                />
                Book
              </Link>
            </div>
            <div  className={`nav-item ${style["navbar_sticky_mobile"]}`}>
              <Link className="nav-link active" href="/">
                <img
                  src="../images/04.png"
                  className={style["img-top-logo"]}
                  alt=""
                />
                Experience
              </Link>
            </div>
            </div>
              {/*only mobile stiky */}



          <Link className={`navbar-brand ${style["navbar_logo"]}`} href="/">
            <img src="/images/logo.svg" alt="" />
          </Link>

          <button
            className={`navbar-toggler ${style["toggle-btn"]}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <span className={style["close-icon"]}>×</span> // Close icon
            ) : (
              <span className="navbar-toggler-icon"></span> // Default icon
            )}
          </button>
          <div
  className={`collapse navbar-collapse justify-content-end ${style["stiky_time"]} ${
    menuOpen ? "show" : ""
  }`}
  id="collapsibleNavbar"
>
            <ul className={`navbar-nav ${style["navbar-nav-c"]}`}>

            <li className={`nav-item ${style["navbar_sticky"]}`}>
                <Link className="nav-link active" href="/country">
                  <img
                    src="../images/01.png"
                    className={style["img-top-logo"]}
                    alt=""
                  />
                  Explore
                </Link>
              </li>
              <li  className={`nav-item ${style["navbar_sticky"]}`}>
                <Link className="nav-link active" href="/">
                  <img
                    src="../images/02.png"
                    className={style["img-top-logo"]}
                    alt=""
                  />
                  Plan
                </Link>
              </li>
              <li  className={`nav-item ${style["navbar_sticky"]}`}>
                <Link className="nav-link active" href="/">
                  <img
                    src="../images/03.png"
                    className={style["img-top-logo"]}
                    alt=""
                  />
                  Book
                </Link>
              </li>
              <li  className={`nav-item ${style["navbar_sticky"]}`}>
                <Link className="nav-link active" href="/">
                  <img
                    src="../images/04.png"
                    className={style["img-top-logo"]}
                    alt=""
                  />
                  Experience
                </Link>
              </li>





              <li  className={`nav-item ${style["navbar_sticky_hide"]}`}>
                <Link className="nav-link active" href="invest-in-gcc">
                  <img
                    src="/images/inv-gcc.png"
                    className={style["img-top-logo"]}
                    alt=""
                  />
                </Link>
              </li>
              <li  className={`nav-item ${style["navbar_sticky_hide"]}`}>
                <Link className="nav-link" href="/">
                  <img
                    src="/images/GCC-one-visa.png"
                    className={style["img-top-logo"]}
                    alt=""
                  />
                </Link>
              </li>
              <li  className={`nav-item ${style["navbar_sticky_hide"]}`}>
                <Link className="nav-link" href="/partner-with-us">
                  <img 
                    src="/images/Partner.png"
                    alt=""
                    className={style["img-top-logo"]}
                  />
                </Link>
              </li>
              <li className={`nav-item ${style["navbar_sticky_hide"]}`}>
                <Link
                  className={`nav-link ${style["login-link"]}`}
                  href="/login"
                >
                  Login/Signup
                </Link>
              </li>

              {/* <li
                className={`nav-item dropdown ${style["dropdown-right"]} ${style["view-pc"]} ${style["navbar_sticky_hide"]}`}
              >
                <ReactFlagsSelect
                  countries={["US", "GB", "FR", "DE", "IT"]}
                  customLabels={{ US: "", GB: "", FR: "", DE: "", IT: "" }}
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  placeholder="US"
                  showSelectedLabel={false}
                  showOptionLabel={false}
                />
              </li> */}
            </ul>
          </div>

          <div className={`nav-item ${style["navbar_sticky"]}`}>
                <Link
                  className={`nav-link ${style["login_profile"]}`}
                  href="/login"
                >
                <CgProfile /> <span>Leonardo DiCaprio</span>
                </Link>
              </div>

        </div>
      </nav>

      {/* <div
        className={`nav-item dropdown ${style["dropdown-right"]} ${style["view-mobile"]}`}
      >
        <ReactFlagsSelect
          countries={["US", "GB", "FR", "DE", "IT"]}
          customLabels={{ US: "", GB: "", FR: "", DE: "", IT: "" }}
          selected={selected}
          onSelect={(code) => setSelected(code)}
          placeholder="US"
          showSelectedLabel={false}
          showOptionLabel={false}
          className={style["custom-flag-select"]}
        />
      </div> */}
    </div>
  );
}

export default Header;
