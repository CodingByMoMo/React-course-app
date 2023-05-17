const emails_regexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;

function validate_emails(emails_list) {
  const invalid_emails = emails_list
    .split(",")
    .map((email) => email.trim())
    .filter((email) => emails_regexp.test(email) === false);

  if (invalid_emails.length) {
    return `These emails are invalid: ${invalid_emails}`;
  }
}
export default validate_emails;