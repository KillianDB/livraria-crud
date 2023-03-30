const livrosServices = require('../services/livrosServices');

const geralController = {
    showHome: (req, res) => {
        const livros = livrosServices.listarTodosLivros();

        res.render("home", {livros})
    },
    showFormAdd: (req, res) => {
        res.render("addLivro")
    }
}

module.exports = geralController;
