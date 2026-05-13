function filter(array, calback) {
  const filtered = [];
  for (let i = 0; i < array.length; i++) {
    if (calback(array[i])) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

const names = ["Israel", "Isaque", "Ramon", "Moises", "Mario"];
//                                 Este é o parametro da função(callback)
const filteredName = filter(names, (name) => name.startsWith("M"));
console.log(filteredName);
