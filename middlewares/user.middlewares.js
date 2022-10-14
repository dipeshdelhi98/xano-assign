
const jwt=require('jsonwebtoken')
module.exports={

    onlyAdminCanAccess:(req,res,next)=>{

        try {


            const token = req.headers.authorization.split(' ')[1];

            if(!token){
              return res.status(401).json({
                code: 'Failed',
                error: true,
                message: 'Authorization token is required',
               
              });
            }

            const decodedToken = jwt.verify(token, "secret1234");

            const role= decodedToken.role;
            if (role!="admin") {
              return res.status(401).json({
                code: 'Failed',
                error: true,
                message: 'Only admin is allowed to access',
               
              });
            } else {
              next();
            }
          } catch {
            return res.status(401).json({
              code: 'Failed',
              error: true,
              message: 'Authorization token is required',
            
            });
          }
        
    },
    AdminAndUserCanAccess:(req,res,next)=>{

      try {

        
const {id}=req.params;

        const token = req.headers.authorization.split(' ')[1];

        if(!token){
          return res.status(401).json({
            code: 'Failed',
            error: true,
            message: 'Authorization token is required',
           
          });
        }

        const decodedToken = jwt.verify(token, "secret1234");
        const userId= decodedToken.userId;
        if (id!=userId) {
          return res.status(401).json({
            code: 'Failed',
            error: true,
            message: 'Invalid UserId',
           
          });
        } else {
          next();
        }
      } catch {
        return res.status(401).json({
          code: 'Failed',
          error: true,
          message: 'Authorization token is required',
         
        });
      }

       
    }

}