Drop photos from the NetOne Dynamic Antenna Intelligence project / Nesari
Competitions event in Masvingo into this folder (e.g. pitch.jpg, team.jpg),
then list them in the project's `gallery` array in lib/data.ts:

  gallery: [
    "/images/projects/netone/pitch.jpg",
    "/images/projects/netone/team.jpg",
  ],

Once the gallery has at least one photo, the "Photos coming soon" label
turns into a "View Gallery" button automatically.

Certificate: put it in public/certificates/ (e.g. nesari-competitions.jpg) and
set `image: "/certificates/nesari-competitions.jpg"` on the
"nesari-competitions" entry in the `certificates` array in lib/data.ts.
