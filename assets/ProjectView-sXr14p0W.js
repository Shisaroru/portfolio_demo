import{a as e}from"./animation-IF4nEflw.js";import{d as v,k as g,l as h,c as w,b as t,t as y,n as b,m as _,F as x,f as n,o as O,_ as X}from"./index-BY3RQH0H.js";const k="/portfolio_demo/assets/project_bg_1-On0Nmm7G.png",I={class:"bg-black opacity-30 p-8 rounded-lg w-full h-full flex flex-col items-center justify-center"},Q={class:"space-y-4 text-white text-center max-w-2xl"},Y={class:"grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-12"},m="Tôi tham gia phát triển nội dung truyền thông đa nền tảng, từ ý tưởng, xây dựng nội dung đến trực tiếp sản xuất hình ảnh và video. Quá trình này giúp tôi hiểu rõ hơn cách một thương hiệu công nghiệp xây dựng hình ảnh và truyền tải giá trị đến công chúng. Mỗi video hay hình ảnh không chỉ là nội dung truyền thông mà còn là cách kể câu chuyện về sản phẩm, con người và văn hóa doanh nghiệp. Đây cũng là giai đoạn tôi học cách kết hợp giữa tư duy Brand Communication và Media Production, để mỗi nội dung không chỉ đẹp mà còn phục vụ đúng mục tiêu truyền thông và góp phần xây dựng hình ảnh thương hiệu nhất quán",D=v({__name:"ProjectView",setup(T){const a=n(null),r=n(null),o=n(null),l=n(null),i=n(null),s=n(null),u=n(null),d=n(null),p=n(m),f=()=>{window.scrollY>150&&(r.value&&e(r.value,{opacity:0,duration:500,complete:()=>{p.value=""}}),a.value&&e(a.value,{scale:.6,duration:500,easing:"easeOutQuad"})),window.scrollY<=150&&(r.value&&e(r.value,{opacity:1,duration:500,onBegin:()=>{p.value=m}}),a.value&&e(a.value,{scale:1,duration:500,easing:"easeOutQuad"})),window.scrollY>400&&(o.value&&e(o.value,{translateX:0,duration:500,easing:"easeOutQuad"}),l.value&&e(l.value,{translateX:0,duration:500,easing:"easeOutQuad"})),window.scrollY<=400&&(o.value&&e(o.value,{translateX:-1e3,duration:500,easing:"easeOutQuad"}),l.value&&e(l.value,{translateX:1e3,duration:500,easing:"easeOutQuad"})),window.scrollY>600&&(i.value&&e(i.value,{translateX:0,duration:500,easing:"easeOutQuad"}),s.value&&e(s.value,{translateX:0,duration:500,easing:"easeOutQuad"})),window.scrollY<=600&&(i.value&&e(i.value,{translateX:-1e3,duration:500,easing:"easeOutQuad"}),s.value&&e(s.value,{translateX:1e3,duration:500,easing:"easeOutQuad"})),window.scrollY>800&&(u.value&&e(u.value,{translateX:0,duration:500,easing:"easeOutQuad"}),d.value&&e(d.value,{translateX:0,duration:500,easing:"easeOutQuad"})),window.scrollY<=800&&(u.value&&e(u.value,{translateX:-1e3,duration:500,easing:"easeOutQuad"}),d.value&&e(d.value,{translateX:1e3,duration:500,easing:"easeOutQuad"}))};return g(()=>{window.addEventListener("scroll",f),f()}),h(()=>{window.removeEventListener("scroll",f)}),(E,c)=>(O(),w(x,null,[t("div",{ref_key:"headerContainer",ref:a,class:"bg-cover bg-center bg-no-repeat flex items-center justify-center w-full h-screen",style:b({backgroundImage:`url(${_(k)})`})},[t("div",I,[c[1]||(c[1]=t("h1",{class:"text-4xl font-bold text-white mb-6 text-center"},"Long Vân Group",-1)),t("div",Q,[t("p",{ref_key:"dissapearTextContainer",ref:r,class:"overflow-hidden"},y(p.value),513),c[0]||(c[0]=t("p",{class:"text-center"}," I have been involved in developing multi-platform communication content, from ideation and content development to hands-on production of visuals and videos. This experience has given me a deeper understanding of how an industrial brand builds its image and communicates its values to the public. Each video or visual is not just a piece of content, but a way of telling the story of the product, the people, and the corporate culture behind it. This phase also allowed me to learn how to integrate Brand Communication with Media Production, ensuring that every piece of content is not only visually compelling but also aligned with communication objectives and contributes to a consistent brand image. ",-1))])])],4),t("div",Y,[t("iframe",{ref_key:"video1",ref:o,"data-video-id":"1",class:"w-full h-64 rounded-lg shadow-lg video-item",style:{transform:"translateX(-1000px)"},src:"https://www.youtube.com/embed/VIDEO_ID_1",title:"YouTube video player",frameborder:"0",allow:`\r
        accelerometer;\r
        autoplay;\r
        clipboard-write;\r
        encrypted-media;\r
        gyroscope;\r
        picture-in-picture;\r
      `,allowfullscreen:""},null,512),t("iframe",{ref_key:"video2",ref:l,"data-video-id":"2",class:"w-full h-64 rounded-lg shadow-lg video-item",style:{transform:"translateX(1000px)"},src:"https://www.youtube.com/embed/VIDEO_ID_2",title:"YouTube video player",frameborder:"0",allow:`\r
        accelerometer;\r
        autoplay;\r
        clipboard-write;\r
        encrypted-media;\r
        gyroscope;\r
        picture-in-picture;\r
      `,allowfullscreen:""},null,512),t("iframe",{ref_key:"video3",ref:i,"data-video-id":"3",class:"w-full h-64 rounded-lg shadow-lg video-item",style:{transform:"translateX(-1000px)"},src:"https://www.youtube.com/embed/VIDEO_ID_2",title:"YouTube video player",frameborder:"0",allow:`\r
        accelerometer;\r
        autoplay;\r
        clipboard-write;\r
        encrypted-media;\r
        gyroscope;\r
        picture-in-picture;\r
      `,allowfullscreen:""},null,512),t("iframe",{ref_key:"video4",ref:s,"data-video-id":"4",class:"w-full h-64 rounded-lg shadow-lg video-item",style:{transform:"translateX(1000px)"},src:"https://www.youtube.com/embed/VIDEO_ID_2",title:"YouTube video player",frameborder:"0",allow:`\r
        accelerometer;\r
        autoplay;\r
        clipboard-write;\r
        encrypted-media;\r
        gyroscope;\r
        picture-in-picture;\r
      `,allowfullscreen:""},null,512),t("iframe",{ref_key:"video5",ref:u,"data-video-id":"5",class:"w-full h-64 rounded-lg shadow-lg video-item",style:{transform:"translateX(-1000px)"},src:"https://www.youtube.com/embed/VIDEO_ID_2",title:"YouTube video player",frameborder:"0",allow:`\r
        accelerometer;\r
        autoplay;\r
        clipboard-write;\r
        encrypted-media;\r
        gyroscope;\r
        picture-in-picture;\r
      `,allowfullscreen:""},null,512),t("iframe",{ref_key:"video6",ref:d,"data-video-id":"6",class:"w-full h-64 rounded-lg shadow-lg video-item",style:{transform:"translateX(1000px)"},src:"https://www.youtube.com/embed/VIDEO_ID_2",title:"YouTube video player",frameborder:"0",allow:`\r
        accelerometer;\r
        autoplay;\r
        clipboard-write;\r
        encrypted-media;\r
        gyroscope;\r
        picture-in-picture;\r
      `,allowfullscreen:""},null,512)])],64))}}),C=X(D,[["__scopeId","data-v-afb39bfc"]]);export{C as default};
