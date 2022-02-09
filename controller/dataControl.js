import { create, getAll, remove, update } from '../data/postings.js';

export async function getPostings(req, res){
    const data = await getAll();
    console.log(data);
    res.json(data);
}

export async function createPosting(req, res){
    const body = req.body;
    const data = await create(body);
    res.json(data);
}

export async function updatePosting(req, res){
    const author = req.params.author;
    const {context} = req.body;
    const data = await update(author, context);
    res.json(data);
}

export async function removePosting(req, res){
    const author = req.params.author
    const data = await remove(author);
    res.json(data);
}