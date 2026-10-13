import type { Service } from "./types";

export const flooringServices: Service[] = [
  {
    slug: "flooring-installation",
    name: "Flooring Installation",
    navLabel: "Flooring Installation",
    group: "flooring",
    tier: "primary",
    confirmed: true,
    confirmNote:
      "Service confirmed. Still needed: which materials Matt installs (LVP, laminate, hardwood, tile, carpet, sheet vinyl) and whether he supplies material or installs customer-supplied only.",
    published: true,
    image: "flooringInstallation",
    secondaryImage: "flooringRoom",
    seo: {
      title: "Flooring Installation in Spokane, WA | TrueCraft Home Repair",
      description:
        "Flooring installation for Spokane-area homes and businesses. A clear scope, an honest quote and an installer who shows up when he says he will.",
    },
    eyebrow: "Flooring installation · Spokane area",
    h1: "Flooring installation that starts with a straight answer",
    lede: "New floors change how a whole room feels. Matt installs flooring in homes and commercial spaces around Spokane, and he will tell you plainly what the job involves before any of it starts.",
    blurb:
      "New floors for a room, a level or a whole house. Residential and commercial, with the prep work explained up front.",
    ctaLabel: "Request a Flooring Estimate",
    intro: [
      "Most flooring jobs go wrong before the first plank goes down. The subfloor was never checked, the doorways were never measured, or nobody mentioned that the old floor had to come out first. A good installation is mostly preparation, and the part you see at the end only looks right when the part underneath was done properly.",
      "TrueCraft handles flooring installation for homeowners, landlords and business owners across the Spokane area. You get one person who measures the space, explains the options that suit it, gives you a quote you can understand, and then turns up on the day he said he would.",
    ],
    problems: {
      heading: "When it is time for new flooring",
      items: [
        {
          title: "The floor is worn out or dated",
          body: "Traffic lanes, scratches that will not buff out, a pattern from another decade. If the floor is the first thing you notice when you walk in, it is usually the upgrade that changes the room the most.",
        },
        {
          title: "You are replacing carpet with a hard surface",
          body: "A common project in living rooms, hallways and rentals. What sits under the carpet decides how much prep the new floor needs, so it gets looked at before you get a number.",
        },
        {
          title: "A repair or leak damaged part of the floor",
          body: "Sometimes a section can be replaced. Sometimes the material is discontinued and the honest answer is a new floor for that room. Matt will tell you which one you are looking at.",
        },
        {
          title: "You are getting a property ready",
          body: "Selling, renting or moving in. Flooring is one of the few updates that buyers and tenants notice in the first ten seconds, and it is easier to do while the rooms are empty.",
        },
      ],
    },
    scope: {
      heading: "What a flooring installation involves",
      intro:
        "Every project is a little different, but these are the pieces that usually make up the job. Your quote will say which ones apply to yours.",
      items: [
        "Measuring the rooms, including closets, doorways and transitions to other floors",
        "Removing and hauling off the existing flooring, when that is part of the scope",
        "Checking the subfloor for damage, squeaks, high spots and moisture concerns",
        "Subfloor prep so the new floor sits flat and stays quiet",
        "Underlayment where the material calls for it",
        "Installing the new floor to the manufacturer's layout and expansion requirements",
        "Transitions at doorways and where the new floor meets tile, carpet or stairs",
        "Baseboard or quarter-round work to finish the edges cleanly",
      ],
    },
    cost: {
      heading: "What affects the cost of a flooring project",
      intro:
        "Flooring is priced by the job, because two rooms with the same square footage can be very different amounts of work. These are the things that move the number.",
      factors: [
        {
          title: "Size and layout",
          body: "Total square footage matters, but so does shape. An open rectangle goes faster than a hallway with five doorways, a closet and a stair landing.",
        },
        {
          title: "The material",
          body: "Different floors install differently. A floating plank floor, a glue-down product and a nail-down hardwood are three different jobs with three different amounts of labor.",
        },
        {
          title: "What has to come out",
          body: "Pulling carpet and pad is quick. Removing glued-down flooring or several old layers takes real time and is priced accordingly.",
        },
        {
          title: "Subfloor condition",
          body: "A flat, dry subfloor is the best case. Leveling, patching or replacing damaged sections adds to the job, and it is far cheaper to do it now than to live with a floor that moves.",
        },
        {
          title: "Trim, stairs and transitions",
          body: "Baseboards, stair treads and the details where floors meet take care and time. They are also the parts people notice most.",
        },
      ],
    },
    process: {
      heading: "How a flooring job runs",
      steps: [
        {
          title: "Tell Matt about the space",
          body: "Call, or send the form with the rooms involved and a few photos. Rough sizes are fine at this stage.",
        },
        {
          title: "Measure and look underneath",
          body: "Matt measures the rooms and checks what he can of the subfloor and existing flooring, then talks through the options that fit the space and how you use it.",
        },
        {
          title: "Get a clear quote",
          body: "You get a written scope: what is being removed, what prep is included, what is being installed and how the edges get finished. If the budget is tight, say so. There is often more than one way to approach a project.",
        },
        {
          title: "Installation",
          body: "Work starts on the agreed day. Furniture, appliances and access get sorted out beforehand so there are no surprises that morning.",
        },
        {
          title: "Walk it together",
          body: "When the floor is down, you walk it with Matt. Anything that is not right gets dealt with before the job is called finished.",
        },
      ],
    },
    estimate: {
      heading: "What helps Matt give you an accurate estimate",
      items: [
        "Which rooms, and rough dimensions if you have them",
        "What is on the floor now, and whether it needs to be removed",
        "The type of flooring you want, or that you would like help deciding",
        "Whether you already have the material or need it sourced",
        "Photos of each room, including doorways and any problem spots",
        "Your timing, especially if a move-in, listing or tenant date is involved",
      ],
    },
    limits: {
      heading: "Good to know before you start",
      body: [
        "Some problems only show up once the old floor is lifted: a soft spot, old water damage, a subfloor that was patched badly years ago. When that happens, Matt stops, shows you what he found and prices the fix before going further. Nothing gets buried under a new floor.",
        "Many flooring products need to sit in the home for a period before installation so they adjust to the temperature and humidity. That can affect scheduling, so it is worth planning for when you order material.",
      ],
    },
    faqs: [
      {
        q: "Do you install flooring that I buy myself?",
        a: "Ask when you call. Many customers already have material picked out or delivered, and it helps to know the exact product so the quote reflects how that floor installs.",
      },
      {
        q: "Do I need to move my furniture first?",
        a: "Talk it through when the job is scheduled. Small items and breakables should always be moved by you. What happens with larger furniture and appliances gets agreed before the start date so nobody is guessing that morning.",
      },
      {
        q: "How long does a flooring installation take?",
        a: "It depends on the size of the area, the material and how much prep the subfloor needs. A single room is a very different schedule from a whole level. You will get a realistic timeframe with your quote, not a guess.",
      },
      {
        q: "Can you put new flooring over my old floor?",
        a: "Sometimes. It depends on what the existing floor is, how flat and solid it is, and what the new product allows. Going over the top can save time, but it can also raise floor height at doorways and hide problems, so it gets decided room by room.",
      },
      {
        q: "Do you do commercial flooring too?",
        a: "Yes. Matt has installed flooring in commercial settings as well as homes. See the commercial flooring page for how those projects are scheduled around a working business.",
      },
      {
        q: "What if my budget is tight?",
        a: "Say so up front. There is often room to adjust the approach: doing the project in phases, changing the material, or handling some of the prep yourself. Not every job can be made to fit every budget, but it is always worth the conversation.",
      },
    ],
    related: ["vinyl-plank-and-laminate-flooring", "commercial-flooring", "trim-and-baseboards", "carpet-repair"],
  },

  {
    slug: "vinyl-plank-and-laminate-flooring",
    name: "Vinyl Plank & Laminate Flooring Installation",
    navLabel: "Vinyl Plank & Laminate",
    group: "flooring",
    tier: "secondary",
    confirmed: false,
    confirmNote:
      "Matt confirmed flooring installation generally. Confirm he installs LVP/vinyl plank and laminate specifically before launch.",
    published: true,
    image: "lvpLaminate",
    secondaryImage: "plankTexture",
    seo: {
      title: "LVP & Laminate Flooring Installation in Spokane | TrueCraft",
      description:
        "Vinyl plank (LVP) and laminate flooring installation in the Spokane area. Proper subfloor prep, clean transitions and an honest quote before work starts.",
    },
    eyebrow: "LVP & laminate · Spokane area",
    h1: "Vinyl plank and laminate flooring, installed properly",
    lede: "Plank flooring looks simple to install, and that is exactly why so much of it ends up with gaps, soft spots and lifted edges. The difference is in the prep.",
    blurb:
      "Click-together plank floors for kitchens, living areas, basements and rentals, with the subfloor prep that makes them last.",
    ctaLabel: "Request a Flooring Estimate",
    intro: [
      "Luxury vinyl plank and laminate are the floors most Spokane homeowners ask about, for good reason. They look like wood, handle daily life well, and cost less than hardwood. They are also less forgiving than they appear: a floating floor follows whatever is underneath it, so a subfloor that is slightly out will show up as flex, noise or separating joints within a season.",
      "TrueCraft installs plank flooring with the unglamorous steps done first. The floor is checked for flat, the layout is planned so you do not end up with a sliver of plank along one wall, and the expansion gaps the manufacturer requires are actually left in place.",
    ],
    problems: {
      heading: "Where plank flooring makes sense",
      items: [
        {
          title: "Replacing tired carpet",
          body: "A hard surface in living rooms and hallways is easier to keep clean and holds up better to pets and kids.",
        },
        {
          title: "Kitchens, entries and laundry rooms",
          body: "Water-resistant vinyl plank is a popular choice where spills happen. How water-tolerant a floor is depends on the specific product, so check the manufacturer's rating for the room you have in mind.",
        },
        {
          title: "Finished basements",
          body: "Below-grade floors bring moisture questions. The slab gets looked at before any product is recommended for it.",
        },
        {
          title: "Rental turnovers",
          body: "Durable, consistent and quick to install between tenants. One product across several units also makes future repairs simpler.",
        },
      ],
    },
    scope: {
      heading: "What is included in a plank flooring install",
      items: [
        "Removal of existing carpet, pad and tack strip, or other flooring where agreed",
        "Checking the subfloor for flatness against the product's tolerance",
        "Patching or leveling low and high spots before anything is laid",
        "Underlayment or moisture barrier where the product requires one",
        "A planned layout with balanced cuts at the walls and staggered joints",
        "Undercutting door jambs so planks slide beneath instead of being notched around them",
        "Transition strips at doorways and where the floor meets other surfaces",
        "Reinstalling or replacing baseboard and quarter-round",
      ],
    },
    cost: {
      heading: "What changes the price of an LVP or laminate job",
      intro:
        "Material cost varies widely by product. On the labor side, these are the things that make one job more involved than another.",
      factors: [
        {
          title: "How flat the subfloor is",
          body: "This is the big one. A subfloor within tolerance means the install moves quickly. One that needs leveling is extra work that cannot be skipped without consequences.",
        },
        {
          title: "Tear-out",
          body: "Carpet comes up fast. Glued sheet vinyl, old tile or multiple layers take much longer.",
        },
        {
          title: "Number of doorways and cuts",
          body: "Hallways, closets, islands and angled walls mean more cutting and more transitions than an open room.",
        },
        {
          title: "Stairs",
          body: "Stairs are slow, detailed work with their own trim pieces, and are always quoted separately from flat floor area.",
        },
        {
          title: "Baseboards",
          body: "Reusing existing baseboard, adding quarter-round, or installing new trim are three different amounts of work and finish.",
        },
      ],
    },
    process: {
      heading: "From first call to finished floor",
      steps: [
        {
          title: "Share the rooms and the product",
          body: "Send the rooms involved, what is there now, and the plank you are considering if you have one in mind.",
        },
        {
          title: "Measure and check the subfloor",
          body: "Matt measures, checks flatness where he can and flags anything likely to need attention once the old floor is up.",
        },
        {
          title: "Agree the scope",
          body: "The quote spells out tear-out, prep, installation, transitions and trim so you know what is and is not included.",
        },
        {
          title: "Install",
          body: "Material is given time to acclimate if the manufacturer calls for it, then the floor goes down on the agreed dates.",
        },
      ],
    },
    estimate: {
      heading: "What to send for a plank flooring estimate",
      items: [
        "Room list and approximate square footage",
        "Current flooring in each room",
        "The product name or a link, if you have chosen one",
        "Whether it is on a slab, over a crawlspace or upstairs",
        "Whether stairs are included",
        "Photos of the rooms and any soft, squeaky or uneven areas",
      ],
    },
    limits: {
      heading: "Honest limits of plank flooring",
      body: [
        "Water-resistant does not mean flood-proof. Standing water that gets underneath a floating floor can still cause problems, and laminate in particular does not tolerate being wet for long. If a room has a history of leaks or damp, that needs solving first.",
        "Floating floors should not be pinned down by heavy fixed items such as kitchen islands or built-in cabinets installed on top of them, because the floor needs room to move. Layout and sequencing get worked out before the job starts.",
      ],
    },
    faqs: [
      {
        q: "What is the difference between LVP and laminate?",
        a: "Both are plank floors that click together and float over the subfloor. Vinyl plank is a plastic-based product and generally handles moisture better. Laminate has a wood-fiber core with a printed surface and is often harder to scratch but less tolerant of water. The right one depends on the room and how it gets used.",
      },
      {
        q: "Can vinyl plank go over my existing floor?",
        a: "Often it can go over a single layer of well-bonded sheet vinyl or tile, if the surface is flat and the product allows it. It should not go over carpet. Each product has its own rules, and floor height at doorways and appliances has to be considered.",
      },
      {
        q: "Why does my current plank floor have gaps or bounce?",
        a: "Usually one of three things: the subfloor was not flat, no expansion gap was left at the walls, or the planks were not given time to adjust to the house. Sometimes it can be corrected, sometimes a section needs to be relaid. Photos help Matt tell you which.",
      },
      {
        q: "Do I have to replace my baseboards?",
        a: "Not always. Baseboards can sometimes be removed and reinstalled, or left in place with quarter-round added to cover the expansion gap. New baseboard gives the cleanest result. You will see the options and the price difference in your quote.",
      },
      {
        q: "Do you install flooring in rentals and between tenants?",
        a: "Yes. If you manage property, tell Matt the vacancy window you are working with so the job can be planned around it.",
      },
    ],
    related: ["flooring-installation", "trim-and-baseboards", "commercial-flooring", "door-installation-and-repair"],
  },

  {
    slug: "commercial-flooring",
    name: "Commercial Flooring Installation",
    navLabel: "Commercial Flooring",
    group: "flooring",
    tier: "primary",
    confirmed: true,
    confirmNote:
      "Matt has commercial flooring experience. Still needed: the types of commercial jobs he takes (offices, retail, multi-family common areas), size limits, and whether he works after hours.",
    published: true,
    image: "commercialFlooring",
    secondaryImage: "commercialOffice",
    seo: {
      title: "Commercial Flooring Installation in Spokane | TrueCraft",
      description:
        "Commercial flooring installation for Spokane offices, shops and rental properties. Work planned around your business hours, with one accountable installer.",
    },
    eyebrow: "Commercial flooring · Spokane area",
    h1: "Commercial flooring, planned around your business",
    lede: "A floor that needs replacing should not cost you a week of closed doors. Matt has installed flooring in commercial spaces as well as homes, and the job gets scheduled around how your business actually runs.",
    blurb:
      "Flooring for offices, shops and rental properties, scheduled to keep disruption to your business as low as possible.",
    ctaLabel: "Talk About a Commercial Project",
    intro: [
      "Commercial flooring is a different kind of project from a living room. The floor takes more traffic, the space usually needs to stay open, and the person signing off is often not the person who is there every day. What matters most is clear communication and a schedule everyone can rely on.",
      "TrueCraft is a good fit for small and mid-sized commercial projects where you want to deal directly with the person doing the work: an office suite, a retail floor, a professional practice, common areas in a small apartment building. If a project is larger than one installer should take on, Matt will tell you that rather than stretch.",
    ],
    problems: {
      heading: "Common commercial flooring projects",
      items: [
        {
          title: "Office refresh",
          body: "Replacing worn carpet or dated flooring in suites, conference rooms and reception areas, often one section at a time so staff can keep working.",
        },
        {
          title: "Retail and customer-facing floors",
          body: "The floor is part of the first impression. It also needs to stand up to carts, foot traffic and regular cleaning.",
        },
        {
          title: "Tenant improvements",
          body: "Getting a space ready for a new tenant, or updating a unit between leases, on a date that is already fixed.",
        },
        {
          title: "Multi-unit residential",
          body: "Hallways, entries, laundry rooms and unit turnovers for landlords and small property managers.",
        },
      ],
    },
    scope: {
      heading: "What a commercial flooring job covers",
      items: [
        "A site visit to measure, check the substrate and understand access and hours",
        "Removal and disposal of existing flooring where it is part of the scope",
        "Substrate prep suited to the product being installed",
        "Installation in phases if the space has to stay in use",
        "Transitions, thresholds and base to finish the edges",
        "Coordination with a property manager, tenant or other trades on timing",
        "Clean-up so the space is ready to use when work stops",
      ],
    },
    cost: {
      heading: "What drives commercial flooring cost",
      intro:
        "Commercial jobs are quoted after a site visit. These are the factors that shape the number.",
      factors: [
        {
          title: "Working hours",
          body: "A job that can run during the day is simpler than one that must happen in evenings or over a weekend to keep you open.",
        },
        {
          title: "Phasing",
          body: "Doing a space in sections, moving furniture and equipment as you go, takes longer than one clear run at an empty room.",
        },
        {
          title: "Existing floor and substrate",
          body: "Glued-down commercial carpet and old adhesive are slow to remove, and the slab underneath may need work before a new floor can go on it.",
        },
        {
          title: "Product",
          body: "Commercial-rated materials vary in cost and in how they are installed. The traffic the floor will see should drive that choice more than price alone.",
        },
        {
          title: "Furniture and fixtures",
          body: "Desks, shelving, counters and equipment all need a plan. Who moves what gets agreed in the quote.",
        },
      ],
    },
    process: {
      heading: "How a commercial project is handled",
      steps: [
        {
          title: "Initial conversation",
          body: "What the space is, how it is used, what the deadline is and when work can realistically happen.",
        },
        {
          title: "Site visit",
          body: "Measurements, a look at the existing floor and substrate, and a walk through access, parking, elevators and anything else that affects the work.",
        },
        {
          title: "Written scope and schedule",
          body: "A quote that sets out the phases, the hours, what is included and who is responsible for moving furniture and equipment.",
        },
        {
          title: "Installation",
          body: "Work proceeds in the agreed sequence. If something unexpected turns up under the old floor, you hear about it straight away with options.",
        },
        {
          title: "Handover",
          body: "A walkthrough with whoever needs to sign off, with the space left clean and usable.",
        },
      ],
    },
    estimate: {
      heading: "Useful details for a commercial estimate",
      items: [
        "The type of business and how the space is used",
        "Approximate square footage and a floor plan if one exists",
        "What flooring is there now",
        "The hours work can take place",
        "Any fixed deadline, such as an opening or move-in date",
        "Who the decision-maker and the on-site contact are",
      ],
    },
    limits: {
      heading: "Where TrueCraft fits, and where it does not",
      body: [
        "TrueCraft is not a large commercial flooring contractor with crews and a warehouse. That is the point: you deal with the person doing the work, the schedule is straightforward and nothing gets lost between a salesperson and an installer. For very large floor areas or projects with tight multi-trade construction schedules, a bigger outfit may serve you better, and Matt will say so.",
        "Some commercial projects have requirements around insurance certificates, building rules or specified products. Raise these early so the quote reflects them.",
      ],
    },
    faqs: [
      {
        q: "Can you work outside business hours?",
        a: "Tell Matt what your hours are and what would cause the least disruption. Scheduling is worked out per project and is part of the quote.",
      },
      {
        q: "Do we have to close while the floor is being done?",
        a: "Not necessarily. Many spaces can be done in sections so part of the business stays open. It depends on the layout, the product and how much furniture has to move.",
      },
      {
        q: "What size of commercial job do you take on?",
        a: "Small and mid-sized spaces are the best fit: offices, shops, professional suites and common areas in smaller residential buildings. Describe the project and Matt will tell you honestly whether it suits him.",
      },
      {
        q: "Can you work with our property manager or landlord?",
        a: "Yes. If there are building rules, approved hours or sign-off requirements, share them at the start so they are built into the plan.",
      },
      {
        q: "Do you handle flooring for rental units between tenants?",
        a: "Yes. See the page for landlords and property managers for how turnover work is approached.",
      },
    ],
    related: ["flooring-installation", "vinyl-plank-and-laminate-flooring", "carpet-restretching", "carpet-repair"],
  },
];
