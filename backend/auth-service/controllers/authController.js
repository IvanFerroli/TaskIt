const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Iniciando registro com email:', email);

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    
    const existingUser = await User.findOne({ where: { email } });
    console.log('Usuário encontrado:', existingUser);

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Senha hash gerada:', hashedPassword);

    
    const user = await User.create({ email, password: hashedPassword });
    console.log('Usuário criado:', user);

    
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Token gerado:', token);
    
    
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Erro durante o registro:', error); 
    res.status(500).json({ error: 'Internal server error, register', details: error.message });
  }
};





exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log('User not found:', email);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch for user:', email);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error, token' });
  }
};
