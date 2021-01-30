function localstore(value) {

if (localStorage.getItem("memory") === null) {
  const a = [[value[0], value[1], value[2]]]
  localStorage.setItem("memory", JSON.stringify(a))
  return
}

const a = [value[0], value[1], value[2]]
const itemConvertToObject = JSON.parse(localStorage.getItem("memory"))
const merge = [...itemConvertToObject, a]

localStorage.setItem("memory", JSON.stringify(merge))

}

export default localstore;