BROWSER RULE (Hamza): don't paste prompts/text/links by script (no JS injection, clipboard script or fill command); only paste or type like a human; leave a 30–60 second gap between actions; move the cursor along random human-like paths, not straight lines.

IMPORTANT: the repo default branch is NOT main, but Production tracks **main**. Always branch from main and set PR base to **main**.

MODE: AUTOMATED (Hamza 12 Nov + 16 Nov: local build/test first, then PR base main, merge when green, deploy live, verify live yourself). Automatic Vercel preview on a feature-branch PR is fine; do NOT change Vercel settings or promote a preview yourself. Merge and deploy live without waiting for Hamza.

Repo: infowayfreelance/AHS-Recovery
Branch from main: onpage-roadside-assistance
PR base: main

Page ONLY: https://ahsrecovery.co.uk/services/roadside-assistance
Scope: copy, metadata, JSON-LD, internal links. No design/layout/image change. Reuse existing section/card/step/list/accordion components.

Brand hard rules:
- "AHS Recovery"; phone **07883 546955**; address 203 Tiptree Cres, Ilford IG5 0ST
- No £, no 24/7, no fleet, no tonnage limits, no insurance or accreditation claims, no response times; no tyre-fitting, fuel-delivery or locksmith claims
- Don't change the homepage, /services, /services/4x4-off-road-recovery, /services/winch-out-recovery, /services/plant-haulage, /services/breakdown-assistance or other pages; don't reuse the Day-5 breakdown-assistance wording

Full Day-6 brief follows next — implement every section (title/meta/H1/og with Ilford, Highway Code link + FAQ 7 reword, 3 new H2s: roadside help around Ilford and East London, at home/at work/in a car park, puncture/wrong fuel/keys; FAQ 8 → 12; Service + FAQPage JSON-LD; internal links incl. the homepage as "car recovery in Ilford"). Build/test locally, push, PR base=main, merge when green, deploy live.

Report back: live URL, PR number, merge SHA, and the brief's verify checklist (section 8) with PASS/FAIL.

========== FULL DAY-6 BRIEF ==========

BROWSER RULE (Hamza): don't paste prompts/text/links by script (no JS injection, clipboard script or fill command); only paste or type like a human; leave a 30–60 second gap between actions; move the cursor along random human-like paths, not straight lines.

IMPORTANT: the repo default branch is NOT main, but Production tracks **main**. Always branch from main and set PR base to **main**.

# On-page brief: ahsrecovery.co.uk/services/roadside-assistance (Day 6, 24 Nov 2026) — competitor-gap pass

**For:** ChatGPT, in the ahsrecovery.co.uk "Website work" chat.
**Mode:** AUTOMATED — local build/test, PR base **main**, merge when green, deploy live; verify live yourself; report the live URL + PR number + merge SHA. Automatic Vercel preview on a feature-branch PR is fine; do NOT change Vercel settings. Merge and deploy without waiting for Hamza.
**Repo:** infowayfreelance/AHS-Recovery · **Branch from main:** onpage-roadside-assistance · **PR base:** main
**Scope:** copy, metadata, JSON-LD and internal links on this page only. **No design, layout or image changes.** Reuse the existing section, card, step, list and accordion components. White-hat only.
**Page:** https://ahsrecovery.co.uk/services/roadside-assistance
**Status in queue:** row #7, "done" on the 19 Nov crawl (basics in place: Service, BreadcrumbList, FAQPage 8 whose text matches the visible answers, 1,297 words, 11 H2s). Today is the competitor-gap pass. Found on 24 Nov: **no Ilford, Essex or East London anywhere in the title, meta, H1 or body** (only the footer), nothing about **where the help happens** (home, work, car park), nothing for **punctures, wrong fuel or locked-in keys** (every competitor lists these), nothing for **drivers without breakdown cover**, an FAQ ("Should I remain inside my vehicle?") that says "follow official road-safety instructions" with no source, a thin Service schema (name only), and no link to the homepage (which owns "car recovery ilford").

