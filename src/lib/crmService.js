const leadTypeUrl = 'http://pr-cors-bsd-d8-crm.pantheonsite.io/rest/lead_type';

export const loadLeadTypes = () => {
  return fetch(leadTypeUrl)
    .then(res => console.log(res.json()))
}
