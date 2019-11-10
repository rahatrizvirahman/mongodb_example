const foodModel = require('../modules/food');

module.exports = function(app){
    app.get('/foods', async function(req, res) {
        console.log('all data is searched.' );
        const foods = await foodModel.find({});
        
        try {
            res.send(foods);
        } catch (err) {
            res.status(500).send(err);
        }    
    });
        
    app.post('/food', async (req, res) => {
        // const newfood = new foodModel(req.body);
        // const newfood = new foodModel(req.body);
        const newfood = new foodModel({
            name: 'mango',
            calories: 50
        });

        console.log(req.body);
    
        try {
        await newfood.save();
        res.send(newfood);
        } catch (err) {
        res.status(500).send(err);
        }
    });
        
}