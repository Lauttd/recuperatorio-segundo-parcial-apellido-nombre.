import { languagemodel } from "../models/language.model.js";

//Creamos un lenguaje
export const createLanguages = async (req, res) => {
  try {
    const { name } = req.body;
    const { paradimg } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ message: "El campo 'name' es obligatorio." });
    }

    if (name === " ") {
      return res.status(400).json({ message: "el name no puede estar vacio" });
    }

    if (paradimg === " ") {
      return res.status(400).json({ message: "el paradigm es obligario" });
    }

    const existeLanguage = await languagemodel.findOne({ where: { name } });
    if (existeLanguage) {
      return res.status(409).json({ message: "El nombre ya está en uso." });
    }

    const crearLanguages = await languagemodel.create(req.body);
    return res.status(200).json(crearLanguages);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error por parte del servidor al crear el lenguaje" });
  }
};

//Obtenemos todos los lenguajes
export const getAllLanguages = async (req, res) => {
  try {
    const obtenerLanguage = await languagemodel.findAll(req.body);
    return res.status(201).json(obtenerLanguage);
  } catch (error) {
    res.status(404).json({
      message: "Error por parte del servidor al obtener los lenguajes",
    });
  }
};

//Obtenemos los lenguajes por id
export const getByIdLanguages = async (req, res) => {
  try {
    const obtenerLanguagesId = await languagemodel.findByPk(req.params.id);
    if (obtenerLanguagesId) return res.status(200).json(obtenerLanguagesId);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error por parte del servidor al actualizar por id" });
  }
};

//Actualizamos los lenguajes
export const updateLanguages = async (req, res) => {
  try {
    const { name } = req.body;

    const lenguaje = await languagemodel.findByPk(req.params.id);
    if (!lenguaje) {
      return res.status(404).json({ message: "Lenguaje no encontrado." });
    }

    if (name !== undefined) {
      return res
        .status(400)
        .json({ message: "El campo 'name' no puede estar vacío." });
    }

    if (name) {
      const existeLanguage = await languagemodel.findOne({
        where: { name, id: { $ne: req.params.id } },
      });
    }

    const [updated] = await languagemodel.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const siActualizo = await languagemodel.findByPk(req.params.id);
      res.status(200).json(siActualizo);
    }
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error por parte del servidor al actualizar" });
  }
};

//Eliminar lenguaje
export const deleteLanguages = async (req, res) => {
  try {
    const borrarLanguage = await languagemodel.destroy({
      where: { id: req.params.id },
    });
    if (borrarLanguage)
      res
        .status(200)
        .json({ message: "se elimino el lenguaje", borrarLanguage });
    else res.status(400).json({ message: "no se encontro el lenguaje" });
  } catch (error) {
    res.status(404).json({
      message: "Error por parte del servidor al eliminar el lenguaje",
    });
  }
};
