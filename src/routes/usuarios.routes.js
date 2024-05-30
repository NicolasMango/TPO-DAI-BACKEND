const { Router } = require("express");
const usuariosController = require("../controllers/usuarios.controller");
const jwtValidator = require('../middlewares/jwtValidator');
const checkFields = require('../middlewares/validateFields');
const { check } = require("express-validator");

const router = Router();

router.get("/", usuariosController.getUsuarios); //GET USUARIOS

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("lastname").not().isEmpty(),
    check("email").not().isEmpty(),
    check("password").not().isEmpty(),
    checkFields,
  ],
  usuariosController.createUsuario
); //POST USUARIOS

router.get("/:id", usuariosController.getUsuarioById); //GET USUARIOS BY ID
router.post(
  "/login",
  [
    check("email").not().isEmpty(),
    check("password").not().isEmpty(),
    checkFields,
  ],
  usuariosController.login
);
router.delete('/:id',[
  check('jwt').not().isEmpty(),
  checkFields
],jwtValidator,usuariosController.deleteUsuario
); 

module.exports = router;