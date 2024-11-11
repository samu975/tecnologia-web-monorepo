import University from '../models/University.js';

export class UniversityService {
  async createUniversity(universityData) {
    try {
      const newUniversity = new University(universityData);
      await newUniversity.save();
      return newUniversity;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllUniversities() {
    try {
      const universities = await University.find();
      return universities;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUniversity(id, universityData) {
    try {
      const updatedUniversity = await University.findByIdAndUpdate(id, universityData, { new: true });
      return updatedUniversity;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUniversity(id) {
    try {
      await University.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
