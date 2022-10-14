const Joi = require('joi');

const validationforRegistrationDetails=(body)=>{

    const schema = Joi.object({
        firstname: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        lastname: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),   
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        phone:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        role:Joi.string().valid('admin','regular_user').required()
    })
        
    const data= schema.validate(body);


    return data;

}

module.exports={
    validationforRegistrationDetails
}

