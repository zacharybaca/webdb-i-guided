const express = require('express');

// database access using knex
const knex = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
  knex
    .select('*')
    .from('posts')
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: 'Error getting posts'
      });
    });
});

router.get('/:id', (req, res) => {
  knex
    .select('*')
    .from('posts')
    .where('id', '=', req.params.id)
    .first()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res.status(500).json({ error: 'error' });
    });
});

router.post('/', (req, res) => {
  const postData = req.body;
  return knex('posts')
    .insert(postData, 'id')
    .then(ids => {
      const id = ids[0];
      res.status(200).json(id);
    })
    .catch(error => {
      res.status(500).json({ error: 'error' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  knex('posts')
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json({ message: 'success' });
    });
});

router.delete('/:id', (req, res) => {
  knex('posts')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      res.status(200).json({ message: 'deleted' });
    })
    .catch(error => {
      res.status(500).json({ message: 'error' });
    });
});

module.exports = router;
