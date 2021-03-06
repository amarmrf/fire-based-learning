const isEmpty = (string) => {
    if (string.trim() === "") return true;
    else return false;
  }
  
const isEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailRegex)) return true;
    else return false;
  }
  

exports.validateSignUpData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) {
      errors.email = "Must not be empty"
    } else if (!isEmail(data.email)) {
      errors.email = "Must be a valid email address"
    }
  
    if (isEmpty(data.password)) errors.password = "Must not be empty";
    if (data.password !== data.confirmPassword) errors.confirmPassword = "Password must match";
    if (isEmpty(data.handle)) errors.handle = "Must not be empty";
    
    //if there is unsubmitted field, ie null
    //react will send an empty so the nullity error will be managed
    return { 
        errors, 
        valid: Object.keys(errors).length === 0 ? true : false,    
    }
}

exports.validateLogInData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) errors.email = "Must not be empty";
    if (isEmpty(data.password)) errors.password = "Must not be empty";
    
    return { 
        errors, 
        valid: Object.keys(errors).length === 0 ? true : false,    
    }
}