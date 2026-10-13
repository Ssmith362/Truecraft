import type { Service } from "./types";

export const carpetServices: Service[] = [
  {
    slug: "carpet-repair",
    name: "Carpet Repair",
    navLabel: "Carpet Repair",
    group: "carpet",
    tier: "primary",
    confirmed: true,
    confirmNote:
      "Service confirmed (pet damage and localized repair). Still needed: the specific repair types Matt takes on (seams, burns, berber snags, transitions) and whether he will assess from photos.",
    published: true,
    image: "carpetRepair",
    secondaryImage: "carpetTexture",
    seo: {
      title: "Carpet Repair in Spokane, WA | Patches, Seams & Pet Damage",
      description:
        "Carpet repair in the Spokane area: pet damage, tears, loose seams and worn spots. Find out if your carpet can be repaired before you pay to replace it.",
    },
    eyebrow: "Carpet repair · Spokane area",
    h1: "Don't replace that carpet just yet",
    lede: "A torn corner, a chewed doorway or one bad spot in the middle of a room does not always mean new carpet. A lot of damage can be repaired for a fraction of what replacement costs.",
    blurb:
      "Tears, pet damage, loose seams and worn spots. Find out whether a repair is possible before you price out new carpet.",
    ctaLabel: "Ask About Carpet Repair",
    intro: [
      "Most people assume damaged carpet has to be replaced. Flooring stores are not in a hurry to correct that, because selling a houseful of new carpet is better business than fixing three square feet of the old one. But carpet is repairable more often than you would think, and when the rest of the room is in decent shape, a repair is usually the sensible first thing to look into.",
      "Carpet repair is a core part of what TrueCraft does. Matt will look at the damage, tell you whether a repair is realistic and how visible it is likely to be, and give you a price so you can compare it against replacement with real numbers.",
    ],
    problems: {
      heading: "Carpet problems that can often be repaired",
      intro:
        "Whether a specific repair will work depends on the carpet and the damage, but these are the situations worth asking about.",
      items: [
        {
          title: "Pet damage",
          body: "Clawed-up carpet at a doorway, chewed corners and edges pulled loose are the most common repair calls. There is a dedicated page for pet damage with more detail.",
        },
        {
          title: "Tears, rips and holes",
          body: "Furniture dragged across the room, something sharp dropped, a snag that turned into a hole. If the damage is contained, the section can often be cut out and patched.",
        },
        {
          title: "Seams coming apart",
          body: "A seam that has opened up or started to fray will keep getting worse with traffic and vacuuming. Re-seaming it early is a much smaller job.",
        },
        {
          title: "Carpet pulled loose at a doorway",
          body: "Where carpet meets tile, vinyl or a threshold, the edge can come free and become a trip hazard. It can usually be re-secured and finished with the right transition.",
        },
        {
          title: "Burns and permanent stains",
          body: "An iron mark, a dropped coal, bleach, or a stain that no cleaning will lift. When the damage is a defined spot, a patch can remove it entirely.",
        },
        {
          title: "Ripples and loose areas",
          body: "That is a job for restretching rather than patching. It has its own page, and the two are often done in the same visit.",
        },
      ],
    },
    scope: {
      heading: "How carpet repairs are done",
      intro:
        "The right method depends on the damage. In general terms, a repair involves some combination of the following.",
      items: [
        "Assessing the carpet's age, backing and condition to see what it will tolerate",
        "Finding matching material: a remnant from the original install, or a piece taken from inside a closet",
        "Cutting out the damaged section cleanly along the pile",
        "Fitting the replacement piece with the pile running the same direction",
        "Seaming the patch to the surrounding carpet so the edges hold and blend",
        "Re-securing edges to the tack strip or transition where carpet has come loose",
        "Replacing damaged pad underneath where needed",
      ],
    },
    compare: {
      heading: "Repair or replace? An honest starting point",
      intro:
        "Nobody can promise a repair without seeing the carpet. But these patterns hold often enough to tell you which conversation you are probably about to have.",
      left: {
        label: "A repair is usually worth exploring when",
        items: [
          "The damage is in one or two defined places",
          "The rest of the carpet still looks decent",
          "You have leftover carpet, or a closet with the same carpet in it",
          "The carpet has years of life left in it otherwise",
          "You are getting a home or rental ready and need it presentable",
        ],
      },
      right: {
        label: "Replacement is more likely when",
        items: [
          "The carpet is worn thin or matted through the main walkways",
          "Damage is spread across the whole room",
          "The backing is breaking down or coming apart",
          "There is no matching material and the spot is highly visible",
          "Contamination has reached a large area of pad and subfloor",
        ],
      },
      note: "Not sure which side you are on? That is exactly what an assessment is for.",
    },
    cost: {
      heading: "What affects the cost of a carpet repair",
      intro:
        "Carpet repairs are priced by the job. A single small patch and a room with three problem areas are different visits. The main factors:",
      factors: [
        {
          title: "Size and number of repairs",
          body: "One patch at a doorway is a short job. Several areas across different rooms take longer, though doing them in one visit is more economical than separate trips.",
        },
        {
          title: "Whether matching carpet exists",
          body: "A leftover remnant makes things simple. Taking a donor piece from a closet adds a step, because the closet then needs finishing too.",
        },
        {
          title: "Carpet type",
          body: "Loop pile such as berber, patterned carpet and some textured styles need more care to cut and seam invisibly than a standard cut pile.",
        },
        {
          title: "Location",
          body: "A patch in the middle of an open room has to be more precise than one tucked along a wall. Stairs are slower again.",
        },
        {
          title: "What is underneath",
          body: "If the pad or tack strip is damaged too, that gets replaced as part of the repair.",
        },
      ],
    },
    process: {
      heading: "Getting a carpet repaired",
      steps: [
        {
          title: "Send photos or describe the damage",
          body: "A wide shot of the room and a close-up of the problem tell Matt most of what he needs to know for a first read.",
        },
        {
          title: "Get a straight answer",
          body: "Matt tells you whether a repair looks realistic, what it would involve and roughly how noticeable it is likely to be. If he thinks you would be throwing money at a carpet that is finished, he will say that.",
        },
        {
          title: "Agree the price and a time",
          body: "You get a quote for the repair before any work is booked.",
        },
        {
          title: "The repair",
          body: "Many repairs are completed in a single visit. Furniture is moved only as far as needed and the area is vacuumed and left tidy.",
        },
      ],
    },
    estimate: {
      heading: "What to include when you ask about a repair",
      intro: "The more of this you can share, the more useful the first answer will be.",
      items: [
        "A photo of the whole room and a close-up of each damaged area",
        "Something for scale in the close-up, such as a coin or a hand",
        "Roughly how old the carpet is, if you know",
        "Whether you have any leftover carpet from the original install",
        "Whether there is a closet with the same carpet",
        "What caused the damage, especially if a pet was involved",
      ],
    },
    limits: {
      heading: "What a carpet repair can and cannot do",
      body: [
        "A good patch is hard to spot, but it is not always invisible. Carpet fades and wears with age, so even the exact same carpet taken from a closet can look slightly fresher than the floor around it. This usually softens over time as the patch gets walked on, but you should know to expect it.",
        "Not every carpet can be repaired. Very old carpet, carpet with a failing backing and some patterned or specialty carpets may not hold a seam or accept a patch well. Whether a repair is possible depends on the kind of damage, where it is, the condition of the carpet and whether suitable matching material is available.",
      ],
    },
    faqs: [
      {
        q: "Can damaged carpet really be repaired instead of replaced?",
        a: "Often, yes. Localized damage such as a tear, a burn, a chewed corner or an open seam can frequently be patched or re-seamed. It depends on the condition of the carpet and whether matching material is available, which is why an assessment comes first.",
      },
      {
        q: "Where does the matching carpet come from?",
        a: "The best source is a leftover piece from the original installation. If there is none, a piece can often be taken from inside a closet, where it will not be missed, and the closet finished afterward.",
      },
      {
        q: "Will I be able to see the patch?",
        a: "The goal is a repair you have to look for. How close it gets depends on the carpet type, the pile direction, where the patch sits in the room and how much the surrounding carpet has faded. Matt will give you an honest expectation before you commit.",
      },
      {
        q: "How much does carpet repair cost in Spokane?",
        a: "It depends on the size and number of repairs, the type of carpet and whether matching material is on hand. A repair typically costs far less than replacing the carpet in a room. Send photos and you will get a specific quote rather than a range off the internet.",
      },
      {
        q: "Can you tell me if it is repairable from a photo?",
        a: "Photos are usually enough for a first read on whether a repair is realistic. Some things, like the condition of the backing, can only be confirmed in person.",
      },
      {
        q: "Do you repair carpet in rental properties?",
        a: "Yes. Repairing carpet between tenants is often much cheaper than replacing it, and it is a common request from landlords and property managers.",
      },
    ],
    related: ["pet-damage-carpet-repair", "carpet-restretching", "flooring-installation", "handyman-services"],
  },

  {
    slug: "pet-damage-carpet-repair",
    name: "Pet Damage Carpet Repair",
    navLabel: "Pet Damage Carpet Repair",
    group: "carpet",
    tier: "secondary",
    confirmed: true,
    confirmNote:
      "Pet-damage repair confirmed. Confirm how Matt handles urine-contaminated pad and subfloor (replace pad only, seal subfloor, or refer out) and adjust the 'limits' section to match.",
    published: true,
    image: "petDamageDog",
    secondaryImage: "petDamageCat",
    seo: {
      title: "Pet Damage Carpet Repair in Spokane | TrueCraft Home Repair",
      description:
        "Dog or cat tore up the carpet? Pet-damaged carpet at doorways, corners and edges can often be repaired. Spokane-area assessments from TrueCraft.",
    },
    eyebrow: "Pet damage · Spokane area",
    h1: "Pet-damaged carpet, repaired instead of replaced",
    lede: "A cat that wants through a closed door or a dog left alone for an afternoon can destroy one corner of a perfectly good carpet. That corner can usually be fixed.",
    blurb:
      "Clawed doorways, chewed corners and pulled-up edges. The most common carpet repair there is, and often a quick one.",
    ctaLabel: "Send Photos for an Assessment",
    intro: [
      "Pet damage has a pattern. It is almost always concentrated in one spot: the carpet in front of a bedroom door, the corner by the back slider, the edge next to a crate. The rest of the room is fine. That is the best possible situation for a repair, because the damaged section can be removed and replaced without touching the carpet around it.",
      "Matt repairs pet-damaged carpet for homeowners who want their house back to normal and for landlords dealing with what a tenant's pet left behind. If the damage can be repaired, it saves replacing a whole room of carpet over a few square feet.",
    ],
    problems: {
      heading: "The pet damage Matt sees most",
      items: [
        {
          title: "Clawed carpet at a closed door",
          body: "Cats and dogs dig at the carpet under a door they want open. It leaves a frayed, pulled-up strip right at the threshold. This is the classic repair, and the doorway location helps hide the seam.",
        },
        {
          title: "Chewed corners and edges",
          body: "Puppies in particular will work at a corner or a loose edge until the pad shows. A new piece can be fitted and the edge re-secured.",
        },
        {
          title: "Carpet pulled off the tack strip",
          body: "Digging can pull carpet free along a wall or transition without destroying it. If the carpet itself is intact it may only need re-stretching and re-fastening.",
        },
        {
          title: "Pulled loops and runs",
          body: "A claw caught in loop-pile carpet such as berber can pull a long run. Caught early, the area can often be repaired before the run travels further.",
        },
        {
          title: "Accident spots",
          body: "A stain that will not clean out can be removed with a patch. If the pad underneath is affected, that section of pad is replaced as well.",
        },
      ],
    },
    scope: {
      heading: "What a pet damage repair involves",
      items: [
        "Checking how far the damage goes, including the pad and tack strip beneath it",
        "Sourcing matching carpet from a remnant or a closet",
        "Cutting out the damaged area back to sound carpet",
        "Replacing the pad in that section if it is torn or soiled",
        "Fitting and seaming the new piece with the pile aligned",
        "Re-fastening the edge at the doorway and fitting a transition if one is needed",
      ],
    },
    compare: {
      heading: "Will a repair work for your carpet?",
      intro: "A quick way to judge before you call.",
      left: {
        label: "Good candidates for repair",
        items: [
          "Damage limited to a doorway, corner or edge",
          "One or two accident spots in an otherwise clean carpet",
          "Carpet in reasonable condition everywhere else",
          "A closet or leftover roll with matching carpet",
        ],
      },
      right: {
        label: "Harder cases",
        items: [
          "Repeated accidents across a whole room",
          "Odor that has soaked into pad and subfloor over a large area",
          "Carpet that was already at the end of its life",
          "Damage in several rooms with no matching material",
        ],
      },
      note: "Even in the harder cases it is worth asking. Sometimes one room is replaced and the others repaired.",
    },
    cost: {
      heading: "What affects the price",
      intro: "Pet damage repairs are usually small jobs, priced on what is actually involved.",
      factors: [
        {
          title: "How many spots",
          body: "One doorway is a quick visit. Every door on a hallway is a longer one, though still far less than new carpet.",
        },
        {
          title: "Pad and tack strip",
          body: "If the pet got through to the pad, or the tack strip is damaged, those get replaced in the affected area.",
        },
        {
          title: "Matching material",
          body: "Having a remnant keeps things simple. Harvesting a piece from a closet adds a little time.",
        },
        {
          title: "Carpet style",
          body: "Loop pile and patterned carpets take more care to patch cleanly than plain cut pile.",
        },
      ],
    },
    process: {
      heading: "How it works",
      steps: [
        {
          title: "Take two photos",
          body: "One of the room, one close-up of the damage. Mention whether you have spare carpet.",
        },
        {
          title: "Hear back with an honest read",
          body: "Matt tells you whether it looks repairable and what it would cost.",
        },
        {
          title: "Book the repair",
          body: "Many pet damage repairs are done in one visit.",
        },
      ],
    },
    estimate: {
      heading: "Helpful details to send",
      items: [
        "Photos of each damaged area and the room it is in",
        "How many spots there are in total",
        "Whether the pad is visible or torn",
        "Whether you have leftover carpet or a closet with the same carpet",
        "For accident spots, whether there is lingering odor",
        "For rentals, your move-in or listing date",
      ],
    },
    limits: {
      heading: "The honest part about odor",
      body: [
        "Patching carpet fixes what you can see. Where a pet has had repeated accidents, urine can soak through the carpet into the pad and sometimes the subfloor, and that is where odor lives. Replacing a small section of carpet and pad can deal with a contained spot. It will not solve contamination that has spread under a large area, and in those cases replacing the carpet and pad in that room is usually the better use of your money.",
        "If the behavior that caused the damage is still happening, the same spot may be damaged again. Some owners add a threshold strip or a door guard after the repair.",
      ],
    },
    faqs: [
      {
        q: "My cat shredded the carpet under a door. Can that be fixed?",
        a: "Very often, yes. Doorway damage is the most common pet repair. The frayed section is cut out, a matching piece is fitted, and the edge is re-secured at the threshold.",
      },
      {
        q: "I do not have any leftover carpet. Is a repair still possible?",
        a: "Usually. A matching piece can often be taken from the back of a closet with the same carpet, where a small missing section will not be noticed, and the closet floor is finished afterward.",
      },
      {
        q: "Will a patch get rid of pet urine smell?",
        a: "Only if the contamination is limited to the section being replaced. If urine has spread into the pad or subfloor beyond that area, a surface patch will not remove the odor, and Matt will tell you if that looks like the situation.",
      },
      {
        q: "I am a landlord. Can you repair pet damage between tenants?",
        a: "Yes. This is a common turnover job. Send photos and your timeline and you will get a quote you can weigh against replacement.",
      },
      {
        q: "How much does it cost to fix pet-damaged carpet?",
        a: "It depends on the number of spots, the carpet type and whether the pad needs replacing. It is typically a small job compared with new carpet. Photos are the fastest way to get a real number.",
      },
    ],
    related: ["carpet-repair", "carpet-restretching", "door-installation-and-repair", "trim-and-baseboards"],
  },

  {
    slug: "carpet-restretching",
    name: "Carpet Stretching & Restretching",
    navLabel: "Carpet Restretching",
    group: "carpet",
    tier: "primary",
    confirmed: true,
    confirmNote:
      "Service confirmed. Confirm whether Matt moves furniture as part of the job and whether he restretches on stairs.",
    published: true,
    image: "carpetRestretching",
    secondaryImage: "carpetTexture",
    seo: {
      title: "Carpet Stretching & Restretching in Spokane | TrueCraft",
      description:
        "Ripples, wrinkles or loose carpet? Carpet restretching in the Spokane area pulls it flat and tight again, and can add years to carpet you already own.",
    },
    eyebrow: "Carpet restretching · Spokane area",
    h1: "Carpet restretching for ripples, wrinkles and loose spots",
    lede: "Waves in your carpet do not mean it is worn out. They mean it has come loose. Restretching pulls it tight and flat again, and is one of the least expensive ways to make a room look cared for.",
    blurb:
      "Ripples, wrinkles and buckling pulled flat and re-secured. A simple fix that adds life to carpet you already own.",
    ctaLabel: "Get a Restretching Estimate",
    intro: [
      "Wall-to-wall carpet is held in place by tension. It is stretched across the room and hooked onto tack strips along the walls. Over time that tension can relax, and the slack shows up as ripples, wrinkles or a loose, baggy feel underfoot. It looks bad, it catches toes and vacuum cleaners, and the raised ridges wear out faster than the carpet around them.",
      "The fix is to restretch it: release the carpet along the walls, pull it tight again with a power stretcher, re-fasten it and trim the excess. Matt restretches carpet throughout the Spokane area, and for a lot of homeowners it is the difference between living with carpet they dislike and getting several more good years out of it.",
    ],
    problems: {
      heading: "Signs your carpet needs restretching",
      items: [
        {
          title: "Visible ripples or waves",
          body: "Ridges running across the room, often most obvious in low light or along the main walking path.",
        },
        {
          title: "Wrinkles after furniture was moved",
          body: "Dragging a heavy piece across the room can pull carpet loose and leave a wrinkle that never settles.",
        },
        {
          title: "Loose carpet at walls and doorways",
          body: "If you can lift the carpet at the edge or it has pulled away from a transition, it has come off the tack strip.",
        },
        {
          title: "Buckling after cleaning or humid weather",
          body: "Carpet can swell and loosen with moisture. If it has not flattened out again after it has fully dried, it likely needs restretching.",
        },
        {
          title: "A trip hazard",
          body: "Raised ripples are a real risk, particularly on stairs, in hallways and for anyone unsteady on their feet.",
        },
      ],
    },
    scope: {
      heading: "What restretching involves",
      items: [
        "Moving furniture off the area being stretched, as agreed beforehand",
        "Releasing the carpet from the tack strip along the necessary walls",
        "Stretching the carpet across the room with a power stretcher",
        "Re-securing it to the tack strip under proper tension",
        "Trimming the excess carpet at the wall and tucking the edge",
        "Replacing worn or damaged tack strip where it will no longer hold",
        "Re-fixing the carpet at doorways and transitions",
      ],
    },
    compare: {
      heading: "Restretch, repair or replace?",
      intro: "Ripples are not always the whole story. Here is how the options usually sort out.",
      left: {
        label: "Restretching is usually the answer when",
        items: [
          "The carpet is rippled but otherwise in good shape",
          "The looseness appeared gradually or after moving furniture",
          "The pile still looks and feels reasonable",
          "You want to tidy a home before selling or renting",
        ],
      },
      right: {
        label: "Something else may be needed when",
        items: [
          "The backing is separating from the carpet, which stretching cannot fix",
          "The carpet is also torn or damaged, which calls for a repair alongside",
          "The carpet is worn through in the traffic areas",
          "Ripples come straight back, pointing to a pad or installation problem",
        ],
      },
    },
    cost: {
      heading: "What affects the cost of restretching",
      intro: "Restretching is priced by the room or area. These are the things that change the number.",
      factors: [
        {
          title: "Number and size of rooms",
          body: "A single bedroom is a short job. A large living area or several rooms take longer.",
        },
        {
          title: "Furniture",
          body: "An empty room is the simplest case. Rooms full of heavy furniture take more time to work around.",
        },
        {
          title: "Room shape",
          body: "Closets, angled walls, bay windows and floor vents all mean more cutting in and trimming.",
        },
        {
          title: "Seams and transitions",
          body: "Stretching across a seam or re-setting several doorway transitions adds care and time.",
        },
        {
          title: "Tack strip condition",
          body: "Old or damaged strip that will not grip has to be replaced for the stretch to hold.",
        },
      ],
    },
    process: {
      heading: "What to expect",
      steps: [
        {
          title: "Describe the rooms",
          body: "Which rooms, roughly how big, and how much furniture is in them. Photos of the ripples help.",
        },
        {
          title: "Get a price",
          body: "You get a quote for the areas involved before anything is scheduled.",
        },
        {
          title: "Clear the small stuff",
          body: "Before the visit, move breakables and small items. What happens with larger furniture is agreed in advance.",
        },
        {
          title: "Restretch",
          body: "The carpet is released, power stretched, re-secured and trimmed. Many rooms are done in a single visit and can be used straight away.",
        },
      ],
    },
    estimate: {
      heading: "What to send for a restretching estimate",
      items: [
        "Which rooms have ripples, and their approximate size",
        "Photos showing where the ripples are",
        "How much furniture is in each room",
        "The age of the carpet, if known",
        "Whether there are also any tears, open seams or pet damage to deal with",
      ],
    },
    limits: {
      heading: "When stretching is not the fix",
      body: [
        "Restretching works on carpet that is loose. It does not help carpet whose backing is breaking down. When the layers of the backing separate, the carpet goes soft and bubbly in a way that stretching cannot correct, and that carpet is generally at the end of its life.",
        "Very old carpet can also become brittle and may not tolerate being stretched again. Matt will check the condition and tell you before starting if he thinks the carpet will not take it.",
      ],
    },
    faqs: [
      {
        q: "Why does carpet get ripples in the first place?",
        a: "Usually because the tension it was installed with has relaxed. Common causes are an installation that was not power stretched, heavy furniture being dragged across it, humidity changes, and pad that is too soft or has broken down.",
      },
      {
        q: "Is restretching cheaper than replacing the carpet?",
        a: "Considerably. If the carpet itself is still in good condition, restretching deals with the ripples for a small fraction of what new carpet and installation would cost.",
      },
      {
        q: "Will the ripples come back?",
        a: "A proper power stretch onto sound tack strip should hold. If ripples return quickly, it usually points to an underlying issue such as failing backing or worn-out pad.",
      },
      {
        q: "Do I need to empty the room?",
        a: "The carpet needs to be clear where it is being stretched. Move small items and breakables yourself, and talk to Matt about larger furniture when you book so it is planned for.",
      },
      {
        q: "Can you fix a tear or pet damage at the same visit?",
        a: "Yes. Restretching and repairs are often done together, and it is more economical to handle both in one trip.",
      },
      {
        q: "How long does carpet restretching take?",
        a: "It depends on the number of rooms and how much furniture is involved. A single room is typically a short visit. You will get a realistic timeframe with your quote.",
      },
    ],
    related: ["carpet-repair", "pet-damage-carpet-repair", "flooring-installation", "handyman-services"],
  },
];
