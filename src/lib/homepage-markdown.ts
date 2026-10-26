import { sectorNavigation } from "@/lib/sector-navigation";

export const HOMEPAGE_MARKDOWN = `# Carpet Tiles for Rental Properties. Replace a Tile, Not the Whole Room.

**Modular Carpet by Premrest.**

Stains or damage between tenancies? Replace the affected carpet tiles instead
of re-carpeting the whole room. For landlords and property managers: supply
Australia-wide, with installation in Melbourne, Sydney and Brisbane. Keep
matching spares for future repairs.

- [Get a carpet quote](https://www.modularcarpet.com.au/contact)
- [Request free carpet samples](https://www.modularcarpet.com.au/contact?request=samples#enquiry)
- Call 1300 207 915

## See the carpet. Choose your colours. Get a quote.

Start with free physical samples of Haven or Horizon. Compare colours in your
rental property, then ask us to quote the area and installation you need.
You do not need measurements to make a first enquiry.

Tell us your suburb, approximate carpet area and whether you need supply-only
or installation. Premrest will quote the carpet, delivery, installation and
any preparation or transitions your property needs.

## Choose Your Carpet Colours — Then Try a Sample

Explore Haven and Horizon for rental bedrooms, living rooms and hallways.
Request free samples to compare colour and texture before you choose.

- [Haven](https://www.modularcarpet.com.au/ranges/haven): eight colourways
- [Horizon](https://www.modularcarpet.com.au/ranges/horizon): eight colourways

## Supply and Install, or Supply Only

Choose supply-only for your own flooring trade, or ask Premrest to measure,
supply and install in Melbourne, Sydney or Brisbane. Keep matching spare tiles
so local damage can be repaired between tenancies.

- [Installation service](https://www.modularcarpet.com.au/installation)
- [Carpet tile installation guide](https://www.modularcarpet.com.au/how-to-install)

## Find Carpet for Your Property

- [Rental properties](https://www.modularcarpet.com.au/rental-flooring)
- [Investment property flooring](https://www.modularcarpet.com.au/investment-property-flooring)
- [Hotels and motels](https://www.modularcarpet.com.au/hotel-carpet)

## Flooring by Property Type

${sectorNavigation.map((sector) => `- [${sector.label}](https://www.modularcarpet.com.au/${sector.slug})`).join("\n")}

## Product Details

- Solution-dyed nylon fibre
- Tile dimensions: 500 × 1000 mm
- Recycled PET felt backing
- Acoustic rating: 0.25 NRC
- Manufacturer wear warranty applies; ask for terms and exclusions
- Subfloors must be clean, dry, level and suitable for the flooring and adhesive
- Felt backing does not resolve damp slabs; assess moisture before installation

## Samples and Quotes

The enquiry form supports quotes, free samples and product questions.
Only name and email are required. Project location, phone, preferred range,
service and approximate area are optional. Premrest replies within one business
day and confirms sample delivery details after your request.

## Company

- Brand: Modular Carpet by Premrest
- Legal entity: Premier Restorations Group Pty Ltd
- Address: 1/99 Heyington Ave, Thomastown, VIC 3074, Australia
- Phone: 1300 207 915
- Email: modular@premrest.com.au
- Hours: Monday to Friday, 08:30–17:00 AEST
- [Sitemap](https://www.modularcarpet.com.au/sitemap.xml)
`;
