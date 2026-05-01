# IMAGE & MEDIA REPLACEMENT GUIDE
## Where to add your real photos and videos

---

## Folder Structure

```
public/
├── images/
│   ├── hero-desktop.jpg      ← Landing page image (landscape, ~2000x1200px)
│   ├── hero-mobile.jpg       ← Landing page image (portrait, ~1000x1400px)
│   ├── about-photo.jpg       ← About section editorial photo (~1000x1400px)
│   └── gallery/
│       ├── 1.jpg             ← Gallery image 1 (large, spans 2 cols)
│       ├── 2.jpg             ← Gallery image 2
│       ├── 3.jpg             ← Gallery image 3
│       ├── 4.jpg             ← Gallery image 4 (wide, spans 2 cols)
│       ├── 5.jpg             ← Gallery image 5
│       └── 6.jpg             ← Gallery image 6
└── videos/
    └── gate-bg.mp4           ← Gate page video background (looping, muted)
```

## Image Recommendations

| Image | Recommended Size | Notes |
|-------|-----------------|-------|
| hero-desktop.jpg | 2000x1200px | Landscape crop of artist — fills full screen on desktop |
| hero-mobile.jpg | 1000x1400px | Portrait crop of artist — fills full screen on mobile |
| about-photo.jpg | 1000x1400px | Editorial photo for the About section left panel |
| gallery/1.jpg | 1200x1600px | Large image — spans 2 columns and 2 rows on desktop |
| gallery/2-6.jpg | 800x800px | Standard square or landscape gallery images |
| gate-bg.mp4 | 1920x1080px | Short looping video (10-30 sec), dark/moody, muted |

## Tips

- Compress images before uploading (use TinyPNG or Squoosh)
- JPG format for photos, keep under 500KB each for fast loading
- MP4 format for video, keep under 5MB, use H.264 codec
- Gallery images look best with a mix of portrait and landscape crops
- The about photo should be dark/moody — a grayscale filter is applied automatically

## Sections with placeholder content to replace

1. **Gate video** — Replace `/public/videos/gate-bg.mp4` with the Ghost Mode promo clip
2. **Hero images** — Replace with Wavy's editorial photos (the couch shoot works great)
3. **Gallery** — Replace with the 6 screenshots you already have from the shoot
4. **About photo** — Use the wide shot from the couch/ladder shoot
5. **Album art placeholders** — In the featured release heroes and singles scroll, the dark squares with text will be replaced once album artwork is ready
6. **Video thumbnails** — In the videos grid, placeholders will be replaced with YouTube thumbnail URLs once music videos are uploaded
7. **Performance photos** — In The Stage section, 5 placeholder cards for live performance shots
