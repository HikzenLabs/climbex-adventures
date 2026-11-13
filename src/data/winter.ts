// Winter adventures content: skiing, snowboarding and ice climbing.
// Prices currently mirror Cliffhangers India's 2025–26 listings (agreed with them);
// update here when Climbex finalises its own pricing.

// ---------------------------------------------------------------------------
// IMAGES
// Drop the client's photos into public/images/winter/... with these names.
// Until a file exists, <WinterImage> falls back to FALLBACK_IMAGE.
// ---------------------------------------------------------------------------
export const FALLBACK_IMAGE = "/gulmarg_home.jpeg";

export const winterImages = {
  hero: [
    "/images/winter/hero/1.jpg",
    "/images/winter/hero/2.jpg",
    "/images/winter/hero/3.jpg",
    "/images/winter/hero/4.jpg",
  ],
  skiing: "/images/winter/skiing/cover.jpg",
  snowboarding: "/images/winter/snowboarding/cover.jpg",
  snowboardingCard: "/images/winter/snowboarding/card.jpg",
  iceClimbing: "/images/winter/ice-climbing/cover.jpg",
  iceClimbingGallery: [
    "/images/winter/ice-climbing/1.jpg",
    "/images/winter/ice-climbing/2.jpg",
    "/images/winter/ice-climbing/3.jpg",
  ],
  backcountry: "/images/winter/skiing/backcountry.jpg",
};

export const INSTRUCTOR_CREDENTIALS =
  "Certified instructors trained at JIM&WS and IISM";

export interface FAQ {
  q: string;
  a: string;
}

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface WinterPackage {
  id: string;
  slug: string;
  activity: "Skiing" | "Snowboarding" | "Ice Climbing";
  name: string;
  tagline: string;
  level: string;
  duration: string;
  training: string;
  price: string;
  originalPrice?: string;
  location: string;
  image: string;
  overview: string;
  itinerary?: ItineraryDay[];
  zones?: { title: string; description: string }[];
  includes: string[];
  excludes: string[];
  notes?: string[];
  faqs?: FAQ[];
}

