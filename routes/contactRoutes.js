const express = require("express");
const { getContacts, getContactById, createContact, updateContact, deleteContact } = require("../controllers/contactController");
const { validateContact } = require("../middlewares/validate");
const authenticate = require("../middlewares/auth");

const router = express.Router();

router.use(authenticate);  
router.get("/", getContacts);                     
router.get("/:id", getContactById);                
router.post("/", validateContact, createContact);  
router.put("/:id", validateContact, updateContact); 
router.delete("/:id", deleteContact);             

module.exports = router;
