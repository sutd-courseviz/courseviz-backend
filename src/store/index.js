const models = require("../models");

const getAll = async () => {
    const pillars = await models.Pillar.findAll();
    const courses = await models.Course.findAll();
    const outcomes = await models.MeasurableOutcome.findAll();
    const prereqs = await models.Prereq.findAll();

    return {
        pillars,
        courses,
        outcomes,
        prereqs,
    }
}

module.exports = {
    getAll,
}