// ---------------------------------------------------------------------------
// SKIING
// ---------------------------------------------------------------------------
export const skiPackages: WinterPackage[] = [
  {
    id: "ski-5d",
    slug: "beginner-ski-course-5-days",
    activity: "Skiing",
    name: "Beginner Ski Course | 5 Days / 4 Nights",
    tagline: "3 full days of training for first-time skiers",
    level: "Beginner",
    duration: "5 Days / 4 Nights",
    training: "3 days, 9 AM – 4 PM",
    price: "₹22,950",
    originalPrice: "₹24,000",
    location: "Gulmarg",
    image: "/images/winter/skiing/5-day.jpg",
    overview:
      "Built for people who have never stood on skis. Over three full training days you learn balance, gliding, stopping with the snowplough and turning, so that by the end you can ski on your own on Gulmarg's beginner slopes. Training wraps up by 4 PM each day, leaving your evenings free for Gulmarg's cafés and a walk around the meadow. Small groups of 2–3 per instructor mean you get real attention on the slope.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Gulmarg",
        description:
          "Pickup in Srinagar and a scenic drive to Gulmarg via Tangmarg and the snow-laden pine forest. Check in, explore Gulmarg at your own pace, and meet your instructor before dinner for a briefing on the course plan and slope safety rules.",
      },
      {
        day: "Day 2",
        title: "Training Day 1 – Basics & Balance",
        description:
          "After breakfast, head to the beginner slope. Warm up, get comfortable with your boots and skis, and learn the basic stance, balance and gliding. Back at the hotel by evening.",
      },
      {
        day: "Day 3",
        title: "Training Day 2 – The Snowplough",
        description:
          "Warm up and revise balance drills, then learn the snowplough — the technique that controls your speed and brings you to a stop safely.",
      },
      {
        day: "Day 4",
        title: "Training Day 3 – Turning & Confident Skiing",
        description:
          "Practise the snowplough, then learn to turn left and right by shifting your body weight at low speed. In the afternoon, put it all together and ski the beginner slope with growing confidence.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast, time for a last look around Gulmarg, then transfer towards Srinagar for your onward journey.",
      },
    ],
    includes: [
      "4 nights accommodation in Gulmarg",
      "Breakfast and dinner",
      "3 days of ski training, 9 AM – 4 PM",
      "Qualified, certified ski instructors (JIM&WS / IISM)",
      "One instructor for every 2–3 participants",
      "Ski equipment: skis, ski boots and poles",
    ],
    excludes: [
      "Insurance",
      "GST",
      "Ski lift and gondola charges",
      "Local transport in and around Gulmarg",
      "Personal expenses",
    ],
    notes: [
      "This course gets you skiing independently on beginner slopes only. Higher slopes and backcountry need further training.",
      "Ski clothing (goggles, gloves, jacket, trousers) can be rented in Gulmarg — see rental rates below.",
    ],
    faqs: [
      {
        q: "Will I be able to ski on my own after 5 days?",
        a: "Yes — on beginner slopes. The course gives you solid fundamentals, not expert-level skills.",
      },
      {
        q: "Can I go backcountry skiing after this course?",
        a: "No. Backcountry terrain needs more training and experience first. The 7-day course is a good next step.",
      },
    ],
  },
  {
    id: "ski-7d",
    slug: "ski-course-7-days",
    activity: "Skiing",
    name: "Complete Ski Course | 7 Days / 6 Nights",
    tagline: "5 days of training, from first turns to parallel turns",
    level: "Beginner to Intermediate",
    duration: "7 Days / 6 Nights",
    training: "5 days, 9 AM – 4 PM",
    price: "₹33,250",
    originalPrice: "₹35,000",
    location: "Gulmarg",
    image: "/images/winter/skiing/7-day.jpg",
    overview:
      "Our most popular course and the best choice for first-timers who want to leave Gulmarg skiing properly. Five full days on the snow take you from balance and the snowplough all the way to parallel turns, with a dedicated practice day to lock it all in. You stay in a cottage close to the ski slope, and evenings are yours to enjoy Gulmarg.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Gulmarg",
        description:
          "Our representative meets you at Srinagar Airport for the drive to Gulmarg through Tangmarg and the snow-covered pine forest. Check in to your cottage near the ski slope. In the evening your instructor briefs you on the course and safety rules.",
      },
      {
        day: "Day 2",
        title: "Training Day 1 – Basics & Balance",
        description:
          "Warm-up exercises followed by basic skiing technique: stance, balance and gliding on gentle terrain.",
      },
      {
        day: "Day 3",
        title: "Training Day 2 – The Snowplough",
        description:
          "Balance practice, then the snowplough — your braking and speed-control technique for every slope that follows.",
      },
      {
        day: "Day 4",
        title: "Training Day 3 – Turning & Confidence",
        description:
          "Learn to turn left and right using the snowplough. Spend the afternoon skiing more independently.",
      },
      {
        day: "Day 5",
        title: "Training Day 4 – Parallel Turns",
        description:
          "More snowplough practice, then on to parallel turns — the intermediate technique that lets you link smooth turns while keeping your speed under control.",
      },
      {
        day: "Day 6",
        title: "Training Day 5 – Practice Day",
        description:
          "A full day on the slope putting everything together, with your instructor fine-tuning your technique.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "Breakfast and transfer to Srinagar Airport for your onward journey.",
      },
    ],
    includes: [
      "6 nights accommodation in a cottage near the ski slope",
      "Breakfast and dinner",
      "5 days of ski training, 9 AM – 4 PM",
      "Qualified, certified ski instructors (JIM&WS / IISM)",
      "One instructor for every 2–3 participants",
      "Ski equipment: skis, ski boots and poles",
      "Airport pickup and transfer to Gulmarg",
      "Insurance",
      "GST",
    ],
    excludes: [
      "Ski lift and gondola charges",
      "Local transport in and around Gulmarg",
      "Personal expenses",
    ],
    notes: [
      "Ski clothing (goggles, gloves, jacket, trousers) can be rented in Gulmarg — see rental rates below.",
    ],
  },
  {
    id: "ski-1d",
    slug: "skiing-for-a-day",
    activity: "Skiing",
    name: "Skiing For A Day",
    tagline: "Try skiing during your Kashmir holiday — no course needed",
    level: "All levels",
    duration: "1 Day (book multiple days if you like)",
    training: "1 day with an instructor",
    price: "₹4,500",
    originalPrice: "₹5,500",
    location: "Gulmarg",
    image: "/images/winter/skiing/1-day.jpg",
    overview:
      "Visiting Gulmarg with family or friends and want to try a few runs without signing up for a full course? This is for you. You arrange your own stay and travel; we provide the instructor and the equipment. Complete beginners get a beginner-level session, and intermediate or advanced skiers can book a day out on the mountain with an instructor too.",
    includes: [
      "Qualified, certified ski instructor (JIM&WS / IISM)",
      "One instructor for every 2–3 people",
      "Ski equipment: skis, ski boots and poles",
      "Insurance",
    ],
    excludes: [
      "Accommodation and meals",
      "GST",
      "Ski lift and gondola charges",
      "Local transport in and around Gulmarg",
      "Personal expenses",
    ],
  },
  {
    id: "ski-bc",
    slug: "gulmarg-backcountry-skiing",
    activity: "Skiing",
    name: "Gulmarg Backcountry Skiing",
    tagline: "Guided off-piste skiing on untracked powder",
    level: "Advanced",
    duration: "Custom — planned around your group",
    training: "Guided backcountry days",
    price: "₹60,000",
    originalPrice: "₹80,000",
    location: "Gulmarg",
    image: "/images/winter/skiing/backcountry.jpg",
    overview:
      "For strong skiers who want Gulmarg's famous powder away from the patrolled runs. Only the Gondola Bowl is patrolled — everything else is backcountry, so your guide makes route and avalanche-safety decisions with the group every day. Programmes are planned around your group's ability, snow conditions and the number of days you have; longer programmes can add a helicopter lift to Triple Peak.",
    zones: [
      {
        title: "Gondola Top (Apharwat)",
        description:
          "Long descents of up to 1,500 m vertical from the top of the gondola, outside the patrolled Gondola Bowl.",
      },
      {
        title: "Mid-station to Tangmarg via Drang",
        description:
          "A half-day run of 10–15 km from the gondola mid-station down the Drang Valley, through Drang village to Tangmarg.",
      },
      {
        title: "Baba Reshi Trees",
        description:
          "Storm-day tree skiing: a 400–500 m run through the forest, ideal when fresh snow (30–50 cm) makes higher terrain risky.",
      },
      {
        title: "Monkey Hill",
        description:
          "A shorter 250–300 m slope close to the village — good for warm-ups and avalanche-safety workshops.",
      },
      {
        title: "Triple Peak (extended programmes)",
        description:
          "A helicopter lift to a remote basin, 2–3 hours of skinning, then a long descent through the Drang Valley to Tangmarg.",
      },
    ],
    includes: [
      "Experienced backcountry ski guide",
      "Daily route planning and avalanche-safety decisions",
      "Accommodation and equipment as agreed for your programme",
    ],
    excludes: [
      "Helicopter charges (Triple Peak)",
      "Ski lift and gondola charges",
      "Personal expenses",
      "GST",
    ],
    notes: [
      "You must be a confident skier on ungroomed, steep terrain.",
      "Avalanche transceiver, probe and shovel are carried on every backcountry day.",
      "Message us on WhatsApp with your dates and experience and we will put together your programme.",
    ],
  },
];

