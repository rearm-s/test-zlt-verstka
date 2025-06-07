import { Button } from "../ui/button"
import { Heart } from "lucide-react"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TAB_LIST = [
  { key: "rules", label: "Правила" },
  { key: "limits", label: "Обмеження" },
  { key: "how", label: "Як активувати промокод" },
  { key: "calc", label: "Приклад розрахунку знижки" },
];

const TAB_CONTENT = {
  rules: (
    <div className="w-full max-w-[1600px] mx-auto">
      <div className="text-center text-xl font-bold mb-4">Правила акції</div>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-red-500 mt-1">•</span>
          <span>Акція діє з 20.06 по 31.07.2023;</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 mt-1">•</span>
          <span>
            в акції беруть участь <strong>ювелірні вироби зі вставкою «Діамант»</strong>, з основною знижкою від -49%;
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 mt-1">•</span>
          <span>
            під терміном <strong>«активуй -55% на прикраси з діамантами»</strong> мається на увазі заміна Основної
            знижки акційного товару на Акційну знижку -55% при застосуванні промокоду <strong>«ДІАМАНТКОД55»</strong>;
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 mt-1">•</span>
          <span>
            для коректної роботи промокоду рекомендуємо додавати в кошик лише ті акційні вироби, що відповідають
            умовам цієї акції.
          </span>
        </li>
      </ul>
    </div>
  ),
  limits: (
    <div className="w-full max-w-[1600px] mx-auto">
      <div className="text-center text-xl font-bold mb-4">Обмеження</div>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-red-500 mt-1">•</span>
          <span>
            В акції не беруть участь весільні обручки з діамантами та вироби з діамантами з основною знижкою понад
            54%;
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 mt-1">•</span>
          <span>
            акція не сумісна з іншими акційними пропозиціями та додатковими знижками (3% на першу покупку, 5%
            іменинникам, 200 грн за підписку).
          </span>
        </li>
      </ul>
    </div>
  ),
  how: (
    <div className="w-full max-w-[1600px] mx-auto">
      <div className="text-center text-xl font-bold mb-4">Як активувати промокод</div>
      <div className="flex flex-col items-start gap-10 py-10 bg-gray-50 rounded-2xl p-12">
        <div className="grid grid-cols-2 gap-16 w-full items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Вибери прикрасу в каталозі, відкрий її картку з детальним описом, кліки на потрібний розмір (для
                  каблучок, ланцюжків та браслетів) і натисни кнопку «купити»;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  після вибору прикраси натисни в кошику кнопку «оформити замовлення»;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  на сторінці оформлення замовлення натисни на текстове поле «У мене є промокод».
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/steps-image-1.png" alt="Steps 1-2" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 w-full items-start">
          <div className="relative">
            <img src="/steps-image-2.png" alt="Steps 3-4" className="w-full rounded-xl shadow-lg" />
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  в поле вводу впиши промокод <span className="font-bold text-red-500">«ДІАМАНТКОД55»</span> і натисни
                  кнопку «застосувати»;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ура! Промокод прийнятий, отже сума «До оплати» вказана вже зі знижкою за промокодом.
                </p>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 flex items-start gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V12C11 11.7348 11.1054 11.4804 11.2929 11.2929Z"
                  fill="#DD2A00" />
                <path d="M11.4444 8.16853C11.6089 8.05865 11.8022 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9C13 9.19778 12.9414 9.39112 12.8315 9.55557C12.7216 9.72002 12.5654 9.84819 12.3827 9.92388C12.2 9.99957 11.9989 10.0194 11.8049 9.98079C11.6109 9.9422 11.4327 9.84696 11.2929 9.70711C11.153 9.56725 11.0578 9.38907 11.0192 9.19509C10.9806 9.00111 11.0004 8.80004 11.0761 8.61732C11.1518 8.43459 11.28 8.27841 11.4444 8.16853Z"
                  fill="#DD2A00" />
                <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#DD2A00" />
              </svg>

              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Промокод не приймається?</h4>
                <p className="text-orange-700">Це означає, що обрана прикраса не відповідає умовам Акції.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  calc: (
    <div className="w-full max-w-[1600px] mx-auto">
      <div className="text-center text-xl font-bold mb-4">Приклад розрахунку знижки</div>
      <div className="flex-1 rounded-xl overflow-hidden">
        <img src="/price-comparison.png" className="w-full h-full object-cover" />
      </div>
    </div>
  ),
};

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("rules");

  return (
    <main className="flex flex-col items-center pt-8 gap-8 w-full min-h-screen">
      <div className="w-full flex justify-center">
        <div className="flex flex-row gap-8 rounded-2xl max-w-[1600px] w-full mt-4">
          <div className="flex-1 rounded-xl overflow-hidden">
            <img src="/jewerly-promo.png" alt="Diamond rings promotion" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white rounded-xl shadow p-6 md:p-8 w-[380px] flex flex-col">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-flex items-center gap-2 w-fit">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              діє до 24.12.2023
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Красуй це літо з нами: спекотні акції вже тут ☀️
            </h1>

            <div className="space-y-4 mb-8 flex-1">
              <p className="text-gray-700 leading-relaxed">
                З <strong>20 червня по 31 липня 2023</strong> активуй знижку{" "}
                <span className="text-red-500 font-bold">-55%</span> при покупці прикрас з діамантами за цим промокодом
                ↓
              </p>
              <p className="text-gray-700 leading-relaxed">
                З <strong>20 червня по 31 липня 2023</strong> активуй знижку{" "}
                <span className="text-red-500 font-bold">-55%</span> при покупці прикрас з діамантами за цим промокодом
                ↓
              </p>
              <p className="text-gray-700 leading-relaxed">
                З <strong>20 червня по 31 липня 2023</strong> активуй знижку{" "}
                <span className="text-red-500 font-bold">-55%</span> при покупці прикрас з діамантами за цим промокодом
                ↓
              </p>
            </div>

            <div className="border-2 border-red-500 rounded-xl p-4 flex items-center justify-between bg-red-50">
              <span className="text-xl font-bold text-gray-900">ДІАМАНТКОД55</span>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 1.5H4.5C3.4 1.5 2.5 2.4 2.5 3.5V17.5H4.5V3.5H16.5V1.5ZM19.5 5.5H8.5C7.4 5.5 6.5 6.4 6.5 7.5V21.5C6.5 22.6 7.4 23.5 8.5 23.5H19.5C20.6 23.5 21.5 22.6 21.5 21.5V7.5C21.5 6.4 20.6 5.5 19.5 5.5ZM19.5 21.5H8.5V7.5H19.5V21.5Z"
                    fill="#747474" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mb-8">
        <div className="w-full max-w-[1600px] mb-2">
          <div className="flex justify-center w-full gap-4">
            {TAB_LIST.map((tab) => (
              <button
                key={tab.key}
                className={`rounded-full px-6 py-2 font-medium cursor-pointer transition-colors duration-150 ${
                  activeTab === tab.key
                    ? "bg-[#E33200] text-white"
                    : "border border-gray-400 text-black bg-white hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[1600px] mt-6">
          {TAB_CONTENT[activeTab]}
        </div>
      </div>

      <div className="w-full rounded-2xl">
        <div className="max-w-[1600px] mx-auto relative">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-900 pb-6">Вироби, що беруть участь в акції</h2>
            <button className="bg-white text-black rounded-full px-6 py-2 font-medium flex items-center gap-2 shadow hover:bg-gray-100 transition">
              Переглянути всі <svg width="21"
              height="14"
              viewBox="0 0 21 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6729 0.450439C13.8919 1.23143 13.892 2.49751 14.6729 3.27856L17.3955 6.00024H0V8.00024H16.9502L14.6357 10.3147C13.855 11.0957 13.855 12.3618 14.6357 13.1428L21 6.77856L20.3301 6.10767L14.6729 0.450439Z"
                fill="#DD2A00" />
            </svg>

            </button>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1600: { slidesPerView: 5 },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            className="!pb-16"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#F5F5F5] rounded-2xl p-3 flex flex-col h-full relative shadow-md">
                  <div className="absolute top-4 left-4 flex items-center z-10">
                    <span className="bg-gradient-to-r from-[#FF6B00] to-[#E33200] text-white text-xs font-semibold rounded-l-full px-3 py-1">-60%</span>
                    <span className="bg-black text-white text-xs font-semibold rounded-r-full px-2 py-1 ml-[-8px]">з ПРОМОкодом</span>
                  </div>
                  <img src={`/earrings-${(idx % 5) + 1}.png`}
                    alt="Сережки з діамантами"
                    className="w-full h-48 object-contain mb-2 mt-4" />
                  <div className="flex items-center flex-column gap-2 mb-2">
                    <span className="flex items-center gap-1 bg-[#F1F1F1] text-gray-500 text-xs rounded-full px-3 py-1">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect
                        width="16"
                        height="16"
                        rx="8"
                        fill="#E5E7EB" /><path d="M6.5 5.5L10 8L6.5 10.5V5.5Z" fill="#9CA3AF" /></svg>
                      Відео
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#5D5FEF] font-medium ml-2">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.97467 3.84217L10.5488 3.27436C10.6676 3.15556 10.7343 2.99444 10.7343 2.82643C10.7343 2.65842 10.6676 2.49729 10.5488 2.37849C10.43 2.25969 10.2689 2.19295 10.1009 2.19295C9.93284 2.19295 9.77172 2.25969 9.65292 2.37849L9.08511 2.95261C8.20093 2.26862 7.11471 1.89751 5.99686 1.89751C4.879 1.89751 3.79278 2.26862 2.90861 2.95261L2.33449 2.37218C2.21485 2.25338 2.05292 2.18697 1.88432 2.18756C1.71572 2.18815 1.55426 2.2557 1.43546 2.37533C1.31666 2.49497 1.25025 2.6569 1.25084 2.8255C1.25143 2.9941 1.31898 3.15556 1.43861 3.27436L2.01904 3.84848C1.32695 4.73019 0.951427 5.819 0.952821 6.93989C0.950761 7.74455 1.14112 8.53804 1.50803 9.25419C1.87493 9.97034 2.40775 10.5884 3.06204 11.0568C3.71632 11.5252 4.47312 11.8303 5.26931 11.9468C6.0655 12.0633 6.878 11.9878 7.63905 11.7264C8.40011 11.4651 9.08765 11.0256 9.64435 10.4446C10.201 9.86362 10.6108 9.15792 10.8393 8.3864C11.0679 7.61487 11.1086 6.79988 10.9582 6.0094C10.8078 5.21892 10.4706 4.47585 9.97467 3.84217ZM6.00001 10.7253C5.25133 10.7253 4.51946 10.5033 3.89696 10.0873C3.27445 9.67138 2.78927 9.08018 2.50276 8.38849C2.21626 7.6968 2.14129 6.93569 2.28735 6.20139C2.43341 5.4671 2.79394 4.79261 3.32333 4.26321C3.85273 3.73381 4.52722 3.37329 5.26152 3.22723C5.99581 3.08117 6.75693 3.15613 7.44862 3.44264C8.14031 3.72915 8.73151 4.21433 9.14745 4.83683C9.56339 5.45934 9.7854 6.19121 9.7854 6.93989C9.7854 7.94383 9.38659 8.90666 8.67669 9.61656C7.96679 10.3265 7.00396 10.7253 6.00001 10.7253ZM4.73821 1.2618H7.26181C7.42913 1.2618 7.5896 1.19533 7.70792 1.07701C7.82624 0.958695 7.89271 0.798223 7.89271 0.630899C7.89271 0.463574 7.82624 0.303102 7.70792 0.184786C7.5896 0.0664695 7.42913 0 7.26181 0H4.73821C4.57089 0 4.41042 0.0664695 4.2921 0.184786C4.17378 0.303102 4.10731 0.463574 4.10731 0.630899C4.10731 0.798223 4.17378 0.958695 4.2921 1.07701C4.41042 1.19533 4.57089 1.2618 4.73821 1.2618ZM6.63091 5.04719C6.63091 4.87987 6.56444 4.71939 6.44612 4.60108C6.32781 4.48276 6.16734 4.41629 6.00001 4.41629C5.83269 4.41629 5.67221 4.48276 5.5539 4.60108C5.43558 4.71939 5.36911 4.87987 5.36911 5.04719V6.23959C5.22626 6.36736 5.12557 6.5355 5.08036 6.72175C5.03516 6.908 5.04757 7.10359 5.11596 7.28263C5.18435 7.46168 5.30549 7.61573 5.46335 7.72442C5.62121 7.83311 5.80835 7.8913 6.00001 7.8913C6.19167 7.8913 6.37881 7.83311 6.53667 7.72442C6.69454 7.61573 6.81568 7.46168 6.88406 7.28263C6.95245 7.10359 6.96486 6.908 6.91966 6.72175C6.87446 6.5355 6.77376 6.36736 6.63091 6.23959V5.04719Z"
  fill="#5D5FEF" />
</svg>

                      Під замовлення (до 2 тижнів)
                    </span>
                  </div>
                  <div className="font-medium text-gray-900 mb-1 truncate">Кольє-трансформер с сердоликом, цитрином и
                    родолитом Тоффи на...
                  </div>
                  <div className="text-xs text-gray-500 mb-2 truncate">Кольє-трансформер с сердоликом, цитрином и
                    родолитом Тоффи на...
                  </div>
                  <div className="flex items-end gap-2 mb-2 mt-1">
                    <span className="bg-[#E33200] text-white text-xs font-bold rounded-full px-2 py-1">-52%</span>
                    <span className="text-xs text-gray-400 line-through">1 104 432</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-black">3 637 432 грн</span>
                    <div className="flex rounded-full overflow-hidden border border-black bg-black ml-auto">
                      <button className="flex-1 py-3 px-6 text-white font-medium text-lg flex items-center justify-center focus:outline-none">Купить</button>
                      <div className="w-[2px] h-8 bg-white opacity-80 self-center" />
                      <button className="w-16 flex items-center justify-center text-white focus:outline-none">
                        <Heart className="w-7 h-7" />
                        <span className="text-base font-bold ml-1">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination absolute bottom-2 right-6 !static md:!absolute md:!bottom-2 md:!right-6" />
            <div className="swiper-button-prev absolute bottom-2 right-20 z-10" />
            <div className="swiper-button-next absolute bottom-2 right-6 z-10" />
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 w-full max-w-[1600px]">
        <h2 className="text-3xl font-extrabold text-gray-900 w-full text-left">Каталог прикрас</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
          {[
            { img: '/category-rings.png', label: 'Каблучки' },
            { img: '/category-earrings.png', label: 'Каблучки' },
            { img: '/category-bracelets.png', label: 'Браслети' },
            { img: '/category-pendants.png', label: 'Кулони' },
            { img: '/category-crosses.png', label: 'Хрестики' },
          ].map((cat, idx) => (
            <div
              key={cat.label}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[280px] flex flex-col justify-end"
            >
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Градиент и контент */}
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="h-2/3 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent absolute bottom-0 left-0" />
                <div className="relative z-10 flex items-end justify-between p-5">
                  <button
                    className="ml-2 bg-[#F43F3F] hover:bg-[#E33200] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200"
                  >
                    <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6729 0.450195C13.8919 1.23118 13.892 2.49727 14.6729 3.27832L17.3955 6H0V8H16.9502L14.6357 10.3145C13.855 11.0954 13.855 12.3616 14.6357 13.1426L21 6.77832L20.3301 6.10742L14.6729 0.450195Z"
                        fill="white" />
                    </svg>

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
