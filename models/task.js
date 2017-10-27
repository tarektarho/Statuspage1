      var mongoose = require('mongoose');

      //Status Schema
      var taskSchema = mongoose.Schema({
          title:{
            type: String,
            required: true
          },
          isDone:{
            type: Boolean,

          }


      });

    const Task = module.exports = mongoose.model('Task', taskSchema);

    //  Get Status

    /*module.exports.getStatus = function(callback, limit){

      Status.find(callback).limit(limit);

    }
    //Add Status
    module.exports.addStatus = function(status,callback){
      Status.create(Status,callback);
    }

    //Update Status
    module.exports.updateStatus = function(id, status, options, callback){
     let query = {_id: id};
     let update = {
      name: status.name
     }
     Status.findOneAndUpdate(query, update, options, callback);
    }

    //Delete Status
    module.exports.removeStatus = function(id, callback){
      let query = {_id: id};
      Status.remove(query,callback);
    }
*/
