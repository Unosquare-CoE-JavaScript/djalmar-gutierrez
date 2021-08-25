import { Component, OnInit } from '@angular/core';

interface Client extends BaseEntity {
  firstName: String;
  lastName: String;
  company: String;
}

interface BaseEntity {
  id: String | null;
}
interface Action {
  type: string;
  payload?: any;
}

const CLIENT_LOAD = '[Client] Load';
const CLIENT_CREATE = '[Client] Create';
const CLIENT_UPDATE = '[Client] Update';
const CLIENT_DELETE = '[Client] Delete';
const CLIENT_SELECT = '[Client] Select';
const CLIENT_CLEAR = '[Client] Clear';

const PROJECT_LOAD = '[Project] Load';
const PROJECT_CREATE = '[Project] Create';
const PROJECT_UPDATE = '[Project] Update';
const PROJECT_DELETE = '[Project] Delete';
const PROJECT_SELECT = '[Project] Select';
const PROJECT_CLEAR = '[Project] Clear';

const peter: Client = {
  id: '1',
  firstName: 'Peter',
  lastName: 'Porker',
  company: 'Acme, ',
};

const jhon: Client = {
  id: '2',
  firstName: 'Jhon',
  lastName: 'Doe',
  company: 'NA',
};

const clients: Client[] = [peter, jhon];

interface ClientState {
  clients: Client[];
  currentClient: Client;
}

const initialClientsState: ClientState = {
  clients,
  currentClient: peter,
};

interface Project extends BaseEntity {
  name: String;
  description: String;
  completed: boolean;
}

const project1: Project = {
  id: '1',
  name: 'Project 1',
  description: 'Project 1 description',
  completed: true,
};

const project2: Project = {
  id: '2',
  name: 'Project 2',
  description: 'Project 2 description',
  completed: false,
};

const projects: Project[] = [project1, project2];

interface ProjectState {
  projects: Project[];
  currentProject: Project;
}

const initialProjectState: ProjectState = {
  projects,
  currentProject: project2,
};

interface AppState {
  clientsState: ClientState;
  projectsState: ProjectState;
}

const appState: AppState = {
  clientsState: initialClientsState,
  projectsState: initialProjectState,
};

class ClientsStore {
  state: ClientState;
  reducer;

  constructor(clientState: ClientState, reducer) {
    this.state = clientState;
    this.reducer = reducer;
  }

  load(state: ClientState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    console.log(this.state);
    return this.state[key];
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

class ProjectStore {
  state: ProjectState;

  constructor(state: ProjectState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
}

const loadClients = (state: ClientState, clients): ClientState => {
  return {
    clients,
    currentClient: state.currentClient,
  };
};
const selectClients = (state: ClientState, client: Client): ClientState => {
  return {
    clients: state.clients,
    currentClient: client,
  };
};

const createClient = (state: ClientState, client: Client): ClientState => {
  return {
    clients: [...state.clients, client],
    currentClient: state.currentClient,
  };
};

const updateClient = (state: ClientState, client: Client): ClientState => {
  return {
    clients: state.clients.map((c) =>
      c.id == client.id ? Object.assign({}, c, client) : c
    ),
    currentClient: state.currentClient,
  };
};

const deleteClient = (state: ClientState, client: Client): ClientState => {
  return {
    clients: state.clients.filter((c) => c.id != client.id),
    currentClient: state.currentClient,
  };
};

const clientsReducer = (
  state: ClientState = initialClientsState,
  action: Action
) => {
  switch (action.type) {
    case CLIENT_LOAD:
      return loadClients(state, action.payload);
    case CLIENT_SELECT:
      return selectClients(state, action.payload);
    case CLIENT_UPDATE:
      return updateClient(state, action.payload);
    case CLIENT_DELETE:
      return deleteClient(state, action.payload);
    case CLIENT_CREATE:
      return createClient(state, action.payload);
  }
};

const loadProjects = (state, projects) => {
  console.log('LOAD PROJECT', projects);
  return state;
};

const selectProjects = (state, projects) => {
  console.log('SELECT PROJECT', projects);
  return state;
};

const projectReducer = (
  state: ProjectState = initialProjectState,
  action: Action
) => {
  switch (action.type) {
    case PROJECT_LOAD:
      return loadProjects(state, projects);
    case PROJECT_SELECT:
      return selectProjects(state, projects);
  }
};

var clientStore = new ClientsStore(initialClientsState, clientsReducer);
var projectStore = new ProjectStore(initialProjectState);
const currentProjects = projectStore.select('projects');
const jane: Client = {
  id: '12',
  firstName: 'Jane',
  lastName: 'Doe',
  company: 'NA',
};

clientStore.dispatch({ type: CLIENT_CREATE, payload: jane });

const allClients = clientStore.select('clients');

const tango = allClients;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
