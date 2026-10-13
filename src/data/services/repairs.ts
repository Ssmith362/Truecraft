import type { Service } from "./types";

/**
 * Home-repair services.
 *
 * Trim, doors/window coverings, light fixtures and siding come from the
 * homepage concept Matt approved. The rest are standard handyman work added
 * for search coverage on the basis that Matt is a generalist. Every entry is
 * `confirmed: false` until he signs off on the list. See LAUNCH-CHECKLIST.md.
 */
export const repairServices: Service[] = [
  {
    slug: "handyman-services",
    name: "Handyman Services",
    navLabel: "Handyman Services",
    group: "repairs",
    tier: "secondary",
    confirmed: false,
    confirmNote:
      "Confirm Matt is comfortable with the word 'handyman' and with the example task list (TV mounting, shelving, caulking, hardware, weatherstripping).",
    published: true,
    image: "fenceDeck",
    secondaryImage: "tapeMeasure",
    seo: {
      title: "Handyman Services in Spokane, WA | TrueCraft Home Repair",
      description:
        "A reliable Spokane handyman for the list that never gets shorter: doors, trim, drywall, fixtures, repairs and installs. Shows up on time, quotes honestly.",
    },
    eyebrow: "Handyman services · Spokane area",
    h1: "The home repair list you keep meaning to get to, handled",
    lede: "The door that sticks. The baseboard the dog chewed. The hole behind the door handle. None of them is an emergency, which is exactly why they have been on the list for a year.",
    blurb:
      "One visit for the small repairs and installs that pile up. Bring the whole list.",
    ctaLabel: "Send Your Repair List",
    intro: [
      "Small jobs are hard to get done. Bigger contractors are not interested in an afternoon's work, and it is not always clear who to call for a mixed list of fixes. So the list grows, and the house slowly starts to feel like a set of things that need attention.",
      "This is the work TrueCraft is built for. Put everything on one list, and Matt will tell you what he can take care of, what it will cost and how long it will take. Getting several small things done in a single visit is nearly always better value than calling someone out for each one.",
    ],
    problems: {
      heading: "The kind of jobs people call about",
      intro: "If yours is not listed, ask. This is a sample, not a limit.",
      items: [
        {
          title: "Doors and hardware",
          body: "Doors that stick, sag or will not latch. New interior doors, handles, hinges, closers and weatherstripping.",
        },
        {
          title: "Walls and trim",
          body: "Drywall holes and cracks, damaged baseboard, loose casing, caulking that has pulled away, paint touch-ups.",
        },
        {
          title: "Floors",
          body: "Loose transitions, squeaks, a damaged plank, carpet that has come up at a doorway.",
        },
        {
          title: "Installs and mounting",
          body: "Blinds and curtain hardware, shelving, TV mounts, mirrors, towel bars, closet systems.",
        },
        {
          title: "Outside the house",
          body: "A loose fence board, a soft deck plank, a piece of siding that has come away, a gate that drags.",
        },
        {
          title: "Getting a place ready",
          body: "The punch list before a sale, after an inspection, or between tenants.",
        },
      ],
    },
    scope: {
      heading: "How a handyman visit is put together",
      items: [
        "You send the full list, with photos where they help",
        "Matt sorts it into what he can do, what he would need to see first and anything better suited to a specialist",
        "You get a quote for the list, not a vague hourly guess",
        "Materials are agreed in advance: what you are supplying and what he is picking up",
        "The work is done in as few visits as the list allows",
        "The work area is cleaned up before he leaves",
      ],
    },
    cost: {
      heading: "What affects the cost",
      intro:
        "A mixed list is priced on the time and materials it realistically takes. These make the biggest difference.",
      factors: [
        {
          title: "How much is on the list",
          body: "More jobs in one trip means travel and setup are shared across all of them.",
        },
        {
          title: "Materials",
          body: "A door, a length of trim or a fixture you have already bought costs nothing extra. Items that need sourcing are added at cost.",
        },
        {
          title: "Access and height",
          body: "Work on a ladder, in a crawlspace or behind built-in furniture takes longer than work at bench height.",
        },
        {
          title: "What is found once things are opened up",
          body: "A simple repair occasionally reveals something more. When it does, you hear about it before any extra work happens.",
        },
      ],
    },
    process: {
      heading: "Getting your list done",
      steps: [
        { title: "Write it all down", body: "Every job, big or small. A photo of each is worth more than a paragraph." },
        { title: "Get a quote", body: "Matt comes back with what he can do and a price for it." },
        { title: "Pick a day", body: "You agree a time, and he arrives when he said he would." },
        { title: "Cross it off", body: "The jobs get done, the mess gets cleaned up and the list is finally shorter." },
      ],
    },
    estimate: {
      heading: "What to put in your message",
      items: [
        "Each job on its own line",
        "A photo of anything that is hard to describe",
        "Which materials or fixtures you already have",
        "Your ZIP code",
        "Any deadline, such as an inspection, a listing date or guests arriving",
      ],
    },
    limits: {
      heading: "What is outside the list",
      body: [
        "Some work is properly left to licensed or specialist trades. In Washington that includes electrical and plumbing work and gas appliances, and it generally makes sense for roofing and anything structural as well. If something on your list falls into that category, Matt will tell you and you can keep the rest of the list moving.",
        "TrueCraft focuses on repairs and installations rather than full remodels. If your project is bigger than a repair list, describe it and Matt will tell you honestly whether it is a fit.",
      ],
    },
    faqs: [
      {
        q: "Is there a minimum job size?",
        a: "Ask when you get in touch. Very small single jobs are usually best combined with a couple of other things on your list so the visit is worth it for you.",
      },
      {
        q: "Do you charge by the hour or by the job?",
        a: "You get a quote for the work described, so you know the number before anything starts. If the scope changes once work is under way, that is discussed first.",
      },
      {
        q: "Can I supply my own materials?",
        a: "Yes. If you have already bought the door, the blinds or the fixture, say so and the quote will cover labor only.",
      },
      {
        q: "What areas do you cover?",
        a: "Spokane and the surrounding area. Send your ZIP code and Matt will confirm.",
      },
      {
        q: "My budget is limited. Can you work with that?",
        a: "Tell Matt what you have to work with. He can often suggest which jobs to do first or a simpler way to approach one. It will not suit every project, but he would rather have the conversation than lose the job over a number nobody discussed.",
      },
    ],
    related: ["drywall-repair", "door-installation-and-repair", "trim-and-baseboards", "carpet-repair"],
  },

  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    navLabel: "Drywall Repair",
    group: "repairs",
    tier: "secondary",
    confirmed: false,
    confirmNote: "Not in the approved concept. Confirm Matt offers drywall patching and texture matching.",
    published: true,
    image: "drywall",
    seo: {
      title: "Drywall Repair in Spokane, WA | Holes, Cracks & Patches",
      description:
        "Drywall repair in the Spokane area: door-handle holes, cracks, dents and patches blended to match your wall texture, ready for paint.",
    },
    eyebrow: "Drywall repair · Spokane area",
    h1: "Drywall repair that disappears into the wall",
    lede: "Anyone can fill a hole. The skill is in making the patch vanish, with the surface flat and the texture matched so that once it is painted you cannot find it.",
    blurb: "Holes, cracks, dents and old patches that still show, repaired and textured to match.",
    ctaLabel: "Get a Drywall Repair Quote",
    intro: [
      "Walls take a beating. A door swings open without a stop, a couch gets moved carelessly, an old TV mount comes down and leaves four anchors and a crater. Each one is small, and each one makes a room look tired.",
      "TrueCraft repairs damaged drywall and blends the finish into the surrounding wall. That matters most in Spokane-area homes with orange peel or knockdown texture, where a smooth patch on a textured wall stands out as badly as the hole did.",
    ],
    problems: {
      heading: "Drywall damage worth fixing properly",
      items: [
        { title: "Door-handle holes", body: "The round punch behind a door with no stop. Easy to fix, and worth adding a door stop while it is being done." },
        { title: "Anchor and mount damage", body: "Torn paper and oversized holes left when shelves, TVs or cabinets come off the wall." },
        { title: "Cracks", body: "Hairline cracks at corners and above doors are common as houses settle. Cracks that keep reopening or keep widening should be looked at more closely." },
        { title: "Dents and gouges", body: "Furniture scrapes and impact marks, especially in hallways and stairwells." },
        { title: "Old patches that still show", body: "A previous repair that was never sanded flat or never textured can be reworked so it blends." },
        { title: "Small water-damaged sections", body: "Once the leak itself has been fixed and the area is dry, stained or softened drywall can be cut out and replaced." },
      ],
    },
    scope: {
      heading: "What a drywall repair includes",
      items: [
        "Cutting back to solid material around the damage",
        "Backing and a new piece of drywall for anything larger than a small hole",
        "Taping and several thin coats of joint compound, feathered well beyond the patch",
        "Sanding flat between coats",
        "Matching the existing wall texture",
        "Priming the repair so it does not flash through the paint",
        "Painting the repaired area or wall if you want it finished in one visit",
      ],
    },
    cost: {
      heading: "What affects the price",
      intro: "Drywall repair is mostly time, and much of that time is waiting for coats to dry.",
      factors: [
        { title: "Number and size of repairs", body: "Several small repairs in one visit are far more economical than one at a time." },
        { title: "Texture", body: "A smooth wall and a heavily textured wall take different amounts of effort to match." },
        { title: "Ceilings and height", body: "Overhead work and anything on a stairwell wall takes longer." },
        { title: "Paint", body: "Priming only is quickest. Painting a full wall corner to corner gives the most invisible result and adds time." },
      ],
    },
    process: {
      heading: "How it goes",
      steps: [
        { title: "Send photos", body: "A close-up and a wider shot showing the wall texture." },
        { title: "Quote", body: "You get a price that states whether paint is included." },
        { title: "Repair", body: "Compound needs time to dry between coats, so some repairs take more than one visit. You will be told up front." },
      ],
    },
    estimate: {
      heading: "Details that help",
      items: [
        "Photos of each damaged area",
        "A close-up of the wall texture nearby",
        "Whether it is a wall or a ceiling",
        "Whether you have leftover paint or know the color",
        "What caused the damage, especially if water was involved",
      ],
    },
    limits: {
      heading: "A note on paint matching",
      body: [
        "Paint ages on the wall. Even the original can of paint may not match a wall that has had a few years of sunlight, so a touched-up patch can show as a slightly different sheen or shade. The most reliable way to hide a repair completely is to repaint the whole wall from corner to corner.",
        "Wet or moldy drywall is a symptom. The source of the moisture has to be found and fixed before a repair is worth doing.",
      ],
    },
    faqs: [
      { q: "Can you match my wall texture?", a: "Common textures such as orange peel and knockdown can be matched closely. A photo of the wall lets Matt tell you what to expect." },
      { q: "Do you paint the repair too?", a: "That is your choice. The repair can be left primed for you to paint, or painted as part of the job." },
      { q: "How big a hole can be patched?", a: "Anything from a nail pop to a full section of a sheet. Larger areas are cut out and replaced with new drywall rather than filled." },
      { q: "Why do my cracks keep coming back?", a: "Seasonal movement can reopen a crack that was only filled. Taping the joint properly gives a longer-lasting repair. Cracks that keep growing may point to something structural and should be assessed by the right professional." },
    ],
    related: ["interior-painting", "trim-and-baseboards", "door-installation-and-repair", "handyman-services"],
  },

  {
    slug: "trim-and-baseboards",
    name: "Trim & Baseboard Installation",
    navLabel: "Trim & Baseboards",
    group: "repairs",
    tier: "secondary",
    confirmed: false,
    confirmNote: "Shown in the approved concept. Confirm scope: baseboard, door/window casing, crown, quarter-round.",
    published: true,
    image: "trimBaseboards",
    secondaryImage: "emptyRoom",
    seo: {
      title: "Trim & Baseboard Installation in Spokane | TrueCraft",
      description:
        "Baseboard, door casing and trim installation and repair in the Spokane area. Tight joints, clean caulk lines and a finished look after new flooring.",
    },
    eyebrow: "Trim & baseboards · Spokane area",
    h1: "Trim and baseboards that finish the room",
    lede: "Trim is the last thing installed and the first thing your eye lands on. Tight corners and clean lines are what make a room look finished rather than nearly finished.",
    blurb: "New baseboard after flooring, replacement of damaged trim and door casing, with joints that stay tight.",
    ctaLabel: "Get a Trim Estimate",
    intro: [
      "Baseboards and casing do a simple job: they cover the gap where one surface meets another. Done well, nobody notices them. Done badly, with open mitres and gaps you could post a letter through, they are all anybody notices.",
      "TrueCraft installs and repairs trim on its own or as the finishing step of a flooring job. Because Matt also installs the floors, the baseboard height, the expansion gap and the transitions are all planned together rather than handed from one trade to the next.",
    ],
    problems: {
      heading: "Common trim projects",
      items: [
        { title: "New baseboard after new flooring", body: "A change in floor height often means existing baseboard no longer sits right. New trim gives the cleanest finish." },
        { title: "Chewed, water-damaged or dented baseboard", body: "Damaged sections can be replaced and matched to the profile already in the house." },
        { title: "Upgrading builder-grade trim", body: "Swapping thin, plain baseboard for a taller profile changes the character of a room more than most people expect." },
        { title: "Door and window casing", body: "Replacing cracked or mismatched casing, or trimming out a newly installed door." },
        { title: "Gaps and separated joints", body: "Seasonal movement opens up mitres and caulk lines. These can be re-fixed, re-caulked and touched up." },
      ],
    },
    scope: {
      heading: "What trim work includes",
      items: [
        "Measuring and a material takeoff so the right amount is ordered",
        "Removing old trim carefully to limit wall damage",
        "Cutting coped or mitred inside corners and clean outside corners",
        "Scribing to floors and walls that are not perfectly straight",
        "Fastening into studs and plates so the trim stays put",
        "Filling nail holes and caulking the top edge",
        "Painting or leaving primed, as agreed",
      ],
    },
    cost: {
      heading: "What affects the cost",
      intro: "Trim is usually priced by the amount of material to be installed and how fiddly the room is.",
      factors: [
        { title: "Linear footage", body: "The total run of baseboard or casing is the starting point." },
        { title: "Profile and material", body: "Simple primed profiles go up quickly. Stain-grade wood and tall or built-up profiles take more care." },
        { title: "Corners and obstacles", body: "A room with many corners, door openings and built-ins has far more cuts than a plain rectangle." },
        { title: "Finish", body: "Pre-finished trim, primed and ready for you to paint, or fully painted in place are three different scopes." },
        { title: "Removal", body: "Taking off old trim and repairing the wall behind it adds time." },
      ],
    },
    process: {
      heading: "From measure to finish",
      steps: [
        { title: "Describe the rooms", body: "Which rooms, and whether you want to match existing trim or change the style." },
        { title: "Measure and quote", body: "Matt measures, confirms the profile and gives you a price including or excluding paint." },
        { title: "Install", body: "Trim is cut and fitted on site, then filled, caulked and finished." },
      ],
    },
    estimate: {
      heading: "What to send",
      items: [
        "The rooms involved and rough wall lengths",
        "A photo of your existing trim profile if you want it matched",
        "Whether the trim will be painted or stained",
        "Whether new flooring is going in at the same time",
        "Whether you have the material or need it supplied",
      ],
    },
    limits: {
      heading: "Worth knowing",
      body: [
        "Older homes sometimes have trim profiles that are no longer sold. A close match is usually available, and when it is not, the usual approach is to replace the trim in the whole room so everything is consistent.",
        "Wood and MDF trim both move with the seasons. Small hairline gaps at joints can reappear in dry winter air and are normal. Flexible caulk and proper fastening keep them to a minimum.",
      ],
    },
    faqs: [
      { q: "Should baseboards be replaced when I get new floors?", a: "Not always, but it is the best time to do it. New flooring often changes the floor height, and new baseboard gives a much cleaner result than adding quarter-round to old trim." },
      { q: "Can you match the trim I already have?", a: "Usually. Send a photo of the profile with a tape measure against it and Matt can tell you whether a match is available." },
      { q: "Do you paint the trim?", a: "Trim can be supplied primed for you to paint, or filled, caulked and painted as part of the job. The quote will show both if you want to compare." },
      { q: "Can you just replace one damaged section?", a: "Yes, if the profile can be matched. This is a common fix after pet damage or a leak." },
    ],
    related: ["flooring-installation", "door-installation-and-repair", "drywall-repair", "interior-painting"],
  },

  {
    slug: "door-installation-and-repair",
    name: "Door Installation & Repair",
    navLabel: "Doors",
    group: "repairs",
    tier: "secondary",
    confirmed: false,
    confirmNote: "'Doors' appears in the approved concept. Confirm interior vs exterior doors and whether Matt installs storm/screen doors.",
    published: true,
    image: "doors",
    secondaryImage: "doubleDoors",
    seo: {
      title: "Door Installation & Repair in Spokane, WA | TrueCraft",
      description:
        "Interior door installation and door repair in the Spokane area. Sticking, sagging and non-latching doors fixed, new doors hung square and trimmed out.",
    },
    eyebrow: "Doors · Spokane area",
    h1: "Doors that open, close and latch the way they should",
    lede: "A door that sticks or will not stay shut is a small daily annoyance. It is also usually a quick fix once someone who knows where to look takes ten minutes to find the cause.",
    blurb: "Sticking, sagging and non-latching doors adjusted, and new doors hung square and trimmed out.",
    ctaLabel: "Get a Door Estimate",
    intro: [
      "Doors are simple until they are not. A door has to sit square in an opening that probably is not square, with an even gap all the way round, and swing without rubbing the floor or drifting open on its own. When any of that is off, you feel it every time you use it.",
      "TrueCraft repairs doors that have stopped working properly and installs new ones, including the casing, hardware and adjustments that make the job complete.",
    ],
    problems: {
      heading: "Door problems that can be fixed",
      items: [
        { title: "Sticking or rubbing", body: "Often seasonal swelling, loose hinges or a frame that has shifted. The cause decides the fix." },
        { title: "Will not latch", body: "The latch and strike plate have drifted out of alignment. Usually an adjustment rather than a replacement." },
        { title: "Sagging or dragging on the floor", body: "Worn or loose hinges let the door drop. New flooring can also raise the floor enough that the door needs trimming." },
        { title: "Swings open or shut by itself", body: "The frame is out of plumb. Hinge adjustments can usually correct it." },
        { title: "Damaged doors and frames", body: "Hollow-core doors with a hole in them, split jambs and chewed frames." },
        { title: "New or replacement doors", body: "Upgrading old slab doors, adding a door to an opening, or replacing a pre-hung unit." },
      ],
    },
    scope: {
      heading: "What door work can include",
      items: [
        "Diagnosing why the door is not working before changing anything",
        "Hinge tightening, shimming and replacement",
        "Planing or trimming a door to fit, including after new flooring",
        "Adjusting or moving strike plates and latches",
        "Hanging a new slab door in an existing frame",
        "Installing a pre-hung door and setting it plumb and square",
        "Fitting handles, locks, stops and closers",
        "Casing and trim around the opening",
      ],
    },
    cost: {
      heading: "What affects the price",
      intro: "An adjustment and a full replacement are very different jobs.",
      factors: [
        { title: "Repair or replace", body: "Most sticking and latching problems are adjustments. Replacing the door or the whole unit is more involved." },
        { title: "Slab or pre-hung", body: "A slab has to be fitted, mortised for hinges and bored for hardware. A pre-hung unit comes with its own frame but needs the old one removed." },
        { title: "Interior or exterior", body: "Exterior doors add weather sealing, thresholds and security hardware." },
        { title: "Trim and paint", body: "New casing and finishing add time to the job." },
        { title: "How many doors", body: "Several doors in one visit bring the cost per door down." },
      ],
    },
    process: {
      heading: "How it works",
      steps: [
        { title: "Describe the problem", body: "What the door does, and when. A short video is ideal." },
        { title: "Quote", body: "For repairs you get a price for the fix. For new doors, a price for supply and installation or for labor only." },
        { title: "Fix or fit", body: "The door is adjusted or installed, and checked for an even gap, a smooth swing and a clean latch." },
      ],
    },
    estimate: {
      heading: "What to send",
      items: [
        "Photos of the door, the hinges and the latch side",
        "A description of what it does wrong",
        "For new doors, the opening size and whether you have bought the door",
        "Interior or exterior",
        "How many doors in total",
      ],
    },
    limits: {
      heading: "When the door is not the problem",
      body: [
        "Doors that suddenly start sticking all over a house, or frames that have visibly racked, can be a sign of moisture or movement in the building rather than a fault with the doors. Matt will point it out if he sees signs of that, because adjusting the doors would only treat the symptom.",
      ],
    },
    faqs: [
      { q: "Can you fix a door that will not close properly?", a: "In most cases yes. It usually comes down to hinges, the strike plate or the door having swollen, and each has a straightforward fix." },
      { q: "My doors drag since I got new flooring. Can they be trimmed?", a: "Yes. Trimming the bottom of doors to clear a new floor is routine and is often done as part of a flooring job." },
      { q: "Can you install a door I bought myself?", a: "Yes. Let Matt know the door type and size so he can confirm it suits the opening before the visit." },
      { q: "Do you replace door hardware?", a: "Yes. Handles, locksets, hinges, stops and closers can all be replaced, on their own or with other work." },
    ],
    related: ["trim-and-baseboards", "blinds-and-window-coverings", "drywall-repair", "handyman-services"],
  },

  {
    slug: "blinds-and-window-coverings",
    name: "Blinds & Window Covering Installation",
    navLabel: "Blinds & Window Coverings",
    group: "repairs",
    tier: "secondary",
    confirmed: false,
    confirmNote: "'Window coverings' appears in the approved concept. Confirm he installs customer-supplied blinds, shades and curtain hardware.",
    published: true,
    image: "blinds",
    seo: {
      title: "Blinds & Window Covering Installation in Spokane | TrueCraft",
      description:
        "Blinds, shades and curtain rods installed level and secure in Spokane-area homes and rentals. Bring the window coverings, TrueCraft handles the install.",
    },
    eyebrow: "Window coverings · Spokane area",
    h1: "Blinds and window coverings, hung level and secure",
    lede: "You have bought the blinds. They are still in the box. Getting them level across a row of windows and anchored into something solid is the part that keeps getting put off.",
    blurb: "Blinds, shades and curtain hardware you have bought, installed level and anchored properly.",
    ctaLabel: "Get a Blinds Install Quote",
    intro: [
      "Window coverings look easy until you are on a ladder with a bracket in one hand and a drill in the other, discovering there is no stud where you need one. A blind that is slightly out of level is obvious from across the room, and one that is not anchored properly will eventually come down.",
      "TrueCraft installs blinds, shades and curtain hardware in homes and rental properties around Spokane. It is a quick job with the right tools, and it combines well with other items on a repair list.",
    ],
    problems: {
      heading: "What can be installed",
      items: [
        { title: "Horizontal and vertical blinds", body: "Faux wood, aluminum and vinyl blinds, inside or outside the window frame." },
        { title: "Shades", body: "Roller, cellular and Roman shades, including wider units that need accurate bracket spacing." },
        { title: "Curtain rods and tracks", body: "Rods set level at a consistent height across a room and anchored to take the weight of the curtains." },
        { title: "Rental and whole-house installs", body: "Fitting the same blind throughout a house or unit so everything matches." },
        { title: "Replacing broken blinds", body: "Removing damaged window coverings, filling old holes where needed and fitting the replacements." },
      ],
    },
    scope: {
      heading: "What the installation includes",
      items: [
        "Checking each blind against its window before any holes are drilled",
        "Marking bracket positions level and consistent across the room",
        "Fixing into framing where possible, and using appropriate anchors where it is not",
        "Mounting the headrail, valance and any hold-downs",
        "Testing operation and adjusting so the blind hangs straight",
        "Removing old hardware and packaging",
      ],
    },
    cost: {
      heading: "What affects the price",
      intro: "Installation is priced on the number of windows and how straightforward they are.",
      factors: [
        { title: "Number of windows", body: "Larger jobs cost less per window." },
        { title: "Size and height", body: "Wide blinds and windows that need a tall ladder take longer." },
        { title: "Mount type and wall material", body: "Inside mounts in a square frame are quickest. Tile, plaster and masonry need different fixings." },
        { title: "Removal of old coverings", body: "Taking down existing blinds and patching holes adds a little time." },
      ],
    },
    process: {
      heading: "How it works",
      steps: [
        { title: "Tell Matt what you have", body: "How many windows, what type of covering and whether they have arrived." },
        { title: "Quote", body: "A price for the installation." },
        { title: "Install", body: "Everything is hung, leveled and tested, and the packaging is taken away." },
      ],
    },
    estimate: {
      heading: "What to send",
      items: [
        "Number of windows",
        "Type of covering and the brand or product if you know it",
        "Inside or outside mount",
        "Any very wide or high windows",
        "Whether old blinds need to come down first",
      ],
    },
    limits: {
      heading: "Before you order",
      body: [
        "Blinds made to the wrong size cannot be made to fit on the day. If you have not ordered yet and are unsure about measuring, ask before you buy. Inside-mount blinds in particular need the frame measured in three places, because window openings are rarely perfectly square.",
        "Hard-wired motorized shades need an electrician for the wiring. Battery and plug-in versions do not.",
      ],
    },
    faqs: [
      { q: "Do you supply the blinds?", a: "The usual arrangement is that you choose and buy the window coverings and TrueCraft installs them. If you want help deciding what to order, ask." },
      { q: "Can you install blinds in a rental between tenants?", a: "Yes. It is a common turnover job and fits easily alongside other repairs." },
      { q: "Can you hang curtain rods on drywall?", a: "Yes. Brackets are fixed into framing wherever possible, with anchors rated for the load where there is no stud behind the bracket position." },
      { q: "Will you take down my old blinds?", a: "Yes. Old hardware is removed and visible holes can be filled." },
    ],
    related: ["door-installation-and-repair", "handyman-services", "trim-and-baseboards", "interior-painting"],
  },

  {
    slug: "light-fixture-installation",
    name: "Light Fixture Installation",
    navLabel: "Light Fixtures",
    group: "repairs",
    tier: "secondary",
    confirmed: false,
    confirmNote:
      "UNPUBLISHED ON PURPOSE. Shown in the approved concept, but Washington (RCW 19.28) requires an electrical contractor licence and certified electrician for electrical work done for hire, including replacing light fixtures, and L&I actively cites unlicensed advertising. Only publish once Matt confirms he holds the right electrical licence, or rewrite the page to cover non-wired work only.",
    published: false,
    image: "lightFixture",
    seo: {
      title: "Light Fixture Installation in Spokane, WA | TrueCraft",
      description:
        "Light fixture replacement and installation in Spokane-area homes. Swap dated fixtures for new ones, safely mounted and working properly.",
    },
    eyebrow: "Light fixtures · Spokane area",
    h1: "New light fixtures, installed safely",
    lede: "A dated fixture can make a whole room feel older than it is. Swapping it is one of the quickest ways to update a space.",
    blurb: "Dated fixtures swapped for new ones, mounted securely and working properly.",
    ctaLabel: "Ask About Fixture Installation",
    intro: [
      "Changing a light fixture is often the last step in refreshing a room: the floors are done, the walls are painted, and the brass fixture from decades ago is the one thing left that dates the space.",
      "TrueCraft replaces existing fixtures with new ones on existing wiring and mounting points.",
    ],
    problems: {
      heading: "Common fixture swaps",
      items: [
        { title: "Dining and kitchen pendants", body: "Replacing an existing fixture with a pendant or chandelier at the right height over a table or island." },
        { title: "Flush and semi-flush ceiling lights", body: "Updating hallway, bedroom and entry fixtures." },
        { title: "Bathroom vanity lights", body: "Replacing a dated light bar above the mirror." },
        { title: "Exterior wall lights", body: "Swapping porch and garage fixtures." },
      ],
    },
    scope: {
      heading: "What is involved",
      items: [
        "Power off and verified at the fixture",
        "Removing the old fixture",
        "Checking the box is sound and rated for the new fixture's weight",
        "Mounting and connecting the new fixture",
        "Testing and clean-up",
      ],
    },
    cost: {
      heading: "What affects the price",
      intro: "A like-for-like swap is the simplest case.",
      factors: [
        { title: "Number of fixtures", body: "Several in one visit cost less each." },
        { title: "Ceiling height", body: "Vaulted ceilings and stairwells need more equipment and time." },
        { title: "Fixture weight and assembly", body: "Heavy or multi-part fixtures take longer to assemble and support." },
      ],
    },
    process: {
      heading: "How it works",
      steps: [
        { title: "Send the fixture details", body: "A link or photo of the new fixture and a photo of the old one in place." },
        { title: "Quote", body: "A price for the swap." },
        { title: "Install", body: "The fixture is fitted, tested and the packaging removed." },
      ],
    },
    estimate: {
      heading: "What to send",
      items: ["Photos of the existing fixture", "The new fixture's product page or box", "Ceiling height", "How many fixtures"],
    },
    limits: {
      heading: "What needs an electrician",
      body: [
        "New circuits, new fixture locations, switch changes, panel work and anything involving aluminum or damaged wiring are jobs for a licensed electrician.",
      ],
    },
    faqs: [
      { q: "Do you supply the fixture?", a: "You choose and buy the fixture. TrueCraft installs it." },
      { q: "Can you add a light where there is not one now?", a: "No. Adding a new location means new wiring, which needs a licensed electrician." },
    ],
    related: ["handyman-services", "blinds-and-window-coverings", "interior-painting"],
  },

  {
    slug: "interior-painting",
    name: "Interior Painting & Touch-Ups",
    navLabel: "Interior Painting",
    group: "repairs",
    tier: "secondary",
    confirmed: false,
    confirmNote: "Not in the approved concept. Confirm Matt takes painting work and to what size (touch-ups, single rooms, whole interiors).",
    published: true,
    image: "painting",
    seo: {
      title: "Interior Painting & Touch-Ups in Spokane | TrueCraft",
      description:
        "Room painting, trim painting and touch-ups in the Spokane area. Careful prep, clean lines and repairs handled before the paint goes on.",
    },
    eyebrow: "Interior painting · Spokane area",
    h1: "Interior painting, with the repairs done first",
    lede: "Fresh paint over dented, cracked walls is still dented, cracked walls. The rooms that look best are the ones where somebody fixed the surface before opening the can.",
    blurb: "Rooms, trim and touch-ups, with wall repairs handled before the paint goes on.",
    ctaLabel: "Get a Painting Estimate",
    intro: [
      "A coat of paint is the cheapest way to change a room, and the result is decided almost entirely by preparation. Filling, sanding, caulking and priming take longer than the painting and are the difference between a job that looks crisp and one that just looks recent.",
      "TrueCraft takes on painting for single rooms, trim and doors, and the touch-up work that follows a repair. Because drywall and trim repair are part of the same visit, the walls are actually ready for paint when the paint goes on.",
    ],
    problems: {
      heading: "Painting jobs that fit TrueCraft well",
      items: [
        { title: "A room or two", body: "Bedrooms, a living room, a hallway. The scale where a careful single painter is the right choice." },
        { title: "Trim, doors and baseboards", body: "Freshly painted trim sharpens a room even when the walls are left alone." },
        { title: "After a repair", body: "Painting the wall where drywall was patched, or new trim that has just been installed." },
        { title: "Move-in and move-out", body: "Covering scuffs and marks before a sale or between tenants." },
        { title: "Color changes", body: "Going from a dark or bold color to something lighter, with the priming that needs." },
      ],
    },
    scope: {
      heading: "What a paint job includes",
      items: [
        "Moving and covering furniture, and protecting floors",
        "Filling nail holes, dents and small cracks",
        "Sanding repairs smooth and spot-priming them",
        "Caulking gaps where trim meets the wall",
        "Cutting in clean lines at ceilings, trim and corners",
        "Two coats on walls where coverage needs it",
        "Clean-up and putting the room back",
      ],
    },
    cost: {
      heading: "What affects the cost",
      intro: "Painting is priced on area and on how much preparation the surfaces need.",
      factors: [
        { title: "Size of the rooms", body: "Wall area and ceiling height set the baseline." },
        { title: "Condition of the walls", body: "Walls that need a lot of patching take longer before any paint goes on." },
        { title: "What is being painted", body: "Walls only, or walls, ceiling, trim and doors, are very different amounts of work." },
        { title: "Color change", body: "Covering a strong color usually needs primer or an extra coat." },
        { title: "Furniture", body: "An empty room is faster than one that has to be worked around." },
      ],
    },
    process: {
      heading: "How it works",
      steps: [
        { title: "Tell Matt what you want painted", body: "Rooms, surfaces and whether you have chosen colors." },
        { title: "Quote", body: "A price that states what is included and how many coats." },
        { title: "Prep and paint", body: "Repairs first, then primer where needed, then finish coats." },
      ],
    },
    estimate: {
      heading: "What to send",
      items: [
        "Which rooms and which surfaces: walls, ceilings, trim, doors",
        "Photos of each room",
        "Current and new colors if known",
        "Any wall damage that needs repairing first",
        "Whether the rooms will be furnished or empty",
      ],
    },
    limits: {
      heading: "What TrueCraft does not paint",
      body: [
        "Whole-house exterior repaints and large multi-storey interiors are generally better served by a dedicated painting crew. TrueCraft is the right fit for individual rooms, trim and finishing work alongside repairs.",
        "Homes built before 1978 may contain lead-based paint. Disturbing it requires specific certified practices, so tell Matt the age of your home if you are unsure.",
      ],
    },
    faqs: [
      { q: "Do you supply the paint?", a: "Either way works. You can provide the paint, or it can be picked up for you and added to the quote at cost." },
      { q: "Can you touch up just one wall?", a: "Yes. Painting a full wall from corner to corner is the most reliable way to hide a repair." },
      { q: "Do you paint ceilings and trim as well?", a: "Yes. Say which surfaces you want included so the quote covers them." },
      { q: "Will you fix the walls before painting?", a: "Yes. Filling holes, repairing dents and caulking gaps are part of the preparation. Larger drywall repairs are quoted alongside." },
    ],
    related: ["drywall-repair", "trim-and-baseboards", "door-installation-and-repair", "handyman-services"],
  },

  {
    slug: "siding-repair",
    name: "Siding Repair",
    navLabel: "Siding Repair",
    group: "repairs",
    tier: "secondary",
    confirmed: false,
    confirmNote: "Shown in the approved concept. Confirm the siding types Matt repairs (wood lap, fiber cement, vinyl, T1-11) and working-height limits.",
    published: true,
    image: "siding",
    seo: {
      title: "Siding Repair in Spokane, WA | TrueCraft Home Repair",
      description:
        "Siding repair in the Spokane area: loose, cracked, rotted or missing boards replaced before water gets behind them. Small repairs welcome.",
    },
    eyebrow: "Siding repair · Spokane area",
    h1: "Siding repair before a small problem becomes a wet wall",
    lede: "Siding has one job, which is to keep water out of your walls. A cracked board or an open joint is not a cosmetic problem. It is a place where water gets in.",
    blurb: "Loose, cracked and rotted boards replaced, and gaps sealed before water gets behind them.",
    ctaLabel: "Get a Siding Repair Quote",
    intro: [
      "Spokane's weather is hard on a house. Hot dry summers, freeze and thaw through the winter, and wind-driven rain in between all work on siding year after year. Paint fails, boards split, caulk shrinks and the lower courses closest to the ground are usually the first to go soft.",
      "Most of the time the fix is a repair, not new siding. TrueCraft replaces damaged sections, re-secures loose boards and seals the places where water is finding a way in. It is the size of job that larger siding companies often pass on.",
    ],
    problems: {
      heading: "Siding problems to deal with sooner rather than later",
      items: [
        { title: "Rotted or soft boards", body: "Common at the bottom of walls, around hose bibs and under windows. Soft wood should be cut out and replaced, not filled and painted." },
        { title: "Cracked, split or broken pieces", body: "Impact damage, a stray ball, or boards that have split along the grain with age." },
        { title: "Loose or bowing siding", body: "Fasteners that have backed out let boards lift and rattle in the wind." },
        { title: "Open joints and failed caulk", body: "Gaps at corners, trim and butt joints are direct routes for water." },
        { title: "Missing pieces after a storm", body: "Exposed sheathing or house wrap needs covering promptly." },
        { title: "Woodpecker and pest damage", body: "Holes should be repaired and the cause dealt with so they do not come straight back." },
      ],
    },
    scope: {
      heading: "What a siding repair includes",
      items: [
        "Finding the full extent of the damage, including what is behind the board",
        "Removing the damaged section without breaking the courses around it",
        "Checking and repairing the weather barrier and sheathing where necessary",
        "Fitting new siding to match the existing profile and exposure",
        "Fastening, flashing and sealing joints correctly",
        "Priming cut ends and painting the repair to blend, if included",
      ],
    },
    cost: {
      heading: "What affects the cost",
      intro: "Siding repairs range from a single board to a section of wall.",
      factors: [
        { title: "Extent of the damage", body: "One board, or a run of several courses. Hidden rot behind the surface is the main unknown." },
        { title: "Siding type", body: "Wood lap, fiber cement, vinyl and panel siding are each removed and replaced differently." },
        { title: "Height and access", body: "Ground-level repairs are simple. Second-storey work needs more equipment and time." },
        { title: "Matching", body: "Common profiles are easy to source. Older or discontinued siding may need a close match or custom-cut boards." },
        { title: "Painting", body: "Priming only, or painting to blend with the existing color." },
      ],
    },
    process: {
      heading: "How a repair is handled",
      steps: [
        { title: "Send photos", body: "A close-up of the damage and a shot of the whole wall." },
        { title: "Assessment and quote", body: "Matt looks at the damage, probes for soft wood and prices the repair. If he suspects more is hidden, he will say so up front." },
        { title: "Repair", body: "The damaged siding is replaced and sealed. Anything unexpected found behind it is shown to you before more work is done." },
      ],
    },
    estimate: {
      heading: "What to send",
      items: [
        "Photos of the damaged area and the wall it is on",
        "Which side of the house and how high up",
        "The siding material if you know it",
        "How long it has been like that",
        "Any signs of water inside, such as staining or peeling paint",
      ],
    },
    limits: {
      heading: "Repair versus re-siding",
      body: [
        "A repair makes sense when the damage is local and the rest of the siding is sound. If boards are failing all over the house, or water has been getting into the walls for a long time, individual repairs stop being good value and the honest advice is to talk to a siding contractor about replacement.",
        "New siding and old siding rarely match perfectly straight away. Weathered paint and new paint look different even in the same color, so the best-looking result is usually to paint the full wall.",
      ],
    },
    faqs: [
      { q: "Can you replace just a few boards?", a: "Yes. Small siding repairs are exactly the kind of work TrueCraft takes on." },
      { q: "Can you match my existing siding?", a: "Most common profiles can be matched closely. A photo with a tape measure showing the board exposure helps identify it." },
      { q: "Is a soft spot in my siding urgent?", a: "It is worth dealing with soon. Soft wood means water has already been getting in, and the longer it continues the more there is to repair behind it." },
      { q: "Do you paint the repaired area?", a: "New boards are primed at minimum. Painting to blend can be included in the quote." },
    ],
    related: ["fence-and-deck-repair", "door-installation-and-repair", "handyman-services", "trim-and-baseboards"],
  },

  {
    slug: "fence-and-deck-repair",
    name: "Fence & Deck Repair",
    navLabel: "Fence & Deck Repair",
    group: "repairs",
    tier: "secondary",
    confirmed: false,
    confirmNote: "Not in the approved concept. Confirm Matt takes outdoor carpentry repairs before launch.",
    published: true,
    image: "deckBoards",
    secondaryImage: "fenceDeck",
    seo: {
      title: "Fence & Deck Repair in Spokane, WA | TrueCraft Home Repair",
      description:
        "Fence and deck repair in the Spokane area: leaning posts, loose boards, soft deck planks, wobbly railings and sagging gates fixed properly.",
    },
    eyebrow: "Fence & deck repair · Spokane area",
    h1: "Fence and deck repairs, without replacing the whole thing",
    lede: "A few bad boards and a leaning post do not mean you need a new fence. Most outdoor wood can be repaired section by section and given years more service.",
    blurb: "Leaning posts, loose boards, soft deck planks, wobbly railings and gates that drag.",
    ctaLabel: "Get a Repair Quote",
    intro: [
      "Outdoor wood in the Inland Northwest goes through a lot: snow sitting on it for weeks, spring melt, dry summer heat and the wind that comes through in autumn. Fence posts rot at ground level, deck boards cup and split, and fasteners work loose.",
      "TrueCraft repairs fences and decks rather than selling new ones. If a structure is sound and a section of it has failed, that section gets fixed. If it is beyond sensible repair, you will be told that honestly.",
    ],
    problems: {
      heading: "Repairs worth making",
      items: [
        { title: "Leaning or rotted fence posts", body: "A post that has rotted at the base takes the panels either side with it. Replacing the post usually saves the rest." },
        { title: "Loose, broken or missing pickets", body: "Individual boards and rails can be replaced without rebuilding the run." },
        { title: "Gates that sag or will not latch", body: "Usually a hinge post, hardware or bracing problem, all of which can be corrected." },
        { title: "Soft or split deck boards", body: "Boards that flex, splinter or hold water should be replaced before somebody goes through one." },
        { title: "Wobbly railings and steps", body: "A railing that moves when you lean on it is a safety issue and should not wait." },
        { title: "Wind and storm damage", body: "Sections blown down or damaged by a fallen branch." },
      ],
    },
    scope: {
      heading: "What repairs include",
      items: [
        "Checking the structure, not only the visible damage",
        "Replacing posts, rails, pickets or boards as needed",
        "Setting replacement posts properly",
        "Re-fastening with exterior-rated screws and hardware",
        "Re-hanging and adjusting gates",
        "Tightening or rebuilding railings and stair treads",
        "Hauling away the old material",
      ],
    },
    cost: {
      heading: "What affects the cost",
      intro: "Repairs are priced on how much has to be replaced and how hard it is to get to.",
      factors: [
        { title: "How much has failed", body: "One post and a panel, or damage along the whole run." },
        { title: "Posts", body: "Replacing a post set in concrete is the most labor-intensive fence repair." },
        { title: "Material", body: "Cedar, pressure-treated lumber and composite decking differ in cost and availability." },
        { title: "Access", body: "Tight side yards, slopes and landscaping right up against the fence slow things down." },
        { title: "What is underneath", body: "On a deck, the condition of the joists and framing below the boards matters more than the boards themselves." },
      ],
    },
    process: {
      heading: "How it works",
      steps: [
        { title: "Send photos", body: "The damaged area and a wider view so the overall condition is clear." },
        { title: "Quote", body: "A price for the repair, with an honest view on whether repair is the right call." },
        { title: "Repair", body: "The failed parts are replaced and everything is left solid and tidy." },
      ],
    },
    estimate: {
      heading: "What to send",
      items: [
        "Photos of the damage and the surrounding fence or deck",
        "Roughly how long the damaged section is",
        "The material, if you know it",
        "The age of the fence or deck",
        "For shared fences, whether your neighbor is involved",
      ],
    },
    limits: {
      heading: "When repair is not the answer",
      body: [
        "If most of the posts in a fence have rotted, or a deck's framing is failing, patching it is poor value and can be unsafe. Matt will tell you when a structure has reached that point.",
        "The focus here is repair. Building a new deck or structurally altering one can require a permit, depending on its size and height, so larger projects are worth a conversation before anything is planned.",
      ],
    },
    faqs: [
      { q: "Can you fix one section of fence?", a: "Yes. Replacing a post, a panel or a handful of boards is a typical job." },
      { q: "My gate drags on the ground. Can that be fixed?", a: "Usually. The cause is often a leaning hinge post, worn hinges or a gate frame that has racked, and each can be corrected." },
      { q: "Can you replace a few deck boards without redoing the deck?", a: "Yes, as long as the framing underneath is sound. New boards will look newer than the old ones until they weather." },
      { q: "Do you build new fences or decks?", a: "The focus is on repairs. If you have a new build in mind, describe it and Matt will tell you whether it is something he would take on or better suited to a fence or deck contractor." },
    ],
    related: ["siding-repair", "handyman-services", "door-installation-and-repair", "trim-and-baseboards"],
  },
];
