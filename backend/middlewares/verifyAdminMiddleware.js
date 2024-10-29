
const verifyAdmin = (req, res, next) => {
   if(req.role !== 'admin') {
      return res.status(403).send({success: false, message: 'Unauthorized Access Right To Content!'});
   }
   next();
}

export default verifyAdmin;