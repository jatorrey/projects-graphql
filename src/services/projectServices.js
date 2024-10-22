const Project = require('../models/projectModel');

module.exports = {
    getAllProjects: async () => {
        return await Project.find();
    },
    createProject: async (title, description) => {
        const project = new Project({
            title,
            description
        });
        return await project.save();
    },
    updateProject: async (_id, description, completed) => {
        return await Project.updateOne({ _id }, { description, completed });
    },
    deleteProject: async (_id) => {
        return await Project.findByIdAndDelete(_id);
    }
}