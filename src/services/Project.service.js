import Project from '../models/Project.js';

export class ProjectService {
  async createProject(projectData) {
    try {
      const newProject = new Project(projectData);
      await newProject.save();
      return newProject;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllProjects() {
    try {
      const projects = await Project.find().populate('client projectType university stage');
      return projects;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProjectById(id) {
    try {
      const project = await Project.findById(id).populate('client projectType university stage');
      return project;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProject(id, projectData) {
    try {
      const updatedProject = await Project.findByIdAndUpdate(id, projectData, { new: true }).populate('client projectType university stage');
      return updatedProject;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProject(id) {
    try {
      const deletedProject = await Project.findByIdAndDelete(id);
      return deletedProject;
    } catch (error) {
      throw new Error(error);
    }
  }
}
