const phones = [
  {
    id: 1,
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    price: 129999,
    image:
      "https://cdn.primini.tn/8806095414584-samsung-galaxy-s24-ultra-17-3-cm-6-8-double-sim-5g-usb-type-c-12-go-256-go-5000-m-ah-noir-1.jpg",
    rating: 4.8,
    category: "Flagship",
    description:
      "Samsung Galaxy S24 Ultra is a premium flagship smartphone designed for power users who want the best in performance, photography, and productivity. It features a stunning AMOLED display with exceptional brightness and clarity, making media consumption a delight. The integrated S-Pen enhances note-taking, sketching, and professional workflows. Powered by a top-tier processor, it handles gaming, multitasking, and heavy apps effortlessly. The advanced camera system delivers excellent low-light photos, sharp zoom, and professional-grade videos. Its durable build, long battery life, and refined software make it a complete high-end smartphone experience.",
  },
  {
    id: 2,
    brand: "Apple",
    model: "iPhone 15 Pro",
    price: 134900,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525407_sd.jpg",
    rating: 4.7,
    category: "Flagship",
    description:
      "iPhone 15 Pro brings Apple's premium smartphone experience with a strong focus on performance, durability, and video quality. Its titanium body makes it lighter while retaining a solid, premium feel. The powerful A17 Pro chip ensures smooth gaming, efficient multitasking, and long-term software support. Apple’s camera system excels in consistent photography, cinematic video recording, and realistic color reproduction. The phone integrates seamlessly with the Apple ecosystem, offering smooth connectivity with MacBooks, iPads, and Apple Watch. With excellent battery optimization and long software updates, it’s built for reliability and longevity.",
  },
  {
    id: 3,
    brand: "OnePlus",
    model: "12",
    price: 64999,
    image:
      "https://cdn.beebom.com/mobile/2024/01/OnePlus-12R-2.png",
    rating: 4.6,
    category: "Flagship",
    description:
      "OnePlus 12 is designed for users who want flagship performance without paying ultra-premium prices. It offers a fast and fluid user experience with OxygenOS, known for its clean interface and smooth animations. The phone delivers excellent performance for gaming, streaming, and multitasking thanks to its powerful processor and optimized software. Its camera system, tuned with Hasselblad, provides natural color tones and sharp images. Fast charging ensures minimal downtime, while the AMOLED display enhances everyday viewing. Overall, OnePlus 12 balances speed, design, and value effectively.",
  },
  {
    id: 4,
    brand: "Google",
    model: "Pixel 8 Pro",
    price: 106999,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.HlRc5pYL92Ho3BrxUmpwiwHaHa?cb=defcache2&defcache=1&w=700&h=700&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.5,
    category: "Flagship",
    description:
      "Google Pixel 8 Pro focuses heavily on software intelligence and photography excellence. It delivers a clean Android experience with fast updates directly from Google. The camera system is powered by advanced AI features, producing stunning photos with minimal effort, especially in low light. Smart tools like photo editing, voice recognition, and real-time translations make everyday usage smarter. The display is bright and color-accurate, ideal for content consumption. With reliable performance and thoughtful software features, Pixel 8 Pro is perfect for users who value simplicity and intelligent functionality.",
  },
  {
    id: 5,
    brand: "Xiaomi",
    model: "14 Pro",
    price: 69999,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.D3RUxXuRsXic9aqYnhy70wHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.4,
    category: "Flagship",
    description:
      "Xiaomi 14 Pro delivers flagship-level performance at competitive pricing, making it attractive for power users. Its Leica-powered camera system captures detailed photos with excellent dynamic range and accurate colors. The high-quality AMOLED display ensures smooth scrolling and immersive visuals. Performance is strong, handling demanding games and heavy multitasking with ease. Xiaomi’s fast charging technology significantly reduces charging time, adding convenience. With a premium design, solid battery life, and feature-rich software, the Xiaomi 14 Pro stands out as a value-focused flagship smartphone.",
  },
  {
    id: 6,
    brand: "Samsung",
    model: "Galaxy A54",
    price: 38999,
    image:
      "https://sm.pcmag.com/pcmag_me/photo/default/samsung-galaxy-a54-5g_rjf9.jpg",
    rating: 4.3,
    category: "Midrange",
    description:
      "Samsung Galaxy A54 is a reliable midrange smartphone offering a premium feel at a more affordable price. It features a vibrant AMOLED display that enhances video streaming and everyday usage. The camera system performs well in daylight and handles social media photography effectively. Samsung’s One UI provides a polished experience with useful features and consistent updates. Battery life is dependable for daily tasks, and the overall build quality feels solid. It’s an excellent choice for users seeking Samsung’s quality without flagship pricing.",
  },
  {
    id: 7,
    brand: "Nothing",
    model: "Phone (2)",
    price: 44999,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.KhoUZOTPkSIeu8NOQMjrrgHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.5,
    category: "Midrange",
    description:
      "Nothing Phone (2) stands out with its unique transparent design and Glyph lighting system, offering both style and functionality. The phone delivers a near-stock Android experience with smooth animations and minimal bloatware. Performance is reliable for everyday tasks, gaming, and multitasking. The camera system captures balanced photos suitable for social sharing. Its distinctive design makes it a conversation starter, while clean software ensures long-term usability. It’s ideal for users who want something different yet practical.",
  },
  {
    id: 8,
    brand: "iQOO",
    model: "Neo 7",
    price: 34999,
    image: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1688368091552/0b466ccd0ac3f7ca581c10ebda0f5ce0.png",
    rating: 4.4,
    category: "Midrange",
    description:
      "iQOO Neo 7 is built with gamers and performance enthusiasts in mind. It delivers fast and responsive performance thanks to a powerful chipset and efficient cooling system. The display is smooth, making gaming and scrolling feel fluid. Battery life supports long gaming sessions, and fast charging minimizes downtime. The camera setup is capable for casual photography and video recording. Overall, it offers strong performance-focused features at a reasonable price point.",
  },
  {
    id: 9,
    brand: "Redmi",
    model: "Note 13 Pro",
    price: 25999,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.ZtXeqkt5NX9D60h8rTiDFQHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.2,
    category: "Budget",
    description:
      "Redmi Note 13 Pro offers excellent value by combining premium features with budget-friendly pricing. Its AMOLED display delivers vibrant colors and sharp visuals, uncommon in this segment. The camera system performs impressively for its price, especially in good lighting conditions. Performance is sufficient for daily usage, multitasking, and light gaming. Battery life comfortably lasts a full day, and fast charging adds convenience. It’s a strong choice for users seeking maximum value on a budget.",
  },
  {
    id: 10,
    brand: "Realme",
    model: "Narzo 60",
    price: 17999,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.8X9Vb7puN8xtfZin_-vZFAHaIc?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.1,
    category: "Budget",
    description:
      "Realme Narzo 60 focuses on stylish design and practical features for budget-conscious users. The AMOLED display enhances everyday viewing, while the slim design feels comfortable in hand. Performance is suitable for daily tasks such as browsing, messaging, and video streaming. The camera setup handles social media photography well in good lighting. Battery life is reliable, making it suitable for long daily use. It’s a solid entry-level smartphone with modern features.",
  },
  {
    id: 11,
    brand: "Motorola",
    model: "Edge 40",
    price: 29999,
    image:
      "https://m.media-amazon.com/images/I/81f-EWLCcML._AC_.jpg",
    rating: 4.3,
    category: "Midrange",
    description:
      "Motorola Edge 40 offers a clean Android experience combined with a sleek curved AMOLED display. The near-stock software ensures smooth performance and timely updates. It handles everyday tasks efficiently and delivers stable performance for moderate gaming. The design feels premium, and the display enhances content consumption. Battery life is adequate for daily use, and fast charging provides convenience. It’s ideal for users who prefer simplicity and clean software.",
  },
  {
    id: 12,
    brand: "Samsung",
    model: "Galaxy S23 FE",
    price: 49999,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.tdXyPIoiU-pQo3hU8Hgj4AHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.4,
    category: "Midrange",
    description:
      "Samsung Galaxy S23 FE brings flagship-inspired features to a more affordable segment. It offers a premium design, reliable performance, and a high-quality AMOLED display. The camera system delivers consistent results across different lighting conditions. Samsung’s software support ensures long-term updates and stability. Battery performance supports full-day usage comfortably. It’s a great option for users wanting flagship feel without paying flagship prices.",
  },
  {
    id: 13,
    brand: "Apple",
    model: "iPhone 14",
    price: 69999,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505109_sd.jpg",
    rating: 4.6,
    category: "Flagship",
    description:
      "iPhone 14 delivers consistent performance, strong cameras, and long-term reliability. Apple's optimization ensures smooth day-to-day usage even after years of updates. The camera system captures accurate colors and excellent video quality. The display is bright and sharp, suitable for all content types. With strong build quality and seamless ecosystem integration, it remains a dependable premium smartphone choice.",
  },
  {
    id: 14,
    brand: "OnePlus",
    model: "Nord CE 3",
    price: 26999,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.g9b3jRm3DjpaupczI5DJ_wHaHa?cb=defcache2&defcache=1&w=500&h=500&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.2,
    category: "Midrange",
    description:
      "OnePlus Nord CE 3 is a balanced midrange smartphone focusing on smooth performance and fast charging. OxygenOS offers a clean and responsive experience. The AMOLED display enhances visuals, while performance is suitable for daily tasks and moderate gaming. The camera system is decent for casual photography. Fast charging ensures convenience for busy users. It’s a solid all-rounder for everyday use.",
  },
  {
    id: 15,
    brand: "Vivo",
    model: "V29 Pro",
    price: 39999,
    image:
      "https://m.media-amazon.com/images/I/71Ybh7jdwLL.jpg",
    rating: 4.3,
    category: "Midrange",
    description:
      "Vivo V29 Pro focuses on stylish design and portrait photography. Its camera system is optimized for capturing detailed portraits with pleasing skin tones. The display is vibrant, making media consumption enjoyable. Performance is smooth for everyday tasks and multitasking. Battery life is dependable, and fast charging adds convenience. It’s ideal for users who prioritize camera aesthetics and design.",
  },
  {
    id: 16,
    brand: "Oppo",
    model: "Reno 10 Pro",
    price: 38999,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.lwDyINGPTA4P5PqUYPEeqAHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.2,
    category: "Midrange",
    description:
      "Oppo Reno 10 Pro combines a slim, elegant design with strong camera capabilities. It excels in portrait photography and offers smooth performance for everyday tasks. The AMOLED display provides vivid colors and good brightness. Battery life supports full-day usage, and fast charging is a plus. It’s suitable for users who want a stylish phone with reliable camera performance.",
  },
  {
    id: 17,
    brand: "Poco",
    model: "F5",
    price: 29999,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.lwDyINGPTA4P5PqUYPEeqAHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.4,
    category: "Midrange",
    description:
      "Poco F5 is designed for performance enthusiasts seeking powerful hardware at competitive pricing. It handles heavy multitasking and gaming smoothly. The display is fluid and responsive, enhancing the user experience. Battery life is solid, supporting long usage sessions. While the camera is decent, performance remains its biggest strength. It’s perfect for users who prioritize speed and power.",
  },
  {
    id: 18,
    brand: "Infinix",
    model: "Zero 30",
    price: 19999,
    image:
      "https://infinixstore.eu/cdn/shop/files/13480_ZERO_30_Fantasy_Green-2-1600px.png?v=1712912643&width=1946",
    rating: 4.1,
    category: "Budget",
    description:
      "Infinix Zero 30 offers premium design and features at an affordable price. The curved AMOLED display enhances its visual appeal. Performance is suitable for daily usage and casual gaming. The standout feature is its high-resolution selfie camera, ideal for content creators. Battery life is reliable, making it a practical budget smartphone option.",
  },
  {
    id: 19,
    brand: "Tecno",
    model: "Phantom V Flip",
    price: 49999,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.0jZO2X5CY4UC0XzKecfPnQHaHa?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.3,
    category: "Flagship",
    description:
      "Tecno Phantom V Flip brings foldable smartphone technology at a more accessible price. Its compact folding design adds style and portability. Performance is smooth for daily tasks, and the display quality is impressive. The camera system is reliable for casual photography. It’s an innovative choice for users wanting foldable tech without premium pricing.",
  },
  {
    id: 20,
    brand: "Lava",
    model: "Agni 2",
    price: 21999,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.9_G65L24SkmWuN7NCQB75wHaId?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.0,
    category: "Budget",
    description:
      "Lava Agni 2 is a made-in-India smartphone focusing on performance and value. It offers smooth daily performance, a clean interface, and a large display for content consumption. Battery life is reliable for everyday use. The phone emphasizes practicality and affordability. It’s a good choice for users who want strong performance at a budget-friendly price.",
  },
];

export default phones;