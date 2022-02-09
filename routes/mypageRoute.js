import express from 'express';
import { createPosting, getPostings, removePosting, updatePosting } from '../controller/dataControl.js';
import { validation } from '../middleware/validation.js';
import {body} from 'express-validator'

const route = express.Router();

const checkAll = [
    body('author').trim().notEmpty().isAlpha(),
    body('title').trim().notEmpty(),
    body('context').notEmpty().isLength({min:1, max: 1000}),
    body('date').notEmpty().isDate(),
    validation
    ]

const checkUpdate = [
    body('context').notEmpty().isLength({min:1, max: 1000}),
    validation
]

route.get('/', getPostings);
route.post('/',checkAll  ,createPosting);
route.put('/:author',checkUpdate ,updatePosting);
route.delete('/:author',removePosting);

export default route;