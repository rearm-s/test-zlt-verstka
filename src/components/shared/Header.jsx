import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";

const BLACK_BANNER_STYLE = {
  background: "#000",
  height: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
};

const WHITE_BLOCK_STYLE = {
  background: "#fff",
  height: 80,
};

const STICKY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 999,
  background: "#fff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, opacity 0.3s ease",
};

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const whiteRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (whiteRef.current) {
        const { bottom } = whiteRef.current.getBoundingClientRect();
        setIsSticky(bottom <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      <div className="relative z-10">
        <div className="w-full" style={BLACK_BANNER_STYLE}>
          <div className="max-w-[1600px] mx-auto">
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: 18, marginRight: 8 }}>⭐</span>
            <span style={{ color: "#fff", fontWeight: 500, fontSize: 18 }}>
              Знижка -53% на пару обручок тут
            </span>
          </div>
        </div>

        <div ref={whiteRef} className="w-full" style={WHITE_BLOCK_STYLE}>
          <div className="max-w-[1600px] mx-auto px-4 flex items-center" style={{ height: '100%' }}>
            <div className="flex items-center gap-6 flex-1 min-w-[420px] max-w-[600px]">
              <div className="w-6 h-6 rounded-full" style={{
                background: 'linear-gradient(180deg, #0085FF 47.92%, #FFC700 50%)'
              }}></div>
              <Button variant="ghost" size="sm" className="text-sm font-medium">
                Українська
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0H0L4 4L8 0Z" fill="white" />
                </svg>
              </Button>
            </div>
            <nav className="flex items-center ml-auto">
              {["Про нас", "Доставка та оплата", "Обмін", "Точки видачі", "Допомога (FAQ)", "Контакти"].map((item) => (
                <Button key={item} variant="ghost" size="sm" className="text-sm hover:text-gray-900">
                  {item}
                </Button>
              ))}
            </nav>
          </div>
        </div>

        <RedToolbar />
      </div>

      {isSticky && (
        <div style={STICKY_STYLE}>
          <div className="w-full" style={BLACK_BANNER_STYLE}>
            <div className="max-w-[1600px] mx-auto">
              <span style={{ color: "#FFD600", fontWeight: 700, fontSize: 18, marginRight: 8 }}>⭐</span>
              <span style={{ color: "#fff", fontWeight: 500, fontSize: 18 }}>
                Знижка -53% на пару обручок тут
              </span>
            </div>
          </div>

          <RedToolbar />
        </div>
      )}
    </header>
  );
}

