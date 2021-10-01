import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import DogList from './modules/dog/list/dog-list.container';
import DogCreate from './modules/dog/form/create/dog-create.container';
import DogEdit from './modules/dog/form/edit/dog-edit.container';
import ModalRoot from './components/Modal/Modal/modal-root';

function App() {
  return (
    <>
      <Drawer />
      <ModalRoot />
      <Switch>
        <Route exact path="/" component={DogList} />
        <Route exact path="/add" component={DogCreate} />
        <Route exact path="/edit/:id" component={DogEdit} />
      </Switch>
    </>
  );
}

export default App;
