const models = require("../models");

//converting URL-endpoints parameters to name of SQL Models
const modelOf = (param) => {
    switch (param){
        case "pillars":
            return models.Pillar
    }
    switch (param){
        case "outcomes":
            return models.MeasurableOutcome 
    }
    switch (param){
        case "courses":
            return models.Course
    }
    switch (param){
        case "prereq":
            return models.Prereq 
    }
}
//GET Methods
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
const getGroup = async (first_id) => {
    element = modelOf(first_id)
    const data = await element.findAll();
    return data
}
const getSingle = async (first_id, second_id) => {
    element = modelOf(first_id)
    const data = await element.findOne({where : {id: second_id}});
    return data
}

//DELETE METHODS
const deleteOne = async (first_id, second_id) => {
    element = modelOf(first_id)
    await element.destroy({where : {id: second_id}});
    return
}

//POST METHODS
const postPillar = async (query) => {
    await models.Pillar.create(
        {'pillar_name': query.name, 'pillar_description':query.description, 'pillar_website':query.website}, 
        {fields:['pillar_name', 'pillar_description', 'pillar_website']});
    return
}
const postCourse = async (query) => {
    await models.Course.create(
        {'course_name':query.name, 'course_des':query.description ,'label' : query.label, 'pillar_id' :query.pillar_id}, 
        {fields:['course_name', 'course_des', 'label', 'pillar_id']}
    );
    return
}
const postOutcome = async (query) => {
    await models.MeasurableOutcome.create(
        {'code':query.label, "pillar_id" : query.pillar_id, "course_id": query.course_id, "description":query.description}, 
        {fields:['code', 'pillar_id', "course_id" ,'description']}
    );
    return
}

//UPDATE Methods
const updatePillar = async (id, query) => {
    await models.Pillar.update(
        {'pillar_name': query.name, 'pillar_description':query.description, 'pillar_website':query.website},
        {where : {'id': id}}
    );
    return;
}

const updateCourse = async (id, query) => {
    await models.Course.update(
        {'course_name':query.name, 'course_des':query.description ,'label' : query.label, 'pillar_id' :query.pillar_id},
        {where : {'id': id}}
    );
    return;
}

const updateOutcome = async (id, query) => {
    await models.MeasurableOutcome.update(
        {'code':query.label, "pillar_id" : query.pillar_id, "course_id": query.course_id, "description":query.description},
        {where : {'id': id}}
    );
    return;
}


module.exports = {
    getAll,
    getGroup,
    getSingle,
    deleteOne,
    postPillar,
    postCourse,
    postOutcome,
    updatePillar,
    updateCourse,
    updateOutcome

}
