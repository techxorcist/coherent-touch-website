# Integration Guide: Contact Form & PayPal

This guide explains how to add the contact form and PayPal payment integration to the Coherent Touch website.

## Contact Form Integration

### Option 1: Netlify Forms (Recommended - Free)

Netlify Forms provides free form handling for static sites with no backend required.

#### Steps:

1. **Uncomment the form in `contact.html`**:
   ```html
   <!-- Remove the comment tags around this section -->
   <form class="contact-form" data-netlify="true" name="contact">
       <!-- form content already exists -->
   </form>
   ```

2. **Deploy to Netlify** (if not already done):
   - Connect your GitHub repository to Netlify
   - Set publish directory to `static_site`
   - Deploy

3. **Enable form detection**:
   - Netlify automatically detects forms with `data-netlify="true"`
   - Forms will appear in Netlify admin panel after first deployment

4. **Configure notifications**:
   - In Netlify dashboard → Site settings → Forms
   - Set up email notifications to Henry's email
   - Optional: Add spam filtering

5. **Test the form**:
   - Submit a test message through the live site
   - Check Netlify dashboard for form submissions
   - Verify email notifications are working

#### Features:
- ✅ Free (up to 100 submissions/month)
- ✅ Spam filtering included
- ✅ Email notifications
- ✅ Form submission dashboard
- ✅ No server maintenance required

### Option 2: Formspree (Alternative)

If you prefer a different service:

