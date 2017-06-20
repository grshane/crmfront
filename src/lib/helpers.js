import axios from 'axios';

function getLeadTypes() {
  return axios.get('http://pr-cors-bsd-d8-crm.pantheonsite.io/rest/lead_type');
}

const helpers = {
  getAdmin: function(){
    return axios.all([getLeadTypes()])
      .then(function(arr){
        return {
          leadTypes: arr[0].data
        }
      })
  }
};

export default helpers;