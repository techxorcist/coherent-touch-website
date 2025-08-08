/**
 * Office Hours Widget Manager
 * Loads office hours data and injects into page elements
 */
class OfficeHoursManager {
    constructor() {
        // Office hours data - edit this object to update hours across all pages
        this.data = {
            "address": {
                "line1": "1805 Bancroft St. Suite 1",
                "line2": "Missoula, MT 59801"
            },
            "phone": "406.239.4817",
            "hours": [
                {
                    "day": "Tuesday",
                    "time": "1pm - 6pm"
                },
                {
                    "day": "Wednesday",
                    "time": "1pm - 6pm"
                },
                {
                    "day": "Thursday",
                    "time": "1pm - 6pm"
                }
            ],
            "cta": {
                "text": "Schedule an Appointment",
                "link": "contact.html"
            }
        };
        this.init();
    }

    init() {
        this.renderAll();
    }

    renderAll() {
        const widgets = document.querySelectorAll('.office-hours-widget');
        widgets.forEach(widget => this.renderWidget(widget));
    }

    renderWidget(widget) {
        if (!this.data) return;

        const hoursGrid = this.data.hours.map(hour => `
            <div class="day-row">
                <span class="day">${hour.day}</span>
                <span class="hours">${hour.time}</span>
            </div>
        `).join('');

        widget.innerHTML = `
            <h3>Office Hours</h3>
            <div class="hours-info">
                <p><strong>Address:</strong><br>
                ${this.data.address.line1}<br>
                ${this.data.address.line2}</p>
                
                <p><strong>Phone:</strong><br>
                <a href="tel:${this.data.phone.replace(/[.-]/g, '')}">${this.data.phone}</a></p>
                
                <div class="schedule">
                    <p><strong>Hours:</strong></p>
                    <div class="hours-grid">
                        ${hoursGrid}
                    </div>
                </div>
                
                <p><a href="${this.data.cta.link}" class="cta-button">${this.data.cta.text}</a></p>
            </div>
        `;
    }

    renderFallback() {
        const widgets = document.querySelectorAll('.office-hours-widget');
        widgets.forEach(widget => {
            widget.innerHTML = `
                <h3>Office Hours</h3>
                <div class="hours-info">
                    <p><strong>Address:</strong><br>
                    1805 Bancroft St. Suite 3<br>
                    Missoula, MT 59801</p>
                    
                    <p><strong>Phone:</strong><br>
                    <a href="tel:406-239-4817">406.239.4817</a></p>
                    
                    <div class="schedule">
                        <p><strong>Hours:</strong></p>
                        <div class="hours-grid">
                            <div class="day-row">
                                <span class="day">Tuesday</span>
                                <span class="hours">1pm - 6pm</span>
                            </div>
                            <div class="day-row">
                                <span class="day">Wednesday</span>
                                <span class="hours">1pm - 6pm</span>
                            </div>
                            <div class="day-row">
                                <span class="day">Thursday</span>
                                <span class="hours">1pm - 6pm</span>
                            </div>
                        </div>
                    </div>
                    
                    <p><a href="contact.html" class="cta-button">Schedule an Appointment</a></p>
                </div>
            `;
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new OfficeHoursManager();
});