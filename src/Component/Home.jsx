import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./hero";
import { Link } from "react-router-dom";
import { IoIosReturnRight } from "react-icons/io";
const Home = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(0, 0, 0, .23),transparent ),radial-gradient(ellipse at 50% 0%, rgba(39, 39, 39, 1), rgba(29, 28, 28, 0.28) 50%, #272727 100%,transparent)",
      }}
      className="w-screen h-full "
    >
      <Navbar />
      <div className=" grid gap-20">
        <Hero className="relative" />
        <svg className="absolute z-[-1] top-[35rem] left-[10rem]" width="161" height="290" viewBox="0 0 161 290" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M160.712 286.098C160.862 286.63 160.551 287.182 160.02 287.331L151.354 289.761C150.822 289.911 150.27 289.6 150.121 289.069C149.972 288.537 150.282 287.985 150.814 287.836L158.517 285.675L156.356 277.973C156.207 277.441 156.517 276.889 157.049 276.74C157.581 276.591 158.133 276.901 158.282 277.432L160.712 286.098ZM48.5 177L48.9327 177.902L48.5 177ZM114.125 260.5L113.625 261.366L114.125 260.5ZM41.3754 213L40.6683 213.707L41.3754 213ZM118.354 189.5L119.336 189.688L118.354 189.5ZM159.75 286.368C159.26 287.24 159.26 287.24 159.26 287.24C159.26 287.24 159.26 287.24 159.26 287.24C159.26 287.24 159.26 287.24 159.26 287.24C159.26 287.24 159.259 287.24 159.259 287.24C159.259 287.24 159.259 287.239 159.258 287.239C159.257 287.238 159.255 287.237 159.253 287.236C159.248 287.234 159.242 287.23 159.233 287.225C159.215 287.215 159.188 287.2 159.153 287.18C159.083 287.14 158.978 287.081 158.841 287.004C158.566 286.85 158.162 286.623 157.644 286.331L158.624 284.588C159.143 284.88 159.546 285.107 159.821 285.261C159.958 285.338 160.063 285.397 160.133 285.436C160.168 285.456 160.195 285.471 160.213 285.481C160.222 285.486 160.228 285.49 160.233 285.493C160.235 285.494 160.237 285.495 160.238 285.495C160.238 285.496 160.239 285.496 160.239 285.496C160.239 285.496 160.239 285.496 160.239 285.496C160.239 285.496 160.239 285.496 160.239 285.496C160.24 285.496 160.24 285.496 160.24 285.496C160.24 285.496 160.24 285.496 159.75 286.368ZM154.367 284.487C153.394 283.939 152.3 283.323 151.108 282.651L152.09 280.909C153.281 281.58 154.375 282.197 155.349 282.745L154.367 284.487ZM147.842 280.81C146.798 280.221 145.706 279.605 144.577 278.968L145.561 277.226C146.689 277.863 147.78 278.479 148.825 279.068L147.842 280.81ZM141.313 277.124C140.243 276.52 139.152 275.903 138.048 275.278L139.033 273.538C140.137 274.162 141.227 274.778 142.297 275.383L141.313 277.124ZM134.786 273.432C133.702 272.818 132.613 272.201 131.526 271.584L132.512 269.844C133.599 270.461 134.688 271.078 135.772 271.692L134.786 273.432ZM128.265 269.734C127.167 269.11 126.079 268.491 125.008 267.882L125.997 266.143C127.068 266.753 128.156 267.371 129.253 267.995L128.265 269.734ZM121.752 266.026C120.634 265.388 119.545 264.766 118.496 264.165L119.489 262.429C120.538 263.03 121.626 263.651 122.743 264.289L121.752 266.026ZM115.245 262.3C114.687 261.979 114.146 261.667 113.625 261.366L114.625 259.634C115.145 259.935 115.685 260.246 116.242 260.566L115.245 262.3ZM113.625 261.366C113.074 261.048 112.508 260.716 111.93 260.371L112.955 258.653C113.525 258.994 114.082 259.321 114.625 259.634L113.625 261.366ZM108.516 258.278C107.428 257.594 106.305 256.873 105.153 256.119L106.249 254.446C107.391 255.194 108.503 255.908 109.58 256.585L108.516 258.278ZM101.835 253.907C100.76 253.178 99.6659 252.424 98.5551 251.648L99.701 250.009C100.804 250.78 101.891 251.528 102.958 252.251L101.835 253.907ZM95.3077 249.345C94.2452 248.581 93.1716 247.799 92.0898 247L93.2778 245.391C94.3528 246.185 95.4196 246.962 96.4752 247.721L95.3077 249.345ZM88.9001 244.614C87.8502 243.819 86.7955 243.01 85.7385 242.188L86.9658 240.609C88.0162 241.425 89.0644 242.23 90.1078 243.02L88.9001 244.614ZM82.6064 239.723C81.5717 238.898 80.5374 238.063 79.5058 237.219L80.7724 235.671C81.7973 236.509 82.825 237.339 83.8531 238.159L82.6064 239.723ZM76.4399 234.676C75.4233 233.821 74.4118 232.959 73.4077 232.091L74.7159 230.578C75.7128 231.44 76.7172 232.296 77.7269 233.145L76.4399 234.676ZM70.4108 229.46C69.4144 228.573 68.4281 227.68 67.4541 226.783L68.8086 225.312C69.7743 226.201 70.7527 227.086 71.7414 227.967L70.4108 229.46ZM64.5431 224.057C63.5734 223.132 62.6194 222.206 61.6836 221.278L63.0918 219.858C64.0178 220.776 64.9625 221.694 65.9232 222.609L64.5431 224.057ZM58.8828 218.441C57.9459 217.47 57.0318 216.5 56.1437 215.533L57.6171 214.18C58.4933 215.135 59.3958 216.092 60.3218 217.052L58.8828 218.441ZM53.4789 212.544C52.5878 211.514 51.7299 210.489 50.9089 209.469L52.4665 208.215C53.2717 209.214 54.1146 210.222 54.9915 211.236L53.4789 212.544ZM48.4572 206.293C47.6396 205.183 46.8716 204.084 46.1585 202.997L47.8308 201.9C48.5221 202.953 49.2691 204.023 50.0673 205.106L48.4572 206.293ZM44.0576 199.542C43.3659 198.301 42.7565 197.079 42.239 195.882L44.0749 195.088C44.5624 196.217 45.141 197.378 45.8045 198.568L44.0576 199.542ZM40.873 192.004C40.496 190.583 40.2762 189.2 40.2385 187.864L42.2377 187.808C42.2704 188.964 42.4618 190.194 42.806 191.49L40.873 192.004ZM40.8192 183.619C41.2654 182.259 41.9714 180.999 42.9537 179.855L44.4708 181.159C43.6577 182.105 43.0829 183.135 42.7195 184.243L40.8192 183.619ZM46.195 177.123C46.7758 176.761 47.3998 176.419 48.0674 176.098L48.9327 177.902C48.3269 178.192 47.7682 178.499 47.2546 178.82L46.195 177.123ZM48.0674 176.098C48.6781 175.805 49.3012 175.522 49.9356 175.248L50.7289 177.084C50.1178 177.348 49.5187 177.62 48.9327 177.902L48.0674 176.098ZM53.7655 173.752C55.0358 173.305 56.3401 172.891 57.6716 172.51L58.2224 174.432C56.9268 174.803 55.6604 175.206 54.4295 175.639L53.7655 173.752ZM61.6411 171.487C62.9575 171.183 64.2933 170.91 65.643 170.666L65.9988 172.634C64.6793 172.872 63.3746 173.14 62.0901 173.436L61.6411 171.487ZM69.6796 170.029C71.0262 169.847 72.3809 169.693 73.7384 169.568L73.9221 171.559C72.5925 171.682 71.2659 171.832 69.9478 172.011L69.6796 170.029ZM77.812 169.277C79.1769 169.209 80.5394 169.169 81.894 169.157L81.9105 171.157C80.5841 171.168 79.2496 171.207 77.9125 171.275L77.812 169.277ZM85.9761 169.212C87.3541 169.261 88.7182 169.34 90.0623 169.45L89.8986 171.444C88.5864 171.336 87.2533 171.258 85.9055 171.211L85.9761 169.212ZM94.1284 169.887C95.5099 170.073 96.8624 170.293 98.1784 170.549L97.7968 172.512C96.5214 172.264 95.2077 172.05 93.8628 171.87L94.1284 169.887ZM102.182 171.468C103.553 171.836 104.872 172.249 106.127 172.706L105.441 174.585C104.247 174.149 102.984 173.754 101.664 173.4L102.182 171.468ZM109.943 174.343C111.248 174.999 112.453 175.722 113.537 176.514L112.357 178.129C111.374 177.411 110.265 176.744 109.044 176.129L109.943 174.343ZM116.68 179.416C117.637 180.563 118.386 181.817 118.883 183.179L117.004 183.865C116.594 182.743 115.969 181.687 115.144 180.697L116.68 179.416ZM119.577 187.517C119.557 188.225 119.477 188.949 119.336 189.688L117.372 189.312C117.494 188.674 117.561 188.057 117.578 187.462L119.577 187.517ZM119.336 189.688C119.199 190.402 119.022 191.112 118.807 191.816L116.894 191.231C117.089 190.593 117.249 189.953 117.372 189.312L119.336 189.688ZM117.146 195.833C116.495 197.081 115.731 198.304 114.865 199.497L113.246 198.323C114.059 197.202 114.771 196.062 115.373 194.908L117.146 195.833ZM112.136 202.816C111.193 203.839 110.177 204.836 109.096 205.802L107.763 204.312C108.799 203.385 109.769 202.433 110.666 201.46L112.136 202.816ZM105.805 208.509C104.694 209.35 103.535 210.163 102.334 210.945L101.242 209.269C102.405 208.512 103.526 207.726 104.597 206.914L105.805 208.509ZM98.708 213.141C97.4874 213.828 96.2341 214.484 94.9541 215.107L94.0788 213.309C95.3237 212.703 96.5416 212.065 97.7268 211.398L98.708 213.141ZM91.1004 216.848C89.803 217.39 88.4853 217.898 87.1527 218.369L86.4862 216.484C87.7835 216.025 89.0663 215.531 90.3292 215.003L91.1004 216.848ZM83.1259 219.666C81.7681 220.062 80.4005 220.418 79.0288 220.732L78.5823 218.782C79.9156 218.477 81.2456 218.131 82.5668 217.746L83.1259 219.666ZM74.8725 221.552C73.4694 221.783 72.0672 221.969 70.6718 222.105L70.4773 220.115C71.8272 219.983 73.1855 219.803 74.5466 219.578L74.8725 221.552ZM66.4296 222.366C64.9956 222.401 63.5749 222.379 62.1742 222.297L62.2906 220.301C63.6337 220.379 64.9994 220.4 66.3813 220.367L66.4296 222.366ZM57.9332 221.853C56.5029 221.633 55.1019 221.342 53.7385 220.976L54.2572 219.044C55.5457 219.39 56.8748 219.667 58.2373 219.876L57.9332 221.853ZM49.668 219.606C48.3252 219.055 47.0331 218.415 45.8016 217.683L46.8241 215.964C47.9668 216.644 49.1707 217.24 50.428 217.756L49.668 219.606ZM42.2704 215.177C41.7177 214.712 41.1832 214.222 40.6683 213.707L42.0825 212.293C42.5565 212.767 43.0489 213.218 43.5585 213.647L42.2704 215.177ZM40.6683 213.707C40.1789 213.218 39.695 212.726 39.2164 212.233L40.6516 210.84C41.1232 211.326 41.6002 211.811 42.0825 212.293L40.6683 213.707ZM36.4085 209.252C35.4936 208.251 34.5998 207.243 33.7266 206.228L35.2428 204.924C36.1029 205.924 36.9835 206.917 37.8848 207.903L36.4085 209.252ZM31.0943 203.071C30.2362 202.009 29.3997 200.939 28.5844 199.864L30.1784 198.656C30.9812 199.715 31.805 200.768 32.6501 201.814L31.0943 203.071ZM26.1754 196.58C25.3813 195.462 24.6092 194.336 23.8585 193.205L25.525 192.099C26.2641 193.213 27.0244 194.321 27.8063 195.422L26.1754 196.58ZM21.6706 189.794C20.9467 188.625 20.2449 187.451 19.5646 186.271L21.2972 185.272C21.9671 186.434 22.6581 187.59 23.3708 188.74L21.6706 189.794ZM17.5866 182.712C16.9415 181.508 16.3179 180.298 15.7154 179.084L17.507 178.195C18.1004 179.391 18.7145 180.582 19.3497 181.768L17.5866 182.712ZM13.9577 175.399C13.3907 174.161 12.8447 172.919 12.3191 171.673L14.1619 170.896C14.6796 172.123 15.2175 173.347 15.776 174.566L13.9577 175.399ZM10.7871 167.882C10.2969 166.614 9.82724 165.343 9.37738 164.068L11.2633 163.403C11.7067 164.659 12.1696 165.911 12.6525 167.16L10.7871 167.882ZM8.0726 160.192C7.65736 158.896 7.26191 157.597 6.88569 156.296L8.80696 155.741C9.17795 157.024 9.56785 158.304 9.97721 159.582L8.0726 160.192ZM5.80715 152.361C5.46562 151.042 5.14314 149.722 4.83913 148.401L6.7882 147.953C7.08819 149.256 7.40633 150.559 7.74323 151.859L5.80715 152.361ZM3.97884 144.418C3.70891 143.083 3.45717 141.747 3.22306 140.41L5.19307 140.065C5.42423 141.385 5.67275 142.704 5.9392 144.022L3.97884 144.418ZM2.57202 136.394C2.37088 135.045 2.18704 133.697 2.01993 132.35L4.00473 132.104C4.16984 133.435 4.35144 134.767 4.55013 136.099L2.57202 136.394ZM1.5681 128.311C1.43262 126.954 1.31353 125.598 1.21019 124.244L3.20439 124.092C3.30657 125.43 3.42431 126.771 3.55821 128.112L1.5681 128.311ZM0.946774 120.187C0.873752 118.826 0.816107 117.467 0.773198 116.112L2.77219 116.048C2.81465 117.39 2.87167 118.733 2.9439 120.079L0.946774 120.187ZM0.687963 112.045C0.673827 110.684 0.674052 109.325 0.68798 107.971L2.68787 107.992C2.67408 109.332 2.67386 110.677 2.68785 112.025L0.687963 112.045ZM0.770796 103.903C0.812054 102.543 0.866653 101.187 0.933903 99.8368L2.93143 99.9363C2.86481 101.274 2.81074 102.616 2.76988 103.964L0.770796 103.903ZM1.17504 95.7723C1.26836 94.4154 1.37397 93.0647 1.49116 91.7205L3.4836 91.8943C3.36744 93.2265 3.26279 94.5651 3.17034 95.9095L1.17504 95.7723ZM1.88148 87.6644C2.02371 86.3125 2.17717 84.9681 2.34114 83.6318L4.32625 83.8753C4.16366 85.2004 4.0115 86.5334 3.87051 87.8736L1.88148 87.6644ZM2.87215 79.5883C3.06046 78.2421 3.25893 76.9051 3.46676 75.5779L5.44269 75.8873C5.2365 77.204 5.03964 78.5302 4.85287 79.8654L2.87215 79.5883ZM4.13058 71.5514C4.36254 70.2112 4.60353 68.8819 4.8527 67.5644L6.81788 67.936C6.57059 69.2436 6.33145 70.5626 6.10128 71.8925L4.13058 71.5514ZM5.64183 63.5603C5.91554 62.2251 6.19705 60.9032 6.48544 59.5954L8.43851 60.0261C8.15221 61.3245 7.87276 62.6367 7.60108 63.9619L5.64183 63.5603ZM7.39242 55.6213C7.7066 54.2895 8.02722 52.9738 8.35323 51.6752L10.293 52.1621C9.96931 53.4517 9.65095 54.7581 9.33899 56.0805L7.39242 55.6213ZM9.37004 47.7424C9.72421 46.411 10.0832 45.0997 10.4457 43.8093L12.3712 44.3503C12.0111 45.6319 11.6546 46.9343 11.3028 48.2565L9.37004 47.7424ZM11.5625 39.9358C11.9571 38.6013 12.3543 37.2921 12.7527 36.0095L14.6627 36.6028C14.267 37.8768 13.8724 39.1773 13.4805 40.5029L11.5625 39.9358ZM13.9791 32.1528C14.4074 30.8365 14.8352 29.5525 15.2607 28.3022L17.1541 28.9466C16.7314 30.1885 16.3064 31.4641 15.8809 32.7716L13.9791 32.1528ZM16.6061 24.4357C17.0741 23.1197 17.5366 21.8481 17.9912 20.6232L19.8663 21.3191C19.4148 22.5357 18.9553 23.7986 18.4905 25.1058L16.6061 24.4357ZM19.4192 16.8557C19.9335 15.527 20.4326 14.267 20.9124 13.0793L22.7668 13.8284C22.2906 15.0073 21.7951 16.2582 21.2844 17.5776L19.4192 16.8557ZM22.4654 9.31853C23.0557 7.92059 23.6002 6.66693 24.0876 5.56716L25.9161 6.37763C25.4332 7.46701 24.8934 8.70985 24.3079 10.0965L22.4654 9.31853ZM25.7839 1.84829C26.0599 1.26223 26.2758 0.814537 26.4231 0.51244C26.4968 0.361399 26.5533 0.246749 26.5917 0.169394C26.6109 0.130733 26.6255 0.101387 26.6354 0.0814596C26.6404 0.071513 26.6442 0.0639168 26.6468 0.0586882C26.6481 0.0560825 26.6492 0.0540729 26.6499 0.0526447C26.6502 0.051922 26.6505 0.0513702 26.6507 0.0509555C26.6508 0.0507482 26.6509 0.0505751 26.651 0.0504534C26.651 0.0503754 26.651 0.0503231 26.6511 0.0502794C26.6511 0.0502576 26.6511 0.0502142 26.6511 0.0502032C26.6511 0.050179 26.6511 0.050157 27.5442 0.499978C28.4374 0.9498 28.4374 0.949782 28.4374 0.949766C28.4374 0.949764 28.4374 0.94975 28.4374 0.949746C28.4374 0.949719 28.4374 0.949718 28.4374 0.949743C28.4374 0.949759 28.4374 0.949808 28.4373 0.949892C28.4372 0.950077 28.4371 0.950416 28.4368 0.950891C28.4363 0.951842 28.4356 0.953408 28.4345 0.955551C28.4323 0.959839 28.429 0.966508 28.4245 0.975524C28.4155 0.993557 28.4018 1.02101 28.3835 1.05777C28.3471 1.1313 28.2925 1.24208 28.2207 1.38917C28.0772 1.68337 27.8653 2.1229 27.5932 2.7005L25.7839 1.84829Z" fill="#DADADA"/>
