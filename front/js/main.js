// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const openMenuEl = document.querySelector("#open-menu");
const closeMenuEl = document.querySelector("#close-menu");

openMenuEl.addEventListener("click", function () {
    document.querySelector(".menu").classList.add("active");
});
closeMenuEl.addEventListener("click", function () {
    document.querySelector(".menu").classList.remove("active");
});

//Chart Api

const tableEl = document.querySelector(".table");
const renderdata = (data) => {
    return `<div class="item">
                <span>${data[0].id}</span>
                <span class="Name">${data[0].Name}</span>
                <span class="price">${data[0].price}</span>
                <span class="24h" style="color: #1AFF7C">${data[0].h}</span>
                <span class="7d" style="color: #1AFF7C">${data[0].d}</span>
                <span class="market-cap">${data[0].marketCap}</span>
                <span class="volume">${data[0].volume}</span>
                <span class="last-7-days"><svg xmlns="http://www.w3.org/2000/svg" width="124" height="32" viewBox="0 0 124 32" fill="none">
  <path d="M1 28.6243L1.60241 28.8635" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M1.60254 28.8634L2.20495 28.8204" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M2.20508 28.8204L2.80749 28.0846" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M2.80713 28.0846L3.40954 28.1126" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M3.40967 28.1127L4.01208 27.9565" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M4.01221 27.9565L4.61462 28.377" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M4.61426 28.377L5.21667 28.6168" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M5.2168 28.6168L5.81921 28.0318" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M5.81934 28.0317L6.42175 25.0837" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M6.42188 25.0837L7.02428 25.1192" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M7.02393 25.1193L7.62634 25.2605" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M7.62646 25.2604L8.22887 26.2928" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M8.229 26.2928L8.83141 28.8757" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M8.83105 28.8757L9.43346 28.1603" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M9.43359 28.1603L10.036 27.4357" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M10.0361 27.4357L10.6385 28.2916" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M10.6387 28.2916L11.2411 28.7818" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M11.2412 28.7819L11.8436 29.3108" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M11.8433 29.3109L12.4457 29.7848" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M12.4458 29.7848L13.0482 28.9556" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M13.0483 28.9556L13.6507 28.7809" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M13.6504 28.7809L14.2528 28.9814" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M14.2529 28.9814L14.8553 28.8708" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M14.8555 28.8708L15.4579 29.4902" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M15.458 29.4902L16.0604 29.0774" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M16.0605 29.0774L16.663 29.2963" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M16.6626 29.2963L17.265 29.5027" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M17.2651 29.5028L17.8675 29.0201" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M17.8672 29.0201L18.4696 28.2858" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M18.4697 28.2858L19.0721 30.3666" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M19.0723 30.3666L19.6747 29.6066" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M19.6748 29.6066L20.2772 25.918" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M20.2773 25.9179L20.8798 23.5318" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M20.8794 23.5318L21.4818 23.4934" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M21.4819 23.4934L22.0843 23.5575" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M22.0845 23.5575L22.6869 24.6721" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M22.6865 24.6721L23.2889 25.1019" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M23.2891 25.1019L23.8915 25.0129" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M23.8916 25.0129L24.494 24.2678" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M24.4941 24.2678L25.0966 22.7871" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M25.0967 22.7871L25.6991 23.7255" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M25.6987 23.7255L26.3011 23.5724" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M26.3013 23.5724L26.9037 23.7858" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M26.9033 23.7857L27.5057 24.1643" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M27.5059 24.1643L28.1083 23.4822" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M28.1084 23.4822L28.7108 23.5334" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M28.7109 23.5332L29.3133 22.8511" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M29.3135 22.8512L29.9159 21.5844" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M29.9155 21.5844L30.5179 20.2364" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M30.5181 20.2364L31.1205 21.219" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M31.1206 21.2191L31.723 21.4567" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M31.7227 21.4567L32.3251 21.2196" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M32.3252 21.2197L32.9276 20.4518" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M32.9277 20.4518L33.5301 21.5755" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M33.5303 21.5754L34.1327 22.0256" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M34.1328 22.0255L34.7352 20.8821" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M34.7349 20.8822L35.3373 20.5214" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M35.3374 20.5214L35.9398 18.9713" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M35.9395 18.9713L36.5419 16.7393" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M36.542 16.7393L37.1444 16.4196" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M37.1445 16.4195L37.7469 15.1258" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M37.7471 15.1258L38.3495 16.5488" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M38.3496 16.5488L38.952 15.9329" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M38.9517 15.9329L39.5541 16.6391" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M39.5542 16.6392L40.1566 16.7958" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M40.1567 16.7957L40.7591 15.7098" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M40.7588 15.7098L41.3612 15.7656" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M41.3613 15.7656L41.9637 16.5438" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M41.9639 16.5438L42.5663 15.9529" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M42.5664 15.953L43.1688 15.7451" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M43.1689 15.7451L43.7714 16.0753" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M43.771 16.0753L44.3734 18.7347" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M44.3735 18.7347L44.9759 18.7017" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M44.9761 18.7016L45.5785 16.8795" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M45.5781 16.8796L46.1805 16.3012" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M46.1807 16.3013L46.7831 11.3323" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M46.7832 11.3323L47.3856 7.30774" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M47.3857 7.30777L47.9881 5.51593" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M47.9878 5.51595L48.5902 3.69745" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M48.5903 3.69745L49.1927 4.45664" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M49.1929 4.45654L49.7953 5.35912" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M49.7949 5.35918L50.3973 5.28333" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M50.3975 5.28332L50.9999 3.67371" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M51 3.67371L51.6024 4.06407" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M51.6025 4.06407L52.205 3.47137" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M52.2051 3.47135L52.8075 3.25745" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M52.8071 3.25751L53.4095 2.5849" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M53.4097 2.5849L54.0121 4.34416" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M54.0122 4.34412L54.6146 4.46063" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M54.6143 4.46066L55.2167 3.61548" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M55.2168 3.61548L55.8192 4.276" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M55.8193 4.276L56.4217 3.44183" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M56.4219 3.44183L57.0243 4.82646" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M57.0239 4.82648L57.6263 5.28608" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M57.6265 5.28601L58.2289 4.60394" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M58.229 4.60394L58.8314 5.3198" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M58.8311 5.31982L59.4335 6.37355" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M59.4336 6.37354L60.036 7.56371" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M60.0361 7.56373L60.6385 6.0636" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M60.6387 6.0636L61.2411 7.4475" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M61.2412 7.44752L61.8436 5.31342" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M61.8433 5.31342L62.4457 7.91046" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M62.4458 7.91042L63.0482 7.77625" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M63.0483 7.77628L63.6507 6.79877" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M63.6504 6.79877L64.2528 6.73987" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M64.2529 6.73987L64.8553 7.56414" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M64.8555 7.56415L65.4579 7.53955" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M65.458 7.53951L66.0604 6.64734" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M66.0605 6.64736L66.663 6.40021" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M66.6626 6.40021L67.265 7.6017" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M67.2651 7.60168L67.8675 7.98242" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M67.8672 7.98243L68.4696 6.83936" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M68.4697 6.8393L69.0721 6.23993" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M69.0723 6.23993L69.6747 7.77942" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M69.6748 7.77948L70.2772 7.93523" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M70.2773 7.93522L70.8798 7.72217" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M70.8794 7.72214L71.4818 6.85522" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M71.4819 6.85527L72.0843 6.77533" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M72.0845 6.77533L72.6869 4.61737" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M72.6865 4.61738L73.2889 1.09833" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M73.2891 1.09833L73.8915 2.8239" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M73.8916 2.82385L74.494 2.01044" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M74.4941 2.01044L75.0966 2.9102" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M75.0967 2.91028L75.6991 4.47277" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M75.6987 4.47272L76.3011 6.53001" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M76.3013 6.53004L76.9037 5.09943" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M76.9033 5.09943L77.5057 6.3289" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M77.5059 6.32889L78.1083 6.28064" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M78.1084 6.28067L78.7108 6.23315" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M78.7109 6.23316L79.3134 5.50977" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M79.3135 5.50972L79.9159 5.1543" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M79.9155 5.1543L80.5179 7.42192" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M80.5181 7.42193L81.1205 6.48187" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M81.1206 6.48187L81.723 6.94352" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M81.7227 6.94348L82.3251 7.42071" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M82.3252 7.42077L82.9276 6.54059" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M82.9277 6.54059L83.5301 7.3534" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M83.5303 7.35341L84.1327 6.71399" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M84.1328 6.71399L84.7352 5.29401" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M84.7349 5.29398L85.3373 4.97595" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M85.3374 4.97595L85.9398 5.16069" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M85.9395 5.16067L86.5419 4.28003" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M86.542 4.2801L87.1444 4.12323" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M87.1445 4.12323L87.7469 4.76492" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M87.7471 4.76488L88.3495 4.19958" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M88.3496 4.19958L88.952 4.3361" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M88.9517 4.33606L89.5541 4.5001" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M89.5542 4.50015L90.1566 3.8866" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M90.1567 3.88664L90.7592 3.00909" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M90.7588 3.00909L91.3612 3.31931" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M91.3613 3.31927L91.9637 3.93949" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M91.9639 3.93951L92.5663 4.49523" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M92.5664 4.49522L93.1688 4.18237" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M93.1689 4.18237L93.7713 4.24007" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M93.771 4.24005L94.3734 4.96258" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M94.3735 4.96252L94.9759 5.02768" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M94.9756 5.02772L95.578 4.34601" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M95.5781 4.34604L96.1805 4.23755" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M96.1807 4.23748L96.7831 3.94934" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M96.7832 3.94943L97.3856 3.92389" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M97.3857 3.92389L97.9881 5.86126" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M97.9878 5.86126L98.5902 5.05981" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M98.5903 5.05974L99.1927 3.43219" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M99.1929 3.43224L99.7953 1.23999" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M99.7949 1.23999L100.397 1.38156" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M100.397 1.38159L101 1.7271" stroke="#1AFF7C" stroke-width="1.5" stroke-miterlimit="10"
        stroke-linecap="round"/>
  <path d="M124 20.7325C124 21.1303 123.842 21.5118 123.561 21.7931C123.279 22.0744 122.898 22.2325 122.5 22.2325C122.102 22.2325 121.721 22.0744 121.439 21.7931C121.158 21.5118 121 21.1303 121 20.7325C121 20.3347 121.158 19.9531 121.439 19.6718C121.721 19.3905 122.102 19.2325 122.5 19.2325C122.898 19.2325 123.279 19.3905 123.561 19.6718C123.842 19.9531 124 20.3347 124 20.7325ZM124 15.7325C124 16.1303 123.842 16.5118 123.561 16.7931C123.279 17.0744 122.898 17.2325 122.5 17.2325C122.102 17.2325 121.721 17.0744 121.439 16.7931C121.158 16.5118 121 16.1303 121 15.7325C121 15.3347 121.158 14.9531 121.439 14.6718C121.721 14.3905 122.102 14.2325 122.5 14.2325C122.898 14.2325 123.279 14.3905 123.561 14.6718C123.842 14.9531 124 15.3347 124 15.7325ZM124 10.7325C124 11.1303 123.842 11.5118 123.561 11.7931C123.279 12.0744 122.898 12.2325 122.5 12.2325C122.102 12.2325 121.721 12.0744 121.439 11.7931C121.158 11.5118 121 11.1303 121 10.7325C121 10.3347 121.158 9.95313 121.439 9.67182C121.721 9.39052 122.102 9.23248 122.5 9.23248C122.898 9.23248 123.279 9.39052 123.561 9.67182C123.842 9.95313 124 10.3347 124 10.7325Z"
        fill="white"/>
</svg></span>
            </div>`;
};

