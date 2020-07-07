import Axios from "axios";

export default {
    getEmployee: function() {
      return axios.get("https://randomuser.me/api/?results=300&nat=us");
    }
  };