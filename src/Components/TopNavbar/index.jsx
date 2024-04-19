import React from "react";
import "./style.scss";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TopNavbar = () => {
  const notify = () => toast("Copied successfully");

  const error = () => toast.error("Failed to copy");

  return (
    <div className="topnavbar__container">
      <div className="logo__container">
        <p>
          <i
            className="ri-phone-fill"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="copy phone number"
            data-tooltip-place="left"
            onClick={async () =>
              await navigator.clipboard
                .writeText("01-5201787")
                .then(() => notify())
                .catch(() => error())
            }
          ></i>
          <span>01-5201787</span>
        </p>
       
        <p>
          <i
            className="ri-map-pin-fill"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="copy address"
            data-tooltip-place="left"
            onClick={async () =>
              await navigator.clipboard
                .writeText("Sankhamul,Kathmandu")
                .then(() => notify())
                .catch(() => error())
            }
          
          ></i>
          <span>Sankhamul,Kathmandu</span>
        </p>
       
        <Tooltip id="my-tooltip" />
        <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
      </div>
      
      <div className="company__info">
        <div className="icons__container">
          <p>
            <a
              href="https://www.facebook.com/valleyhomecareservicesandtrainingcenter"
              target={"_blank"}
            >
              <i className="ri-facebook-fill"></i>
            </a>
          </p>
          <p>
            <a
              href="mailto:valleyhomecareservices85@gmail.com"
              target={"_blank"}
              title="Opens default email client"
            >
              <i className="ri-mail-line"></i>
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/@valleyhomecareservicesandtrain"
              target={"_blank"}
            >
              <i className="ri-youtube-line"></i>
            </a>
          </p>
          <p>
            <a
              href="url"
              target={"_blank"}
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
