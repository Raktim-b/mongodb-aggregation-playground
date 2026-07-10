const empModel = require("../model/emp.db");
const httpStatusCode = require("../utils/httpStatusCode");

class AggregationController {
  async q1(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { department: "IT" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q2(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $project: {
            _id: 0,
            name: 1,
            salary: 1,
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q3(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { salary: { $gt: 50000 } } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q4(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $count: "totalEmployees",
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q5(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { "address.city": "Kolkata" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q6(req, res) {
    try {
      const result = await empModel.aggregate([{ $sort: { salary: 1 } }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q7(req, res) {
    try {
      const result = await empModel.aggregate([{ $sort: { salary: -1 } }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q8(req, res) {
    try {
      const result = await empModel.aggregate([{ $limit: 3 }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q9(req, res) {
    try {
      const result = await empModel.aggregate([{ $skip: 2 }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q10(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { age: { $gt: 28 } } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q11(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            totalSalary: { $sum: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q12(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            AvgSalary: { $avg: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q13(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            MaxSalary: { $max: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q14(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            MinSalary: { $min: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q15(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            totalEmp: { $sum: 1 },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q16(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        {
          $group: {
            _id: { deptname: `$department` },
            totalBudget: { $sum: `$projects.budget` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q17(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            AvgAge: { $avg: `$age` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q18(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        {
          $group: {
            _id: { deptname: `$department` },
            totalProjects: { $sum: 1 },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q19(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            totalSalary: { $sum: `$salary` },
          },
        },
        {
          $sort: {
            totalSalary: -1,
          },
        },
        { $limit: 1 },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q20(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$department` },
            totalSalary: { $sum: `$salary` },
          },
        },
        {
          $sort: {
            totalSalary: 1,
          },
        },
        { $limit: 1 },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q21(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { "address.state": "West Bengal" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q22(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { Statename: `$address.state` },
            totalEmp: { $sum: 1 },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q23(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { cityname: `$address.city` },
            totalEmp: { $sum: 1 },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q24(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$address.city` },
            AvgSalary: { $avg: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q25(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$address.city` },
            MaxSalary: { $max: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q26(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { "address.city": "Mumbai" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q27(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $project: {
            _id: 0,
            name: 1,
            "address.city": 1,
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q28(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $group: {
            _id: { deptname: `$address.state` },
            totalSalary: { $sum: `$salary` },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q29(req, res) {
    try {
      const result = await empModel.aggregate([
        { $match: { "address.state": "Delhi" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q30(req, res) {
    try {
      const result = await empModel.aggregate([
        { $sort: { "address.city": 1 } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q31(req, res) {
    try {
      const result = await empModel.aggregate([{ $unwind: "$projects" }]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q32(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        { $project: { "projects.name": 1 } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q33(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        { $match: { "projects.budget": { $gt: 50000 } } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q34(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        { $count: "projects" },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q35(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        { $match: { "projects.status": "Completed" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q36(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        { $match: { "projects.status": "Running" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q37(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        {
          $group: {
            _id: null,
            totalBudget: {
              $sum: "$projects.budget",
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q38(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        {
          $group: {
            _id: null,
            avgBudget: {
              $avg: "$projects.budget",
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q39(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        {
          $group: {
            _id: null,
            maxBudget: {
              $max: "$projects.budget",
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q40(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        {
          $group: {
            _id: { deptname: `$projects.status` },
            count: { $sum: 1 },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q41(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$skills" },
        { $match: { skills: "MongoDB" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q42(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$skills" },
        { $match: { skills: "Node.js" } },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q43(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$skills" },
        {
          $group: {
            _id: { skillname: `$skills` },
            count: { $sum: 1 },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q44(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$skills" },
        {
          $group: {
            _id: { skillname: `$skills` },
            count: { $sum: 1 },
          },
        },
        {
          $sort: { count: -1 },
        },
        { $limit: 1 },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q45(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        {
          $group: {
            _id: { name: `$name` },
            projectCount: { $sum: 1 },
          },
        },
        {
          $sort: { projectCount: -1 },
        },
        { $limit: 1 },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q46(req, res) {
    try {
      const result = await empModel.aggregate([
        { $unwind: "$projects" },
        {
          $group: {
            _id: { name: `$name` },
            projectCount: { $sum: 1 },
          },
        },
        {
          $sort: { projectCount: 1 },
        },
        { $limit: 1 },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q47(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $addFields: {
            bonus: {
              $multiply: ["$salary", 0.1],
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q48(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $addFields: {
            totalProjects: {
              $size: "$projects",
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q49(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $addFields: {
            salaryCategory: {
              $switch: {
                branches: [
                  {
                    case: { $gt: ["$salary", 60000] },
                    then: "High",
                  },
                  {
                    case: {
                      $and: [
                        { $gte: ["$salary", 50000] },
                        { $lte: ["$salary", 60000] },
                      ],
                    },
                    then: "Medium",
                  },
                ],
                default: "Low",
              },
            },
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
  async q50(req, res) {
    try {
      const result = await empModel.aggregate([
        {
          $sample: {
            size: 2,
          },
        },
      ]);
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "Employee fetched successfully",
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
module.exports = new AggregationController();
