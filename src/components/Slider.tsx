import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SliderItem {
  backgroundImage: string;
  title: string;
  subtitle: string;
  logoUri: string;
}

const sliderImages: SliderItem[] = [
  {
    backgroundImage:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt48fb33171a043437/6696b8522cc7b02b7213550d/WOW_11.0_Keyart_clash_prepatch_stat_enus_Blizzardcom_Desktop_1600x720_JL01a.png?format=webply&quality=80&auto=webp',
    title: 'Pre-expansion update is live',
    subtitle: 'The Worldsould Saga begins now.',
    logoUri:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltb9ab66aed70fe4db/6549896d7949330399b17451/WoW_11p0_Logo_enUS.png?format=webply&quality=80&auto=webp',
  },
  {
    backgroundImage:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt158fa2a9222ba5f2/669aeb0aa0753e2da6f2cbb0/HS_30p0_PiP_NowLive_Blizzardcom_Desktop_1600x720_RN02.png?format=webply&quality=80&auto=webp',
    title: 'Pack for Paradise now!',
    subtitle: 'Unlock even more rewards with the Tavern Pass!',
    logoUri:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt9b14fda0afdee300/666a2a95d53f996f1d6337e9/US_HS_30p0_PiP_Logo_Battlenet_enUS_354x220_wHS.png?format=webply&quality=80&auto=webp',
  },
  {
    backgroundImage:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt7aa6a128ee594954/669ae40a1e8b41401bd4b730/1600x720_OW2_S11_MythicWeaponSkin_BlizzardHompage_DesktopBanner.png?format=webply&quality=80&auto=webp',
    title: "Reinhardt's Bound Demon",
    subtitle: 'New Mythic Weapon Skin!',
    logoUri:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt3ebf73c74f407c8d/6228f5a7f2c2644f956a88de/Overwatch2_logo.webp?format=webply&quality=80&auto=webp',
  },
];

export default function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1.2}
        centeredSlides={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop
        navigation
        autoplay
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[700px] bg-cover bg-no-repeat bg-center flex items-center justify-start align-middle box-content overflow-hidden"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="container pl-24 w-1/2">
                <picture>
                  <source srcSet={slide.logoUri} />
                  <img
                    src={slide.logoUri}
                    alt="Logo"
                    className="w-56 h-auto mb-5"
                  />
                </picture>
                <h1 className="text-6xl text-white font-semibold mb-5">
                  {slide.title}
                </h1>
                <span className="text-2xl text-slate-300">
                  {slide.subtitle}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
