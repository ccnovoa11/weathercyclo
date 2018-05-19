import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';  
import AppContainer from "../ui/App";
import LoginContainer from "../ui/components/Login";
import RegistroContainer from "../ui/components/Register";
import JugarContainer from "../ui/components/Jugar";
import PartidaContainer from "../ui/components/Partida";
import AgregarPreguntaContainer from "../ui/components/AgregarPregunta";
import PreguntasContainer from "../ui/components/Preguntas";
import CuriosidadesContainer from "../ui/components/ListaCuriosidades";

FlowRouter.route('/', {
  name: 'main',
  action() {
    mount(AppContainer);
  },
});

FlowRouter.route('/Login', {
  name: 'Login',
  action() {
    mount(LoginContainer);
  },
});

FlowRouter.route('/Registro', {
  name: 'Registro',
  action() {
    mount(RegistroContainer);
  },
});

FlowRouter.route('/Jugar', {
  name: 'Jugar',
  action() {
    mount(JugarContainer);
  },
});

FlowRouter.route('/Partida', {
  name: 'Partida',
  action() {
    mount(PartidaContainer);
  },
});

FlowRouter.route('/AgregarPregunta', {
  name: 'AgregarPregunta',
  action() {
    mount(AgregarPreguntaContainer);
  },
});

FlowRouter.route('/Curiosidades', {
  name: 'Curiosidades',
  action() {
    mount(CuriosidadesContainer);
  },
});

FlowRouter.route('/Preguntas', {
  name: 'Preguntas',
  action() {
    mount(PreguntasContainer);
  },
});