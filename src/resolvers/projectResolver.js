const projectService = require('../services/projectServices');

const resolvers = {
    Query: {
        projects: () => {
            return projectService.getAllProjects();
        }
    },
    Mutation: {
        createProject: (_, { title, description }) => {
            return projectService.createProject(title, description);
        },
        updateProject: (_, { _id, description, completed }) => {
            return projectService.updateProject(_id, description, completed);
        },
        deleteProject: (_, { _id }) => {
            return projectService.deleteProject(_id);
        }
    }
};