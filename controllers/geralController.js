const livrosServices = require('../services/livrosServices');

const geralController = {
    showHome: (req, res) => {
        const livros = livrosServices.listarTodosLivros();

        res.render("home", {livros})
    }
}

module.exports = geralController;
