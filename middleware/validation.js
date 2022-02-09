import { validationResult} from 'express-validator';


export function validation(req, res, next){
    const {errors} = validationResult(req);
    if(!errors){
        res.status(400).json({message : errors.array()[0].msg});
    }
    else{
        next();
    }
}