export const skiingInfo = {
  intro:
    "Gulmarg is India's ski capital — a high meadow in the Pir Panjal range, about 50 km from Srinagar, with one of the highest cable cars in the world rising to the slopes of Mount Apharwat. Dry, light Himalayan powder, terrain for every level from gentle nursery slopes to serious backcountry, and a season that runs from December to March make it one of the best places in Asia to learn or to push your skiing.",
  facts: [
    { label: "Season", value: "December – March" },
    { label: "Peak snow", value: "January – February" },
    { label: "Base altitude", value: "~8,700 ft (2,650 m)" },
    { label: "From Srinagar", value: "~50 km, about 2 hrs" },
  ],
  whyClimbex: [
    INSTRUCTOR_CREDENTIALS,
    "Small groups: one instructor for every 2–3 skiers",
    "Courses for complete beginners through to backcountry",
    "Skis, boots and poles included in every package",
    "Local team based in Kashmir, on WhatsApp throughout your trip",
    "Stays close to the slopes so you spend less time travelling",
  ],
  bestTime: [
    {
      month: "December",
      text: "The season opens as the first heavy snowfalls build a base of around 40–50 cm. Good for beginners and experienced skiers alike — pack proper thermals.",
    },
    {
      month: "January",
      text: "Peak season. Regular snowfall and excellent powder. Check avalanche forecasts before heading off-piste.",
    },
    {
      month: "February",
      text: "The deepest snowpack of the year (often 1–2 m) — ideal conditions. Occasional storms can pause skiing for a day.",
    },
    {
      month: "March",
      text: "Longer, sunnier days and fewer crowds. Lower slopes turn soft and sticky; higher slopes stay firm.",
    },
  ],
  slopes: [
    {
      name: "Baby Slope, Highland Park & Slope 85",
      level: "Beginner",
      text: "Gentle, wide nursery slopes near the village with surface lifts — where every beginner course starts.",
    },
    {
      name: "Kongdoori (Gondola Phase 1)",
      level: "Beginner – Intermediate",
      text: "Reached by Gondola Phase 1 in about 10 minutes. Easy to intermediate runs, with steeper options and guided off-piste nearby.",
    },
    {
      name: "Mary's Shoulder",
      level: "Intermediate – Advanced",
      text: "Wide open, less crowded slopes reached by the chairlift from Kongdoori and Gondola Phase 2.",
    },
    {
      name: "Apharwat (Gondola Phase 2)",
      level: "Advanced",
      text: "The top of the gondola at around 13,000 ft. Long descents and deep powder — Gulmarg's signature advanced terrain.",
    },
    {
      name: "Monkey Hill",
      level: "Advanced / Touring",
      text: "A 20–30 minute hike from the village hotels. Pine forest, a gentler east side and a steep north face — popular for ski touring.",
    },
    {
      name: "Sunshine Peak",
      level: "Advanced / Touring",
      text: "Reached from the Apharwat ridge with a guided climb to the top. Tree skiing and technical terrain for experienced tourers.",
    },
  ],
  rental: [
    { item: "Ski goggles", price: "₹200 / day" },
    { item: "Ski jacket", price: "₹300 / day" },
    { item: "Ski trousers", price: "₹200 / day" },
    { item: "Ski gloves", price: "₹100 / day" },
  ],
  heliSkiing:
    "Heli-skiing in Gulmarg is run by Kashmir Heliski: a helicopter drops experienced skiers high on the range for untracked powder, with expert guides and full avalanche-safety equipment. It is suited to strong skiers only — ask us and we will help you plan it alongside your trip.",
  tips: [
    "Keep 1–2 buffer days to acclimatise and to allow for weather.",
    "Wear a helmet and use knee protection — especially in your first days.",
    "Layer up: thermals, a warm mid-layer and a waterproof outer shell.",
    "Never go off-piste without a local guide.",
    "Check the weather and avalanche forecast every day — conditions change fast.",
    "Book early for January and February; rooms and instructors fill up.",
  ],
  whatToCarry: [
    "Thermal inner wear (2 sets)",
    "Fleece or down mid-layer",
    "Waterproof jacket and trousers (or rent in Gulmarg)",
    "Waterproof gloves and a neck gaiter / buff",
    "Warm woollen socks",
    "Snow boots for walking around the village",
    "Sunglasses, sunscreen and lip balm",
    "Original photo ID",
  ],
  howToReach: [
    {
      mode: "By road",
      text: "Gulmarg is about 50 km from Srinagar — roughly 2 hours via Tangmarg. The last 12 km climb from Tangmarg can need a 4×4 or snow chains after fresh snowfall.",
    },
    {
      mode: "By air",
      text: "Srinagar Airport has direct flights from Delhi, Mumbai, Bengaluru and other major cities. Most of our packages include the airport transfer to Gulmarg.",
    },
    {
      mode: "By rail",
      text: "Jammu Tawi is the nearest major railhead (about 300 km). From there, continue to Srinagar by road and on to Gulmarg.",
    },
  ],
  iism:
    "Gulmarg is home to the Indian Institute of Skiing and Mountaineering (IISM), set up by the Ministry of Tourism in 1968 as the Gulmarg Winter Sports Project to develop Gulmarg as an international ski resort and train India's ski instructors. Our instructors are certified by IISM and JIM&WS (Jawahar Institute of Mountaineering & Winter Sports).",
  faqs: [
    {
      q: "Do I need any prior experience to ski in Gulmarg?",
      a: "No. Our beginner courses start from zero on gentle nursery slopes, with one instructor for every 2–3 people.",
    },
    {
      q: "What is the best month to ski in Gulmarg?",
      a: "January and February have the best snow. The season runs from December to March, sometimes into early April.",
    },
    {
      q: "How much does skiing in Gulmarg cost?",
      a: "Skiing For A Day is ₹4,500 per person. The 5 Days / 4 Nights beginner course is ₹22,950 and the 7 Days / 6 Nights course is ₹33,250, including stay, breakfast, dinner, training and ski equipment. Backcountry programmes start at ₹60,000.",
    },
    {
      q: "How long does it take to learn skiing?",
      a: "Most beginners are skiing independently on easy slopes after 3–5 days of training. Our 7-day course takes you on to parallel turns.",
    },
    {
      q: "Which slopes are best for beginners?",
      a: "The Baby Slope, Highland Park and Slope 85 near the village. As you progress, you move up to Kongdoori (Gondola Phase 1).",
    },
    {
      q: "Is ski equipment available on rent?",
      a: "Yes. Skis, boots and poles are included in our packages. Clothing such as goggles, jackets, trousers and gloves can be rented in Gulmarg — book ahead in peak season.",
    },
    {
      q: "Are gondola and lift tickets included?",
      a: "No, gondola and lift charges are paid separately at the counter. Beginner courses mostly use the nursery slopes, which don't need the gondola.",
    },
    {
      q: "Can I combine skiing with snowboarding or ice climbing?",
      a: "Yes. Many guests add a few days of ice climbing in Pahalgam or switch to snowboarding. Message us and we'll plan a combined trip.",
    },
  ] as FAQ[],
};

