function mongeDB (url) {


    const mongoose = require('mongoose');
    mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });

    const Container = mongoose.model('Container',{id: String,
                                                 productCategory:String,
                                                 position: {groundPos: String, level: String},
                                                 description: String,
                                                 storageNumber: String,
                                                 expirationDate: Date,
                                                 admissionDate: Date,
                                                 productStage: String,
                                                 isEmpty: Boolean})


    this.saveContainer = (contain) => {
        const container = new Container(contain);
        container.save().then(() => console.log('saved'));
    };

    this.getAllContainers = function(cb) {
       Container.find({}, function(err, arr) {
           arr.sort((x,y) => {x.expirationDay > y.expirationDay})
           cb(arr);
        });
    };
    this.getByCategory = function(category, cb) {
        Container.find({productCategory: category}, function(err, arr){
            cb(arr);
        });
    };

    this.deleteContainer = (containerId) => {
        Container.deleteOne({id: containerId}, function(){
            console.log("Deleted!");
        });
    };
    this.findOneContainer = function(containerId,cb) {
        Container.findOne({id: containerId}, function(err, item){
            cb(item);
        });
    };
    this.updateContainer = (contain) => {
        const container = new Container(contain);
        Container.updateOne(container);
    };


    this.getCategroryList = function(cb) {

        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }

        Container.find({}, 'productCategory',function(err, arr){
                let filtered = arr.map(x => x.productCategory).filter(onlyUnique);
                cb(filtered);
        })
         };




         /*
    this.getCategroryList = function(cb) {
        Container.find({}, function(err, arr){

                cb(arr);
        }).select('productCategory')
         };
*/         
}


module.exports = mongeDB;