1. **Sign up at formspree.io**
2. **Replace form action**:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
   ```
3. **Add hidden input**:
   ```html
   <input type="hidden" name="_subject" value="New Contact Form Submission">
   ```

### Option 3: Custom Backend

For more control, you could set up a custom form handler using:
- Vercel Functions
- Netlify Functions
- AWS Lambda
- Traditional server (PHP, Node.js, Python)

## PayPal Integration

### Current Status
The rates page has a placeholder for PayPal integration. Here's how to add it:

### Option 1: PayPal Buttons (Recommended)

#### Steps:

1. **Create PayPal Business Account**:
   - Go to paypal.com/business
   - Sign up or upgrade existing account

2. **Generate Payment Buttons**:
   - Log into PayPal Business account
   - Go to Merchant Services → PayPal Buttons
   - Create buttons for each service:
     - 1 Hour Session - $80
     - 1.5 Hour Session - $110
     - 2 Hour Session - $140
     - 1 Hour Out-call - $125

3. **Replace placeholder in `rates.html`**:
   
   Find this section:
   ```html
   <div class="payment-notice">
       <p><strong>PayPal Payment:</strong> Online payment integration will be available soon...</p>
   </div>
   ```

   Replace with:
   ```html
   <div class="paypal-buttons">
       <h3>Pay Online with PayPal</h3>
       
       <!-- 1 Hour Session Button -->
       <div class="paypal-button-container">
           <h4>1 Hour Session - $80</h4>
           <!-- Paste PayPal button code here -->
           <form action="https://www.paypal.com/donate" method="post" target="_top">
               <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID_1HR">
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - Pay Now" alt="Buy Now">
           </form>
       </div>

       <!-- 1.5 Hour Session Button -->
       <div class="paypal-button-container">
           <h4>1.5 Hour Session - $110</h4>
           <!-- Paste PayPal button code here -->
           <form action="https://www.paypal.com/donate" method="post" target="_top">
               <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID_15HR">
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - Pay Now" alt="Buy Now">
           </form>
       </div>

       <!-- 2 Hour Session Button -->
       <div class="paypal-button-container">
           <h4>2 Hour Session - $140</h4>
           <!-- Paste PayPal button code here -->
           <form action="https://www.paypal.com/donate" method="post" target="_top">
               <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID_2HR">
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - Pay Now" alt="Buy Now">
           </form>
       </div>

       <!-- Out-call Button -->
       <div class="paypal-button-container">
           <h4>1 Hour Out-call - $125</h4>
           <!-- Paste PayPal button code here -->
           <form action="https://www.paypal.com/donate" method="post" target="_top">
               <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID_OUTCALL">
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - Pay Now" alt="Buy Now">
           </form>
       </div>
   </div>
   ```

4. **Add CSS styling** to `style.css`:
   ```css
   .paypal-buttons {
       background: white;
       padding: 2rem;
       border-radius: 8px;
       box-shadow: 0 2px 10px rgba(0,0,0,0.1);
       margin: 2rem 0;
   }

   .paypal-button-container {
       border: 1px solid #ddd;
       border-radius: 8px;
       padding: 1.5rem;
       margin: 1rem 0;
       text-align: center;
       transition: border-color 0.3s ease;
   }

   .paypal-button-container:hover {
       border-color: #51753c;
   }

   .paypal-button-container h4 {
       color: #51753c;
       margin-bottom: 1rem;
   }

   .paypal-button-container form {
       margin: 0;
   }
   ```

### Option 2: PayPal JavaScript SDK (Modern)

For a more integrated experience:

1. **Add PayPal SDK to pages**:
   ```html
   <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD"></script>
   ```

2. **Replace button HTML with div containers**:
   ```html
   <div id="paypal-button-1hr"></div>
   <div id="paypal-button-15hr"></div>
   <div id="paypal-button-2hr"></div>
   <div id="paypal-button-outcall"></div>
   ```

3. **Add JavaScript to initialize buttons**:
   ```javascript
   // 1 Hour Session
   paypal.Buttons({
       createOrder: function(data, actions) {
           return actions.order.create({
               purchase_units: [{
                   amount: {
                       value: '80.00'
                   },
                   description: '1 Hour Massage Session'
               }]
           });
       },
       onApprove: function(data, actions) {
           return actions.order.capture().then(function(details) {
               alert('Payment completed by ' + details.payer.name.given_name);
               // Add success handling here
           });
       }
   }).render('#paypal-button-1hr');
   ```

## Security Considerations

### Contact Form:
- ✅ Netlify Forms includes spam filtering
- ✅ Form validation is handled client-side
- ✅ No sensitive data stored in code

### PayPal:
- ✅ All payment processing handled by PayPal
- ✅ No sensitive payment data touches your server
- ✅ PCI compliance handled by PayPal
- ⚠️ Keep PayPal client IDs public (button IDs are safe to expose)
- ⚠️ Never store PayPal secret keys in frontend code

## Testing

### Contact Form Testing:
1. Submit test message through live site
2. Check form appears in Netlify/Formspree dashboard
3. Verify email notifications work
4. Test spam filtering with obvious spam content

### PayPal Testing:
1. Use PayPal Sandbox for testing
2. Create test accounts at developer.paypal.com
3. Test each payment amount
4. Verify payment confirmations
5. Switch to live PayPal keys when ready

## Maintenance

### Monthly Tasks:
- Check form submissions in dashboard
- Review PayPal transaction reports
- Update any expired API keys
- Monitor for spam submissions

### Backup Strategy:
- Form submissions are automatically stored by Netlify/Formspree
- PayPal transactions are tracked in PayPal dashboard
- No additional backup required for these features

## Troubleshooting

### Contact Form Issues:
- **Form not submitting**: Check `data-netlify="true"` attribute
- **No email notifications**: Verify email settings in Netlify dashboard
- **Spam issues**: Enable Netlify's built-in spam filtering

### PayPal Issues:
- **Buttons not working**: Verify client ID and button IDs
- **Wrong amounts**: Double-check button configuration
- **Payments not processing**: Check PayPal account status and API credentials

## Support Resources

- **Netlify Forms**: docs.netlify.com/forms
- **PayPal Developer**: developer.paypal.com
- **Formspree**: formspree.io/guides
- **PayPal Buttons**: paypal.com/buttons

---

**Note**: Both integrations can be implemented without changing the core site structure. The existing code is designed to accommodate these additions with minimal disruption.