// ---------------------------------------------------------------------------
// SNOWBOARDING (single page, no itinerary cards)
// ---------------------------------------------------------------------------
export const snowboardingCourses = [
  {
    name: "5-Day Intensive Course",
    price: "₹33,000",
    includes: "Training + Stay + Meals + Equipment",
    bestFor: "Serious beginners to intermediate riders",
  },
  {
    name: "3-Day Quick Course",
    price: "₹21,000",
    includes: "Training + Stay + Meals + Equipment",
    bestFor: "Weekend riders and time-limited visitors",
  },
  {
    name: "Snowboarding Experience (1 Day)",
    price: "₹7,000",
    includes: "Introductory training + Equipment",
    bestFor: "First-time riders who want a taste",
  },
];

export const snowboardingInfo = {
  intro:
    "Gulmarg's dry Himalayan powder, wide bowls and forested lines make it one of the best places in Asia to learn snowboarding — or to ride it properly. Our courses run airport to airport with certified instructors, all your board gear and a stay in central Gulmarg, so all you have to do is ride.",
  facts: [
    { label: "Season", value: "Mid-Dec – March" },
    { label: "Best powder", value: "January – February" },
    { label: "Courses", value: "1, 3 & 5 days" },
    { label: "Instructors", value: "JIM&WS / IISM certified" },
  ],
  terrain: [
    {
      level: "Beginner",
      text: "Around 7.5 km of gentle, patrolled runs and wide bunny slopes in the main fields — perfect for your first days on a board.",
    },
    {
      level: "Intermediate",
      text: "Around 16.5 km of moderate terrain, including the open slopes of Mary's Shoulder.",
    },
    {
      level: "Expert",
      text: "Around 6 km of steep alpine runs, pillow lines and narrow couloirs from the top of the gondola.",
    },
    {
      level: "Open bowls",
      text: "Huge powder bowls with views across the Kashmir Valley — and of Nanga Parbat on a clear day.",
    },
    {
      level: "Tree riding",
      text: "Baba Reshi, Monkey Hill and the Tangmarg forests — great riding even when the weather closes the high terrain.",
    },
  ],
  includes: [
    "Accommodation in central Gulmarg",
    "Daily breakfast and dinner",
    "Certified snowboard instructors (JIM&WS / IISM)",
    "Snowboard, boots, bindings and safety gear",
    "Gondola lift passes for designated training areas",
    "Safety support: first aid, emergency assistance and avalanche equipment",
    "Arrival-to-departure support",
  ],
  excludes: [
    "Lunch and beverages",
    "Travel insurance (recommended)",
    "Lift passes beyond those included in your course",
    "GST, where applicable",
    "Personal expenses and shopping",
  ],
  rental: [
    { item: "Complete snowboard setup (board, boots, bindings)", price: "from ₹1,400 / day" },
    { item: "Ski goggles", price: "₹200 / day" },
    { item: "Waterproof jacket", price: "₹300 / day" },
    { item: "Insulated trousers", price: "₹200 / day" },
    { item: "Thermal gloves", price: "₹100 / day" },
  ],
  advanced: [
    "Backcountry snowboarding tours beyond the resort boundary",
    "Heli-snowboarding for untracked off-piste lines (on request)",
    "Avalanche safety training — beacon, probe and shovel",
    "Private one-on-one coaching",
  ],
  safety: [
    "Patrolled beginner slopes and active mountain patrol",
    "Health centre near the slopes",
    "Daily avalanche advisory checked before every session",
    "Instructors trained as first responders, with first-aid kits on the slope",
    "Avalanche safety training and equipment for any backcountry riding on Apharwat",
  ],
  gondola: {
    hours: "10:00 AM – 5:00 PM in winter (may close in bad weather)",
    phases: [
      {
        name: "Phase 1",
        text: "Gulmarg base (~8,700 ft) to Kongdoori (~10,000 ft), about 9 minutes. Beginner-to-intermediate terrain.",
      },
      {
        name: "Phase 2",
        text: "Kongdoori to Apharwat (~13,000 ft), about 12 minutes. Advanced and expert terrain.",
      },
      {
        name: "Chairlift",
        text: "Kongdoori to Mary's Shoulder, about 11 minutes. Open intermediate slopes, or a run back down to the base.",
      },
    ],
    // 2025–26 published fares, subject to change by the Gulmarg Gondola (JKCCC).
    tickets: [
      { pass: "Single ride", route: "Gulmarg → Phase 1", indian: "₹400", foreign: "₹400" },
      { pass: "Single ride", route: "Phase 1 → Phase 2", indian: "₹550", foreign: "₹550" },
      { pass: "Single ride", route: "Chairlift", indian: "₹300", foreign: "₹300" },
      { pass: "Day pass", route: "Gulmarg → Phase 1", indian: "₹800", foreign: "₹1,350" },
      { pass: "Day pass", route: "Phase 1 → Phase 2", indian: "₹1,350", foreign: "₹2,100" },
      { pass: "Day pass", route: "Chairlift", indian: "₹1,300", foreign: "₹2,100" },
      { pass: "Weekly pass", route: "Gulmarg → Phase 1", indian: "₹3,500", foreign: "₹6,000" },
      { pass: "Weekly pass", route: "Phase 1 → Phase 2", indian: "₹7,500", foreign: "₹10,000" },
      { pass: "Season pass", route: "All lifts", indian: "₹40,000", foreign: "₹40,000" },
    ],
  },
  bestTime: [
    {
      month: "December",
      text: "Early season with heavy snowfall. Book from mid-December onwards for a reliable base.",
    },
    {
      month: "January – February",
      text: "Peak season: deep powder and the most stable conditions. Expect -5°C to -15°C.",
    },
    {
      month: "March",
      text: "Spring riding — softer snow, warmer days and quieter slopes.",
    },
    {
      month: "April – November",
      text: "No snowboarding — the season is over.",
    },
  ],
  mistakes: [
    "Rushing — trying steeper slopes before the basics are solid",
    "Arriving unfit; a few weeks of leg and core work makes a huge difference",
    "Strapping in while standing — sit down to fasten your bindings",
    "Using ill-fitting boots or the wrong board size",
    "Putting your hands out to break a fall (the most common cause of wrist injuries)",
    "Trying to teach yourself instead of learning with an instructor",
  ],
  tips: [
    "Find out whether you ride regular (left foot forward) or goofy (right foot forward) before day one.",
    "Build leg strength, core strength and flexibility in the weeks before your trip.",
    "Wear a helmet and goggles every day.",
    "Make sure your board, bindings and boots match your height, weight and shoe size.",
    "Expect to fall a lot in the first two days — it's part of learning. Trust your instructor.",
  ],
  packing: [
    "Snow boots with good ankle support (for walking around, not riding)",
    "3 T-shirts, including one full-sleeve dry-fit",
    "2 thermal sets and 2 insulating layers",
    "Padded or down jacket for before and after riding",
    "Ski jacket and 2 pairs of snow pants (or rent in Gulmarg)",
    "Small daypack (20–30 L)",
    "Sunglasses, snow gloves and a neck gaiter",
    "3 pairs of socks (1 sports, 2 woollen)",
    "Toiletries, water bottle and plastic bags for wet clothes",
    "Personal medicines and a small first-aid kit",
    "Original photo ID (Aadhaar, passport or driving licence)",
    "Snacks such as nuts or protein bars",
  ],
  priceFactors: [
    "Accommodation: single or double occupancy, room category, number of nights",
    "Training: course length, private vs group coaching, peak vs shoulder season",
    "Extras: rentals, backcountry days, heli-snowboarding, avalanche training",
  ],
  faqs: [
    {
      q: "How much does a snowboarding course in Gulmarg cost?",
      a: "A 1-day Snowboarding Experience is ₹7,000 (training + equipment). The 3-Day Quick Course is ₹21,000 and the 5-Day Intensive Course is ₹33,000 — both include training, stay, breakfast, dinner and all board equipment.",
    },
    {
      q: "Where do beginners snowboard in Gulmarg?",
      a: "On the gentle, patrolled nursery slopes near the village. Once you can link turns you move up to Kongdoori via Gondola Phase 1.",
    },
    {
      q: "What is the best time for snowboarding in Gulmarg?",
      a: "December to March. The best powder and most stable conditions are from January to late February.",
    },
    {
      q: "Can I rent a snowboard in Gulmarg?",
      a: "Yes. A complete setup (board, boots and bindings) starts from around ₹1,400 per day; branded kits cost more. Equipment is already included in all our courses.",
    },
    {
      q: "Is snowboarding hard for beginners?",
      a: "The first two days are the hardest — you'll fall a lot while learning edge control. Once it clicks, progress is quick.",
    },
    {
      q: "Is snowboarding harder than skiing?",
      a: "Snowboarding is usually harder to learn at the start but easier to master. Skiing is easier to begin but more complex at advanced levels.",
    },
    {
      q: "Is snowboarding easier on the knees?",
      a: "Generally yes — both feet are fixed to one board, so falls tend to affect wrists and shoulders rather than twisting the knees.",
    },
    {
      q: "Is snowboarding safe?",
      a: "Most injuries — sprains, bruises, wrist and shoulder injuries — come from falls. Learning with a certified instructor and wearing a helmet and wrist guards greatly reduces the risk.",
    },
    {
      q: "Should I book in advance?",
      a: "Yes. January and February slots fill up quickly, so book a few weeks ahead.",
    },
  ] as FAQ[],
};

