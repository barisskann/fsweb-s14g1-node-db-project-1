const router = require("express").Router();
const Accounts = require("./accounts-model");

router.get("/api/accounts", async (req, res, next) => {
  // KODLAR BURAYA
  const orn = await Accounts.getAll();
  if (orn) {
    return res.status(200).json(orn);
  }
});

router.get("/api/accounts/:id", async (req, res, next) => {
  const { id } = req.params;
  const getAccount = await Accounts.getById(id);
  return res.status(200).json(getAccount);
});

router.post("/api/accounts", async (req, res, next) => {
  // KODLAR BURAYA
  const post = await Accounts.create({ name: "alisa", budget: 2 });
  res.status(200).json({ message: "SUCCESS" });
});

router.put("/api/accounts/:id", async (req, res, next) => {
  const { id } = req.params;
  await Accounts.updateById(id, { name: "velias2331" });
  await Accounts.getById(id)
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {});
});

router.delete("/api/accounts/:id", async (req, res, next) => {
  const { id } = req.params;
  const removeData = await Accounts.getById(id);

  await Accounts.deleteById(id).then((r) => res.json(removeData));
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // KODLAR BURAYA
});

module.exports = router;
