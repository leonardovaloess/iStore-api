import User from "../models/User.js";

const getUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
};
const createUser = async (req, res) => {
  const user = req.body;
  const newUser = await User.create(user);

  return res.status(201).json(newUser);
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const deleteUser = await User.findByIdAndDelete(userId);
  if (!deleteUser) {
    return res.status(404).json({ error: "usuário não encontrado" });
  }
  res.status(200).json({ message: "Usuário excluído com sucesso" });
};

const editUser = async (req, res) => {
  const userId = req.params.id;
  const { name, age } = req.body
  const editUser = await User.findByIdAndUpdate(userId, { name, age }, {new: true});
  if (!editUser) {
    return res.status(404).json({ error: "usuário não encontrado" });
  }
  res.status(201).json({ message: "usuario editado com sucesso" });
};

export { getUsers, createUser, deleteUser, editUser };
