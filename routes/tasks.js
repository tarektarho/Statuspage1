var express = require('express');
var app = express();
var mongojs = require('mongojs');
var  Task = require('../models/task');

 var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/standby', { useMongoClient: true });
      var db = mongoose.connection;



// Get All Tasks
app.get('/tasks', function(req, res, next){
    Task.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get Single Task
 app.get('/task/:id', function(req, res, next){
    Task.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Save Task
app.post('/task', function(req, res, next){
    var task = req.body;
    console.log(task);
    if(!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        var task = new Task (req.body);

        task.save( function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

// Delete Task
app.delete('/task/:id', function(req, res, next){
    Task.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Update Task
app.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};

    if(task.isDone){
        updTask.isDone = task.isDone;
    }

    if(task.title){
        updTask.title = task.title;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        Task.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    }
});

module.exports = app;
