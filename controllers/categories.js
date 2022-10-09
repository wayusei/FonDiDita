const Categories = require('../models/categories');


/**
 * Obtiene una lista de categorias
 * @param {*} req 
 * @param {*} res 
 */
async function getCategories(req, res) {
    try {
        const categories = await Categories.findAll();
        res.status(200).json({categories});

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Internal server error',
            error
        })
    }
}

/**
 * Obtiene una categoria mediante un id
 * @param {*} req 
 * @param {*} res 
 */
async function getCategory(req, res) {
    const id = req.params.id;
    const category = await Categories.findByPk(id);
    if (!category) {
        return res.status(404).json({ message: "Categoria no encontrada" });
    }
    res.status(200).json(category);
}

/**
 * Se crea una categoria y la guarda en la bd
 * @param {*} req 
 * @param {*} res 
 */
async function createCategory(req, res) {

    const body = req.body;
    await Categories.create(body).then(category => {
        res.status(201).json(category);
    }).catch(function(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    });
}

/**
 * Función que nos permite actualizar la información de una categoria
 * @param {*} req 
 * @param {*} res 
 */
async function updateCategory(req, res) {
    const id = req.params.id;
    const category = req.body;
    await Categories.update(category, {where: {id}});
    const category_updated = await Categories.findByPk(id);
    res.status(200).json(category_updated);
}

/**
 * Función que nos permite eliminar una categoria por id
 * @param {*} req 
 * @param {*} res 
 */
async function deleteCategory(req, res) {
    const id = req.params.id;
    const deleted = Categories.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = { getCategories, getCategory, createCategory, updateCategory, deleteCategory };