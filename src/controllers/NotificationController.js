module.exports = {
    
    async store(req, res){

        console.log('Inside Callback hook', req.body);

        const { data } = req.body;

        console.log(json(data));
        
        return res.status(200).end();
    }
}