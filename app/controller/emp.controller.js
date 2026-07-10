const empModel = require("../model/emp.db");
const httpStatusCode = require("../utils/httpStatusCode");

class EmpController {
  async createEmp(req, res) {
    try {
      const { name, address, age, skills, salary, projects, department } =
        req.body;
      if (
        !name ||
        !skills ||
        !age ||
        !salary ||
        !projects ||
        !department ||
        !address
      ) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "All fields are required",
        });
      }
      const emps = new empModel({
        name,
        address,
        projects,
        age,
        skills,
        salary,
        department,
      });
      const result = await emps.save();
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee added successfully",
          data: result,
        });
      }
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}
module.exports = new EmpController();
