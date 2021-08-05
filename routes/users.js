var express = require(`express`);
var router = express.Router();
const csrf = require(`csurf`);
const csrfProtection = csrf({ cookie: true });

/* GET list of users */
router.get(`/`, csrfProtection, async function (req, res) {
  return res.render(`users`, { csrfToken: req.csrfToken() });
});

/** POST /users Create user*/
router.post(`/`, csrfProtection, async function (req, res) {
    return res.redirect(`/users`);
});

/** GET user -> Switch to user */
router.get(`/:id/switch`, function (req, res) {
  const { id } = req.params;

  return res.redirect(`/`);
});

/** GET user`s cart data */
router.get(`/:id/cart`, async function (req, res) {
  const { id } = req.params;

  res.render(`cart`, { cartData, total });
});

/** Add quantity of item in the cart */
router.get(`/:userId/cart/:itemId/add`, async function (req, res) {
  const [{ userId }, { itemId }] = [req.params, req.params];

  res.redirect(`/`);
});

/** Decrease quantity of item in the cart */
router.get(`/:userId/cart/:itemId/remove`, async function (req, res) {
  const [{ userId }, { itemId }] = [req.params, req.params];

  res.redirect(`/`);
});

/** Process cart. Proceed with order */
router.get(`/:id/cart/proceed`, async function (req, res) {
  const { id } = req.params;

  res.redirect(`/`);
});

/** Process cart. Cancel order */
router.get(`/:id/cart/cancel`, async function (req, res) {
  const { id } = req.params;

  res.redirect(`/`);
});

/** DELETE User */
router.get(`/:id/delete`, async function (req, res) {
  const { id } = req.params;

  return res.redirect(`/users`);
});

async function generateHash(password) {
  const COST = 12;
  return bcrypt.hash(password, COST);
}

// async function comparePassword(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// }


module.exports = router;
