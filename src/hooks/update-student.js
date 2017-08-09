// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations

    const batches = hook.app.service('batches');
    const {students} = batches;
    const batchId = hook.id;
    const { create } = hook.data;
    const {remove} = hook.data;

    if (!!!hook.data) return Promise.resolve(hook);

    return batches.get(batchId)
      .then((batch) => {
        const {students} = batch;
        const {firstName, lastName} = hook.data;
        if (create) {
          console.log(hook.data);
          hook.data = {
            students: students.filter((student) => (student._id.toString() !== hook.data._id.toString()))
          };
          hook.data = {
            students: students.concat({
              firstName: hook.data.firstName,
              lastName: hook.data.lastName,
              photo: hook.data.photo,
              evaluations: [{}]
            })
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
