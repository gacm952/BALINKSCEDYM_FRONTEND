const MainMenu = () => {
  return (
    <>
        <div className="font-poppins bg-gray-100 min-h-screen flex justify-center items-center py-12 sm:py-8 lg:py-20">
            <div>
                <div className="flex justify-center drop-shadow mb-16 xl:mb-24">
                    <svg className="h-[86px] sm:h-[110px] lg:h-[140px] xl:h-[180px]" viewBox="0 0 97 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="logosvg ">
                        <path id="Vector" d="M96.4478 86C89.4884 85.9023 83.1072 81.0959 78.125 73.1439C74.0103 66.587 70.8451 57.8925 69.0789 47.9359C68.0551 42.1839 67.5002 36.0098 67.5002 29.5818C66.7148 31.5083 65.5737 33.9623 64.6984 36.682L56.2814 62.4527C55.3827 65.2115 54.3003 67.8608 53.1983 70.0296C52.2331 71.9404 50.2715 73.1439 48.1301 73.1439C44.1873 73.1439 40.6783 70.0765 38.4861 63.5898L37.7906 61.5422V61.5344L29.8972 38.2567C28.846 35.1892 27.4432 31.5981 26.5679 29.4919C24.9892 38.0848 23.9381 62.187 23.9381 73.1439H19.7296C17.1232 73.1439 14.9935 72.1631 13.6728 70.3344C12.7232 69.0292 12.1918 67.2903 12.1918 65.1685C12.1918 52.6368 15.9861 25.9399 18.0766 13.0995C18.0884 13.033 18.0962 12.9744 18.104 12.9197C12.4067 5.87038 6.11542 1.23986 0 0.11837C11.1015 -0.956225 21.9256 5.35849 30.5459 16.1005C32.7576 18.8554 34.8247 21.9033 36.716 25.1936C42.1046 34.5679 46.0513 45.9 47.8019 58.0332C47.7941 58.0683 47.7902 58.1035 47.7824 58.1387H47.7745C47.7745 58.1387 47.7784 58.1504 47.7784 58.1543C47.7784 58.1504 47.7784 58.1426 47.7784 58.1387L47.8136 58.127C47.8097 58.0957 47.8058 58.0644 47.798 58.0332C48.2356 55.8097 48.8374 54.0005 49.4392 52.0194L56.3674 30.7189C58.9816 22.5676 62.1741 16.968 64.5812 14.2483C65.2299 13.5137 66.1677 13.0995 67.1485 13.0995C73.811 13.0995 78.1914 17.308 79.1566 25.5491C79.1566 36.4358 79.9889 46.6425 81.4426 55.462C84.4241 73.4995 90.012 85.7187 96.4439 86H96.4478Z" fill="#00A451"/>
                        </g>
                    </svg>
                </div>
                <div className="flex justify-center text-center">
                    <p className="text-green-600 text-[13.5px] sm:text-[23px] lg:text-[33px] xl:text-[43px] font-normal">¡Comience su viaje hacia una vida saludable <span className="text-green-600 text-sm sm:text-[25px] lg:text-[35px] xl:text-[45px] font-bold">HOY</span>!</p>
                </div>
                <div className="flex flex-col items-center">
                    <a href="https://api.whatsapp.com/send/?phone=573172309528&text=Hola%20CEDYM,%20¡Quiero%20Agendar%20una%20Cita!." className="animate-bounce flex mt-10 sm:mt-20 xl:mt-32 bg-green-600 py-3 px-16 sm:px-24 lg:px-28 xl:px-36 rounded-xl relative drop-shadow-lg">
                        <svg className="animate-pulse absolute left-4 md:left-5 xl:left-6 bottom-2.5 sm:bottom-2.9 xl:bottom-3.4 h-[29px] sm:h-[47px] lg:h-[64px] xl:h-[76px]" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Untitled 1" clip-path="url(#clip0_8_98)">
                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M23.9977 4.11467C21.3837 1.49078 17.8309 0.0180381 14.1271 0.0231921C6.43105 0.0105514 0.156126 6.23394 0.140418 13.8973C0.132872 16.3373 0.772175 18.7358 1.99318 20.8486L1.89103e-05 28.0442L7.40537 26.124C9.45272 27.2373 11.7453 27.8221 14.0758 27.8251L14.0814 27.8251C21.7766 27.8378 28.0511 21.6138 28.0674 13.9513C28.0829 10.2596 26.6168 6.71608 23.9977 4.11467ZM14.0853 25.4796L14.0803 25.4796C12.0028 25.4766 9.96409 24.9174 8.17594 23.8598L7.75266 23.6088L3.35817 24.7482L4.53761 20.4878L4.26239 20.0493C3.10379 18.2082 2.49172 16.0762 2.49779 13.9011C2.50825 7.53282 7.72554 2.36028 14.1276 2.37079C20.5226 2.36985 25.7079 7.55282 25.7098 13.948C25.6969 20.3167 20.4821 25.4901 14.0853 25.4796ZM20.4651 16.8395C20.1166 16.665 18.4009 15.822 18.0831 15.7056C17.7653 15.5894 17.5307 15.5307 17.2979 15.8785C17.0651 16.2261 16.3945 17.0037 16.1908 17.2381C15.9869 17.4725 15.7834 17.4979 15.4351 17.3232C15.0866 17.1486 13.9624 16.7805 12.6317 15.5953C11.5958 14.6727 10.8978 13.5349 10.6951 13.1871C10.4921 12.8394 10.6739 12.6512 10.849 12.4787C11.0063 12.3231 11.1982 12.0737 11.3731 11.8711C11.5483 11.6687 11.6066 11.5236 11.7229 11.2921C11.839 11.0607 11.7819 10.8577 11.6949 10.6842C11.6082 10.5107 10.9131 8.80003 10.6239 8.10407C10.3414 7.42624 10.0539 7.51775 9.83973 7.50678C9.63643 7.49646 9.4017 7.49358 9.17071 7.4932C8.81359 7.50177 8.47642 7.65854 8.23978 7.92598C7.91936 8.2736 7.01648 9.11348 7.01367 10.8212C7.01087 12.5288 8.26009 14.1834 8.43243 14.4153C8.60499 14.6472 10.8865 18.1583 14.3839 19.6684C15.0333 19.9477 15.6969 20.1929 16.3721 20.4028C17.2074 20.6684 17.9681 20.6326 18.569 20.5441C19.2397 20.4458 20.6362 19.7074 20.9274 18.8967C21.2184 18.0858 21.2202 17.391 21.1335 17.2462C21.0467 17.1014 20.814 17.0134 20.4651 16.8395Z" fill="#E5E7EB"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_8_98">
                            <rect width="28.0443" height="28.0443" fill="white" transform="translate(0.0460815) rotate(0.0941082)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p className="animate-pulse text-gray-200 font-semibold sm:text-[29px] lg:text-[40px] xl:text-[51px]">Agendar Cita</p>
                    </a>
                    <div>
                        <p className="text-[10px] sm:text-[17px] lg:text-[22px] xl:text-[27px] my-8 lg:my-12 text-green-600">Enlaces de Interés</p>
                    </div>
                    <div>
                        <a href="https://cedym.co" target="_blank" className="group transition ease-in-out duration-700 hover:bg-green-600 mb-6 lg:mb-10 justify-center flex items-center rounded-full drop-shadow-md bg-gray-200 py-[6px] sm:py-[8px] px-[84px] sm:px-[138px] lg:px-[170px] xl:px-[220px] relative">
                            <svg className="group-hover:fill-gray-200 transition ease-in-out duration-700 absolute fill-green-600 left-4 sm:left-6 xl:left-8 sm:bottom-0.5 lg:bottom-1.5 xl:bottom-2.5 h-[21px] w-[20px] sm:h-[39px] sm:w-[37px] lg:h-[45px] lg:w-[43px] xl:h-[51px] xl:w-[49px]"  viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="website-layout-icon 1" clip-path="url(#clip0_10_2)">
                                <g id="Group">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M1.28363 0H19.715C20.0654 0 20.3867 0.143702 20.6191 0.373626L20.6208 0.375317L20.6225 0.377008L20.6242 0.378698C20.8566 0.610313 21.0002 0.926458 21.0002 1.27303V18.7337C21.0002 19.0837 20.8549 19.4015 20.6225 19.6314C20.3901 19.8614 20.0688 20.0051 19.715 20.0051H1.28363C0.933289 20.0051 0.612 19.8631 0.377869 19.6314L0.37616 19.6298L0.374451 19.6281L0.372742 19.6264C0.14032 19.3948 -0.00323486 19.0786 -0.00323486 18.732V1.26965C0.000183105 0.919696 0.143738 0.60186 0.37616 0.371936C0.389832 0.358411 0.403503 0.344886 0.418884 0.333052C0.647888 0.126796 0.952087 0 1.28363 0ZM11.2436 16.6948C10.9736 16.6948 10.7548 16.4598 10.7548 16.1691C10.7548 15.8783 10.9736 15.6433 11.2436 15.6433H17.2626C17.5327 15.6433 17.7514 15.8783 17.7514 16.1691C17.7514 16.4598 17.5327 16.6948 17.2626 16.6948H11.2436ZM3.55829 16.6948C3.29169 16.6948 3.07465 16.4598 3.07465 16.1691C3.07465 15.8783 3.29169 15.6433 3.55829 15.6433H9.13812C9.40472 15.6433 9.62177 15.8783 9.62177 16.1691C9.62177 16.4598 9.40472 16.6948 9.13812 16.6948H3.55829ZM3.36517 14.3973C3.09857 14.3973 2.88153 14.1623 2.88153 13.8715C2.88153 13.5807 3.09857 13.3457 3.36517 13.3457H8.94501C9.21161 13.3457 9.42865 13.5807 9.42865 13.8715C9.42865 14.1623 9.21161 14.3973 8.94501 14.3973H3.36517ZM11.2436 14.3973C10.9736 14.3973 10.7548 14.1623 10.7548 13.8715C10.7548 13.5807 10.9736 13.3457 11.2436 13.3457H17.2626C17.5327 13.3457 17.7514 13.5807 17.7514 13.8715C17.7514 14.1623 17.5327 14.3973 17.2626 14.3973H11.2436ZM3.00629 5.87828H17.6933V11.5672H3.00629V5.87828ZM19.8398 4.55283C19.7988 4.55959 19.7578 4.56298 19.7167 4.56298H1.28363C1.24091 4.56298 1.19989 4.55959 1.16058 4.55283V18.7303C1.16058 18.7642 1.17426 18.7946 1.19476 18.8166L1.19647 18.8183C1.21869 18.8402 1.24774 18.8521 1.28363 18.8521H19.715C19.7475 18.8521 19.7783 18.8385 19.8022 18.8149C19.8244 18.7929 19.8398 18.7625 19.8398 18.7287V4.55283ZM8.56561 1.6399C9.02704 1.6399 9.3996 2.01014 9.3996 2.46492C9.3996 2.9197 9.02533 3.28994 8.56561 3.28994C8.1059 3.28994 7.73163 2.9197 7.73163 2.46492C7.73163 2.01014 8.1059 1.6399 8.56561 1.6399ZM5.64838 1.6399C6.1098 1.6399 6.48236 2.01014 6.48236 2.46492C6.48236 2.9197 6.10809 3.28994 5.64838 3.28994C5.18695 3.28994 4.81439 2.9197 4.81439 2.46492C4.81439 2.01014 5.18866 1.6399 5.64838 1.6399ZM2.73285 1.6399C3.19427 1.6399 3.56683 2.01014 3.56683 2.46492C3.56683 2.9197 3.19257 3.28994 2.73285 3.28994C2.27142 3.28994 1.89886 2.9197 1.89886 2.46492C1.89886 2.01014 2.27142 1.6399 2.73285 1.6399Z" />
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_10_2">
                                <rect width="21" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p className="transition duration-700 ease-in-out group-hover:text-gray-200 text-green-600 text-[13px] sm:text-[23px] lg:text-[30px] xl:text-[37px] font-medium">Sitio Web</p> 
                        </a>
                        <a href="https://www.instagram.com/cedymco" target="_blank" className="group transition ease-in-out duration-700 hover:bg-green-600 mb-6 lg:mb-10 justify-center flex items-center rounded-full drop-shadow-md bg-gray-200 py-[6px] sm:py-[8px] px-[84px] sm:px-[138px] lg:px-[170px] xl:px-[220px] relative">
                            <svg className="group-hover:fill-gray-200 transition ease-in-out duration-700 absolute fill-green-600 left-4 sm:left-6 xl:left-8 sm:bottom-0.5 lg:bottom-1.5 xl:bottom-2.5 h-[21px] w-[20px] sm:h-[39px] sm:w-[37px] lg:h-[45px] lg:w-[43px] xl:h-[51px] xl:w-[49px]" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                                <g id="instagram-square-icon 1" clip-path="url(#clip0_10_9)">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M19.0312 0H1.96875C0.885938 0 0 0.84375 0 1.875V18.125C0 19.1562 0.885938 20 1.96875 20H19.0312C20.114 20 21 19.1562 21 18.125V1.875C21 0.84375 20.114 0 19.0312 0ZM7.38445 3.04212H13.6159C15.956 3.04212 17.8694 4.84184 17.8694 7.04056V12.9594C17.8694 15.1585 15.956 16.9579 13.6159 16.9579H7.38445C5.04479 16.9579 3.13103 15.1585 3.13103 12.9594V7.04056C3.13103 4.84181 5.04479 3.04212 7.38445 3.04212ZM10.4605 6.24294C12.7342 6.24294 14.5798 8.00022 14.5798 10.1661C14.5798 12.332 12.7342 14.0889 10.4605 14.0889C8.18593 14.0889 6.34115 12.332 6.34115 10.1661C6.34115 8.00022 8.1859 6.24294 10.4605 6.24294ZM10.4605 7.568C11.9661 7.568 13.1885 8.73141 13.1885 10.1661C13.1885 11.6004 11.9661 12.7642 10.4605 12.7642C8.95404 12.7642 7.7321 11.6004 7.7321 10.1661C7.7321 8.73141 8.95404 7.568 10.4605 7.568ZM14.4457 5.69925C14.815 5.69925 15.1142 5.98419 15.1142 6.33594C15.1142 6.68769 14.815 6.973 14.4457 6.973C14.0763 6.973 13.7768 6.68769 13.7768 6.33594C13.7768 5.98419 14.0763 5.69925 14.4457 5.69925ZM7.89334 4.17894H13.1071C15.0646 4.17894 16.6656 5.69594 16.6656 7.54987V12.5401C16.6656 14.3941 15.0646 15.9111 13.1071 15.9111H7.89331C5.93618 15.9111 4.33479 14.3941 4.33479 12.5401V7.54991C4.33479 5.69591 5.93618 4.17894 7.89331 4.17894H7.89334Z"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_10_9">
                                <rect width="21" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p className="transition duration-700 ease-in-out group-hover:text-gray-200 text-green-600 text-[13px] sm:text-[23px] lg:text-[30px] xl:text-[37px] font-medium">Instagram</p> 
                        </a>
                        <a href="https://www.facebook.com/cedymco" target="_blank" className="group transition ease-in-out duration-700 hover:bg-green-600 mb-6 lg:mb-10 justify-center flex items-center rounded-full drop-shadow-md bg-gray-200 py-[6px] sm:py-[8px] px-[84px] sm:px-[138px] lg:px-[170px] xl:px-[220px] relative">
                            <svg className="group-hover:fill-gray-200 transition ease-in-out duration-700 absolute fill-green-600 left-4 sm:left-6 xl:left-8 sm:bottom-0.5 lg:bottom-1.5 xl:bottom-2.5 h-[21px] w-[20px] sm:h-[39px] sm:w-[37px] lg:h-[45px] lg:w-[43px] xl:h-[51px] xl:w-[49px]" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="facebook-square-icon 1" clip-path="url(#clip0_10_7)">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M19.0312 -0.000358582H1.96875C0.885937 -0.000358582 -0.000427246 0.843766 -0.000427246 1.87505V18.125C-0.000427246 19.1563 0.885937 20.0004 1.96875 20.0004H19.0312C20.114 20.0004 21.0004 19.1563 21.0004 18.125V1.87502C21.0004 0.843766 20.114 -0.000358582 19.0312 -0.000358582ZM11.9378 5.43095H14.3379V2.68964H11.9378C10.0895 2.68964 8.58158 4.12542 8.58158 5.88789V7.25798H6.66241V10H8.58119V17.3104H11.46V10H13.8577L14.3379 7.25798H11.4599V5.88789C11.4599 5.63983 11.6797 5.43058 11.9378 5.43058V5.43095Z" />
                                </g>
                                <defs>
                                <clipPath id="clip0_10_7">
                                <rect width="21" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg> 
                            <p className="transition duration-700 ease-in-out group-hover:text-gray-200 text-green-600 text-[13px] sm:text-[23px] lg:text-[30px] xl:text-[37px] font-medium">Facebook</p> 
                        </a>
                        <a href="https://www.tiktok.com/@cedymco" target="_blank" className="group transition ease-in-out duration-700 hover:bg-green-600  justify-center flex items-center rounded-full drop-shadow-md bg-gray-200 py-[6px] sm:py-[8px] px-[84px] sm:px-[138px] lg:px-[170px] xl:px-[220px] relative">
                            <svg className="group-hover:fill-gray-200 transition ease-in-out duration-700 absolute fill-green-600 left-4 sm:left-6 xl:left-8 sm:bottom-0.5 lg:bottom-1.5 xl:bottom-2.5 h-[21px] w-[20px] sm:h-[39px] sm:w-[37px] lg:h-[45px] lg:w-[43px] xl:h-[51px] xl:w-[49px]" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="tiktok-square-icon 1" clip-path="url(#clip0_10_31)">
                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M19.0342 0H1.9721C0.888389 0 0 0.846085 0 1.87219V18.1218C0 19.1539 0.888389 19.994 1.9721 19.994H19.0342C20.1179 19.994 21.0063 19.1479 21.0063 18.1218V1.87219C21.0063 0.840084 20.1179 0 19.0342 0ZM13.0738 3.73837C13.2943 5.51455 14.3339 6.57666 16.1422 6.69067V8.68887C15.09 8.78488 14.1701 8.46085 13.099 7.84278V11.5812C13.099 16.3336 7.66157 17.8218 5.47525 14.4134C4.07021 12.2232 4.92709 8.37684 9.43834 8.22082V10.333C9.09811 10.387 8.72637 10.471 8.39244 10.5731C7.39064 10.8971 6.82358 11.5032 6.9811 12.5653C7.28353 14.6115 11.2277 15.2115 10.8938 11.2151V3.73237H13.0675L13.0738 3.73837Z"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_10_31">
                                <rect width="21" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg> 
                            <p className="transition duration-700 ease-in-out group-hover:text-gray-200 text-green-600 text-[13px] sm:text-[23px] lg:text-[30px] xl:text-[37px] font-medium">TikTok</p> 
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-20">
                        <p className="text-[10px] sm:text-[15px] lg:text-[20px] xl:text-[25px] text-green-600">Desarrollado por</p>
                        <a href="mailto:contacto@brandadvisories.com?subject=Tengo Interés en sus Servicios" className="mt-2 lg:mt-6">
                            <svg className="h-[60px] w-[50px] sm:h-[94px] sm:w-[84px] lg:h-[104px] lg:w-[94px] xl:h-[114px] xl:w-[104px]" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Untitled (2) 1" clip-path="url(#clip0_12_33)">
                                <path id="Vector" d="M3.12922 23.924C5.17222 34.6628 6.284 40.4814 6.32972 40.6837C6.67708 42.1989 7.16235 43.5895 7.81465 44.9387C9.66517 48.7634 12.7086 51.8911 16.524 53.8902C20.0433 55.7346 24.055 56.4831 28.0179 56.0373C28.5894 55.9729 28.7264 55.9516 29.5517 55.7946C30.377 55.6376 30.5123 55.6071 31.0675 55.4571C34.5652 54.5124 37.7333 52.6401 40.2454 50.0331C40.7009 49.5616 41.2044 48.9815 41.6187 48.4519L41.703 48.3436L42.1758 50.8287L42.6484 53.3127L42.9066 53.2563C43.8239 53.0567 44.7432 52.6204 45.5108 52.0212C47.209 50.6959 48.1618 48.6481 48.0738 46.5118C48.0544 46.0419 48.1615 46.6365 46.7401 39.1398C45.4172 32.1674 45.3672 31.9107 45.2027 31.2743C44.4677 28.4254 43.1038 25.7766 41.2187 23.5326C38.3948 20.17 34.5317 17.8252 30.2391 16.8676C28.1167 16.3938 25.9419 16.2729 23.7358 16.5068C23.095 16.5747 21.9397 16.7718 21.3208 16.9171C18.0969 17.6779 15.2502 19.1221 12.7675 21.256C11.7973 22.0904 10.8134 23.1251 10.045 24.1201L9.97412 24.2103L8.85181 18.311C8.10236 14.3716 7.71611 12.3603 7.68815 12.2577C7.14341 10.2502 5.71949 8.64258 3.77891 7.84411C2.75182 7.42212 1.62247 7.26773 0.492248 7.39404C0.405012 7.40464 0.258413 7.42654 0.166458 7.44403L7.43673e-06 7.4757L3.12922 23.924ZM24.2182 23.1632C25.471 23.0219 26.4899 23.0271 27.6344 23.1786C29.9287 23.4842 32.0832 24.3738 33.9358 25.7813C35.7783 27.1798 37.2465 29.0836 38.122 31.2067C38.4781 32.0705 38.7134 32.8637 38.8904 33.7939C38.9819 34.2752 39.0214 34.5458 39.0637 34.9837C39.3012 37.4117 38.8623 39.8341 37.7881 42.0297C37.4744 42.6696 37.1751 43.1761 36.7519 43.7853C35.733 45.2511 34.4607 46.469 32.9469 47.4259C30.4826 48.9845 27.5412 49.6963 24.6217 49.4389C21.2802 49.1443 18.1452 47.5769 15.9098 45.083C14.9654 44.0303 14.1997 42.8393 13.6435 41.5581C13.4099 41.0211 13.2055 40.4474 13.0478 39.8911C12.8454 39.1696 12.6911 38.3586 12.6142 37.6119C12.1894 33.4393 13.8054 29.2921 16.9581 26.4637C18.5509 25.035 20.4871 24.0037 22.5597 23.4799C22.6701 23.4517 22.7922 23.4213 22.8302 23.4116C22.9741 23.3759 24.06 23.1813 24.2182 23.1632Z" fill="#16A34A"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_12_33">
                                <rect width="40" height="53" fill="white" transform="translate(0 7.47571) rotate(-10.7715)"/>
                                </clipPath>
                                </defs>
                            </svg> 
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainMenu