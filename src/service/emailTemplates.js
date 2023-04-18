import { redirect_URL } from "../config/keys.js";

export default function email_template(survey) {
    return `
        <html>
            <body>
                <div style="text-align:center;">
                    <h3>Hi, we would love to know your feedback!</h3>
                    <p>Please answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${redirect_URL}">Yes</a>
                    </div>
                    <div>
                        <a href="${redirect_URL}">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
}