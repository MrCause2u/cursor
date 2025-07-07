# YouTube Videos Setup Guide
## Aloysius Ministries Website

The About page now includes a Ministry Videos section with placeholder YouTube embeds. Follow these instructions to replace them with actual videos from Pastor Aloysius's channel.

---

## 🎥 **Current Video Placeholders**

The following video embeds are currently using placeholder YouTube IDs and need to be updated:

### **Video 1: Children's Bible Study Program**
- **Current URL**: `https://www.youtube.com/embed/dQw4w9WgXcQ`
- **Purpose**: Show Pastor Aloysius teaching children during Bible study sessions
- **Suggested Content**: Children participating in Bible study, receiving meals, worship and praise

### **Video 2: Prophetic & Healing Ministry**
- **Current URL**: `https://www.youtube.com/embed/dQw4w9WgXcQ`
- **Purpose**: Demonstrate Pastor Aloysius's prophetic gifts and healing ministry
- **Suggested Content**: Prophetic ministry sessions, healing testimonies, divine manifestations

### **Video 3: Ministry Testimonies & Impact**
- **Current URL**: `https://www.youtube.com/embed/dQw4w9WgXcQ`
- **Purpose**: Share transformation stories and ministry impact
- **Suggested Content**: Community testimonies, ministry growth, children's success stories

---

## 🔧 **How to Update Video IDs**

### **Step 1: Get YouTube Video IDs**
1. Go to Pastor Aloysius's channel: https://youtube.com/@Pastor_Aloysius
2. Find the videos you want to embed
3. Copy the video ID from the URL. For example:
   - Full URL: `https://www.youtube.com/watch?v=ABC123XYZ`
   - Video ID: `ABC123XYZ`

### **Step 2: Update the HTML**
Open `about.html` and find the three video iframes. Replace the placeholder IDs:

```html
<!-- Replace this placeholder ID -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1">

<!-- With your actual video ID -->
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1">
```

### **Step 3: Update Video Titles and Descriptions**
For each video, update:
1. The `title` attribute in the iframe
2. The `<h4>` heading in the video-info section
3. The description paragraph

---

## 📱 **Social Media Integration**

The following social media links have been updated throughout the website:

### **Updated Social Links**
- **Facebook**: https://facebook.com/aphmug
- **Instagram**: https://instagram.com/padtor_aloysius  
- **YouTube**: https://youtube.com/@Pastor_Aloysius
- **WhatsApp**: https://wa.me/256787833539

### **Pages Updated**
- ✅ Home page (index.html) - Footer social links
- ✅ About page (about.html) - Footer social links + Video section
- ✅ Contact page (contact.html) - Contact section + Footer
- ✅ Donate page (donate.html) - Footer social links

---

## 📞 **Contact Information Updates**

The following contact details have been updated across all pages:

### **New Contact Information**
- **WhatsApp**: +256 787 833 539
- **Mobile**: +256 785 461 966
- **Email**: info@aloysiusministries.org
- **Address**: GR2R+87 Lwebali, P.O Box 770187, Kyenojo - Uganda

### **Updated Locations**
- Contact page contact items section
- All page footers
- Structured data (Schema.org)
- Google Maps embed (updated to Uganda location)

---

## 🎯 **SEO Benefits of Video Integration**

### **Enhanced Search Rankings**
- **Video Schema**: Consider adding VideoObject schema for each video
- **Rich Snippets**: Videos may appear in search results with thumbnails
- **Engagement Metrics**: Video content increases time on page
- **Social Proof**: YouTube subscriber count and views build credibility

### **Recommended Video Schema Addition**
Add this to each video for better SEO:

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Pastor Aloysius - Children's Bible Study Ministry",
  "description": "Watch how Pastor Aloysius teaches and feeds 250+ children",
  "thumbnailUrl": "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
  "embedUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  "uploadDate": "2024-01-01",
  "publisher": {
    "@type": "Organization",
    "name": "Aloysius Ministries",
    "logo": "https://aloysiusministries.org/images/logo.png"
  }
}
```

---

## 📋 **Next Steps Checklist**

### **Immediate Actions**
- [ ] Upload quality ministry videos to Pastor Aloysius's YouTube channel
- [ ] Replace placeholder video IDs with actual video IDs
- [ ] Update video titles and descriptions to match content
- [ ] Test video playback on mobile and desktop
- [ ] Verify all social media links work correctly

### **Optional Enhancements**
- [ ] Add video thumbnails as fallback images
- [ ] Implement lazy loading for better performance
- [ ] Add video transcript for accessibility
- [ ] Create video playlist on YouTube channel
- [ ] Add call-to-action overlays on videos

---

## 🚀 **Benefits of Current Implementation**

### **Performance Optimized**
- ✅ Videos load lazily (only when scrolled into view)
- ✅ Responsive design works on all devices
- ✅ YouTube's optimized player reduces bandwidth usage
- ✅ Hover effects and smooth animations enhance UX

### **SEO Optimized**
- ✅ Proper iframe titles for accessibility
- ✅ YouTube channel link for backlink value
- ✅ Social media integration across all pages
- ✅ Structured data includes all contact information

### **User Experience**
- ✅ Professional video card design
- ✅ Direct links to YouTube channel
- ✅ Clear call-to-action buttons
- ✅ Mobile-responsive layout

---

**Last Updated**: December 2024  
**Next Review**: After uploading actual ministry videos