function RedToolbar() {
  return (
    <div
      style={{
        height: 64,
        background: "#F43F3F",
        display: "flex",
        alignItems: "center",
        padding: 0,
        justifyContent: "center",
      }}
    >
      <div
        className="max-w-[1600px] mx-auto w-full"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          height: 48,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            height: 48,
          }}
        >
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-2 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 18H4C1.79086 18 0 16.2091 0 14V10H8V18ZM18 10V14C18 16.2091 16.2091 18 14 18H10V10H18ZM1.90039 14C1.90039 15.1598 2.8402 16.0996 4 16.0996H6.09961V11.9004H1.90039V14ZM11.9004 16.0996H14C15.1598 16.0996 16.0996 15.1598 16.0996 14V11.9004H11.9004V16.0996ZM8 8H0V4C0 1.79086 1.79086 0 4 0H8V8ZM14 0C16.2091 0 18 1.79086 18 4C18 6.20914 16.2091 8 14 8C11.7909 8 10 6.20914 10 4C10 1.79086 11.7909 0 14 0ZM4 1.90039C2.8402 1.90039 1.90039 2.8402 1.90039 4V6.09961H6.09961V1.90039H4ZM14 1.90039C12.8402 1.90039 11.9004 2.8402 11.9004 4C11.9004 5.1598 12.8402 6.09961 14 6.09961C15.1598 6.09961 16.0996 5.1598 16.0996 4C16.0996 2.8402 15.1598 1.90039 14 1.90039Z"
                fill="white" />
            </svg>
            Каталог товарів
            <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0H0L4 4L8 0Z" fill="white" />
            </svg>
          </Button>
          <Button className="bg-transparent text-white rounded-full px-4 py-2 flex items-center gap-2">
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg">0 800 000 222</span>
              <span className="text-xs opacity-80">Безплатно по Україні</span>
            </div>
            <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0H0L4 4L8 0Z" fill="white" />
            </svg>
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "12px 8px 12px 16px",
            gap: 8,
            width: 500,
            height: 48,
            background: "#fff",
            borderRadius: 24,
            boxSizing: "border-box",
          }}
        >
          <input
            placeholder="Наприклад, кільце з діамантом"
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              background: "transparent",
              flex: 1,
              fontSize: 16,
              padding: 0,
              height: "100%",
            }}
          />
          <Button
            size="icon"
            style={{
              background: "transparent",
              borderRadius: "50%",
              width: 32,
              height: 32,
              minWidth: 32,
              minHeight: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0C3.14585 0 0 3.14585 0 7C0 10.8541 3.14585 14 7 14C8.748 14 10.345 13.348 11.5742 12.2812L10.5 13L16.5 19L18.4195 17.2278L12.5634 11.2278L12.3374 11.5088L12.2812 11.5742C13.348 10.345 14 8.748 14 7C14 3.14585 10.8541 0 7 0ZM7 2C9.77327 2 12 4.22673 12 7C12 9.77327 9.77327 12 7 12C4.22673 12 2 9.77327 2 7C2 4.22673 4.22673 2 7 2Z"
                fill="#747474" />
            </svg>
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Button variant="ghost" className="text-white flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7135 12.7093C16.6987 11.9384 17.4178 10.8813 17.7708 9.68501C18.1238 8.48872 18.0931 7.21276 17.6829 6.03464C17.2728 4.85652 16.5036 3.83483 15.4824 3.11171C14.4612 2.38859 13.2387 2 11.9851 2C10.7315 2 9.50908 2.38859 8.48788 3.11171C7.46668 3.83483 6.6975 4.85652 6.28735 6.03464C5.8772 7.21276 5.84649 8.48872 6.19947 9.68501C6.55245 10.8813 7.27158 11.9384 8.25682 12.7093C6.5686 13.382 5.09557 14.4976 3.99477 15.9374C2.89396 17.3771 2.20665 19.0869 2.0061 20.8846V22H4.00006L4.01598 21.1045C4.23665 19.1508 5.17335 17.3465 6.64713 16.0362C8.1209 14.7259 10.0284 14.0016 12.0052 14.0016C13.9821 14.0016 15.8896 14.7259 17.3633 16.0362C18.8371 17.3465 19.7738 19.1508 19.9945 21.1045L20 22C20 22 20.751 21.9955 20.9994 21.994H21.11H21.9943V20.8946C21.7928 19.0918 21.1018 17.3776 19.9953 15.9357C18.8889 14.4937 17.4087 13.3784 15.7135 12.7093ZM11.9851 11.9997C11.1901 11.9997 10.4129 11.7653 9.75188 11.326C9.09084 10.8867 8.57562 10.2624 8.27137 9.53189C7.96712 8.8014 7.88752 7.9976 8.04262 7.22212C8.19773 6.44665 8.58057 5.73433 9.14274 5.17524C9.70492 4.61615 10.4212 4.23541 11.2009 4.08115C11.9807 3.9269 12.7889 4.00607 13.5234 4.30865C14.2579 4.61122 14.8857 5.12362 15.3274 5.78103C15.7691 6.43845 16.0049 7.21137 16.0049 8.00204C16.0049 9.06229 15.5814 10.0791 14.8275 10.8288C14.0737 11.5785 13.0512 11.9997 11.9851 11.9997Z"
                fill="white" />
            </svg>
            <div className="text-left">
              <div className="text-sm font-medium">Войти в</div>
              <div className="text-xs">кабінет</div>
            </div>
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C8.71559 5 9.90625 5.61683 10.6146 6.55049C10.9541 6.99789 11.4402 7.36 12.0018 7.36C12.5666 7.36 13.0546 6.99368 13.3956 6.54347C14.0997 5.61374 15.2875 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
                fill="white" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9998 0C15.1919 0 18.7721 2.99308 20.7126 7.1543L21.1072 8L20.7126 8.8457C18.7721 13.0069 15.1919 16 10.9998 16C6.8078 15.9999 3.22835 13.0067 1.28784 8.8457L0.893311 8L1.28784 7.1543C3.22835 2.99325 6.8078 0.000147526 10.9998 0ZM10.9998 2C7.8299 2.00015 4.83029 4.29018 3.10034 8C4.83029 11.7098 7.8299 13.9999 10.9998 14C14.1698 14 17.1701 11.71 18.9001 8C17.1701 4.29 14.1698 2 10.9998 2ZM10.9998 4C12.0606 4 13.0787 4.42173 13.8289 5.17188C14.5788 5.92199 14.9998 6.93929 14.9998 8C14.9998 8.79113 14.7655 9.56486 14.3259 10.2227C13.8865 10.8802 13.2617 11.3926 12.531 11.6953C11.8001 11.9981 10.9954 12.0772 10.2195 11.9229C9.44366 11.7685 8.73098 11.3875 8.17163 10.8281C7.6123 10.2687 7.23123 9.55613 7.0769 8.78027C6.92262 8.00453 7.00185 7.20049 7.30444 6.46973C7.60719 5.73882 8.12028 5.11335 8.77808 4.67383C9.43571 4.23451 10.2089 4.00006 10.9998 4ZM11.7654 6.15234C11.4 6.00101 10.998 5.96099 10.6101 6.03809C10.2221 6.11526 9.8654 6.30623 9.58569 6.58594C9.30619 6.8655 9.11604 7.22167 9.03882 7.60938C8.96165 7.99734 9.00072 8.40017 9.1521 8.76562C9.30348 9.13101 9.56055 9.44335 9.8894 9.66309C10.2181 9.88262 10.6045 9.99994 10.9998 10C11.5301 10 12.0388 9.78904 12.4138 9.41406C12.7889 9.03899 12.9998 8.53043 12.9998 8C12.9998 7.60444 12.8826 7.21757 12.6628 6.88867C12.4431 6.55987 12.1308 6.30369 11.7654 6.15234Z"
                fill="white" />
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 6V8H12H10V6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6ZM8 8V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8H18.9546H21L20.5714 10L18.6775 18.8381C18.2823 20.6824 16.6525 22 14.7663 22H9.23366C7.34751 22 5.71766 20.6824 5.32245 18.8381L3.42857 10L3 8H5.0454H8ZM16 10H14H12H10H8H5.47397L7.27806 18.4191C7.47566 19.3412 8.29059 20 9.23366 20H14.7663C15.7094 20 16.5243 19.3412 16.7219 18.4191L18.526 10H16Z"
                fill="white" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
