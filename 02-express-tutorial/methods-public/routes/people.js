const express = require("express");
const router = express.Router();

//router

const {
  getPeople, 
    createPerson, 
    createPersonPostman, 
    updatePerson, 
    deletePerson
} = require('../../controllers/people')

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.delete("/:id", deletePerson);
// router.put("/:id", updatePerson);

//functionality below same as above, just less lines of code

router.route("/")
  .get(getPeople)
  .post(createPerson);

router.route("/postman")
  .post(createPersonPostman);

router.route("/:id")
  .delete(deletePerson)
  .put(updatePerson);


module.exports = router