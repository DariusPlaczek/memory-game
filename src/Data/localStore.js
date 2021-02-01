
function localStore() {

  if (localStorage.getItem("memory") === null || localStorage.getItem("memory") === undefined) {
    const empty = []
    return empty
  }

  return JSON.parse(localStorage.getItem("memory"))

}

export default localStore;
