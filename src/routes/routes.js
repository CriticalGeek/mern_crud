const express = require('express');
const router  = express.Router();

const Crud = require('../models/models');

router.get('/', async (req, res, next) => {
  const crud = await Crud.find();
  console.log(crud);
  res.send(crud);
});

router.get('/:id', async (req, res, next) => {
  const crudId = await Crud.findById(req.params.id);
  res.json(crudId);
});

router.post('/', async (req, res, next) => {
  const { username, password } = req.body;
  const user = new Crud({username, password});
  await user.save();
  res.json({'status': 'Guardado'});
});

router.put('/:id', async (req, res, next) => {
  const { title, description } = req.body;
  const newCrud = {title, description};
  await Crud.findByIdAndUpdate(req.params.id, newCrud);
  res.json({'status': 'Recibido'});
});

router.delete('/:id', async (req, res, next) => {
  await Crud.findByIdAndRemove(req.params.id);
  res.json({'status': 'Eliminado'});
});

module.exports = router;