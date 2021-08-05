var express = require('express');
var router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

/* GET /users 👉🏾 list of users */
router.get('/', csrfProtection, async function (req, res) {
  return res.render('users', { csrfToken: req.csrfToken() });
});

/** POST /users 👉🏾 Create user*/
router.post('/', csrfProtection, async function (req, res) {
    return res.redirect('/users');
});

/** GET /users/:id/switch 👉🏾 Switch to user */
router.get('/:id/switch', function (req, res) {
  const { id } = req.params;

  return res.redirect('/');
});

/** GET /users/:id/cart 👉🏾 Get user's cart data */
router.get('/:id/cart', async function (req, res) {
  const { id } = req.params;

  res.render('cart', { cartData, total });
});

/** GET /users/:userId/cart/:itemId/add 👉🏾 Add quantity of item in the cart */
router.get('/:userId/cart/:itemId/add', async function (req, res) {
  const [{ userId }, { itemId }] = [req.params, req.params];

  res.redirect('/');
});

/** GET /users/:userId/cart/:itemId/remove 👉🏾 Decrease quantity of item in the cart */
router.get('/:userId/cart/:itemId/remove', async function (req, res) {
  const [{ userId }, { itemId }] = [req.params, req.params];

  res.redirect('/');
});

/** GET /users/:id/cart/proceed 👉🏾 Process cart. Proceed with order */
router.get('/:id/cart/proceed', async function (req, res) {
  const { id } = req.params;

  res.redirect('/');
});

/** GET /users/:id/cart/cancel 👉🏾 Process cart. Cancel order */
router.get('/:id/cart/cancel', async function (req, res) {
  const { id } = req.params;

  res.redirect('/');
});

/** GET /users/:id/delete 👉🏾 Delete a user */
router.get('/:id/delete', async function (req, res) {
  const { id } = req.params;

  return res.redirect('/users');
});

async function generateHash(password) {
  const COST = 12;
  return bcrypt.hash(password, COST);
}

// async function comparePassword(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// }


module.exports = router;
