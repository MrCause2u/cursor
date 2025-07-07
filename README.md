# Aloysius Ministries Website

A modern, responsive website for Aloysius Ministries - a life-changing ministry dedicated to spreading the gospel of our Lord Jesus Christ, with specialized focus on children's Bible study programs and donation functionality.

## 🌟 Features

### 📱 Responsive Design
- **Mobile-first approach** - Optimized for all screen sizes
- **Tablet-friendly** - Perfect layout for iPad and tablet devices
- **Desktop optimized** - Full-featured experience on larger screens
- **Cross-browser compatible** - Works on all modern browsers

### 🏠 Pages Included
1. **Home Page** (`index.html`)
   - Hero section with compelling call-to-action
   - Service times and ministry information
   - Mission statement and values
   - Upcoming events showcase
   - Donation call-to-action

2. **About Us Page** (`about.html`)
   - Church history and story
   - Mission, vision, and values
   - Core beliefs and doctrine
   - Leadership team profiles
   - How to join the church

3. **Contact Page** (`contact.html`)
   - Contact information and office hours
   - Interactive contact form
   - Service times display
   - Google Maps integration
   - Emergency contact section

4. **Donate Page** (`donate.html`)
   - Multiple donation options
   - Online giving form
   - Monthly recurring donations
   - Alternative giving methods
   - Impact statistics and transparency

### 💰 Donation Features
- **One-time donations** with $20 minimum (focused on children's ministry)
- **Custom donation amounts** starting from $20
- **Monthly recurring giving** for sustained support
- **Multiple payment methods** (Credit/Debit, PayPal, Bank Transfer)
- **Secure donation processing**
- **Tax receipt options**
- **Alternative giving methods** (Check, Text-to-Give, Planned Giving, etc.)
- **Specific donation categories** (Children's meals, education sponsorship, ministry support)

### 🎨 Design Elements
- **Modern gradient color scheme** (Purple/Blue theme)
- **Professional typography** using Poppins font
- **Font Awesome icons** for visual enhancement
- **High-quality images** from Unsplash
- **Smooth animations** and transitions
- **Accessible design** following best practices

### ⚡ Interactive Features
- **Mobile hamburger navigation**
- **Smooth scrolling** between sections
- **Form validation** with user feedback
- **Notification system** for user actions
- **Animated counters** for statistics
- **Scroll-to-top button**
- **Tab functionality** on donation page

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor for customization (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation
1. Download all files to your web server or local development environment
2. Ensure the folder structure is maintained:
   ```
   /
   ├── index.html
   ├── about.html
   ├── contact.html
   ├── donate.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   └── script.js
   └── README.md
   ```

### Local Development
1. Open `index.html` in your web browser
2. Or use a local server for better development experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🛠️ Customization

### Changing Ministry Information
1. **Ministry Name**: Currently set to "Aloysius Ministries" throughout all files
2. **Contact Information**: Update contact details in footer and contact sections
3. **Ministry Schedule**: Currently set for Children's Bible Study (1st & 3rd Saturday)
4. **Leadership Team**: Features Pastor Kabagambe Aloyzious (Pastor Aloysius) in `about.html`
5. **Donation Minimums**: Currently set to $20 minimum reflecting ministry needs

### Styling Customization
1. **Colors**: Modify CSS variables in `styles.css`
   ```css
   :root {
     --primary-color: #667eea;
     --secondary-color: #764ba2;
   }
   ```
2. **Fonts**: Change the Google Fonts import in HTML files
3. **Images**: Replace Unsplash URLs with your own images

### Adding Content
1. **Events**: Add new event cards in the events section
2. **Services**: Modify service offerings in the services grid
3. **Testimonials**: Add member testimonials to the home page
4. **Blog/News**: Create additional pages for church news

## 📧 Form Integration

### Contact Form
The contact form currently uses JavaScript simulation. To integrate with a real backend:

1. **PHP Integration**:
   ```php
   // contact-handler.php
   if ($_POST['name']) {
       // Process form data
       // Send email
       // Return JSON response
   }
   ```

2. **Node.js Integration**:
   ```javascript
   // Express.js endpoint
   app.post('/contact', (req, res) => {
       // Process form data
       // Send email using nodemailer
       // Return response
   });
   ```

3. **Third-party Services**:
   - Formspree
   - Netlify Forms
   - EmailJS

### Donation Processing
For real donation processing, integrate with:
- **Stripe** for credit card processing
- **PayPal** for PayPal donations
- **Square** for comprehensive payment solutions
- **Donorbox** for nonprofit-specific features

## 🔧 Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Optimized images with lazy loading
- Minified CSS and JavaScript (production ready)
- Font display optimization
- Efficient animations using CSS transforms

### SEO Features
- Semantic HTML structure
- Meta tags for social sharing
- Alt text for all images
- Structured data markup ready

### Accessibility
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Touch-friendly navigation
- Responsive images
- Mobile-optimized forms
- Fast loading times
- Swipe gestures support

## 🎯 Best Practices Implemented

1. **Progressive Enhancement** - Core functionality works without JavaScript
2. **Mobile-First Design** - Designed for mobile, enhanced for desktop
3. **Performance Optimization** - Fast loading and smooth interactions
4. **Security Considerations** - Form validation and input sanitization
5. **User Experience** - Intuitive navigation and clear call-to-actions

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## 📞 Support

For support or questions about this website template:
- Check the documentation above
- Review the code comments for implementation details
- Test all features before going live

## 📄 License

This website template is provided as-is for church and non-profit use. Feel free to modify and distribute.

---

**Built with ❤️ for the church community**

*Last updated: December 2024*