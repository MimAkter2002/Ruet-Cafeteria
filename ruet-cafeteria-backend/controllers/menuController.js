const MenuItem = require('../models/menuItem');

// Get all menu items
const getMenuItems = async (req, res) => {
  try {
    console.log("Fetched data: start");
    const menuItems = await MenuItem.find({});
    console.log("Fetched data:", menuItems.toArry());
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get menu item by ID
const getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    
    if (menuItem) {
      res.json(menuItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new menu item
const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    
    const menuItem = new MenuItem({
      name,
      description,
      price,
      image,
      category
    });
    
    const createdItem = await menuItem.save();
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a menu item
const updateMenuItem = async (req, res) => {
  try {
    const { name, description, price, image, category, available } = req.body;
    
    const menuItem = await MenuItem.findById(req.params.id);
    
    if (menuItem) {
      menuItem.name = name || menuItem.name;
      menuItem.description = description || menuItem.description;
      menuItem.price = price || menuItem.price;
      menuItem.image = image || menuItem.image;
      menuItem.category = category || menuItem.category;
      menuItem.available = available !== undefined ? available : menuItem.available;
      
      const updatedItem = await menuItem.save();
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a menu item
const deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    
    if (menuItem) {
      await menuItem.remove();
      res.json({ message: 'Item removed' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
};