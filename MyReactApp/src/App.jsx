import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row  announcement-bar px-5 px-md-4 px-sm-3 px-2 justify-content-around  ">
            <div className="col text-center">
              <a href="#">
                Sign up to our newsletter and get 10% OFF on your first purchase
              </a>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar ">
            <div className="navbar-container px-5 px-md-4 px-sm-3 px-2 ">
                <a href="index.html" className="brand-for-lg">
                    <img className="logo"  alt="logo" src="images/Logo-1.svg"/>
                </a>


                <ul className="nav-menu gap-5 gap-md-4 gap-sm-3 gap-2">

                    <li className="nav-item"><a className="nav-link Shop-all" href="#shop-all">Shop all</a></li>
                    <li className="nav-item"><a className="nav-link new-arrivals" href="#new-arrivals">New Arrivals</a></li>
                    <li className="nav-item"><a className="nav-link gym-equipment" href="#gym-equipment">Gym Equipment</a></li>
                    <li className="nav-item"><a className="nav-link beauty-products" href="#beauty-products-section">Beauty
                            Products</a></li>
                    <li className="nav-item"><a className="nav-link electronics-accessories" href="#electronics">Electronics
                            Accessories</a></li>
                    <li className="nav-item"><a className="nav-link Sale" href="#">Sale</a></li>


                </ul>
                <ul className="nav-icon gap-3 icon-gap-5 icon-gap-4 ">
                    <li><a href="#"><svg className="nav-icon-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 25 25" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10.7844 2.40029C5.93661 2.41713 2.02034 6.3607 2.03718 11.2085C2.05402 16.0563 5.99759 19.9726 10.8454 19.9557C13.2168 19.9475 15.3652 18.9996 16.9395 17.466C16.9681 17.4273 16.9999 17.3901 17.0349 17.3549C17.0698 17.3197 17.1067 17.2877 17.1453 17.2588C18.668 15.6739 19.6008 13.5189 19.5926 11.1475C19.5758 6.29972 15.6322 2.38346 10.7844 2.40029ZM19.1342 18.0304C20.6779 16.1583 21.6017 13.7567 21.5926 11.1406C21.5719 5.18821 16.7298 0.379631 10.7775 0.400307C4.8251 0.420983 0.0165172 5.26308 0.0371933 11.2154C0.0578694 17.1678 4.89997 21.9764 10.8523 21.9557C13.4684 21.9466 15.8636 21.0062 17.7249 19.4495L22.3749 24.0673C22.7667 24.4565 23.3999 24.4543 23.7891 24.0624C24.1782 23.6705 24.176 23.0373 23.7842 22.6482L19.1342 18.0304Z"
                                    fill="#404142" />
                            </svg></a> </li>
                    <li> <a href="#"><svg className="nav-icon-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 21 25" fill="none">
                                <path
                                    d="M10.034 10.5012C6.96523 10.5118 4.47048 8.21846 4.46061 5.37767C4.45075 2.53688 6.92951 0.226225 9.99827 0.215566C13.067 0.204906 15.5618 2.49829 15.5717 5.33907C15.5815 8.17986 13.1028 10.4905 10.034 10.5012ZM10.0054 2.27269C8.18003 2.27903 6.67695 3.68017 6.68282 5.36995C6.68869 7.05973 8.20147 8.4504 10.0269 8.44406C11.8522 8.43771 13.3553 7.03657 13.3494 5.34679C13.3436 3.65701 11.8308 2.26635 10.0054 2.27269Z"
                                    fill="#404142" />
                                <path
                                    d="M16.0086 24.1947L4.15684 24.2359C3.07219 24.2397 2.03909 23.8514 1.26943 23.1439C0.499772 22.4363 0.0731766 21.4827 0.0696889 20.4787L0.0649251 19.1072C0.0588854 17.3685 0.793922 15.7251 2.11241 14.496C3.4309 13.267 5.201 12.5751 7.07929 12.5686L13.0052 12.548C14.8835 12.5415 16.6583 13.221 17.9853 14.4409C19.3123 15.6608 20.0588 17.299 20.0648 19.0378L20.0696 20.4092C20.0731 21.4133 19.6531 22.3698 18.8884 23.0827C18.1236 23.7955 17.0933 24.191 16.0086 24.1947ZM7.08644 14.6257C5.79015 14.6302 4.6013 15.0996 3.67827 15.9355C2.78169 16.7713 2.28297 17.8995 2.28713 19.0995L2.2919 20.4709C2.29343 20.9117 2.48014 21.3519 2.85162 21.669C3.19664 21.9862 3.67351 22.1804 4.14969 22.1788L16.0015 22.1376C16.4777 22.1359 16.9533 21.9629 17.296 21.6188C17.6388 21.2993 17.8489 20.8577 17.8474 20.4169L17.8426 19.0455C17.8384 17.8455 17.332 16.7452 16.4295 15.8912C15.5272 15.0617 14.2822 14.6007 13.0123 14.6051L7.08644 14.6257Z"
                                    fill="#404142" />
                            </svg></a></li>
                    <li><a href="#"><svg className="nav-icon-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 23 25" fill="none">
                                <path
                                    d="M4.07245 24.0628C3.56528 24.0645 3.02959 23.9684 2.55 23.7987C2.04215 23.6045 1.59039 23.3367 1.19474 22.9952C0.79908 22.6537 0.515872 22.2384 0.317108 21.7983C0.118259 21.3336 0.032114 20.8686 0.086765 20.3786L1.33651 7.02731C1.3909 6.46385 1.67088 5.94859 2.14851 5.5551C2.62614 5.1616 3.21708 4.93914 3.89339 4.96128L18.1505 4.91175C18.7986 4.9095 19.4192 5.12776 19.8995 5.49344C20.3797 5.85912 20.6634 6.39691 20.7217 6.95997L22.0641 20.2778C22.094 20.792 22.0111 21.2576 21.8436 21.699C21.648 22.165 21.3676 22.5578 20.9743 22.902C20.581 23.2462 20.1311 23.5172 19.6247 23.7149C19.1182 23.9125 18.4985 23.9882 18.0196 23.9898L4.12871 24.0381C4.1288 24.0626 4.10062 24.0627 4.07245 24.0628ZM3.90045 6.99391C3.8441 6.99411 3.78783 7.0188 3.73156 7.04348C3.70347 7.06807 3.67547 7.11715 3.67564 7.16612L2.42589 20.5175C2.42649 20.6889 2.45535 20.8847 2.54056 21.0803C2.62577 21.2759 2.73898 21.4225 2.90855 21.5688C3.07811 21.7152 3.24751 21.8126 3.47326 21.9097C3.69893 21.9824 3.89633 22.0307 4.12174 22.0299L18.0408 21.9816L18.0689 21.9815C18.2943 21.9807 18.5196 21.9309 18.7166 21.8568C18.9135 21.7826 19.1103 21.6595 19.2789 21.512C19.4474 21.3645 19.5595 21.1926 19.6435 21.0209C19.7274 20.8492 19.7548 20.6287 19.726 20.4329L18.3836 7.11504C18.3834 7.06606 18.3551 7.01717 18.2986 6.99288L3.90045 6.99391Z"
                                    fill="#404142" />
                                <path
                                    d="M15.2681 10.6029C14.62 10.6052 14.0831 10.1417 14.0811 9.57847L14.06 3.50505C14.0593 3.30913 14.0306 3.1378 13.9454 2.96667C13.8603 2.79553 13.7471 2.64899 13.6057 2.50254C13.4643 2.35609 13.2667 2.25882 13.0693 2.21052C12.8719 2.13774 12.6745 2.11393 12.4491 2.11472L9.60334 2.1246C9.18069 2.12607 8.75856 2.27448 8.44956 2.54494C8.14056 2.8154 7.97269 3.15884 7.97405 3.55068L7.99507 9.59961C7.99702 10.1629 7.46329 10.63 6.81524 10.6323C6.16719 10.6345 5.63023 10.1711 5.62827 9.60783L5.60717 3.53441C5.60394 2.6038 6.02361 1.7452 6.75389 1.08143C7.54052 0.417475 8.52541 0.046706 9.59611 0.0429869L12.4137 0.0331996C12.9491 0.03134 13.4566 0.127537 13.9362 0.2973C14.4158 0.467063 14.8675 0.734883 15.2349 1.05198C15.6023 1.36907 15.8854 1.75992 16.1123 2.17546C16.311 2.61559 16.4253 3.05601 16.4268 3.49682L16.4479 9.57024C16.4499 10.158 15.9161 10.6007 15.2681 10.6029Z"
                                    fill="#404142" />
                            </svg></a></li>


                   {/* Navbar Toggle Button (Appears After 992px) */}
                    <button className="navbar-toggler">
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* <!-- Fullscreen Navigation (Opens from the Top) --> */}
                    <div className="container-fluid">
                        <div className="container-fluid  justify-content-around">

                            {/* <!-- Sidebar Menu --> */}
                            <div className="sidebar">
                                <div className="overlaySidebar"></div>
                                <div className="sidebar-content">
                                    <div className="sidebar-header">
                                        <img className="logo" src="assets/images/Logo-1.svg" alt="Logo"/>
                                        <button className="close-sidebar">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    <div className="sidebar-nav-content">
                                        <a href="#shop-all" className="sidebar-links">
                                            <i className="fas fa-store"></i>
                                            <span>Shop all</span>
                                        </a>
                                        <a href="#new-arrivals" className="sidebar-links">
                                            <i className="fas fa-star"></i>
                                            <span>New Arrivals</span>
                                        </a>
                                        <a href="#gym-equipment" className="sidebar-links">
                                            <i className="fas fa-dumbbell"></i>
                                            <span>Gym Equipment</span>
                                        </a>
                                        <a href="#beauty-products-section" className="sidebar-links">
                                            <i className="fas fa-spa"></i>
                                            <span>Beauty Products</span>
                                        </a>
                                        <a href="##gym-equipment" className="sidebar-links">
                                            <i className="fas fa-laptop"></i>
                                            <span>Electronics Accessories</span>
                                        </a>
                                        <a href="##gym-equipment" className="sidebar-links">
                                            <i className="fas fa-tag"></i>
                                            <span>Sale</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
        <main>
        <section className="hero-section">
            <div className="video-container">
                {/* <!-- Thumbnail Overlay with Heading & Button --> */}
                <div class="video-overlay" id="video-overlay">
                    <h2 class="hero-head">Elevate Your Routine with Sleekfit & Beauty —
                        From Fitness to Glam and Beyond!</h2>
                    {/* <!-- Font Awesome Play Button --> */}
                    <button className="play-btn" onclick="playVideo()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 61 61" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M30.6315 5.78805C17.0755 5.83514 6.12433 16.8626 6.17142 30.4186C6.21851 43.9746 17.246 54.9258 30.802 54.8787C44.358 54.8316 55.3091 43.8041 55.262 30.2481C55.2149 16.6921 44.1875 5.74096 30.6315 5.78805ZM0.716909 30.4376C0.659357 13.8691 14.0441 0.391089 30.6125 0.333537C47.181 0.275985 60.659 13.6607 60.7165 30.2291C60.7741 46.7976 47.3894 60.2756 30.8209 60.3332C14.2525 60.3907 0.774461 47.006 0.716909 30.4376ZM23.9291 17.0432C24.8142 16.5655 25.8904 16.6138 26.7292 17.1688L43.1307 28.021C43.8912 28.5242 44.3498 29.3741 44.353 30.286C44.3562 31.1979 43.9034 32.051 43.1464 32.5594L26.8208 43.5253C25.9859 44.0861 24.91 44.1419 24.0216 43.6704C23.1331 43.1988 22.5763 42.2766 22.5729 41.2708L22.4971 19.4528C22.4936 18.447 23.044 17.5209 23.9291 17.0432ZM27.9693 24.5297L28.0097 36.1559L36.7091 30.3125L27.9693 24.5297Z"
                                fill="white"></path>
                        </svg>
                    </button>
                </div>
                {/* <!-- Video --> */}
                <video id="hero-video" poster="/images/hero-section-background.png">
                    <source src="assets/video/WhatsApp Video 2025-04-01 at 16.32.50_9f8f2f00.mp4" type="video/mp4"/>
                </video>
            </div>
        </section>
        </main>
    </>
  );
}

export default App;