// ---------------------------------------------------------------------------
// ICE CLIMBING (Pahalgam)
// ---------------------------------------------------------------------------
export const iceClimbingInfo = {
  intro:
    "Every winter the waterfalls around Pahalgam freeze into walls of solid blue ice. Ice climbing means climbing these frozen falls with crampons on your boots and an ice axe in each hand, safely tied in to a rope. Kashmir's ice is raw, uncrowded and set against the snow-covered Lidder Valley — and our 3-day course takes complete beginners from zero to climbing their first frozen waterfall.",
  facts: [
    { label: "Base", value: "Pahalgam (~2,200 m)" },
    { label: "Season", value: "Late Dec – mid Feb" },
    { label: "Best month", value: "January" },
    { label: "Course", value: "3 days, beginners" },
  ],
  course: {
    name: "Beginner Ice Climbing Course | 3 Days",
    price: "Price on request",
    duration: "3 Days",
    location: "Pahalgam, Kashmir",
    level: "Beginner — no experience needed",
    age: "12 – 45 years",
    days: [
      {
        day: "Day 1",
        title: "Orientation & Equipment",
        description:
          "Introduction to ice climbing, layering for the cold, how to use and care for your crampons, ice axes and harness, and the rope and safety systems you'll rely on. No climbing yet — today is about getting everything right on the ground.",
      },
      {
        day: "Day 2",
        title: "Technique on the Ice",
        description:
          "Your first time on the ice, on a top rope so any fall is short. Learn ice-tool placement, crampon footwork, and the basics of belaying, working on a steady rhythm of swing, step and stand.",
      },
      {
        day: "Day 3",
        title: "Practice & Wrap-up",
        description:
          "A final top-rope session to put it all together, followed by a course review, feedback from your instructor, and gear return.",
      },
    ] as ItineraryDay[],
  },
  locations: [
    {
      name: "Pahalgam",
      tag: "Main base",
      text: "Where the East and West Lidder rivers meet. Several frozen walls are close to town, some reachable on foot, with hotels, homestays and the JIM&WS campus at Nunwan nearby.",
    },
    {
      name: "Betaab Valley",
      tag: "Beginner walls",
      text: "About 10 km from Pahalgam. A short approach and gentler walls on the valley floor make it ideal for the first days of the course.",
    },
    {
      name: "Aru Valley",
      tag: "Progression",
      text: "About 12 km upstream from Pahalgam. Its waterfalls freeze cleanly in winter, giving longer and steeper lines once you have the basics.",
    },
    {
      name: "Sonamarg",
      tag: "Advanced only",
      text: "Long, multi-pitch frozen falls above the valley for experienced ice climbers. Winter access needs a 4×4. Not part of the beginner course.",
    },
  ],
  learn: [
    {
      title: "Ice tool technique",
      text: "Swinging the axe for a secure placement. It feels awkward at first and becomes rhythmic by day three.",
    },
    {
      title: "Crampon footwork",
      text: "Front-pointing on steep ice and flat-footing on gentler angles.",
    },
    {
      title: "Top roping",
      text: "Climbing safely with the rope anchored above you — how every beginner starts.",
    },
    {
      title: "Belaying & rappelling",
      text: "Managing the rope for your partner and descending under control.",
    },
    {
      title: "Safety on ice",
      text: "Watching for falling ice, staying warm, and what to do if you get stuck on a route.",
    },
    {
      title: "Next level",
      text: "Lead climbing, ice screws and anchors are covered in longer advanced programmes on request.",
    },
  ],
  includes: [
    "Homestay accommodation in Pahalgam (twin / triple sharing)",
    "Breakfast, packed lunch and dinner",
    "Transfers Srinagar – Pahalgam – Srinagar",
    "All technical climbing gear: ice axes, crampons, harness, helmet and ropes",
    "Certified ice climbing instructors (JIM&WS / IISM)",
    "First aid",
  ],
  excludes: [
    "Personal clothing and boots",
    "Snacks, laundry and drinks outside meals",
    "Anything not mentioned in the itinerary",
    "Personal expenses",
  ],
  wear: [
    { item: "Base layer", text: "Merino wool or synthetic thermals" },
    { item: "Mid layer", text: "Fleece or down jacket" },
    { item: "Outer layer", text: "Waterproof shell jacket and pants" },
    { item: "Gloves", text: "Two pairs — a thinner pair for climbing, a warmer pair for belaying" },
    { item: "Boots", text: "Stiff, insulated mountaineering boots that take crampons (hiking boots won't work — rentals can be arranged)" },
    { item: "Gaiters", text: "To keep snow out of your boots" },
  ],
  carry: [
    "Sunscreen and UV-protection sunglasses",
    "Thermos with a hot drink",
    "Energy snacks",
    "Spare camera / phone batteries (they drain fast in the cold)",
    "Personal medicines",
  ],
  bestTime: [
    {
      month: "Late December",
      text: "Waterfalls freeze from the edges inward. Lower walls become climbable in the last two weeks of the month. Nights around -10°C.",
    },
    {
      month: "January (peak)",
      text: "Ice is fully formed, thick and stable — the best month. Daytime around -5°C to -10°C on the walls; colder at night in the upper valley.",
    },
    {
      month: "February",
      text: "Early February is still excellent. As the sun strengthens, ice starts to weaken from the base; the best routes last until mid-February.",
    },
    {
      month: "March onwards",
      text: "Daytime temperatures rise above freezing and the ice melts. The season is over.",
    },
  ],
  howToReach: [
    {
      mode: "By road from Srinagar",
      text: "About 95 km, roughly 3 hours via Anantnag. The road is paved but can be icy in January and February. Transfers are included in our course.",
    },
    {
      mode: "By air",
      text: "Fly into Srinagar (direct from Delhi, Mumbai, Bengaluru, Kolkata and more). Winter fog can delay flights in December and January, so keep a buffer.",
    },
  ],
  whoCanDo: [
    {
      title: "Fitness",
      text: "Moderate fitness is enough for the beginner course — if you walk regularly, you can do it. Upper-body strength helps.",
    },
    {
      title: "Cold",
      text: "You'll spend several hours at -5°C to -15°C. With the right layers it's very manageable.",
    },
    {
      title: "Heights",
      text: "You're always on a top rope, but being reasonably comfortable with height helps you enjoy it.",
    },
    {
      title: "Experience",
      text: "None needed. Rock climbing helps a little, but ice technique is different and everyone starts from scratch.",
    },
  ],
  notSuitable:
    "Not suitable for people with serious heart or respiratory conditions, Raynaud's or other conditions made worse by extreme cold. If in doubt, check with your doctor first.",
  whyKashmir: [
    "Uncrowded natural ice — no queues, no artificial walls",
    "An easy entry point: a 3-day course is enough to climb your first frozen waterfall",
    "Stunning setting in the Lidder Valley, among pine forest and snow peaks",
    "A fast-growing winter sports scene, with ice climbing competitions now held in Pahalgam",
  ],
  faqs: [
    {
      q: "What is ice climbing, and how is it different from rock climbing?",
      a: "Ice climbing is climbing frozen waterfalls or ice walls using crampons on your boots and an ice axe in each hand. Unlike rock, you create your own holds by placing your tools and crampon points into the ice — and the surface changes from day to day with temperature.",
    },
    {
      q: "Is ice climbing in Pahalgam safe?",
      a: "With certified instructors, proper equipment and top-rope setups, it is run in a controlled way. The main risks — falling ice, the cold and rope-system errors — are managed with helmets, layering and strict safety protocols. No adventure sport is risk-free, but beginners are always on a top rope.",
    },
    {
      q: "Do I need previous climbing experience?",
      a: "No. The 3-day course is designed for complete beginners.",
    },
    {
      q: "Can children do it?",
      a: "Yes, from 12 years old, as long as they are active and comfortable in the cold. The beginner course is open to ages 12 to 45.",
    },
    {
      q: "Do I need to buy gear?",
      a: "No. We provide all technical gear. You bring warm clothing — thermals, a waterproof jacket, gloves and insulated boots. Mountaineering boot rentals can be arranged; let us know your size in advance.",
    },
    {
      q: "What temperatures should I expect?",
      a: "Around -10°C at night in January and -5°C to -10°C on the walls during the day, depending on sun and wind.",
    },
    {
      q: "When should I book?",
      a: "January is the most popular month — book 3–4 weeks in advance.",
    },
    {
      q: "Can I combine ice climbing with skiing?",
      a: "Yes. A popular plan is the 3-day ice climbing course in Pahalgam plus 2–3 days of skiing in Gulmarg, or adding winter sightseeing in Srinagar. Message us and we'll build the trip.",
    },
  ] as FAQ[],
};

