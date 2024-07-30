import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  const sliderImages: string[] = [
    'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt48fb33171a043437/6696b8522cc7b02b7213550d/WOW_11.0_Keyart_clash_prepatch_stat_enus_Blizzardcom_Desktop_1600x720_JL01a.png?format=webply&quality=80&auto=webp',
    'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt158fa2a9222ba5f2/669aeb0aa0753e2da6f2cbb0/HS_30p0_PiP_NowLive_Blizzardcom_Desktop_1600x720_RN02.png?format=webply&quality=80&auto=webp',
    'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt7aa6a128ee594954/669ae40a1e8b41401bd4b730/1600x720_OW2_S11_MythicWeaponSkin_BlizzardHompage_DesktopBanner.png?format=webply&quality=80&auto=webp',
    'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt7123bfa7e41879cc/665a944b563d657cf720ab54/DIA_DIV_X1_BNET_blizz_banner_asset_Desktop-1600x720.png?format=webply&quality=80&auto=webp',
    'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt78a32fafa8683cf2/6684423f017d7504eccc5c99/WR_Season7_Cenarion_BlizzardCom_Header_Desktop-1600x720_CH02.png?format=webply&quality=80&auto=webp',
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-100 h-[500px] bg-cover bg-no-repeat bg-center flex items-center justify-start align-middle"
              style={{ backgroundImage: `url(${image})` }}
            >
              <h1 className="text-5xl text-white">
                Pre-expansion update is live
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
