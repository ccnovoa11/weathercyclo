import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const ApiPreguntas = new Mongo.Collection("preguntas");

Meteor.methods({
    "preguntas.insert"(pregunta, primera, segunda, tercera, cuarta, respuesta){
        
        ApiPreguntas.insert({
            pregunta,
            primera,
            segunda,
            tercera,
            cuarta,
            respuesta,
            createdAt: new Date()
        })
    }
});
