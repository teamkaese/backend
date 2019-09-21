function mongeDB (url) {

    const mongoose = require('mongoose');
    mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });

    const Container = mongoose.model('Container',{id: String,
                                                 productCategory:String,
                                                 description: String,
                                                 storageNumber: String,
                                                 expirationDay: Date,
                                                 admissionDate: Date,
                                                 isEmpty: Boolean})


    this.saveContainer = (contain) => {
        const container = new Container(contain);
        container.save().then(() => console.log('saved'));
    };

    this.getAllContainers = function(cb) {
       Container.find({}, function(err, arr) {
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
    this.update
}

module.exports = mongeDB;