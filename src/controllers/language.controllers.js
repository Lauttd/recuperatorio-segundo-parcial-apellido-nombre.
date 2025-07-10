import { languagemodel } from "../models/language.model.js";

export const createLanguages = async (req, res) => {
  try {
    const crearLanguages = await languagemodel.create(req.body);
    return res.status(201).json(crearLanguages);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error por parte del servidor al crear el lenguaje" });
  }
};

export const getAllLanguages = async (req, res) => {
  try {
    const obtenerLanguage = await languagemodel.findAll(req.body);
    return res.status(201).json(obtenerLanguage);
  } catch (error) {
    res
      .status(404)
      .json({
        message: "Error por parte del servidor al obtener los lenguajes",
      });
  }
};

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

export const updateLanguages = async (req, res) => {
  try {
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

export const deleteLanguages = async (req, res) => {
  try {
    const borrarLanguage = await languagemodel.destroy({
      where: { id: req.params.id },
    });
    if (borrarMovies)
      res
        .status(200)
        .json({ message: "se elimino el lenguaje", borrarLanguage });
    else res.status(400).json({ message: "no se encontro el lenguaje" });
  } catch (error) {
    res
      .status(404)
      .json({
        message: "Error por parte del servidor al eliminar el lenguaje",
      });
  }
};