## Brand rules (AHS Recovery)
- Name **"AHS Recovery"**; phone **07883 546955** only; address 203 Tiptree Cres, Ilford IG5 0ST.
- **No £, no "24/7", no fleet, no tonnage limits, no insurance or accreditation claims, no response times.** Don't name other businesses. Don't claim tyre fitting, fuel delivery or key/locksmith services (the site doesn't offer them): for those problems the copy says "tell us, and we'll explain the options".
- Local services business in Ilford (the only Ilford site in Hamza's set). Don't reuse the wording of the Day-5 breakdown-assistance sections ("Breakdown Recovery in Ilford, Essex and East London", "Recovery or Roadside Assistance?", "No Breakdown Cover? You Can Still Call Us").

## Why this page (GSC first)
- GSC 16 Nov export (Web, "3 months" setting; data 19 Oct–14 Nov 2026, short history; `/workspace/gsc-onpage-2026-11-16/ahsrecovery.co.uk/Pages.csv`): **this page 0 clicks, 16 impressions, avg pos 19.3** — page 2, no clicks; not "ranking well" (leave rule: avg pos ≤8 with clicks), so the gap pass goes ahead.
- Related queries (site-level `Queries.csv`; query→page mapping inferred): no roadside query has impressions yet; the site's real demand is local: "ilford car recovery" 41 impr pos 12.8 · "car recovery ilford" 9 impr, 1 click, pos 15.2 · "recovery ilford" 4 pos 12. So the title, meta and H1 gain **Ilford**, and the body gains a local block.
- **Cannibalisation notes:** (1) the homepage owns "car recovery ilford" (queue row 2): **don't touch it**, link to it with the anchor "car recovery in Ilford". (2) /services/breakdown-assistance (Day 5) has the Ilford breakdown block, recovery-vs-roadside and no-cover sections: this page links to it and words its own sections differently (where help happens, problems that need a different fix). (3) /services/jump-starts, /services/motorway-breakdown-recovery, /services/towing and /services/vehicle-recovery: link, don't repeat. (4) /blog/broken-down-no-breakdown-cover and /blog/what-to-do-if-your-car-breaks-down-on-a-motorway: "read more" links.
- Live page (24 Nov fetch): HTTP 200, 1,297 words, H1 "Professional Roadside Assistance", 11 H2s, AutomotiveBusiness + Service + BreadcrumbList + FAQPage (8), 22 internal links, phone 07883 546955. Extract: `/workspace/onpage-daily/2026-11-24/competitors/_own-pages/ahsrecovery_co_uk_services_roadside_assistance.txt`.

## Competitors checked (web search "roadside assistance Ilford Essex East London 24/7", UK, 24 Nov 2026)
| Competitor | Title (chars) | Words | Schema | What they have that we don't |
|---|---|---|---|---|
| [Recover U Away – Roadside assistance](https://recoveruawayltd.com/roadside-assistance/) | Roadside Assistance London \| 24/7 Emergency Help (48) | 1,164 | FAQPage (7), Service, AutoRepair, BreadcrumbList | **East London/Essex place names** (Romford, Stratford, Ilford, Dagenham…), **"wherever you are — roadside, at home, work, or in a car park"**, list of jobs (jump start, flat tyre, fuel, lockout, minor repairs), FAQ "Can you fix my car on the spot?" |
| [All London Recovery – Ilford](https://alllondonrecovery.co.uk/ilford) | Car & Van Recovery Ilford \| 24/7 Breakdown & Towing (51) | 1,309 | FAQPage (8), LocalBusiness | **Ilford in title/H1**, local areas (Redbridge, Gants Hill, Seven Kings, Goodmayes), "What we cover" (tyres, keys, fuel, batteries), FAQ on the A406 |
| [Silverstone Recovery – Roadside assistance Ilford](https://www.essexcarrecovery.co.uk/roadside-assistance-ilford/) | Roadside Assistance Ilford, IG1 - 07955 589 999 - Silverstone Recovery Ltd (74) | 821 | Article, BreadcrumbList | **Ilford + IG1 in title and H1**, "while you're waiting, get to a safe location", areas covered list, A13/A127 |
| [AC Recoverys – Road side assistance Ilford](https://www.acrecoverys.co.uk/road-side-assistance-ilford) | Road Side Assistance Ilford \| AC Recoverys (42) | 552 | none | **Ilford in title/H1**, "driveway, workplace or busy road" framing, tyre changes and fuel delivery listed |
Extracts: `/workspace/onpage-daily/2026-11-24/competitors/ahs/`. (Their "24/7", "30-minute"/"within 60 minutes" response claims, "from £80", "15 GPS-tracked trucks", "5 tonnes", "fully insured" and review blocks are theirs; **never copy them**.)

**Gap summary:** all four competitors put **Ilford/London in the title and H1** and frame roadside help around **where the driver is** (home, work, car park, local roads) and the **common small problems** (tyres, fuel, keys). Our page is longer and more careful on process and safety, but has no local signal at all, no "where", no answer for puncture/wrong fuel/keys, nothing for drivers without cover, and an unsourced safety FAQ.

## 1. Title, meta, H1, og
| Element | Current | New |
|---|---|---|
| Title | Professional Roadside Assistance \| AHS Recovery (47) | **Roadside Assistance Ilford & East London \| AHS Recovery** (55) |
| Meta | Roadside assistance for cars and vans affected by common vehicle problems. Call AHS Recovery on 07883 546955 for help. (118) | **Car or van won’t start or can’t go on? AHS Recovery gives roadside assistance across Ilford, Essex and East London. Call 07883 546955 to talk it through.** (153) |
| H1 | Professional Roadside Assistance | **Professional Roadside Assistance in Ilford** |
Update og:title / og:description / twitter tags to match. Hero eyebrow "Help When Your Vehicle Stops" and the hero paragraph stay.

## 2. Edit existing copy (text only)
- "What to Do When You Are Stranded": the closing note "This is general guidance. Always follow instructions from emergency services, police and road authorities." → keep and add: **"See the [Highway Code rules on breakdowns and incidents](https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287). On a motorway, read our guide to [what to do if your car breaks down on a motorway](/blog/what-to-do-if-your-car-breaks-down-on-a-motorway)."**
- "Do You Need Roadside Assistance or Breakdown Recovery?": after "View Breakdown Recovery" keep the button; add one sentence above it: **"Our [breakdown assistance page](/services/breakdown-assistance) explains how breakdown recovery works from Ilford and across the UK."**
- FAQ 7 ("Should I remain inside my vehicle?"): new answer in section 4 (sourced to the Highway Code instead of "follow official road-safety instructions").
- Everything else (problem cards, details list, process steps, "Clear Support…", related services, CTA) stays. Don't add response times, prices or "24/7".

## 3. New sections (existing section / card / list components; insert after "Do You Need Roadside Assistance or Breakdown Recovery?" and before "Clear Support When Your Vehicle Cannot Continue", in this order)

**H2: Roadside Help Around Ilford and East London**
AHS Recovery is based in Ilford IG5. When your car or van stops near home, outside work or on a short local trip, call **07883 546955** and tell us the street or car park and the nearest landmark. We help drivers across Ilford, Essex and East London within approximately 60 miles, including Gants Hill, Barkingside, Clayhall, Newbury Park, Seven Kings, Goodmayes, Woodford, Chigwell, Romford, Barking and Dagenham.

On the A12 or the A406 North Circular, give us the direction of travel and the last junction or landmark you passed. If you've stopped on the M11 or another motorway, see [motorway breakdown recovery](/services/motorway-breakdown-recovery). If the vehicle needs to be moved rather than helped where it is, see our [car recovery in Ilford](/) and [towing](/services/towing) services.

**H2: At Home, at Work or in a Car Park**
Roadside assistance doesn't only happen beside a road. Tell us where the vehicle is and what's around it:
- **On your driveway or street:** is the vehicle blocked in, and can we get alongside it?
- **At work:** is there a gate, a barrier or a security desk we need to know about?
- **In a car park:** the car park name, the level, the bay number, and whether there's a barrier or a low entrance.
- **Keys and people:** who will be with the vehicle, and are the keys available?
These details help us decide whether roadside help, a [jump start](/services/jump-starts) or [vehicle recovery](/services/vehicle-recovery) is the right step before anyone sets off.

**H2: Puncture, Wrong Fuel or Keys Locked In?**
Some problems need a part, a specialist or a garage rather than help at the roadside. Tell us exactly what has happened and we'll explain the options:
- **Puncture or damaged wheel:** don't drive on a flat or damaged tyre. Tell us whether you have a usable spare and the locking wheel nut key. If the vehicle can't continue safely, we can arrange recovery to a tyre fitter, garage or home.
- **Wrong fuel:** don't start the engine or switch on the ignition. Call us and we'll explain whether the vehicle needs to be moved to a garage.
- **Out of fuel or keys locked inside:** tell us what has happened and where the vehicle is, and we'll explain the options on the call.
No breakdown cover? You can still call us. Read [what to do if you break down without breakdown cover](/blog/broken-down-no-breakdown-cover).

## 4. FAQs (exact text; keep FAQs 1–6 and 8 unchanged, reword FAQ 7, add 4 new ones at the end; FAQPage **12**, JSON-LD text identical to the visible answers)
1. **What roadside assistance do you provide?** We assess common vehicle problems and determine whether roadside help, a battery jump start or complete vehicle recovery is appropriate.
2. **Can you help if my car will not start?** Yes. Tell us what happens when you try to start the vehicle and whether any warning lights appear. The vehicle may require a jump start or recovery.
3. **Can you jump-start a flat battery?** Our jump-start service can assist many suitable 12V and 24V vehicles with discharged batteries.
4. **What happens if the vehicle cannot be fixed at the roadside?** If the vehicle cannot continue safely, we can arrange recovery to an agreed garage, home or another accessible destination.
5. **What details should I provide?** Provide your exact location, vehicle make and model, warning lights, symptoms, visible damage and what happened before the vehicle stopped.
6. **Can you help with vans?** We can provide roadside assistance for many small and medium-sized vans. Provide the vehicle's size and approximate weight when calling.
7. **Should I remain inside my vehicle?** This depends on where the vehicle has stopped. The Highway Code advises stopping in a place of relative safety and, where possible, keeping well away from your vehicle and moving traffic. On a motorway, if you cannot get out safely and get well away from the vehicle, stay in it with your seat belt and hazard warning lights on and call 999. See the [Highway Code rules on breakdowns](https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287).
8. **What is the difference between roadside assistance and vehicle recovery?** Roadside assistance assesses the problem at the vehicle's location. Vehicle recovery transports the vehicle when it cannot continue safely.
9. **Do you provide roadside assistance in Ilford?** Yes. AHS Recovery is based in Ilford IG5 and helps drivers at home, at work, in car parks and on local roads across Ilford, Essex and East London within approximately 60 miles. Tell us the street or car park and the nearest landmark when you call.
10. **Can you help if my car will not start in a car park or on my driveway?** Yes, tell us exactly where the vehicle is. For a car park, give the name, the level, the bay and whether there is a barrier or a low entrance. For a driveway or street, tell us whether the vehicle is blocked in. This helps us decide whether roadside help or recovery is the right step.
11. **I do not have breakdown cover. Can I still call?** Yes. You do not need to be a member of a breakdown club to call AHS Recovery. Tell us where the vehicle is and what has happened, and we will explain the options before you agree to go ahead. Read [what to do if you break down without breakdown cover](/blog/broken-down-no-breakdown-cover).
12. **What should I do if I put the wrong fuel in my vehicle?** Do not start the engine or switch on the ignition. If you are on the road, switch on your hazard warning lights and get yourself and your passengers to a safe place. Then call us, tell us the vehicle and the fuel used, and we will explain whether the vehicle needs to be moved to a garage.

**FAQ HTML (answers must be in the server-rendered HTML; keep the site's accordion classes, this shows the content and links):**
```html
<section class="faq" aria-labelledby="faq-heading">
  <div class="faq-item">
    <h3>What roadside assistance do you provide?</h3>
    <div class="faq-answer"><p>We assess common vehicle problems and determine whether roadside help, a battery jump start or complete vehicle recovery is appropriate.</p></div>
  </div>
  <div class="faq-item">
    <h3>Can you help if my car will not start?</h3>
    <div class="faq-answer"><p>Yes. Tell us what happens when you try to start the vehicle and whether any warning lights appear. The vehicle may require a jump start or recovery.</p></div>
  </div>
  <div class="faq-item">
    <h3>Can you jump-start a flat battery?</h3>
    <div class="faq-answer"><p>Our jump-start service can assist many suitable 12V and 24V vehicles with discharged batteries.</p></div>
  </div>
  <div class="faq-item">
    <h3>What happens if the vehicle cannot be fixed at the roadside?</h3>
    <div class="faq-answer"><p>If the vehicle cannot continue safely, we can arrange recovery to an agreed garage, home or another accessible destination.</p></div>
  </div>
  <div class="faq-item">
    <h3>What details should I provide?</h3>
    <div class="faq-answer"><p>Provide your exact location, vehicle make and model, warning lights, symptoms, visible damage and what happened before the vehicle stopped.</p></div>
  </div>
  <div class="faq-item">
    <h3>Can you help with vans?</h3>
    <div class="faq-answer"><p>We can provide roadside assistance for many small and medium-sized vans. Provide the vehicle's size and approximate weight when calling.</p></div>
  </div>
  <div class="faq-item">
    <h3>Should I remain inside my vehicle?</h3>
    <div class="faq-answer"><p>This depends on where the vehicle has stopped. The Highway Code advises stopping in a place of relative safety and, where possible, keeping well away from your vehicle and moving traffic. On a motorway, if you cannot get out safely and get well away from the vehicle, stay in it with your seat belt and hazard warning lights on and call 999. See the <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287">Highway Code rules on breakdowns</a>.</p></div>
  </div>
  <div class="faq-item">
    <h3>What is the difference between roadside assistance and vehicle recovery?</h3>
    <div class="faq-answer"><p>Roadside assistance assesses the problem at the vehicle's location. Vehicle recovery transports the vehicle when it cannot continue safely.</p></div>
  </div>
  <div class="faq-item">
    <h3>Do you provide roadside assistance in Ilford?</h3>
    <div class="faq-answer"><p>Yes. AHS Recovery is based in Ilford IG5 and helps drivers at home, at work, in car parks and on local roads across Ilford, Essex and East London within approximately 60 miles. Tell us the street or car park and the nearest landmark when you call.</p></div>
  </div>
  <div class="faq-item">
    <h3>Can you help if my car will not start in a car park or on my driveway?</h3>
    <div class="faq-answer"><p>Yes, tell us exactly where the vehicle is. For a car park, give the name, the level, the bay and whether there is a barrier or a low entrance. For a driveway or street, tell us whether the vehicle is blocked in. This helps us decide whether roadside help or recovery is the right step.</p></div>
  </div>
  <div class="faq-item">
    <h3>I do not have breakdown cover. Can I still call?</h3>
    <div class="faq-answer"><p>Yes. You do not need to be a member of a breakdown club to call AHS Recovery. Tell us where the vehicle is and what has happened, and we will explain the options before you agree to go ahead. Read <a href="/blog/broken-down-no-breakdown-cover">what to do if you break down without breakdown cover</a>.</p></div>
  </div>
  <div class="faq-item">
    <h3>What should I do if I put the wrong fuel in my vehicle?</h3>
    <div class="faq-answer"><p>Do not start the engine or switch on the ignition. If you are on the road, switch on your hazard warning lights and get yourself and your passengers to a safe place. Then call us, tell us the vehicle and the fuel used, and we will explain whether the vehicle needs to be moved to a garage.</p></div>
  </div>
</section>
```

## 5. Schema (JSON-LD), this page only
Keep the sitewide AutomotiveBusiness (`@id` https://ahsrecovery.co.uk/#business) and WebSite blocks and the BreadcrumbList exactly as they are. Replace the page's Service block with this (adds `@id`, description, areaServed and links the provider by `@id`):
```json
{
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": "https://ahsrecovery.co.uk/services/roadside-assistance#service",
 "name": "Roadside Assistance in Ilford and East London",
 "serviceType": "Roadside Assistance",
 "description": "Roadside assistance for cars and vans that will not start or cannot continue safely, at home, at work, in car parks and on local roads across Ilford, Essex and East London. AHS Recovery assesses the problem and decides whether roadside help, a jump start or vehicle recovery is the right step.",
 "url": "https://ahsrecovery.co.uk/services/roadside-assistance",
 "provider": {
  "@type": "AutomotiveBusiness",
  "@id": "https://ahsrecovery.co.uk/#business",
  "name": "AHS Recovery",
  "telephone": "+447883546955"
 },
 "areaServed": [
  {
   "@type": "City",
   "name": "Ilford"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Essex"
  },
  {
   "@type": "Place",
   "name": "East London"
  }
 ]
}
```
Replace the FAQPage block with this (all 12 visible Q&As, same order, text identical):
```json
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "@id": "https://ahsrecovery.co.uk/services/roadside-assistance#faq",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "What roadside assistance do you provide?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "We assess common vehicle problems and determine whether roadside help, a battery jump start or complete vehicle recovery is appropriate."
   }
  },
  {
   "@type": "Question",
   "name": "Can you help if my car will not start?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Tell us what happens when you try to start the vehicle and whether any warning lights appear. The vehicle may require a jump start or recovery."
   }
  },
  {
   "@type": "Question",
   "name": "Can you jump-start a flat battery?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Our jump-start service can assist many suitable 12V and 24V vehicles with discharged batteries."
   }
  },
  {
   "@type": "Question",
   "name": "What happens if the vehicle cannot be fixed at the roadside?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "If the vehicle cannot continue safely, we can arrange recovery to an agreed garage, home or another accessible destination."
   }
  },
  {
   "@type": "Question",
   "name": "What details should I provide?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Provide your exact location, vehicle make and model, warning lights, symptoms, visible damage and what happened before the vehicle stopped."
   }
  },
  {
   "@type": "Question",
   "name": "Can you help with vans?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "We can provide roadside assistance for many small and medium-sized vans. Provide the vehicle's size and approximate weight when calling."
   }
  },
  {
   "@type": "Question",
   "name": "Should I remain inside my vehicle?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "This depends on where the vehicle has stopped. The Highway Code advises stopping in a place of relative safety and, where possible, keeping well away from your vehicle and moving traffic. On a motorway, if you cannot get out safely and get well away from the vehicle, stay in it with your seat belt and hazard warning lights on and call 999. See the Highway Code rules on breakdowns."
   }
  },
  {
   "@type": "Question",
   "name": "What is the difference between roadside assistance and vehicle recovery?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Roadside assistance assesses the problem at the vehicle's location. Vehicle recovery transports the vehicle when it cannot continue safely."
   }
  },
  {
   "@type": "Question",
   "name": "Do you provide roadside assistance in Ilford?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. AHS Recovery is based in Ilford IG5 and helps drivers at home, at work, in car parks and on local roads across Ilford, Essex and East London within approximately 60 miles. Tell us the street or car park and the nearest landmark when you call."
   }
  },
  {
   "@type": "Question",
   "name": "Can you help if my car will not start in a car park or on my driveway?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, tell us exactly where the vehicle is. For a car park, give the name, the level, the bay and whether there is a barrier or a low entrance. For a driveway or street, tell us whether the vehicle is blocked in. This helps us decide whether roadside help or recovery is the right step."
   }
  },
  {
   "@type": "Question",
   "name": "I do not have breakdown cover. Can I still call?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. You do not need to be a member of a breakdown club to call AHS Recovery. Tell us where the vehicle is and what has happened, and we will explain the options before you agree to go ahead. Read what to do if you break down without breakdown cover."
   }
  },
  {
   "@type": "Question",
   "name": "What should I do if I put the wrong fuel in my vehicle?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Do not start the engine or switch on the ignition. If you are on the road, switch on your hazard warning lights and get yourself and your passengers to a safe place. Then call us, tell us the vehicle and the fuel used, and we will explain whether the vehicle needs to be moved to a garage."
   }
  }
 ]
}
```
No ratings, prices, response times or "24/7" in any schema.

## 6. Internal links (body copy)
- / (anchor "car recovery in Ilford", 3a) · /services/motorway-breakdown-recovery, /services/towing (3a) · /services/jump-starts, /services/vehicle-recovery (3b) · /blog/broken-down-no-breakdown-cover (3c and FAQ 11) · /services/breakdown-assistance and /blog/what-to-do-if-your-car-breaks-down-on-a-motorway (section 2).
- External source: [Highway Code: breakdowns and incidents](https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287) (section 2 and FAQ 7), returned 200 on 24 Nov.
- Keep all existing links ("Explore Our Vehicle Recovery Service", "View Breakdown Recovery", related services, nav, footer). All internal targets are in the live sitemap (28 URLs, 24 Nov).

## 7. Do NOT touch
- Design, layout, nav, footer, images, gallery, buttons, the phone (07883 546955 only), the address 203 Tiptree Cres, Ilford IG5 0ST, the AutomotiveBusiness and WebSite blocks.
- Brand hard rules: "AHS Recovery"; **no £, no "24/7", no fleet, no tonnage limits, no insurance or accreditation claims, no response times**; no tyre-fitting, fuel-delivery or locksmith claims. Don't name other businesses.
- Don't change the homepage (queue row 2), /services (Day 1), /services/4x4-off-road-recovery (Day 2), /services/winch-out-recovery (Day 3), /services/plant-haulage (Day 4), /services/breakdown-assistance (Day 5), the other service pages or the blog posts (link to them only).
- URL stays `/services/roadside-assistance`.

## 8. Verify after deploy (report back)
1. PR number, merge SHA, live URL 200 with self-referencing canonical.
2. `<title>`, meta, H1 ("Professional Roadside Assistance in Ilford") and og/twitter tags match section 1; exactly one H1.
3. The 3 new H2s are visible between "Do You Need Roadside Assistance or Breakdown Recovery?" and "Clear Support When Your Vehicle Cannot Continue"; "Ilford" appears in the body copy.
4. Rich Results Test: FAQPage (12), Service and BreadcrumbList valid; each FAQ answer in JSON-LD is identical to the visible text.
5. grep the HTML: "07883 546955" present; no "£", "24/7", "minutes", "fleet", "insured" in the new copy.
6. New body links and the Highway Code link return 200; the homepage and /services/breakdown-assistance are unchanged.
