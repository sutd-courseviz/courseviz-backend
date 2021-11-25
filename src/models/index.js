const { Sequelize, Model, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const {
  DB_ENGINE,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_SSLMODE,
} = process.env;

let sequelize;

console.log(DB_ENGINE, DB_HOST);

if (DB_ENGINE === "sqlite") {
  sequelize = new Sequelize({
    dialect: DB_ENGINE,
    storage: DB_HOST
  });
}

if (!sequelize) {
  throw new Error("Error setting up store: DB_ENGINE env var is not set to a valid value");
}

const Course = sequelize.define('course', {
  id: {
    type: "",
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  label: {
    type: "",
    allowNull: true
  },
  course_name: {
    type: "",
    allowNull: true
  },
  course_des: {
    type: "",
    allowNull: true
  },
  pillar_id: {
    type: "",
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'course',
  timestamps: false
});

const MeasurableOutcome = sequelize.define('measurable_outcome', {
  id: {
    type: "",
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  pillar_id: {
    type: "",
    allowNull: true
  },
  course_id: {
    type: "",
    allowNull: true
  },
  code: {
    type: "",
    allowNull: true
  },
  description: {
    type: "",
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'measurable_outcome',
  timestamps: false
});

const Pillar = sequelize.define('pillar', {
  id: {
    type: "",
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  pillar_name: {
    type: "",
    allowNull: true
  },
  pillar_description: {
    type: "",
    allowNull: true
  },
  pillar_website: {
    type: "",
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'pillar',
  timestamps: false
});

const Prereq = sequelize.define('prereq', {
  id: {
    type: "",
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  src_id: {
    type: "",
    allowNull: true
  },
  dst_id: {
    type: "",
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'prereqs',
  timestamps: false
});

module.exports = {
  Course,
  MeasurableOutcome,
  Pillar,
  Prereq,
};