// ---------------------------------------------------------------------------
// HOME PAGE FEATURED WINTER CARDS
// ---------------------------------------------------------------------------
export const featuredWinter = [
  {
    id: "w-ski-5d",
    to: `/skiing/${skiPackages[0].slug}`,
    activity: "Skiing",
    name: "Beginner Ski Course",
    meta: "5 Days / 4 Nights · Gulmarg",
    price: "₹22,950",
    image: skiPackages[0].image,
  },
  {
    id: "w-sb-3d",
    to: "/snowboarding",
    activity: "Snowboarding",
    name: "3-Day Snowboarding Course",
    meta: "Stay + meals + gear · Gulmarg",
    price: "₹21,000",
    image: winterImages.snowboardingCard,
  },
  {
    id: "w-ice",
    to: "/ice-climbing",
    activity: "Ice Climbing",
    name: "Beginner Ice Climbing Course",
    meta: "3 Days · Pahalgam",
    price: "On request",
    image: winterImages.iceClimbing,
  },
  {
    id: "w-ski-7d",
    to: `/skiing/${skiPackages[1].slug}`,
    activity: "Skiing",
    name: "Complete Ski Course",
    meta: "7 Days / 6 Nights · Gulmarg",
    price: "₹33,250",
    image: skiPackages[1].image,
  },
  {
    id: "w-ski-1d",
    to: `/skiing/${skiPackages[2].slug}`,
    activity: "Skiing",
    name: "Skiing For A Day",
    meta: "1 Day · Gulmarg",
    price: "₹4,500",
    image: skiPackages[2].image,
  },
  {
    id: "w-ski-bc",
    to: `/skiing/${skiPackages[3].slug}`,
    activity: "Skiing",
    name: "Backcountry Skiing",
    meta: "Guided off-piste · Gulmarg",
    price: "₹60,000",
    image: skiPackages[3].image,
  },
];
