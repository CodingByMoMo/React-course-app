import sendGrid from "sendgrid";
import { send_grid_key } from "../config/keys";
const Helper = sendGrid.mail;

class Mailer extends Helper.Mail {

}

export default Mailer;