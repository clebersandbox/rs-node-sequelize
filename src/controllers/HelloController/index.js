module.exports = {

    helloWorld : (req, res) => {
        
        let message = 'Hello Word!'; 
        
        // Se na rota tiver parametro name a message
        // será atualizada. Ex de rota.
        //http://localhost:3000/?name=Cleber
        const { name } = req.query;
        if (name) message = `Hello world ${ name }!`;

        res.json({ message })
    }
}