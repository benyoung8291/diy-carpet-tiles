export interface SectorPage {
  slug: string;
  label: string;
  title: string;
  description: string;
  heading: string;
  audience: string;
  intro: string;
  overviewHeading: string;
  overview: string;
  benefits: { title: string; body: string }[];
  areasHeading: string;
  areas: { title: string; body: string }[];
  checklistHeading: string;
  checklist: string[];
  quoteHeading: string;
  quoteIntro: string;
  faqs: { question: string; answer: string }[];
  related: string[];
}

export const sectorPages: SectorPage[] = [
  {
    slug: "government-housing-flooring",
    label: "Government Housing",
    title: "Government Housing Flooring & Carpet Tiles | Premrest",
    description: "Plan carpet for public and social housing. Modular carpet tiles, replacement spares and project quotes for housing providers. Request samples from Premrest.",
    heading: "Government Housing Flooring for Public and Social Housing",
    audience: "Housing providers, asset managers and refurbishment teams",
    intro: "Plan maintainable carpet for bedrooms and living areas across public, social and community housing. Modular carpet tiles let a maintenance team replace local damage with matching spares, while retaining the surrounding floor. Ask Premrest about carpet supply, installation scope and the specification your housing program requires.",
    overviewHeading: "Specify for maintenance across a housing portfolio",
    overview: "A housing refurbishment brief needs to account for repeat repairs, vacant-property handovers and consistency across addresses. Choosing a carpet range and keeping a recorded spare-tile allocation gives maintenance teams a practical way to respond to local damage. The right flooring still depends on the room, resident needs, substrate and the provider’s specification.",
    benefits: [
      { title: "Plan local repairs", body: "Keep matching tiles from the original batch so damaged sections can be replaced during maintenance visits. Record the range, colour and installation date against each property." },
      { title: "Standardise your carpet brief", body: "Compare Haven and Horizon samples before selecting a range for a program. Consider cleaning access, room use and spare storage alongside appearance." },
      { title: "Clarify the refurbishment scope", body: "Separate carpet supply, removal, subfloor preparation, transitions and installation in the project brief. Premrest can discuss supply-only or a supply-and-install quote." },
    ],
    areasHeading: "Where carpet belongs in the housing brief",
    areas: [
      { title: "Bedrooms and living rooms", body: "Consider modular carpet for dry residential areas where warmth underfoot and local repairability are priorities. Confirm resident and maintenance requirements before choosing a range." },
      { title: "Shared spaces and access routes", body: "Corridors, stairs and common areas may have different traffic, fire and accessibility requirements. Provide the relevant specification so suitability can be assessed for each area." },
    ],
    checklistHeading: "Prepare a housing-provider flooring enquiry",
    checklist: ["Property locations, number of dwellings and approximate carpet area", "Vacant or occupied status, access arrangements and handover dates", "Existing flooring, substrate condition and moisture or preparation concerns", "Applicable procurement requirements and required product test documentation", "Colour standardisation, cleaning plan and spare-tile storage"],
    quoteHeading: "Discuss your government or social housing flooring brief",
    quoteIntro: "Send the locations and scope you know, or request samples for an initial review. Include a specification or tender reference in your message if available. We can confirm the next steps before you commit to a range.",
    faqs: [
      { question: "Can modular carpet be considered for government housing flooring?", answer: "It can be considered for dry carpeted areas such as bedrooms and living rooms. The housing provider must confirm suitability against its own specification, resident needs and maintenance requirements. A product enquiry is not evidence of government approval." },
      { question: "Can you quote for public, social or community housing portfolios?", answer: "Ask Premrest about a project quote covering your addresses, approximate area and proposed stages. Supply-only is available Australia-wide, with supply and installation in Melbourne, Sydney and Brisbane. Other installation locations need individual discussion." },
      { question: "What documentation should a housing provider request?", answer: "Identify the product data, warranty terms, fire-test information, accessibility assessment and other evidence required by your procurement brief. Ask Premrest which documents are available for the proposed range before making a specification decision." },
      { question: "How should replacement tiles be managed across properties?", answer: "Allocate matching spares from the original batch and label them by property, range and colour. New production batches, existing wear and cleaning history can affect appearance, so a future replacement should not be assumed to match perfectly." },
      { question: "Can carpet tiles be laid over a damp slab?", answer: "The substrate must meet the carpet and adhesive requirements. Felt backing does not resolve a damp slab. Include moisture concerns in your enquiry so assessment and preparation can be discussed before installation." },
    ],
    related: ["build-to-rent-flooring", "assisted-living-flooring", "student-accommodation-flooring"],
  },
  {
    slug: "assisted-living-flooring",
    label: "Assisted Living",
    title: "Assisted Living Flooring & Carpet Options | Premrest",
    description: "Explore carpet for assisted living bedrooms and shared lounges. Discuss mobility needs, maintenance and installation with Premrest. Request samples or a quote.",
    heading: "Assisted Living Flooring for Bedrooms and Shared Living Areas",
    audience: "Accommodation providers, families and property managers",
    intro: "Choosing assisted living flooring starts with how each resident uses the space. Modular carpet may be an option for dry bedrooms and living areas where comfort and repairability matter. Discuss mobility aids, cleaning requirements, transitions and your project specification before selecting carpet for a supported living environment.",
    overviewHeading: "Start with the resident’s daily movement and support needs",
    overview: "An assisted living property may combine private bedrooms, communal lounges and care-related spaces with very different flooring needs. A sample helps assess colour and texture, but it does not replace an assessment of wheelchair movement, walking aids, thresholds or cleaning protocols. Give the project’s accessibility adviser or occupational therapist the proposed flooring details where their assessment is required.",
    benefits: [
      { title: "Repair individual damaged areas", body: "Keep matching spare tiles to address local wear or damage without replacing the entire carpeted room. Plan repairs around resident access and furniture movement." },
      { title: "Compare samples in the actual room", body: "Review Haven and Horizon colours against lighting, adjacent floors and furniture. Assess transitions and visual contrast as part of the resident’s broader environment." },
      { title: "Plan the installation around residents", body: "Discuss occupied rooms, quiet periods, access to facilities and furniture handling when requesting a quote. Confirm the staging plan with the accommodation provider." },
    ],
    areasHeading: "Assess each assisted living area separately",
    areas: [
      { title: "Private bedrooms and dry lounges", body: "Consider the room’s use, cleaning routine and resident preferences when reviewing carpet. Firm installation, appropriate edge detailing and a suitable substrate are part of the brief." },
      { title: "Care, wet and high-cleaning areas", body: "Bathrooms, laundries and areas with frequent spills or specialist hygiene protocols may need a different flooring system. Discuss these spaces separately with the project team." },
    ],
    checklistHeading: "What to include in an assisted living carpet brief",
    checklist: ["Resident mobility needs, walking aids and wheelchair use", "Accessibility adviser or occupational therapist requirements", "Room-by-room cleaning, spill and hygiene protocols", "Thresholds, doors, transitions and existing floor levels", "Occupied-room access, installation staging and maintenance arrangements"],
    quoteHeading: "Ask about carpet for your assisted living property",
    quoteIntro: "Tell us which dry areas you are considering, the property location and any accessibility or cleaning requirements. Request samples for review by your project team, or ask for a scoped supply and installation quote.",
    faqs: [
      { question: "Is carpet suitable for all assisted living spaces?", answer: "No single flooring system suits every space. Carpet may be considered for dry bedrooms and lounges, while wet areas and care spaces with specialist cleaning needs may require other materials. Selection should follow the resident and property requirements." },
      { question: "Is this carpet suitable for wheelchairs and walking frames?", answer: "Suitability depends on the mobility aid, carpet construction, installation, transitions and resident needs. Ask your accessibility adviser or occupational therapist to assess the proposed floor. This page does not claim a mobility-aid certification." },
      { question: "Can damaged tiles be replaced in an occupied property?", answer: "Individual tiles can be replaced when installed with a suitable pressure-sensitive adhesive. The provider should plan resident access, furniture movement and safe work areas. Keep original-batch spares and expect possible appearance differences due to wear." },
      { question: "Does the carpet have healthcare or infection-control approval?", answer: "We do not claim healthcare approval or infection-control performance here. Provide the project’s required evidence and cleaning protocols so Premrest can discuss the proposed range and available documentation before specification." },
      { question: "Where can you supply or install assisted living carpet?", answer: "Supply-only is available Australia-wide. Premrest offers supply and installation in Melbourne, Sydney and Brisbane. Discuss the location and scope before assuming installation availability elsewhere." },
    ],
    related: ["retirement-living-flooring", "government-housing-flooring", "build-to-rent-flooring"],
  },
  {
    slug: "retirement-living-flooring",
    label: "Retirement Living",
    title: "Retirement Living Flooring & Carpet Tiles | Premrest",
    description: "Plan carpet for retirement village units, bedrooms and resident lounges. Compare samples and discuss staged refurbishment, maintenance and project quotes.",
    heading: "Retirement Living Flooring for Village Units and Resident Lounges",
    audience: "Retirement village operators and refurbishment managers",
    intro: "Refresh retirement village interiors with a carpet plan that accounts for resident comfort, unit handovers and ongoing maintenance. Modular carpet tiles can be considered for dry bedrooms, living rooms and lounges, with matching spares retained for local repairs. Ask Premrest about samples and a quote for your village or individual unit.",
    overviewHeading: "Balance resident choice with a manageable village standard",
    overview: "Retirement living refurbishment often involves one unit at a time, while shared spaces and occupied residences remain in use. A manageable selection of carpet colours can give residents a choice without creating an unworkable maintenance inventory. Review samples in the unit and confirm accessibility, cleaning and transition requirements before ordering.",
    benefits: [
      { title: "Coordinate unit handovers", body: "Include incoming-resident dates, removal of existing flooring and substrate preparation in the installation brief. Agree on access and scheduling for each unit." },
      { title: "Keep a documented spare inventory", body: "Label replacement tiles by unit, colour and batch. Local repairs may help preserve surrounding carpet, while allowing for differences caused by wear and ageing." },
      { title: "Review colours with residents", body: "Use physical samples to assess the appearance under daylight and evening lighting. Consider neighbouring surfaces and the resident’s visual and mobility needs." },
    ],
    areasHeading: "Choose retirement village flooring by room use",
    areas: [
      { title: "Independent living units", body: "Bedrooms and dry living areas may be appropriate carpet locations. Plan doorway levels, furniture movement and future maintenance as part of the unit refurbishment." },
      { title: "Resident lounges and shared facilities", body: "Traffic, spills and cleaning access differ from private units. Communal spaces, stairs and care facilities need their own specification and supporting assessment." },
    ],
    checklistHeading: "Prepare a retirement village refurbishment brief",
    checklist: ["Unit numbers, communal areas and approximate carpet area", "Occupied versus vacant units and resident handover dates", "Resident choice, village colour standards and sample review", "Mobility, accessibility and transition requirements", "Cleaning responsibilities, matching spares and maintenance storage"],
    quoteHeading: "Plan carpet for your retirement living project",
    quoteIntro: "Start with samples for one unit, a resident lounge or a village-wide standard. Send the property location and intended stages, and we can discuss the supply and installation scope for your quote.",
    faqs: [
      { question: "Can carpet tiles be considered for retirement living units?", answer: "Yes, for appropriate dry areas subject to resident needs and the project specification. Bedrooms and living rooms should be assessed separately from wet areas, stairs and shared facilities. Request samples and discuss the planned installation." },
      { question: "Is retirement living flooring the same as aged-care flooring?", answer: "Independent retirement living and residential aged care can have different care, hygiene and accessibility requirements. This page focuses on carpet options for retirement living. Care facilities require a separate assessment against their own specification." },
      { question: "Can a village be refurbished one unit at a time?", answer: "Discuss a staged plan with Premrest, including vacant-unit windows, occupied residents, removal and preparation. Availability and timing depend on the location and project scope; they are confirmed as part of the quote." },
      { question: "How do we manage replacement carpet across a village?", answer: "Record the range and colour used in each unit and retain matching original-batch spares. Include cleaning and replacement responsibilities in your maintenance plan. New batches and worn carpet may differ visually." },
      { question: "Can residents view samples before a carpet choice is made?", answer: "Request free Haven or Horizon samples for review in the actual room. Premrest will confirm selection and delivery details after your enquiry. The village can then assess colour preferences alongside technical requirements." },
    ],
    related: ["assisted-living-flooring", "build-to-rent-flooring", "serviced-apartment-flooring"],
  },
  {
    slug: "airbnb-flooring",
    label: "Airbnb & Holiday Rentals",
    title: "Airbnb Flooring & Holiday Rental Carpet Tiles | Premrest",
    description: "Explore carpet tiles for Airbnb bedrooms and holiday rentals. Plan local repairs, matching spares and guest changeovers. Request samples or a tailored quote.",
    heading: "Airbnb Flooring for Bedrooms and Holiday Rental Living Areas",
    audience: "Airbnb hosts, holiday-rental owners and short-stay managers",
    intro: "An Airbnb floor needs to look welcoming and be practical to maintain between bookings. Modular carpet tiles offer an option for dry bedrooms and living areas: replace locally damaged tiles from a matching spare inventory while retaining the rest of the floor. Compare colours and ask for a quote for your holiday rental.",
    overviewHeading: "Choose carpet with the guest changeover in mind",
    overview: "Luggage, furniture movement, food spills and frequent cleaning all affect a short-stay property. Think about which rooms benefit from carpet, how your cleaner will maintain it and where spare tiles will be stored. A local repair is easier to plan when the host, property manager and cleaner know the range, layout and replacement procedure.",
    benefits: [
      { title: "Prepare for local damage", body: "Retain spare tiles from the original purchase for accidental damage. Match the pile direction during replacement and check the repair against surrounding wear." },
      { title: "Choose a look that suits the listing", body: "Compare Haven and Horizon samples against wall colours, bedding and furniture. Review them in the actual lighting before making a choice from listing photographs." },
      { title: "Coordinate with cleaning and bookings", body: "Give your cleaner the carpet care guidance and include drying time after cleaning in your booking plan. Schedule installation and repairs with access and guest arrivals in mind." },
    ],
    areasHeading: "Where to consider carpet in an Airbnb",
    areas: [
      { title: "Guest bedrooms and dry sitting areas", body: "Carpet may suit bedrooms, lounge areas and dry hallways where a softer interior finish is wanted. Confirm the substrate, door clearance and furniture layout." },
      { title: "Kitchens, bathrooms and outdoor entries", body: "Wet rooms and areas exposed to frequent water need a suitable alternative. Entry mats and a room-by-room flooring plan help manage dirt before it reaches carpet." },
    ],
    checklistHeading: "Prepare your Airbnb flooring enquiry",
    checklist: ["Property suburb, rooms and approximate carpet area", "Booking windows available for removal, preparation and installation", "Guest traffic, pet policy and cleaning arrangements", "Existing floor condition, stairs and doorway transitions", "Preferred colours and space for labelled matching spare tiles"],
    quoteHeading: "Get a carpet quote for your Airbnb or holiday rental",
    quoteIntro: "Request samples to compare in the property, or tell us the rooms you want to refresh. We can discuss supply-only for your existing trade or installation in Melbourne, Sydney and Brisbane.",
    faqs: [
      { question: "Are carpet tiles a good Airbnb flooring option?", answer: "They can be an option for suitable dry rooms where local repairability and a carpet finish are priorities. Selection depends on the room use, cleaning routine and substrate. Kitchens, bathrooms and other wet areas need a different flooring assessment." },
      { question: "Can I replace a stained tile between bookings?", answer: "A damaged tile can be lifted and replaced when installed with suitable adhesive. Use original-batch spares and the correct pile direction. Cleaning, access and any underlying damage can affect the work, so do not assume every repair will fit a particular booking window." },
      { question: "Is the carpet stain-proof or pet-proof?", answer: "No carpet should be treated as stain-proof or pet-proof. Deal with spills promptly using the manufacturer’s care guidance, and discuss pet-related cleaning requirements before selection. Spare tiles provide a repair option for damage that cleaning cannot resolve." },
      { question: "Can you supply carpet for a regional holiday rental?", answer: "Supply-only is available Australia-wide. Premrest offers supply and installation in Melbourne, Sydney and Brisbane; discuss other installation locations individually. Include delivery access and timing in your quote request." },
      { question: "Do I need to know the carpet area before requesting samples?", answer: "No. Request free samples and tell us which colours or ranges interest you. If you later request a quote, an approximate area, room count and location will help define the project." },
    ],
    related: ["serviced-apartment-flooring", "pet-friendly-rental-flooring", "student-accommodation-flooring"],
  },
  {
    slug: "student-accommodation-flooring",
    label: "Student Accommodation",
    title: "Student Accommodation Flooring & Carpet Tiles | Premrest",
    description: "Plan carpet for student accommodation bedrooms and study spaces. Discuss semester refurbishments, spare tiles and portfolio maintenance. Request a project quote.",
    heading: "Student Accommodation Flooring for Bedrooms and Study Spaces",
    audience: "Student-housing operators, landlords and facilities teams",
    intro: "Plan carpeted student rooms around busy occupancy cycles, furniture movement and repeat maintenance. Modular carpet tiles can be considered for dry bedrooms and study spaces where local repairs are useful. Ask Premrest about a consistent carpet range, matching spares and a quote for your building or portfolio.",
    overviewHeading: "Build flooring maintenance into the academic calendar",
    overview: "Semester breaks and tenancy changeovers create concentrated refurbishment windows. A student-accommodation brief should identify which rooms are available, which remain occupied and how trades can access the building. Recording range and colour details by room helps facilities teams manage replacement stock after the initial fit-out.",
    benefits: [
      { title: "Prepare for repeat room use", body: "Consider desks, chair movement and luggage when assessing carpeted areas. Discuss suitability for the traffic in private rooms and shared study spaces separately." },
      { title: "Organise room-by-room repairs", body: "Keep original-batch spares labelled by building and colour. Local damage can then be assessed without assuming the entire room needs new carpet." },
      { title: "Scope the break-period refurbishment", body: "Identify removal, furniture movement, preparation and installation tasks before setting handover dates. Confirm delivery and trade access for each stage." },
    ],
    areasHeading: "Separate private rooms from communal traffic",
    areas: [
      { title: "Bedrooms and dry study areas", body: "Review samples with the room’s furniture layout and cleaning plan. Assess the substrate and chair use before specifying a carpet range." },
      { title: "Corridors, stairs and shared kitchens", body: "Communal areas may have higher traffic and different fire, accessibility or cleaning requirements. Kitchens and wet areas need separate flooring choices." },
    ],
    checklistHeading: "What to send with a student-housing flooring enquiry",
    checklist: ["Building location, room count and approximate carpet area", "Semester or lease-end windows and occupied-room restrictions", "Furniture layout, chair use and shared-space traffic", "Required fire, accessibility and procurement documentation", "Cleaning plan, colour standardisation and spare-stock storage"],
    quoteHeading: "Plan your student accommodation carpet project",
    quoteIntro: "Send the proposed refurbishment window and rooms to be carpeted. Request samples for a building standard or ask about supply-only and installation options for your facilities team.",
    faqs: [
      { question: "Can carpet tiles be used in student accommodation bedrooms?", answer: "They can be considered for suitable dry bedrooms and study areas. Assess the range against expected traffic, furniture use, cleaning requirements and the building specification before ordering." },
      { question: "Can you plan installation around semester breaks?", answer: "Discuss the dates, access arrangements and room count with Premrest. Scheduling depends on stock, preparation and installation availability. A quote and confirmed work plan should establish the handover requirements." },
      { question: "How much spare carpet should a student-housing operator keep?", answer: "The allocation depends on room count, traffic and maintenance history. Discuss a project-specific spare allowance and store original-batch tiles with range and room records. Later batches may differ in appearance." },
      { question: "Can the same range be used in bedrooms and communal corridors?", answer: "Do not assume the requirements are identical. Provide the corridor traffic, fire, access and cleaning specification so the proposed range can be assessed for that application." },
      { question: "Can you supply a landlord’s existing flooring trade?", answer: "Yes, ask for a supply-only quote with the range, area and delivery location. Supply is available Australia-wide; Premrest installation is offered in Melbourne, Sydney and Brisbane." },
    ],
    related: ["build-to-rent-flooring", "government-housing-flooring", "pet-friendly-rental-flooring"],
  },
  {
    slug: "build-to-rent-flooring",
    label: "Build-to-Rent",
    title: "Build-to-Rent Flooring & Apartment Carpet Tiles | Premrest",
    description: "Explore carpet for build-to-rent apartments and managed rental portfolios. Plan range selection, handovers and replacement spares. Request samples or a quote.",
    heading: "Build-to-Rent Flooring for Apartments and Managed Rental Portfolios",
    audience: "Developers, asset managers and rental-community operators",
    intro: "A build-to-rent flooring decision extends beyond the initial apartment handover. Consider how carpet will be cleaned, repaired and recorded across a long-term rental portfolio. Modular carpet tiles offer a local replacement option for suitable dry rooms, with samples and project quotes available from Premrest.",
    overviewHeading: "Join the specification brief to the operating plan",
    overview: "A development team may select the finishes, while an operating team handles tenant changeovers and repairs for years afterwards. Bring both perspectives into the carpet brief. A defined range palette, original-batch spare allocation and property-level records can make the transition from construction handover to ongoing maintenance more practical.",
    benefits: [
      { title: "Create a consistent range palette", body: "Compare samples across apartment lighting and finish schemes. Keep the number of colours manageable for future stock control and repairs." },
      { title: "Plan maintenance from handover", body: "Record installed range, colour and batch details by apartment. Define spare storage, cleaning responsibilities and the process for local damage." },
      { title: "Clarify apartment and shared-area scope", body: "Quote private dry rooms separately from common corridors and amenities. Supply, preparation, installation and transitions should match the relevant project requirements." },
    ],
    areasHeading: "Scope apartment flooring separately from amenities",
    areas: [
      { title: "Apartment bedrooms and living areas", body: "Assess the carpet finish alongside resident use, the cleaning plan and fit-out details. Review doorway clearance and transitions to adjoining hard floors." },
      { title: "Common corridors and shared facilities", body: "These areas can have different traffic, access and acoustic or fire requirements. Obtain the necessary product documentation and project assessment before specifying the range." },
    ],
    checklistHeading: "Prepare a build-to-rent carpet specification enquiry",
    checklist: ["Project location, apartment mix and area schedule", "Construction stages, delivery access and handover milestones", "Architect or consultant requirements for fire, accessibility and acoustics", "Proposed colour palette, cleaning plan and operator preferences", "Original-batch spare allowance, storage and property records"],
    quoteHeading: "Discuss carpet for your build-to-rent development",
    quoteIntro: "Share an outline of the project, your carpeted areas and the specification requirements. Premrest can discuss samples and a tailored supply-only or supply-and-install quote.",
    faqs: [
      { question: "Why consider carpet tiles for build-to-rent apartments?", answer: "For suitable dry rooms, local replacement can support maintenance between tenancies. The value depends on the operating plan, matching spare inventory and the suitability of the chosen range for the application." },
      { question: "Can you provide samples for an architect or asset manager?", answer: "Request free Haven or Horizon samples and describe the proposed rooms and finishes. Ask which technical documents are available for the range so the project team can review it against the specification." },
      { question: "Does a carpet acoustic rating prove apartment compliance?", answer: "No. A product sound-absorption rating is not proof that a complete floor assembly meets a building’s impact-sound or other acoustic requirements. Your acoustic consultant should assess the proposed system and supporting evidence." },
      { question: "How should spare carpet be handled at handover?", answer: "Agree a spare allocation and label it by building, apartment palette, range and original batch. Include stock records and cleaning guidance in the operator’s maintenance information. New batches may not match existing carpet exactly." },
      { question: "Can you quote for supply without installation?", answer: "Yes. Supply-only is available Australia-wide for your appointed trade. Premrest offers supply and installation in Melbourne, Sydney and Brisbane, with the project scope and availability confirmed in the quote." },
    ],
    related: ["student-accommodation-flooring", "government-housing-flooring", "pet-friendly-rental-flooring"],
  },
  {
    slug: "serviced-apartment-flooring",
    label: "Serviced Apartments",
    title: "Serviced Apartment Flooring & Carpet Tiles | Premrest",
    description: "Plan carpet for serviced apartments and aparthotels. Compare ranges, housekeeping repair plans and phased refurbishment options. Request samples or a quote.",
    heading: "Serviced Apartment Flooring for Guest Bedrooms and Living Areas",
    audience: "Serviced-apartment operators, aparthotels and property managers",
    intro: "Serviced apartments combine guest-room presentation with the day-to-day demands of a lived-in apartment. Modular carpet tiles can be considered for dry bedrooms and sitting areas, with matching spares retained for local repairs. Discuss range selection, housekeeping maintenance and refurbishment stages with Premrest.",
    overviewHeading: "Plan for stays, changeovers and housekeeping",
    overview: "Short stays and longer occupancies create different patterns of cleaning and wear. Kitchens, entrances and carpeted rooms should be considered separately. A clear record of the installed range and layout helps maintenance staff handle individual damaged tiles, while a staged refurbishment brief accounts for reservations and apartment availability.",
    benefits: [
      { title: "Support a consistent apartment finish", body: "Use physical samples to compare colours against furniture and lighting. Consider a manageable palette across apartment types and common spaces." },
      { title: "Give housekeeping a repair plan", body: "Keep labelled original-batch spares and written care guidance. Make replacement responsibilities clear and check repairs against the surrounding carpet’s condition." },
      { title: "Scope staged apartment refurbishment", body: "Identify apartments available for work and include furniture handling, removal, preparation and access arrangements in the quote brief." },
    ],
    areasHeading: "Match flooring to the apartment’s different uses",
    areas: [
      { title: "Bedrooms and dry sitting areas", body: "Assess the desired finish, cleaning routine and expected guest traffic. Include door clearances and transitions to kitchen or entry floors in the installation scope." },
      { title: "Kitchens, bathrooms and common circulation", body: "Wet areas need a suitable alternative to carpet. Common corridors and stairs require their own traffic, fire, access and maintenance assessment." },
    ],
    checklistHeading: "Prepare a serviced-apartment flooring brief",
    checklist: ["Property location, apartment types and carpeted room areas", "Guest booking patterns and apartments available for work", "Housekeeping care plan, cleaning access and drying windows", "Furniture handling, existing substrate and doorway transitions", "Range palette, matching spare inventory and required technical evidence"],
    quoteHeading: "Plan your serviced-apartment carpet refurbishment",
    quoteIntro: "Request range samples or describe the apartments you need to refresh. We can discuss supply for your maintenance trade or a scoped installation quote in Melbourne, Sydney and Brisbane.",
    faqs: [
      { question: "Can carpet tiles be considered for serviced apartments?", answer: "Yes, for suitable dry bedrooms and sitting areas subject to the property specification. Consider guest traffic, furniture use, housekeeping routines and the substrate when selecting a range." },
      { question: "Can housekeeping replace damaged carpet tiles?", answer: "Individual tiles can be lifted and replaced when installed with suitable adhesive. Provide care and replacement guidance, assign the task appropriately and use original-batch spares. Wear can affect the appearance of a replacement." },
      { question: "Can apartments be refurbished in stages?", answer: "Discuss reservations, available apartments and access windows with Premrest. A staged plan should include furniture movement, removal, preparation and installation rather than assuming carpet laying is the only task." },
      { question: "Should the same flooring be used in guest rooms and corridors?", answer: "Different spaces may have different traffic, fire, access and cleaning requirements. Provide the specification for each area so the proposed range and available evidence can be reviewed." },
      { question: "Can you supply an aparthotel outside the main cities?", answer: "Supply-only is available Australia-wide. Premrest offers installation in Melbourne, Sydney and Brisbane; other locations need project-specific discussion and should not be assumed available." },
    ],
    related: ["airbnb-flooring", "retirement-living-flooring", "build-to-rent-flooring"],
  },
  {
    slug: "pet-friendly-rental-flooring",
    label: "Pet-Friendly Rentals",
    title: "Pet-Friendly Rental Flooring & Carpet Tiles | Premrest",
    description: "Explore carpet for pet-friendly rental homes. Plan cleaning, matching spares and local repairs between tenancies. Request carpet samples or a project quote.",
    heading: "Pet-Friendly Rental Flooring with a Plan for Carpet Repairs",
    audience: "Landlords and property managers of pet-friendly homes",
    intro: "A pet-friendly rental needs flooring chosen around the rooms, cleaning routine and likely wear. Modular carpet tiles can offer a local replacement option in dry bedrooms and living areas when damage cannot be resolved by cleaning. Compare samples and discuss your property’s needs with Premrest before choosing a range.",
    overviewHeading: "Plan for pets without assuming carpet is damage-proof",
    overview: "Claws, tracked-in dirt and pet accidents can affect any carpet. A practical rental-flooring brief combines room selection, prompt cleaning and a reserve of matching spare tiles. It also considers whether an incident has affected the adhesive or substrate, because replacing the visible carpet alone may not resolve the underlying problem.",
    benefits: [
      { title: "Keep a local replacement option", body: "Store matching original-batch tiles for damage that cleaning cannot remove. Inspect the substrate before fitting a replacement and check the repair against surrounding wear." },
      { title: "Choose colours in the actual property", body: "Compare samples under the room’s lighting and against furniture and paint. Consider the owner’s maintenance preferences as well as the finish shown in rental photographs." },
      { title: "Agree a carpet care routine", body: "Use the manufacturer’s care guidance for cleaning and spills. Discuss pet-related requirements with your property manager and cleaning contractor before specifying the floor." },
    ],
    areasHeading: "Choose carpeted areas room by room",
    areas: [
      { title: "Dry bedrooms and living rooms", body: "Consider whether carpet suits the room’s use, cleaning access and expected pet traffic. Plan matching spares and clear transitions to adjoining hard floors." },
      { title: "Wet areas and frequent spill zones", body: "Kitchens, bathrooms, laundries and areas exposed to repeated water need a separate flooring choice. An entry and matting plan can help manage dirt carried into carpeted areas." },
    ],
    checklistHeading: "What to include in a pet-friendly rental flooring enquiry",
    checklist: ["Property location and rooms proposed for carpet", "Expected pet use, entry routes and cleaning arrangements", "Existing stains, odours or substrate concerns needing assessment", "Vacant-property or tenant access windows", "Preferred range, matching spare storage and installation requirements"],
    quoteHeading: "Discuss carpet for your pet-friendly rental",
    quoteIntro: "Request samples or tell us which rooms you are refreshing. We can discuss a supply-only quote for your flooring trade or installation in Melbourne, Sydney and Brisbane.",
    faqs: [
      { question: "Are these carpet tiles pet-proof?", answer: "No. We do not describe the carpet as pet-proof or guarantee resistance to scratching, stains or odours. Choose the range and care plan for the property’s actual use, and keep matching spare tiles for local damage." },
      { question: "Can I replace tiles after a pet accident?", answer: "A damaged tile may be replaced, but first assess whether the adhesive or substrate has been affected. Cleaning or remediation may be needed before fitting new carpet. Follow manufacturer guidance and use original-batch spares where possible." },
      { question: "Will a spare tile match the existing carpet?", answer: "Original-batch spares provide the best starting point, but existing wear, fading and cleaning history can affect the appearance. New batches should not be assumed to match the original carpet exactly." },
      { question: "Is carpet suitable throughout a pet-friendly rental?", answer: "Assess each room separately. Dry bedrooms and living areas may suit carpet, while wet areas and frequent spill zones need another flooring assessment. Consider cleaning access and the likely pattern of pet use." },
      { question: "Can I request samples before deciding on a carpet range?", answer: "Yes. Request free Haven or Horizon samples to compare colour and texture in your property. Premrest will confirm sample selection and delivery details after your enquiry." },
    ],
    related: ["airbnb-flooring", "build-to-rent-flooring", "student-accommodation-flooring"],
  },
];

export function getSectorPage(slug: string): SectorPage {
  const page = sectorPages.find((item) => item.slug === slug);
  if (!page) throw new Error(`Unknown flooring sector: ${slug}`);
  return page;
}
