// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const batches = hook.app.service('batches');
    const batchId = hook.id;
    const {students} = batches;
    const { remove } = hook.data;
    const { create } = hook.data;
    // patching the evaluations
    const { edit } = hook.data;


    if (!!!hook.data) return Promise.resolve(hook)

    return batches.get(batchId)
      .then((batch) => {
        // console.log(hook.data)

        const {students} = batch;
        const {firstName, lastName} = hook.data;

        if (create) {
          //Create new student if they dont exist
          if(!hook.data.evaluations) {
            console.log('BlaBla');
            hook.data = {
              students: students.concat({
                firstName: hook.data.firstName,
                lastName: hook.data.lastName,
                avatar: hook.data.avatar,
                evaluations: [{}]
              })
            };
            return Promise.resolve(hook);
          }
          studentsEdit = students;
          studentsEdit = batch.students.filter(p => p._id.toString() !== hook.data._id.toString());
          hook.data = {
            students: studentsEdit.concat({
              firstName: hook.data.firstName,
              lastName: hook.data.lastName,
              avatar: hook.data.avatar,
              evaluations: hook.data.evaluations
            })
          };
        }

        if (edit) {
          const student = batch.students.find(p => p._id.toString() === hook.data.id.toString());
          const isIncluded = student.evaluations.findIndex(p =>(new Date(p.evaluationDate).toDateString() === (new Date(hook.data.evaluationDate).toDateString())));

          //If alredy included, remove from list and concat with new one.
          if (isIncluded >= 0) {
            student.evaluations = student.evaluations.filter(p =>(new Date(p.evaluationDate).toDateString() !== (new Date(hook.data.evaluationDate).toDateString())));
          }
          student.evaluations = student.evaluations.concat([{ color: hook.data.color, summary: hook.data.summary, evaluationDate: hook.data.evaluationDate}]);
          removedStudentList = students.filter((student) => (student._id.toString() !== hook.data.id.toString()));
          hook.data = {
            students: removedStudentList.concat(student)
          };
        }

        if (remove) {
          console.log(hook.data);
          hook.data = {
            students: students.filter((student) => (student._id.toString() !== hook.data._id.toString()))
          };
        }

        return Promise.resolve(hook);
      });
  };
};
