const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

const rules = [

    check('email', 'Email is not valid').isEmail().trim().normalizeEmail().exists(),
    check('password', 'passwords is not valid')
    .exists()
];

module.exports = {
    rules: rules,
    nextMiddlware: function(req,res,next){
        const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
          }

          next();

    }
};
