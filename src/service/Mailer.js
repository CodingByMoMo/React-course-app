import sendgrid from "sendgrid";
import { send_grid_key } from "../config/keys.js";
const Helper = sendgrid.mail;

class Mailer extends Helper.Mail {
    constructor({ subject, recipients}, content) {
        super();

        this.sgApi = sendgrid(send_grid_key);
        this.from_email = new Helper.Email('bartek@momocodes.com');
        this.subject = subject;
        this.body = new Helper.Content('text/html', content);
        this.recipients = this.format_addresses(recipients);

        this.addContent(this.body);
        this.add_click_tracking();
        this.add_recipients();
    }

    format_addresses(recipients){
        return recipients.map(({ email }) => {
            return new Helper.Email(email);
        });
    }

    add_click_tracking() {
        const tracking_settings = new Helper.TrackingSettings();
        const click_tracking = new Helper.ClickTracking(true, true);

        tracking_settings.setClickTracking(click_tracking);
        this.addTrackingSettings(tracking_settings);
    }

    add_recipients() {
        const personalize = new Helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: "POST",
            path: "/v3/mail/send",
            body: this.toJSON(),
        });
        const response = await this.sgApi.API(request);
        return response;
    }
}

export default Mailer;