</svg>

        <div className="w-screen h-[10rem] flex items-center justify-center">
          <h1 className="text-2xl font-bold italic text-center text-nowrap">
            At Backdrope, we create impactful visuals and digital experiences,{" "}
            <br />
            helping people shine online and offline.
          </h1>
        </div>
        <div className="w-full px-24 py-16 flex flex-col gap-3 bg-[#4B4B4B]">
          <h5 className="text-sm">Our Approach</h5>
          <div className="w-full flex flex-col gap-3 ">
            <h1 className="text-2xl font-semibold">Our Vision</h1>
            <p>
              To be a leading creative agency that empowers businesses through
              innovative visual storytelling and digital solutions, shaping
              brands that inspire and engage audiences worldwide.
            </p>
          </div>
        </div>
        <div className="w-full px-24 py-16 flex gap-3 bg-[#4B4B4B] items-center">
          <div className="w-full flex flex-col gap-5 ">
            <h1 className=" text-2xl font-semibold">
              Our <br /> Services
            </h1>
            <h5 className="text-xs">Crafting Visually Stunning Content</h5>
            <div>
              <Link
                to={"/contact"}
                className="w-[9rem] flex font-semibold bg-[#dadada] items-center justify-center px-2 py-2 flex-shrink-0 gap-1 rounded-full text-[#000000]"
              >
                Contact US <IoIosReturnRight className="text-lg  " />
              </Link>
            </div>
          </div>
          <div>
            <p>
              To be a leading creative agency that empowers businesses through
              innovative visual storytelling and digital solutions, shaping
              brands that inspire and engage audiences worldwide.
            </p>
          </div>
        </div>
        <div className="w-full px-24 py-16 flex justify-center items-center">
          <h1 className="text-[4rem] font-bold text-center leading-tight">
            We <span className=" text-[#EE6464]">innovate</span> through <br />
            <span className=" text-[#EE6464]">creativity</span>.{" "}
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
