const Contact = require("../models/Contact");
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

exports.getContacts = async (req, res) => {
  const { name, email } = req.query;

  let searchCriteria = {};
  if (name) searchCriteria.name = { $regex: name, $options: "i" };
  if (email) searchCriteria.email = { $regex: email, $options: "i" };

  try {
    const contacts = await Contact.find(searchCriteria);
    res.status(200).json({ message: "Contacts retrieved successfully", contacts });
  } catch (error) {
    res.status(500).json({ message: "Server Error: Unable to retrieve contacts" });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    res.status(200).json({ message: "Contact found successfully", contact });
  } catch (error) {
    res.status(500).json({ message: "Server Error: Unable to retrieve contact" });
  }
};

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const newContact = new Contact({ name, email, phone, address });
    await newContact.save();
    res.status(201).json({ message: "Contact created successfully", newContact });
  } catch (error) {
    res.status(400).json({ message: "Invalid input: Failed to create contact" });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedContact) return res.status(404).json({ message: "Contact not found" });

    res.status(200).json({ message: "Contact updated successfully", updatedContact });
  } catch (error) {
    res.status(400).json({ message: "Invalid input: Failed to update contact" });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error: Failed to delete contact" });
  }
};













