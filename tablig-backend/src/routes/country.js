const express = require('express');
const router = express.Router();
const { Country } = require('../models');
const auth = require('../middleware/auth');

router.get('/', auth, async (req,res)=>{ res.json(await Country.findAll()); });
router.post('/', auth, async (req,res)=>{ const c = await Country.create({ name: req.body.name }); res.json(c); });
router.put('/:id', auth, async (req,res)=>{ await Country.update({ name: req.body.name }, { where: { id: req.params.id } }); res.json({ ok:true }); });
router.delete('/:id', auth, async (req,res)=>{ await Country.destroy({ where: { id: req.params.id }}); res.json({ ok:true }); });

module.exports = router;