(async () => {
    try {
        const data = await fetch("http://localhost:3000/api/v1/crypto/data");
        const res = await data.json();
        res.forEach((elem) => {
            const f = renderdata(elem);
            return tableEl.insertAdjacentHTML("beforeend", f);
        });

    } catch (e) {
        console.log(e.message);
    }
})();


//Features Api

const featuresEl = document.querySelector(".big-container");
const renderFeatures = (data) => {
    return ` <div class="container">
                    ${data.img}
                    <nav>
                        <ul class="list">
                            <li class="item"><a href="" class="link main">${data.title}</a></li>
                            <li class="item"><a href="" class="link">${data.features[0].content}</a></li>
                            <li class="item"><a href="" class="link">${data.features[1].content}</a></li>
                            <li class="item"><a href="" class="link">${data.features[2].content}</a></li>
                        </ul>
                    </nav>
                </div>`;
};

(async () => {
    try {
        const data = await fetch("http://localhost:3000/api/v1/crypto/features");
        const res = await data.json();
        res.forEach((elem) => {
            const f = renderFeatures(elem);
            return featuresEl.insertAdjacentHTML("beforeend", f);
        });

    } catch (e) {
        console.log(e.message);
    }
})();

//News Api

const newsEl = document.querySelector(".news .container");

const renderNews = (data) => {
    return `<div class="item" >
                    <img src="${data.img}" alt="">
                    <h3 class="subtitle">${data.subtitle}</h3>
                    <p class="parag">${data.parag}</p>
                    <div class="author">
                        <span>${data.author.by}</span>
                        <span>${data.author.date}</span>
                        <span>${data.author.time}</span>
                    </div>
                </div>`;
};


(async () => {
    try {
        const data = await fetch("http://localhost:3000/api/v1/crypto/news");
        const res = await data.json();
        res.forEach((elem) => {
            const f = renderNews(elem);
            return newsEl.insertAdjacentHTML("beforeend", f);
        });

    } catch (e) {
        console.log(e.message);
    }
})();






