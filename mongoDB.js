function mongeDB (url) {

    const mongoose = require('mongoose');
    mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });

    const Container = mongoose.model('Container',{id: String,
                                                 productCategory:String,
                                                 position:{
                                                     groundPos:String,
                                                     level:Number
                                                 },
                                                 admissionDate:Date,
                                                 productStage:String})

    this.saveContainer = (contain) => {
        const container = new Container(contain);
        container.save().then(() => console.log('saved'));
    };    

}

module.exports = mongeDB;